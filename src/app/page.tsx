import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import HeroSection     from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import PortfolioSection from "@/sections/PortfolioSection";
import WhyUsSection    from "@/sections/WhyUsSection";
import ContactSection  from "@/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ayahubs.com.br/#organization",
      name: "Ayahubs",
      url: "https://ayahubs.com.br",
      logo: "https://ayahubs.com.br/og-image.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-83-99173-6111",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      sameAs: ["https://github.com/ayahubs"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ayahubs.com.br/#website",
      url: "https://ayahubs.com.br",
      name: "Ayahubs",
      publisher: { "@id": "https://ayahubs.com.br/#organization" },
      inLanguage: "pt-BR",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ayahubs.com.br/#service",
      name: "Ayahubs — Desenvolvimento de Software",
      url: "https://ayahubs.com.br",
      description:
        "Empresa especializada em desenvolvimento de plataformas web, sistemas sob medida, apps mobile, landing pages, UI/UX design e consultoria em tecnologia.",
      priceRange: "$$",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      serviceType: [
        "Plataformas Web",
        "Sistemas Sob Medida",
        "Apps Mobile",
        "Landing Pages",
        "UI/UX Design",
        "Consultoria em Tecnologia",
      ],
    },
  ],
};

/**
 * Main page — each section is a full-viewport scroll-snap target.
 * The `.snap-main` container owns scroll; `.snap-section` aligns each stop.
 * The footer lives inside the last snap section (Contact).
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Fixed header rendered outside the scroll container */}
      <Header />
      <SideNav />

      {/* Scroll-snap container */}
      <main className="snap-main" id="main-scroll">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />

        {/* Contact + Footer share the last snap section with inner overflow scroll */}
        <div
          className="snap-section"
          style={{ overflow: "auto" }}
        >
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
