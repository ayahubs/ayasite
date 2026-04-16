import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description: "Politica de privacidade da Ayahubs sobre coleta e uso de dados.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          Politica de Privacidade
        </h1>
        <p className="mt-3 text-sm text-slate-500">Ultima atualizacao: 13/04/2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900">1. Dados coletados</h2>
            <p className="mt-2">Podemos coletar dados informados no formulario de contato, como nome, e-mail, WhatsApp e detalhes do projeto.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">2. Finalidade do tratamento</h2>
            <p className="mt-2">Os dados sao utilizados para responder solicitacoes, elaborar propostas comerciais e manter comunicacao relacionada aos servicos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">3. Compartilhamento</h2>
            <p className="mt-2">Nao comercializamos dados pessoais. Compartilhamentos ocorrem apenas quando necessarios para operacao dos servicos ou cumprimento legal.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">4. Armazenamento e seguranca</h2>
            <p className="mt-2">Adotamos medidas tecnicas e organizacionais para proteger os dados contra acessos nao autorizados.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">5. Direitos do titular</h2>
            <p className="mt-2">Voce pode solicitar acesso, correcao ou exclusao dos seus dados pessoais, observadas as obrigacoes legais aplicaveis.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">6. Contato</h2>
            <p className="mt-2">Para exercer seus direitos ou tirar duvidas, entre em contato pelo e-mail fabiozesk@gmail.com.</p>
          </section>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
