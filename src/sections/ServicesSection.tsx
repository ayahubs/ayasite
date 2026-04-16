"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, Smartphone, Layout, Palette, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/data/content";

const ICON_MAP: Record<string, React.ElementType> = { Globe, Cpu, Smartphone, Layout, Palette, Lightbulb };

const vp   = { once: false, amount: 0.2 };
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

const SLIDE = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center:               { x: 0, opacity: 1, scale: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
};

export default function ServicesSection() {
  const [active, setActive]     = useState(0);
  const [dir,    setDir]        = useState(1);
  const [paused, setPaused]     = useState(false);
  const total   = SERVICES.items.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number) => {
      setDir(next > active ? 1 : -1);
      setActive((next + total) % total);
    },
    [active, total]
  );

  // Auto-play — 4 s, pausável no hover
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(active + 1), 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, go]);

  const service = SERVICES.items[active];
  const Icon    = ICON_MAP[service.icon] ?? Globe;

  return (
    <section
      id="services"
      className="snap-section flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8fafc 0%, #ffffff 60%, #eff6ff 100%)" }}
      aria-label="Serviços"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-[72px] shrink-0" />

      <div className="flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">

        {/* ── Header row ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight whitespace-pre-line"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {SERVICES.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-2 text-sm text-slate-500 max-w-lg"
            >
              {SERVICES.subheading}
            </motion.p>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center gap-3">
            {/* Arrow prev */}
            <button
              onClick={() => go(active - 1)}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-90 cursor-pointer shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="relative h-2 rounded-full overflow-hidden cursor-pointer focus:outline-none"
                  style={{ width: i === active ? 24 : 8, background: "#e2e8f0", transition: "width 0.3s" }}
                >
                  {i === active && (
                    <motion.span
                      layoutId="dot-fill"
                      className="absolute inset-0 rounded-full bg-blue-600"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Arrow next */}
            <button
              onClick={() => go(active + 1)}
              aria-label="Próximo"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-all active:scale-90 cursor-pointer shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Slide area ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-stretch">

          {/* ── LEFT: animated card ──────────────────────────── */}
          <div className="relative overflow-hidden" style={{ minHeight: 300 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={SLIDE}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex flex-col justify-between"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: service.bg }}
                  >
                    <Icon size={26} style={{ color: service.color }} />
                  </div>
                  <span
                    className="text-6xl font-black select-none leading-none"
                    aria-hidden="true"
                    style={{ color: service.bg }}
                  >
                    {String(active + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block mt-4 text-[10px] font-semibold tracking-wide text-slate-400 border border-slate-100 bg-slate-50 rounded-full px-3 py-1">
                    {(service as typeof service & { tag: string }).tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT: all cards as mini-thumbnails ─────────── */}
          <div className="flex flex-col gap-4">
            {SERVICES.items.map((item, i) => {
              const ThumbIcon = ICON_MAP[item.icon] ?? Globe;
              const isActive  = i === active;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => go(i)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full text-left rounded-2xl px-6 py-5 border transition-all cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? "bg-white border-slate-200 shadow-md"
                      : "bg-white/50 border-slate-100 hover:bg-white hover:border-slate-200"
                  }`}
                >
                  {/* Color pill */}
                  <div
                    className="w-1.5 self-stretch rounded-full shrink-0 transition-all"
                    style={{ background: isActive ? item.color : "#e2e8f0" }}
                  />

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: item.bg }}
                  >
                    <ThumbIcon size={18} style={{ color: item.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-bold truncate transition-colors ${isActive ? "text-slate-900" : "text-slate-500"}`}
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {(item as typeof item & { tag: string }).tag}
                    </p>
                  </div>

                  {/* Progress bar — active only */}
                  {isActive && !paused && (
                    <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden shrink-0">
                      <motion.div
                        className="h-full rounded-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        key={active}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


