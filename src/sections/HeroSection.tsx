"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, TrendingUp, Code2, Terminal, Braces, Database, Cpu, Globe, Smartphone, GitBranch, Layers, Wifi, Lock, Cloud, Zap } from "lucide-react";
import { HERO } from "@/data/content";

const vp = { once: false, amount: 0.25 };
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp  = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };
const fadeLeft  = { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 36  }, visible: { opacity: 1, x: 0 } };
const scaleIn   = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } };

const stagger = (delay = 0) => ({
  transition: { duration: 0.6, ease: EASE, delay },
});

// ── Floating background icons ────────────────────────────────
const FLOAT_ICONS = [
  { Icon: Terminal,   x: "4%",   size: 20, dur: 14, delay: 0,    opacity: 0.22 },
  { Icon: Braces,     x: "11%",  size: 26, dur: 18, delay: 2,    opacity: 0.18 },
  { Icon: Database,   x: "18%",  size: 18, dur: 12, delay: 4,    opacity: 0.20 },
  { Icon: Cpu,        x: "25%",  size: 28, dur: 20, delay: 1,    opacity: 0.16 },
  { Icon: Code2,      x: "32%",  size: 22, dur: 15, delay: 6.5,  opacity: 0.22 },
  { Icon: Globe,      x: "40%",  size: 24, dur: 16, delay: 3,    opacity: 0.20 },
  { Icon: Cloud,      x: "47%",  size: 30, dur: 22, delay: 0.8,  opacity: 0.14 },
  { Icon: GitBranch,  x: "54%",  size: 20, dur: 13, delay: 6,    opacity: 0.18 },
  { Icon: Layers,     x: "61%",  size: 26, dur: 19, delay: 2.5,  opacity: 0.16 },
  { Icon: Zap,        x: "68%",  size: 18, dur: 10, delay: 0.5,  opacity: 0.22 },
  { Icon: Smartphone, x: "75%",  size: 20, dur: 15, delay: 5,    opacity: 0.20 },
  { Icon: Wifi,       x: "82%",  size: 24, dur: 11, delay: 1.5,  opacity: 0.18 },
  { Icon: Lock,       x: "88%",  size: 16, dur: 17, delay: 7,    opacity: 0.16 },
  { Icon: Terminal,   x: "94%",  size: 22, dur: 20, delay: 4.5,  opacity: 0.18 },
  // segunda onda — delays maiores para preencher lacunas
  { Icon: Braces,     x: "7%",   size: 15, dur: 16, delay: 9,    opacity: 0.20 },
  { Icon: Database,   x: "22%",  size: 22, dur: 14, delay: 11,   opacity: 0.18 },
  { Icon: Cpu,        x: "36%",  size: 18, dur: 18, delay: 8,    opacity: 0.16 },
  { Icon: GitBranch,  x: "50%",  size: 24, dur: 12, delay: 10,   opacity: 0.20 },
  { Icon: Zap,        x: "65%",  size: 16, dur: 15, delay: 7.5,  opacity: 0.22 },
  { Icon: Globe,      x: "79%",  size: 20, dur: 17, delay: 12,   opacity: 0.18 },
  { Icon: Code2,      x: "91%",  size: 18, dur: 13, delay: 9.5,  opacity: 0.20 },
  { Icon: Cloud,      x: "15%",  size: 24, dur: 21, delay: 5.5,  opacity: 0.14 },
  { Icon: Lock,       x: "57%",  size: 14, dur: 11, delay: 13,   opacity: 0.18 },
  { Icon: Wifi,       x: "43%",  size: 18, dur: 19, delay: 3.5,  opacity: 0.16 },
];

function FloatingIcons() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {FLOAT_ICONS.map(({ Icon, x, size, dur, delay, opacity }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, bottom: "-60px", color: "#3b82f6" }}
          animate={{ y: ["-0vh", "-115vh"], opacity: [0, opacity, opacity, 0] }}
          transition={{
            duration: dur,
            delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.85, 1],
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="snap-section flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Background dot-grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f033 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top-right glow blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-25"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      {/* Floating tech icons */}
      <FloatingIcons />
      {/* Spacer for fixed header */}
      <div className="h-[72px] shrink-0" />

      <div className="flex-1 max-w-7xl mx-auto px-6 w-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

          {/* ── LEFT ─────────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {HERO.badge}
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.1)}
              className="text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {HERO.heading1}
              <br />
              <span className="text-blue-600">{HERO.heading2}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.2)}
              className="text-base text-slate-500 leading-relaxed max-w-md mb-8"
            >
              {HERO.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.3)}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => handleClick(HERO.cta1.href)}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm cursor-pointer shadow-md shadow-blue-200"
              >
                {HERO.cta1.label}
              </button>
              <button
                onClick={() => handleClick(HERO.cta2.href)}
                className="flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-blue-600 transition-colors cursor-pointer"
              >
                {HERO.cta2.label}
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Tech-stack strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.38)}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["React", "Next.js", "Node.js", "TypeScript", "Flutter"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-full cursor-default"
                >
                  <Code2 size={10} />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Trust */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.46)}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["#3b82f6", "#10b981", "#f59e0b"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: bg }}
                  >
                    {["A", "D", "E"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-700">
                  {HERO.trust.label}
                </p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {Array.from({ length: HERO.trust.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Mockup card ─────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            {...stagger(0.2)}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* 99.9% badge floating top-left */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.45)}
              className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2"
            >
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="text-xs font-bold text-slate-800">
                {HERO.mockup.badge}
              </span>
            </motion.div>

            {/* Floating stat — bottom left */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              {...stagger(0.55)}
              className="absolute -bottom-4 -left-5 z-10 flex items-center gap-3 bg-slate-900 shadow-xl rounded-2xl px-4 py-3 border border-slate-700"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp size={15} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-none">120+</p>
                <p className="text-slate-400 text-[10px] mt-0.5">Projetos entregues</p>
              </div>
            </motion.div>

            {/* Main dark card */}
            <div className="relative w-full max-w-[500px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src={HERO.mockup.image}
                alt="Desenvolvedor trabalhando"
                fill
                className="object-cover object-top opacity-80"
                priority
              />

              {/* Overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                    {HERO.mockup.chip}
                  </span>
                  <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {HERO.mockup.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {HERO.mockup.message}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
