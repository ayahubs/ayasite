"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero",      label: "Início" },
  { id: "services",  label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "why-us",   label: "Por que nós" },
  { id: "contact",   label: "Contato" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector(".snap-main") ?? window;

    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          root: container instanceof Element ? container : null,
          threshold: 0.5,
        }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  function scrollTo(id: string) {
    const container = document.querySelector(".snap-main");
    const el = document.getElementById(id);
    if (!el) return;
    if (container instanceof Element) {
      const top = el.offsetTop;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Ir para ${label}`}
            className="flex items-center gap-2 group"
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm px-2.5 py-1 rounded-full whitespace-nowrap"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.span
              animate={{
                scale: isActive ? 1 : 0.7,
                backgroundColor: isActive ? "#2563eb" : "#cbd5e1",
              }}
              transition={{ duration: 0.2 }}
              className="block w-2.5 h-2.5 rounded-full border-2"
              style={{
                borderColor: isActive ? "#2563eb" : "transparent",
                boxShadow: isActive ? "0 0 0 3px #dbeafe" : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
