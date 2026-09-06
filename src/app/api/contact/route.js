import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, telephone, budget, demande } = await request.json();

    // Configuration du serveur d'envoi Google Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   // 1. STYLE PREMIUM DARK POUR LE MAIL QUE TU REÇOIS
    const mailToStudio = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `🚀 Nouveau défi client LevelUP — ${budget}`,
      html: `
        <div style="background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; color: #f8fafc; text-align: center;">
          <div style="max-w: 550px; margin: 0 auto; bg-color: #0f172a; background-color: #0f172a; border: 1px solid #1e293b; padding: 40px; border-radius: 24px; text-align: left; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);">
            <div style="font-size: 20px; font-weight: 900; tracking-spacing: -0.05em; color: #ffffff; text-transform: uppercase; margin-bottom: 30px;">
              LEVEL<span style="color: #818cf8;">UP</span> <span style="font-size: 12px; color: #64748b; font-weight: 500; tracking-spacing: 0.1em; margin-left: 10px;">// INTERNAL LOG</span>
            </div>
            <h2 style="font-size: 20px; font-weight: 800; color: #ffffff; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; tracking-spacing: -0.02em;">Nouveau défi client reçu</h2>
            <p style="color: #94a3b8; font-size: 14px; margin-top: 0; margin-bottom: 24px;">Un nouveau formulaire vient d'être soumis depuis le site vitrine.</p>
            
            <div style="margin-bottom: 20px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; tracking-spacing: 0.1em; display: block; margin-bottom: 4px;">Email Client</span>
              <a href="mailto:${email}" style="color: #ffffff; font-size: 14px; text-decoration: none; font-weight: 600;">${email}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; tracking-spacing: 0.1em; display: block; margin-bottom: 4px;">Téléphone</span>
              <span style="color: #ffffff; font-size: 14px; font-weight: 600;">${telephone || 'Non renseigné'}</span>
            </div>
            
            <div style="margin-bottom: 30px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; tracking-spacing: 0.1em; display: block; margin-bottom: 4px;">Budget Estimé</span>
              <span style="color: #34d399; font-size: 14px; font-weight: 700; background-color: rgba(52,211,153,0.1); padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(52,211,153,0.2); display: inline-block;">${budget}</span>
            </div>
            
            <div style="background-color: #020617; border: 1px solid #1e293b; padding: 20px; border-radius: 16px;">
              <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; tracking-spacing: 0.1em; display: block; margin-bottom: 8px;">Détails du Brief</span>
              <p style="color: #cbd5e1; font-size: 13px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${demande}</p>
            </div>
          </div>
        </div>
      `
    };

    // 2. DESIGN PRO ET IMMERSIF POUR L'E-MAIL DE CONFIRMATION DU CLIENT
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '⚡ LevelUP — Votre demande a bien été prise en compte',
      html: `
        <div style="background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; color: #f8fafc; text-align: center;">
          <div style="max-w: 550px; margin: 0 auto; background-color: #0f172a; border: 1px solid #1e293b; padding: 40px; border-radius: 24px; text-align: left; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);">
            <div style="font-size: 22px; font-weight: 900; tracking-spacing: -0.05em; color: #ffffff; text-transform: uppercase; margin-bottom: 30px; border-b: 1px solid #1e293b; padding-bottom: 20px;">
              LEVEL<span style="color: #6366f1;">UP</span>
            </div>
            
            <p style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-top: 0;">Bonjour,</p>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">Merci d'avoir contacté notre studio. Votre demande de projet a bien été enregistrée par nos systèmes.</p>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">Nous analysons votre brief, vos objectifs et vos contraintes techniques avec la plus grande attention. Un développeur de l'équipe va prendre le relais et reviendra vers vous par e-mail ou par téléphone sous 24h à 48h afin de planifier une première discussion.</p>
            
            <div style="background-color: rgba(99,102,241,0.05); border: 1px solid rgba(99,102,241,0.2); padding: 15px 20px; border-radius: 12px; margin: 30px 0; color: #a5b4fc; font-size: 12px; font-weight: 500;">
              ✨ Conseil : Préparez vos exemples de sites favoris ou vos documents fonctionnels pour notre échange.
            </div>

            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 0;">À très vite,<br /><strong style="color: #ffffff;">L'équipe LevelUP</strong><br /><span style="font-size: 11px; color: #64748b;">Studio de création technologique</span></p>
            
            <div style="margin-top: 40px; border-t: 1px solid #1e293b; padding-top: 20px; text-align: center;">
              <p style="font-size: 11px; color: #475569; margin: 0;">© 2026 LevelUP — Paris, France. Disponible pour des missions de développement augmenté.</p>
            </div>
          </div>
        </div>
      `
    };

    // Exécution des envois en simultané
    await transporter.sendMail(mailToStudio);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}