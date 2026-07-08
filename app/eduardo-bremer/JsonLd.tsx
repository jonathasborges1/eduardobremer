import { IG, IMG, PHONE, SITE_URL, faq, formation, offices } from "./data";

/**
 * Dados estruturados (schema.org) da página: escritório (LegalService),
 * advogado (Person) e FAQ (FAQPage). O conteúdo do FAQPage é gerado da
 * mesma fonte (`faq` em data.ts) exibida na seção visível, como o Google
 * exige.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${SITE_URL}/#escritorio`,
        name: "Dr. Eduardo Bremer Advocacia",
        url: SITE_URL,
        image: `${SITE_URL}${IMG.hero}`,
        logo: `${SITE_URL}${IMG.logoHorizontal}`,
        telephone: PHONE,
        founder: { "@id": `${SITE_URL}/#eduardo-bremer` },
        knowsAbout: [
          "Direito Trabalhista",
          "Direito Penal",
          "Direito Civil",
          "Direito Previdenciário",
        ],
        areaServed: [
          { "@type": "City", name: "Mucuri" },
          { "@type": "City", name: "Teixeira de Freitas" },
          { "@type": "City", name: "Vitória" },
          { "@type": "Country", name: "Brasil" },
        ],
        location: offices.map((office) => ({
          "@type": "Place",
          name: `Dr. Eduardo Bremer Advocacia — ${office.addressLocality}/${office.addressRegion}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: office.streetAddress,
            addressLocality: office.addressLocality,
            addressRegion: office.addressRegion,
            ...(office.postalCode && { postalCode: office.postalCode }),
            addressCountry: "BR",
          },
          ...(office.geo && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: office.geo.latitude,
              longitude: office.geo.longitude,
            },
          }),
        })),
        sameAs: [IG],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#eduardo-bremer`,
        name: "Eduardo Bremer",
        honorificPrefix: "Dr.",
        jobTitle: "Advogado",
        worksFor: { "@id": `${SITE_URL}/#escritorio` },
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "OAB/ES",
            value: "37.747",
          },
          {
            "@type": "PropertyValue",
            propertyID: "OAB/BA",
            value: "83.916",
          },
        ],
        knowsAbout: [
          "Direito Trabalhista",
          "Direito Penal",
          "Direito Civil",
          "Direito Previdenciário",
        ],
        hasCredential: formation,
        sameAs: [IG],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
