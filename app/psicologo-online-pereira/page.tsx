import PereiraLandingClient from "./PereiraLandingClient";
import { AUTHOR_NAME, SITE_URL, buildSeoMetadata } from "@/lib/seo/metadata";

const pageUrl = SITE_URL + "/psicologo-online-pereira";

export const metadata = buildSeoMetadata({
  title: "Psicólogo online en Pereira | Psicoterapia para adultos",
  description: "Psicoterapia online para adultos en Pereira con Jefferson Bastidas. Atención para ansiedad, depresión, estrés y burnout. Conoce el proceso y solicita información.",
  path: "/psicologo-online-pereira",
});

export default function PsicologoOnlinePereiraPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": pageUrl + "#service",
        name: "Psicoterapia online para adultos en Pereira",
        description: "Atención psicológica por videollamada para personas adultas residentes en Pereira, Risaralda.",
        url: pageUrl,
        provider: {
          "@type": "Person",
          "@id": SITE_URL + "/#person",
          name: AUTHOR_NAME,
          jobTitle: "Psicólogo",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "City",
          name: "Pereira",
          containedInPlace: { "@type": "AdministrativeArea", name: "Risaralda" },
        },
        availableChannel: { "@type": "ServiceChannel", serviceUrl: pageUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": pageUrl + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Psicólogo online en Pereira", item: pageUrl },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PereiraLandingClient />
    </>
  );
}
