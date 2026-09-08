import { prisma } from "@/lib/prisma";
import BlogCarouselClient, { type BlogCarouselPost } from "./BlogCarouselClient";

export default async function BlogCarousel() {
  const posts = await prisma.post.findMany({
    where: {
      slug: { not: null },
    },
    orderBy: [
      { isFeatured: "desc" },
      { createdAt: "desc" },
    ],
    take: 9,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      image: true,
      category: true,
      readTime: true,
      createdAt: true,
      isFeatured: true,
    },
  });

  const serializedPosts: BlogCarouselPost[] = posts
    .filter((post): post is typeof post & { slug: string } => Boolean(post.slug))
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      readTime: post.readTime,
      createdAt: post.createdAt.toISOString(),
      isFeatured: post.isFeatured,
    }));

  return <BlogCarouselClient posts={serializedPosts} />;
}
