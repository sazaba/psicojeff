import { AUTHOR_NAME, SITE_URL, buildSeoMetadata } from "@/lib/seo/metadata";
import { cityLandings, type CityKey } from "@/lib/seo/onlineCityLandings";
import CityOnlineLandingClient from "./CityOnlineLandingClient";

export function getCityOnlineMetadata(cityKey: CityKey) {
  const city = cityLandings[cityKey];
  return buildSeoMetadata({
    title: `Psicólogo online en ${city.name} | Psicoterapia para adultos`,
    description: city.description,
    path: city.path,
  });
}

export default function CityOnlinePage({ cityKey }: { cityKey: CityKey }) {
  const city = cityLandings[cityKey];
  const canonicalUrl = SITE_URL + city.path;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": canonicalUrl + "#service",
        name: `Psicoterapia online para adultos en ${city.name}`,
        description: city.description,
        serviceType: "Psicoterapia online para adultos",
        url: canonicalUrl,
        provider: {
          "@type": "Person",
          "@id": SITE_URL + "/#person",
          name: AUTHOR_NAME,
          jobTitle: "Psicólogo",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "AdministrativeArea", name: city.department },
        },
        availableChannel: { "@type": "ServiceChannel", serviceUrl: canonicalUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": canonicalUrl + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `Psicólogo online en ${city.name}`, item: canonicalUrl },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <CityOnlineLandingClient city={city} />
    </>
  );
}
