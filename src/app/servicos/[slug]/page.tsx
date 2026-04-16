import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/data/content";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return SERVICES.items.map((service) => ({ slug: service.slug }));
}

const BASE_URL = "https://ayahubs.com.br";

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.items.find((item) => item.slug === slug);
  if (!service) {
    return {
      title: "Serviço não encontrado | Ayahubs",
      description: "Serviço não encontrado.",
    };
  }

  const keywords = [
    service.title,
    ...service.tag.split(" · "),
    "Ayahubs",
    "desenvolvimento de software",
    "empresa de tecnologia Brasil",
  ];

  const heroImageUrl = service.heroImage.startsWith("/")
    ? `${BASE_URL}${service.heroImage}`
    : service.heroImage;

  return {
    title: service.pageTitle,
    description: service.overview,
    keywords,
    alternates: {
      canonical: `${BASE_URL}/servicos/${service.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `${BASE_URL}/servicos/${service.slug}`,
      siteName: "Ayahubs",
      title: service.pageTitle,
      description: service.overview,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.pageTitle,
      description: service.overview,
      images: [heroImageUrl],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.items.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  const heroImageUrl = service.heroImage.startsWith("/")
    ? `${BASE_URL}${service.heroImage}`
    : service.heroImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/servicos/${service.slug}`,
    name: service.title,
    description: service.overview,
    url: `${BASE_URL}/servicos/${service.slug}`,
    image: heroImageUrl,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Ayahubs",
      url: BASE_URL,
    },
    areaServed: "BR",
    availableLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="bg-slate-50 text-slate-900 pt-20">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-200 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  Serviço
                </span>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                  {service.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-600">
                  {service.heroSubtitle}
                </p>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500">
                  {service.overview}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    Peça um orçamento
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Voltar ao site
                  </Link>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {service.highlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <h2 className="text-base font-semibold text-slate-900">{highlight.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl h-[420px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">O que entregamos</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                Estrutura completa para seu projeto
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Cada página de serviço é construída com foco em clareza, conversão e autoridade. Aqui você encontra a solução certa para seu desafio digital.
              </p>
            </div>

            <div className="grid gap-4">
              {service.features.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Galeria</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                  Visualizações do serviço
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.gallery.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Precisa de ajuda?</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
                  Vamos planejar seu próximo projeto.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Falar com a equipe
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Voltar ao site
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
