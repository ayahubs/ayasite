"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO } from "@/data/content";

const centerVariants = {
  enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
  center: {
    x: 0, opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (d: number) => ({
    x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function PortfolioSection() {
  const items = PORTFOLIO.items;
  const total = items.length;
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  function wrap(i: number) {
    return ((i % total) + total) % total;
  }

  function go(d: number) {
    setDir(d);
    setActive((prev) => wrap(prev + d));
  }

  const prevItem = items[wrap(active - 1)];
  const currItem = items[active];
  const nextItem = items[wrap(active + 1)];

  return (
    <section
      id="portfolio"
      className="snap-section flex flex-col bg-white relative overflow-hidden"
      aria-label="Portfolio"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-200/70 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-200/60 blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 35, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-sky-200/60 blur-2xl pointer-events-none"
        animate={{ x: [0, 25, -12, 0], y: [0, -25, 12, 0], scale: [1, 1.07, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute top-10 left-1/2 w-64 h-64 rounded-full bg-violet-200/50 blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 20, 0], y: [0, 30, -10, 0], scale: [1, 1.12, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-10 w-56 h-56 rounded-full bg-cyan-200/50 blur-2xl pointer-events-none"
        animate={{ x: [0, 35, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute -bottom-10 right-1/4 w-72 h-72 rounded-full bg-blue-300/40 blur-3xl pointer-events-none"
        animate={{ x: [0, -18, 10, 0], y: [0, -30, 15, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="h-[72px] shrink-0" />

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            {PORTFOLIO.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-sm text-slate-500"
          >
            {PORTFOLIO.subheading}
          </motion.p>
        </div>

        {/* 3-card carousel */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Arrow left */}
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div className="flex-1 flex items-center gap-3">
            {/* Left side card */}
            <motion.div
              key={`prev-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => go(-1)}
              className="hidden md:block flex-[0_0_27%] relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ height: "clamp(220px, 36vh, 380px)" }}
            >
              <>
                <Image
                  src={prevItem.image}
                  alt={prevItem.title}
                  fill
                  className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30 group-hover:from-slate-900/70 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Ver anterior
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-[9px] font-bold text-blue-300 tracking-widest uppercase">{prevItem.tag}</span>
                  <p className="text-white font-semibold text-sm leading-tight mt-0.5 line-clamp-1">{prevItem.title}</p>
                </div>
              </>
            </motion.div>

            {/* Center card — main */}
            <div
              className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "clamp(280px, 48vh, 500px)" }}
            >
              <AnimatePresence custom={dir} mode="wait">
                <motion.div
                  key={active}
                  custom={dir}
                  variants={centerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={currItem.image}
                    alt={currItem.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority={active === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <span className="inline-block text-[10px] font-bold tracking-widest text-blue-300 uppercase mb-2 bg-blue-900/40 px-2 py-0.5 rounded">
                      {currItem.tag}
                    </span>
                    <h3
                      className="text-white font-bold text-xl md:text-2xl leading-tight"
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                    >
                      {currItem.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-1.5 leading-relaxed max-w-lg">
                      {currItem.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {active + 1} / {items.length}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side card */}
            <motion.div
              key={`next-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => go(1)}
              className="hidden md:block flex-[0_0_27%] relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ height: "clamp(220px, 36vh, 380px)" }}
            >
              <>
                <Image
                  src={nextItem.image}
                  alt={nextItem.title}
                  fill
                  className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30 group-hover:from-slate-900/70 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Ver próximo
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-[9px] font-bold text-blue-300 tracking-widest uppercase">{nextItem.tag}</span>
                  <p className="text-white font-semibold text-sm leading-tight mt-0.5 line-clamp-1">{nextItem.title}</p>
                </div>
              </>
            </motion.div>
          </div>

          {/* Arrow right */}
          <button
            aria-label="Próximo"
            onClick={() => go(1)}
            className="shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
              aria-label={`Ir para o projeto ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-blue-600 w-6 h-2"
                  : "bg-slate-300 w-2 h-2 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
