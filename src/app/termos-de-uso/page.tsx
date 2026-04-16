import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site e serviços da Ayahubs.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}>
          Termos de Uso
        </h1>
        <p className="mt-3 text-sm text-slate-500">Ultima atualizacao: 13/04/2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900">1. Aceitacao dos termos</h2>
            <p className="mt-2">Ao acessar este site, voce concorda com estes Termos de Uso e com a legislacao aplicavel.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">2. Uso do site</h2>
            <p className="mt-2">Voce se compromete a utilizar o site de forma licita, sem praticar atos que possam comprometer sua seguranca, disponibilidade ou integridade.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">3. Propriedade intelectual</h2>
            <p className="mt-2">Conteudos, marcas e elementos visuais deste site sao protegidos por direitos autorais e de propriedade intelectual.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">4. Limitacao de responsabilidade</h2>
            <p className="mt-2">A Ayahubs nao se responsabiliza por danos decorrentes de indisponibilidades temporarias, falhas de terceiros ou uso indevido por usuarios.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">5. Alteracoes</h2>
            <p className="mt-2">Estes termos podem ser alterados a qualquer momento. Recomendamos consulta periodica desta pagina.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">6. Contato</h2>
            <p className="mt-2">Em caso de duvidas, entre em contato pelo e-mail fabiozesk@gmail.com.</p>
          </section>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
