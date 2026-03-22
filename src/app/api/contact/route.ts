import { NextResponse } from "next/server";

let resendInstance: import("resend").Resend | null = null;

function getResend() {
  if (!resendInstance) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Resend } = require("resend");
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance!;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, ville, type, description } = body;

    if (!nom || !telephone || !type) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const emailTo = process.env.EMAIL_TO || "kamal@sparkana.fr";

    // Only send email if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "à_remplir") {
      const resend = getResend();
      await resend.emails.send({
        from: "Fabre Plomberie <onboarding@resend.dev>",
        to: emailTo,
        subject: `Nouvelle demande de devis - ${type}`,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Ville :</strong> ${ville || "Non renseignée"}</p>
          <p><strong>Type de besoin :</strong> ${type}</p>
          <p><strong>Description :</strong> ${description || "Aucune"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
