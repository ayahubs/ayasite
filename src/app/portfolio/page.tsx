"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PORTFOLIO } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function PortfolioPage() {
  const featured = PORTFOLIO.items.filter((p) => p.featured);
  const rest = PORTFOLIO.items.filter((p) => !p.featured);

  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 min-h-screen">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          {/* Ambient grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.15) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Glow blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-10 blur-[140px]"
            style={{ background: "radial-gradient(circle,#3b82f6 0%,transparent 70%)" }}
          />

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              Portfólio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-space-grotesk,sans-serif)" }}
            >
              Produtos que{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                resolvem problemas
              </span>{" "}
              reais
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-base text-slate-500 leading-7"
            >
              Cada projeto aqui tem uma história — um problema que existia, uma solução que foi
              arquitetada linha a linha, e um cliente que hoje opera de forma mais rápida,
              segura e inteligente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-8"
            >
              {[
                { value: "120+", label: "Projetos" },
                { value: "50+", label: "Clientes" },
                { value: "5", label: "Anos" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="text-3xl font-extrabold text-slate-900"
                    style={{ fontFamily: "var(--font-space-grotesk,sans-serif)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Featured projects (large cards) ── */}
        <section className="max-w-6xl mx-auto px-6 pb-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-6"
          >
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                transition={itemTransition}
                className="group relative grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2"
              >
                {/* Text side */}
                <div className={`flex flex-col justify-between p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        {project.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Calendar size={11} />
                        {project.year}
                      </span>
                    </div>

                    <h2
                      className="text-2xl font-bold text-slate-900 leading-snug lg:text-3xl"
                      style={{ fontFamily: "var(--font-space-grotesk,sans-serif)" }}
                    >
                      {project.title}
                    </h2>

                    <p className="mt-4 text-sm text-slate-600 leading-7">{project.longDescription}</p>
                  </div>

                  <div className="mt-8">
                    {/* Stack */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <Code2 size={13} className="text-slate-400" />
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 group-hover:gap-3"
                    >
                      Quero algo assim
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Image side */}
                <div
                  className={`relative min-h-[280px] lg:min-h-full overflow-hidden ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-none" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 uppercase tracking-widest">Mais projetos</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
        </div>

        {/* ── Grid cards (smaller) ── */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {rest.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                transition={itemTransition}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                  {/* Tag floating on image */}
                  <div className="absolute bottom-4 left-5">
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2
                      className="text-lg font-bold text-slate-900 leading-snug"
                      style={{ fontFamily: "var(--font-space-grotesk,sans-serif)" }}
                    >
                      {project.title}
                    </h2>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 shrink-0 mt-0.5">
                      <Calendar size={10} />
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-6 flex-1">{project.longDescription}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                          className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-slate-200 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto px-6 py-24 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Próximo projeto</p>
            <h2
              className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-space-grotesk,sans-serif)" }}
            >
              O seu produto pode ser{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                o próximo case aqui.
              </span>
            </h2>
            <p className="mt-5 text-slate-600 text-base leading-7">
              Transformamos ideias em produtos digitais que as pessoas usam todos os dias.
              Vamos conversar sobre o seu desafio?
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Iniciar um projeto
                <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voltar ao site
              </Link>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
