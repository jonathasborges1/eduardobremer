import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Eduardo Bremer | Advocacia Criminal, Cível, Trabalhista e Previdenciária",
  description:
    "Dr. Eduardo Bremer, advogado OAB/ES 37.747 e OAB/BA 83.916, com atendimento presencial em Mucuri/BA, Teixeira de Freitas/BA, Vitória/ES e orientação online.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: "Dr. Eduardo Bremer | Advocacia",
    description:
      "Atendimento jurídico presencial em Mucuri/BA, Teixeira de Freitas/BA e Vitória/ES, com orientação online nas áreas Criminal, Cível, Trabalhista e Previdenciária.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/eduardobremer/eduardo-bremer-advogado-04-feed-05.jpg",
        width: 1200,
        height: 813,
        alt: "Dr. Eduardo Bremer, advogado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Eduardo Bremer | Advocacia",
    description:
      "Atendimento jurídico presencial em Mucuri/BA, Teixeira de Freitas/BA e Vitória/ES, com orientação online nas áreas Criminal, Cível, Trabalhista e Previdenciária.",
    images: ["/images/eduardobremer/eduardo-bremer-advogado-04-feed-05.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
