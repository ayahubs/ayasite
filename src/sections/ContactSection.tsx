"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Clock, Lock, CheckCircle2, Users, MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/content";

const BENEFIT_ICONS: Record<string, React.ElementType> = {
  Clock,
  Lock,
  CheckCircle2,
  Users,
};

const vp = { once: false, amount: 0.2 };
const fadeLeft  = { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x:  32 }, visible: { opacity: 1, x: 0 } };
const fadeUp    = { hidden: { opacity: 0, y:  24 }, visible: { opacity: 1, y: 0 } };

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", project: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const WA_LINK = "https://wa.me/5583991736111?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista+sobre+meu+projeto.";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%)",
      }}
      aria-label="Contato"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-10 w-40 h-40 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 items-center">

          {/* ── LEFT: heading + benefits ─────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Transforme sua ideia em código
            </span>

            <h2
              className="text-3xl xl:text-4xl font-extrabold text-slate-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {CONTACT.heading}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              {CONTACT.subheading}
            </p>

            {/* Benefits */}
            <ul className="mt-10 flex flex-col gap-5">
              {CONTACT.benefits.map((benefit, i) => {
                const Icon = BENEFIT_ICONS[benefit.icon] ?? CheckCircle2;
                return (
                  <motion.li
                    key={benefit.icon}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={vp}
                    transition={{ duration: 0.45, delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* ── RIGHT: form ──────────────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="João Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full text-sm px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                    E-mail Profissional
                  </label>
                  <input
                    type="email"
                    placeholder="joao@empresa.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full text-sm px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(83) 99999-9999"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full text-sm px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                  Sobre o Projeto
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre o que você quer construir..."
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  required
                  className="w-full text-sm px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-slate-50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3.5 rounded-xl transition-all text-sm cursor-pointer w-full mt-1 shadow-md shadow-blue-100 disabled:opacity-70 disabled:cursor-wait"
              >
                {status === "loading" && (
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                )}
                {status === "loading" && "Enviando..."}
                {status === "sent" && "✓ Mensagem enviada! Entraremos em contato em breve."}
                {status === "error" && "Erro ao enviar. Tente novamente."}
                {status === "idle" && (
                  <>
                    Enviar Mensagem
                    <Send size={15} />
                  </>
                )}
              </button>

            </form>

            {/* WhatsApp mini-hero */}
            <div
              className="mt-5 rounded-2xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 55%, #25D366 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-4 left-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 py-5">
                {/* Icon + text */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                    <MessageCircle size={21} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Prefere falar agora?</p>
                    <p className="text-green-100/90 text-xs mt-0.5 leading-snug">
                      Resposta imediata com um especialista
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-[#075E54] hover:bg-green-50 active:scale-95 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto"
                >
                  <MessageCircle size={15} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
