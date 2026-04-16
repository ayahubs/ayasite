import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, project } = await req.json();

    if (!name || !email || !project) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Ayahubs Site <onboarding@resend.dev>",
      to: ["fabiozesk@gmail.com"],
      replyTo: email,
      subject: `Novo contato: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;">
          <h2 style="color:#1e293b;margin-bottom:4px;">Novo contato via site</h2>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
          <p style="margin:0 0 8px;"><strong>Nome:</strong> ${name}</p>
          <p style="margin:0 0 8px;"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin:0 0 8px;"><strong>WhatsApp:</strong> ${phone || "Não informado"}</p>
          <p style="margin:0 0 8px;"><strong>Projeto:</strong></p>
          <p style="margin:0;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;color:#334155;white-space:pre-wrap;">${project}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
