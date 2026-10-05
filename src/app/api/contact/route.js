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

    // 1. STYLE PREMIUM DARK POUR LE MAIL INTERNE (QUE TU REÇOIS)
    const mailToStudio = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `🚀 Nouveau défi client SAMORA IT — ${budget}`,
      html: `
        <div style="background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; color: #f8fafc; text-align: center;">
          <div style="max-width: 550px; margin: 0 auto; background-color: #0f172a; border: 1px solid #1e293b; padding: 40px; border-radius: 24px; text-align: left; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);">
            <div style="font-size: 20px; font-weight: 900; letter-spacing: -0.05em; color: #ffffff; text-transform: uppercase; margin-bottom: 30px;">
              SAMORA <span style="color: #818cf8;">IT</span> <span style="font-size: 11px; color: #64748b; font-weight: 600; letter-spacing: 0.1em; margin-left: 10px;">// INTERNAL LOG</span>
            </div>
            <h2 style="font-size: 18px; font-weight: 800; color: #ffffff; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.02em;">Nouveau défi client reçu</h2>
            <p style="color: #94a3b8; font-size: 14px; margin-top: 0; margin-bottom: 24px;">Un nouveau formulaire vient d'être soumis depuis le site web.</p>
            
            <div style="margin-bottom: 20px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Email Client</span>
              <a href="mailto:${email}" style="color: #ffffff; font-size: 14px; text-decoration: none; font-weight: 600;">${email}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Téléphone</span>
              <span style="color: #ffffff; font-size: 14px; font-weight: 600;">${telephone || 'Non renseigné'}</span>
            </div>
            
            <div style="margin-bottom: 30px;">
              <span style="font-size: 10px; font-weight: 800; color: #818cf8; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Budget Estimé</span>
              <span style="color: #34d399; font-size: 14px; font-weight: 700; background-color: rgba(52,211,153,0.1); padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(52,211,153,0.2); display: inline-block;">${budget}</span>
            </div>
            
            <div style="background-color: #020617; border: 1px solid #1e293b; padding: 20px; border-radius: 16px;">
              <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 8px;">Détails du Brief</span>
              <p style="color: #cbd5e1; font-size: 13px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${demande}</p>
            </div>
          </div>
        </div>
      `
    };

    // 2. L'E-MAIL DE CONFIRMATION AUTOMATIQUE DU CLIENT
 const mailToClient = {
      // 1. Nom d'affichage propre
      from: `"SAMORA IT" <${process.env.EMAIL_USER}>`,
      to: email,
      // 2. Reply-to pour que le client puisse te répondre directement
      replyTo: process.env.EMAIL_USER,
      // 3. Sujet sans émoji déclencheur de filtre spam
      subject: 'SAMORA IT — Confirmation de réception de votre projet',
      // 4. Version texte brut OBLIGATOIRE pour baisser le score spam
      text: `Bonjour,\n\nMerci d'avoir contacté SAMORA IT. Votre demande de projet a bien été enregistrée.\n\nNous analysons votre brief et nous reviendrons vers vous sous 24h à 48h afin de planifier un premier échange.\n\nÀ très vite,\nL'équipe SAMORA IT\nStudio de création technologique & de code\nParis, France`,
      // 5. Version HTML
      html: `
        <div style="background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; color: #f8fafc; text-align: center;">
          <div style="max-width: 550px; margin: 0 auto; background-color: #0f172a; border: 1px solid #1e293b; padding: 40px; border-radius: 24px; text-align: left;">
            <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.05em; color: #ffffff; text-transform: uppercase; margin-bottom: 24px; border-bottom: 1px solid #1e293b; padding-bottom: 16px;">
              SAMORA <span style="color: #6366f1;">IT</span>
            </div>
            
            <p style="color: #f1f5f9; font-size: 15px; font-weight: 600; margin-top: 0;">Bonjour,</p>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">Merci d'avoir contacté notre studio. Votre demande de projet a bien été enregistrée par nos systèmes.</p>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">Nous analysons votre brief, vos objectifs et vos contraintes techniques. Un développeur de l'équipe prend le relais et reviendra vers vous par e-mail ou téléphone sous 24h à 48h afin de planifier une première discussion.</p>
            
            <div style="background-color: rgba(99,102,241,0.05); border: 1px solid rgba(99,102,241,0.2); padding: 15px 20px; border-radius: 12px; margin: 24px 0; color: #a5b4fc; font-size: 12px; font-weight: 500;">
              Astuce : Préparez vos éventuels exemples de sites de référence ou documents fonctionnels pour notre échange.
            </div>

            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 0;">À très vite,<br /><strong style="color: #ffffff;">L'équipe SAMORA IT</strong><br /><span style="font-size: 11px; color: #64748b;">Studio de création technologique & de code</span></p>
            
            <div style="margin-top: 32px; border-top: 1px solid #1e293b; padding-top: 16px; text-align: center;">
              <p style="font-size: 11px; color: #475569; margin: 0;">© 2026 SAMORA IT — Paris, France.</p>
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