"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink, Globe, Cpu, Smartphone, Layout, Palette, Lightbulb } from "lucide-react";
import { SERVICES } from "@/data/content";

const ICON_MAP: Record<string, React.ElementType> = { Globe, Cpu, Smartphone, Layout, Palette, Lightbulb };

const PRODUCTS = [
  {
    label: "Leads PJ",
    href: "https://leadspj.com",
    description: "CRM para WhatsApp com lista de empresas",
  },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.querySelector(".snap-main");
    const el = container ?? window;
    const handler = () => {
      const top =
        container instanceof Element ? container.scrollTop : window.scrollY;
      setScrolled(top > 20);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome && href.startsWith("#")) {
      window.location.href = "/" + href;
      return;
    }
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center select-none"
        >
          <Image
            src="/logo-site.png"
            alt="Ayahubs"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </motion.a>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {/* Home */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>

          {/* Mega menu Serviços */}
          <div
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative"
          >
            <button
              onClick={() => handleNavClick("#services")}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Serviços
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full -left-[200px] mt-3 w-[820px] rounded-3xl bg-white border border-slate-100 shadow-2xl p-5 grid grid-cols-3 gap-4"
                >
                  {SERVICES.items.map((item) => {
                    const ItemIcon = ICON_MAP[item.icon] ?? Globe;
                    return (
                      <Link
                        key={item.slug}
                        href={`/servicos/${item.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="group block rounded-3xl border border-slate-200 bg-slate-50/80 p-5 transition-all hover:border-blue-300 hover:bg-white"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ background: item.bg }}
                        >
                          <ItemIcon size={22} style={{ color: item.color }} />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">{item.description}</p>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Nossos Produtos dropdown */}
          <div ref={productsRef} className="relative">
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Nossos Produtos
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                            {p.label}
                          </span>
                          <ExternalLink size={11} className="text-slate-400 group-hover:text-blue-500 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{p.description}</p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfólio */}
          <Link
            href="/portfolio"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Portfólio
          </Link>

          {/* Contato */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Contato
          </button>
        </motion.nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
          >
            Falar Conosco
          </motion.button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {/* Home — mobile */}
              <button
                onClick={() => handleNavClick("#hero")}
                className="text-base font-medium text-slate-700 hover:text-blue-600 text-left transition-colors cursor-pointer"
              >
                Home
              </button>

              {/* Serviços — mobile */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Serviços
                </p>
                {SERVICES.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/servicos/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Nossos Produtos — mobile */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Nossos Produtos
                </p>
                {PRODUCTS.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {p.label}
                    <ExternalLink size={13} className="text-slate-400" />
                  </a>
                ))}
              </div>

              {/* Portfólio — mobile */}
              <Link
                href="/portfolio"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-blue-600 text-left transition-colors"
              >
                Portfólio
              </Link>

              {/* Contato — mobile */}
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-base font-medium text-slate-700 hover:text-blue-600 text-left transition-colors cursor-pointer"
              >
                Contato
              </button>

              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors text-center cursor-pointer"
              >
                Falar Conosco
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
