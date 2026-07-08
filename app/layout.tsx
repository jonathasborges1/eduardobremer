import type { Metadata } from "next";
import "./globals.css";
import "./eduardo-bremer/eduardo-bremer.css";

const TITLE =
  "Advogado Trabalhista, Criminal, Cível e Previdenciário em Mucuri, Teixeira de Freitas e Vitória | Dr. Eduardo Bremer";
const SOCIAL_TITLE =
  "Advogado em Mucuri, Teixeira de Freitas e Vitória | Dr. Eduardo Bremer";
const DESCRIPTION =
  "Dr. Eduardo Bremer (OAB/ES 37.747 · OAB/BA 83.916). Atuação em Direito Trabalhista, Penal, Cível e Previdenciário. Atendimento presencial em Mucuri/BA, Teixeira de Freitas/BA e Vitória/ES, e orientação online.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardobremer.com.br"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Dr. Eduardo Bremer · Advocacia",
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
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
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
