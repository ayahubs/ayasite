"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Zap, Layers, RefreshCw, TrendingUp, Star, Users, Award, Clock } from "lucide-react";
import { WHY_US } from "@/data/content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp        = { once: false, amount: 0.2 };
const fadeUp    = { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0 } };
const fadeLeft  = { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x:  32 }, visible: { opacity: 1, x: 0 } };

const ICON_MAP: Record<string, React.ElementType> = { Zap, Layers, RefreshCw };

const STAT_META = [
  { icon: Award,   gradient: "from-blue-500 to-blue-600",   bg: "#eff6ff", ring: "#bfdbfe" },
  { icon: Users,   gradient: "from-emerald-500 to-teal-600",bg: "#ecfdf5", ring: "#a7f3d0" },
  { icon: Clock,   gradient: "from-violet-500 to-purple-600",bg:"#f5f3ff", ring: "#ddd6fe" },
  { icon: Star,    gradient: "from-amber-400 to-orange-500", bg: "#fffbeb", ring: "#fde68a" },
];

// â”€â”€ Count-up hook â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function useCountUp(target: number, duration = 1.6) {
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });

  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let frame = 0;
    const totalFrames = Math.round(duration * 60);
    const step = () => {
      frame++;
      const t = frame / totalFrames;
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (frame < totalFrames) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { count, ref };
}

function StatCard({
  value, label, icon: Icon, gradient, bg, ring,
}: {
  value: string; label: string;
  icon: React.ElementType; gradient: string; bg: string; ring: string;
}) {
  const suffix = value.replace(/[\d.]/g, "");
  const num    = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const { count, ref } = useCountUp(num);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 overflow-hidden cursor-default group transition-all hover:-translate-y-1"
      style={{ background: bg, border: `1.5px solid ${ring}` }}
    >
      {/* Decorative ring */}
      <div
        className="absolute -top-5 -right-5 w-16 h-16 rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, ${ring}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-sm`}>
        <Icon size={15} className="text-white" strokeWidth={2} />
      </div>

      {/* Number */}
      <p
        className="text-2xl font-extrabold leading-none mb-1"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
      >
        <span className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
          {count}{suffix}
        </span>
      </p>

      {/* Label */}
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="snap-section flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #f8faff 0%, #ffffff 45%, #f0f7ff 100%)" }}
      aria-label="Por que nós"
    >
      {/* â”€â”€ Background shapes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* Large blurred blob â€” top left */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Large blurred blob â€” bottom right */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Dot grid â€” subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e133 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Decorative arc â€” top right */}
      <svg
        aria-hidden="true"
        className="absolute top-8 right-0 opacity-[0.06] pointer-events-none"
        width="320" height="320" viewBox="0 0 320 320" fill="none"
      >
        <circle cx="280" cy="40" r="200" stroke="#3b82f6" strokeWidth="60" fill="none" />
      </svg>
      {/* Decorative arc â€” bottom left */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 opacity-[0.05] pointer-events-none"
        width="260" height="260" viewBox="0 0 260 260" fill="none"
      >
        <circle cx="0" cy="260" r="180" stroke="#10b981" strokeWidth="50" fill="none" />
      </svg>

      <div className="h-[72px] shrink-0" />

      <div className="flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center relative z-10">

        {/* Section badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase border border-blue-100">
            <TrendingUp size={12} />
            Por que nós
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* â”€â”€ LEFT: interactive feature tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-2.5"
          >
            {WHY_US.items.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? Zap;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                  className="bg-white shadow-sm border border-slate-100 rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center shadow-sm"
                      style={{ background: item.bg }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3
                          className="text-sm font-bold text-slate-900"
                          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                          style={{ background: item.color }}
                        />
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-3 h-0.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={vp}
                          transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 + 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* â”€â”€ RIGHT: heading + stats + image â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="text-3xl xl:text-4xl font-extrabold text-slate-900 leading-tight whitespace-pre-line"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {WHY_US.heading}
            </motion.h2>

            {/* Rich stat cards */}
            <div className="grid grid-cols-4 gap-3">
              {WHY_US.stats.map((stat, i) => {
                const meta = STAT_META[i] ?? STAT_META[0];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.09 + 0.2 }}
                  >
                    <StatCard
                      value={stat.value}
                      label={stat.label}
                      icon={meta.icon}
                      gradient={meta.gradient}
                      bg={meta.bg}
                      ring={meta.ring}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Image with overlay badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ aspectRatio: "16/7" }}
            >
              <Image
                src={WHY_US.image}
                alt="Time em colaboração"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <TrendingUp size={15} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800">Crescimento médio</p>
                  <p className="text-[10px] text-slate-400">+40% de conversões</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
