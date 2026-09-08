import Link from "next/link";
import { prisma } from "@/lib/prisma";

function parseTags(category: string): string[] {
  try {
    if (category.startsWith("[")) {
      const parsed = JSON.parse(category);
      return Array.isArray(parsed) ? parsed.map(String) : [category];
    }
  } catch {
    return [category];
  }

  return [category];
}

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("es");
}

export default async function RelatedPosts({
  currentPostId,
  currentTags,
}: {
  currentPostId: number;
  currentTags: string[];
}) {
  const candidates = await prisma.post.findMany({
    where: {
      id: { not: currentPostId },
      slug: { not: null },
    },
    orderBy: { createdAt: "desc" },
    take: 12,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      category: true,
      createdAt: true,
    },
  });

  const normalizedCurrentTags = new Set(currentTags.map(normalize));

  const posts = candidates
    .map((post) => {
      const overlap = parseTags(post.category).reduce(
        (score, tag) => score + (normalizedCurrentTags.has(normalize(tag)) ? 1 : 0),
        0,
      );

      return { ...post, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap || b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mt-14" aria-labelledby="related-posts-heading">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
        Lecturas relacionadas
      </span>
      <h2 id="related-posts-heading" className="mt-2 font-serif text-2xl md:text-3xl text-stone-900">
        Continúa explorando el tema
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-stone-200 bg-white p-5 hover:border-teal-300 hover:shadow-md transition-all"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
              {new Intl.DateTimeFormat("es-CO", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(post.createdAt)}
            </p>
            <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-stone-900 group-hover:text-teal-700 transition-colors">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="mt-3 text-sm leading-6 text-stone-500 line-clamp-3">
                {post.excerpt.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}
              </p>
            )}
            <span className="mt-4 inline-flex text-sm font-bold text-teal-700">
              Leer artículo →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
