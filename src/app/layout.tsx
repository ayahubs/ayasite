import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const BASE_URL = "https://ayahubs.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Ayahubs — Desenvolvimento de Software e Sites Profissionais",
    template: "%s | Ayahubs",
  },
  description:
    "Ayahubs é uma empresa de desenvolvimento de software especializada em plataformas web, sistemas sob medida, apps mobile, landing pages, UI/UX design e consultoria em tecnologia. Da ideia ao produto final, com engenharia séria e criatividade.",
  keywords: [
    // Serviços core
    "desenvolvimento de software",
    "criaráo de sites",
    "plataformas web",
    "sistemas sob medida",
    "sistema web personalizado",
    "aplicativos mobile",
    "app android ios",
    "landing page",
    "landing page de alta conversão",
    "UI/UX design",
    "design de interfaces",
    "consultoria em tecnologia",
    "arquitetura de software",
    // Tech stack
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "Figma",
    // Categoria
    "plataforma SaaS",
    "empresa de tecnologia",
    "desenvolvimento de sistemas",
    "CRM WhatsApp",
    "automação de processos",
    "portfólio de software",
    "empresa de desenvolvimento Brasil",
  ],
  authors: [{ name: "Ayahubs", url: BASE_URL }],
  creator: "Ayahubs",
  publisher: "Ayahubs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Ayahubs",
    title: "Ayahubs — Desenvolvimento de Software e Sites Profissionais",
    description:
      "Da ideia ao código — sites, sistemas web, apps mobile e plataformas digitais que crescem com o seu negócio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayahubs — Desenvolvimento de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayahubs — Desenvolvimento de Software e Sites Profissionais",
    description:
      "Da ideia ao código — sites, sistemas web, apps mobile e plataformas digitais que crescem com o seu negócio.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
