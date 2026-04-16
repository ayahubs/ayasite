import type { Metadata } from "next";

const BASE_URL = "https://ayahubs.com.br";

export const metadata: Metadata = {
  title: "Portfólio — Projetos e Cases de Sucesso",
  description:
    "Conheça os produtos digitais construídos pela Ayahubs: sistemas web, CRMs, plataformas SaaS, apps mobile e sites institucionais que transformaram o dia a dia de nossos clientes.",
  keywords: [
    "portfólio de software",
    "cases de sucesso em tecnologia",
    "projetos web Brasil",
    "e-Sic prefeitura",
    "sistema de estoque",
    "CRM WhatsApp leads",
    "gestão de documentos",
    "site institucional construtora",
    "sistemas desenvolvidos sob medida",
    "Ayahubs projetos",
  ],
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${BASE_URL}/portfolio`,
    siteName: "Ayahubs",
    title: "Portfólio — Cases Reais de Software | Ayahubs",
    description:
      "Cada projeto tem uma história. Veja como a Ayahubs transforma problemas reais em produtos digitais que as pessoas usam todo dia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Ayahubs — Cases de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Ayahubs",
    description:
      "Cases reais de software que resolvem problemas reais. Veja o trabalho da Ayahubs.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
