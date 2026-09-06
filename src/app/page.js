"use client"; // Obligatoire pour utiliser le système de clic (useState)

import { Mail } from 'lucide-react'; // Uniquement Mail !
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // Cet état gère si le paquet de cartes est ouvert ou fermé
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  // Les données de tes 3 projets
  const projets = [
    {
      id: 1,
      titre: "Portfolio Journaliste Média",
      type: "Site Vitrine",
      description: "Design épuré et optimisé pour la lecture. Mise en avant d'articles, de reportages et CV en ligne.",
      image: "/images/site-nassima.png", 
      lien: "https://nassimaouail.42web.io/?i=1",
      isLive: true,
      delayClass: "delay-[100ms]"
    },
    {
      id: 2,
      titre: "Resto & Booking Engine",
      type: "E-Commerce & RDV",
      description: "Maquette interactive pour un restaurant avec menu dynamique et système de réservation de table en ligne.",
      image: "/images/restaurant.jpg",
      lien: "#",
      isLive: false,
      delayClass: "delay-[200ms]"
    },
    {
      id: 3,
      titre: "Générateur de Factures",
      type: "Outil Métier (SaaS)",
      description: "Application web permettant de générer, calculer la TVA et exporter des factures pro en PDF en un clic.",
      image: "/images/factures.jpg",
      lien: "#",
      isLive: false,
      delayClass: "delay-[300ms]"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-indigo-500 selection:text-white scroll-smooth">
      
      {/* SECTION HERO PLEIN ÉCRAN */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* LA VIDÉO DE FOND */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/accueil.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video>

        {/* L'OVERLAY AMÉLIORÉ : Fonde la vidéo à 100% dans le fond noir slate-950 du site pour supprimer la coupure nette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-slate-950 z-10" />

    {/* 2. NAVBAR TRANSPARENTE ET FLOTTANTE AVEC LOGO TYPO */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          {/* LE LOGO STYLE STUDIO EN CODE */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none text-white font-sans">
              LEVEL<span className="text-indigo-500">UP</span>
            </div>
            <div className="text-xs font-bold tracking-tight uppercase leading-none hidden lg:block border-l border-white/20 pl-4 text-white/40">
              Passez au niveau <span className="text-white/80">supérieur</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase ml-auto sm:ml-0">
            <a href="#projets" className="opacity-70 hover:opacity-100 transition">Projets</a>
            <a href="#services" className="opacity-70 hover:opacity-100 transition">À propos</a>
            <a href="#contact" className="border border-white/30 hover:border-white px-4 py-2 rounded-full transition backdrop-blur-sm bg-white/5">
              Parlons-en
            </a>
          </nav>
        </header>

        {/* 3. LE TITRE GÉANT AU CENTRE */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-4">
          <h1 className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[14rem] font-black tracking-tighter uppercase select-none text-center leading-none">
            LevelUP
          </h1>
        </div>

        {/* 4. BARRE D'INFOS EN BAS */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-8 grid grid-cols-2 md:grid-cols-3 items-end text-[10px] md:text-xs font-medium tracking-widest uppercase text-white/60">
          <div>
            <p>Studio de création technologique & de code</p>
          </div>
          <div className="hidden md:block text-center">
            <p>Paris, France</p>
          </div>
          <div className="text-right">
            <p>© 2026 — Disponible pour des missions</p>
          </div>
        </div>

      </section>

      {/* SÉPARATEUR DESIGN (LIGNE HR AVEC EFFET MINI-NEON FLUIDE) */}
      <div className="w-full bg-slate-950 pt-24 pb-12 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl flex items-center justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-800" />
          <div className="mx-6 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-mono font-bold">01 / Réalisations</span>
            <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-800" />
        </div>
      </div>

      {/* SECTION RÉALISATIONS (JEU DE CARTES AVEC TRANSITION NETTE ET COMPOSITION STABLE) */}
      <section id="projets" className="bg-slate-950 pb-32 px-6 overflow-hidden">
        
        {/* TITRE DE LA ZONE */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto leading-tight text-white/90">
            Des productions sur-mesure livrées par le studio.
          </h2>
        </div>

        {/* CONTENEUR STRUCTUREL DE SÉCURITÉ : Évite les sauts de hauteur violents */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[460px] flex items-center justify-center">
          
          {/* LE PAQUET FERMÉ : Reste fixe au centre et s'estompe sans casser le flux de la page */}
          <div className={`absolute transition-all duration-500 ease-in-out transform flex justify-center items-center z-30 ${
            isDeckOpen ? "opacity-0 scale-90 pointer-events-none invisible" : "opacity-100 scale-100 visible"
          }`}>
            <button 
              onClick={() => setIsDeckOpen(true)}
              className="group relative w-80 h-[420px] bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 shadow-2xl flex flex-col justify-between p-8 cursor-pointer text-left"
            >
              {/* Cartes superposées en arrière-plan */}
              <div className="absolute inset-0 bg-slate-900/90 rounded-2xl border border-slate-800/50 translate-x-2 translate-y-2 rotate-2 group-hover:rotate-4 transition-transform duration-300 -z-10" />
              <div className="absolute inset-0 bg-slate-900/50 rounded-2xl border border-slate-800/30 translate-x-4 translate-y-4 rotate-4 group-hover:rotate-8 transition-transform duration-300 -z-20" />

              <div>
                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">// PORTFOLIO</span>
                <h3 className="text-xl font-black uppercase tracking-tight mt-2 text-white/90">Débloquer les projets</h3>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-lg shadow-lg self-end group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                +
              </div>
            </button>
          </div>

    {/* LES 3 CARTES : Intégration en grille CSS pure, fluide et 100% responsive */}
          <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out z-20 ${
            isDeckOpen ? "opacity-100 scale-100 relative" : "opacity-0 scale-95 pointer-events-none absolute inset-0 invisible"
          }`}>
            {projets.map((p) => (
              <Link 
                key={p.id}
                href={`/projets/${p.id}`}
                className={`bg-slate-900/30 backdrop-blur-sm border border-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col transform transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:border-indigo-500/30 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-indigo-500/5 cursor-pointer ${
                  isDeckOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${p.delayClass}`}
              >
                {/* Zone de l'image */}
                <div className="h-48 relative bg-gradient-to-tr from-slate-900 to-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900">
                  {/* Texte de fond par défaut */}
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">[ Aperçu {p.id} ]</span>
                  
                  {/* Image automatique : elle se cache si le fichier est introuvable */}
                  <img 
                    src={p.image} 
                    alt={p.titre} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Contenu textuel */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-indigo-400 uppercase bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/30">
                      {p.type}
                    </span>
                    <h3 className="text-lg font-bold mt-4 mb-2 text-white/90">{p.titre}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                  </div>

                  {/* Redirections et liens */}
                  <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-center">
                    {p.isLive ? (
                      <span className="text-xs font-bold tracking-widest uppercase text-white hover:text-indigo-400 transition inline-flex items-center gap-1">
                        Voir le site live →
                      </span>
                    ) : (
                      <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                        Modèle...
                      </span>
                    )}
                    <span className="text-[10px] text-slate-500 hover:text-white underline transition">
                      Détails
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        

        </div>

        {/* BOUTON POUR FERMER LA GALERIE */}
        {isDeckOpen && (
          <button 
            onClick={() => setIsDeckOpen(false)}
            className="mt-16 text-xs font-bold tracking-widest uppercase text-slate-600 hover:text-white transition block mx-auto text-center"
          >
            ↑ Rassembler les cartes
          </button>
        )}
      </section>

{/* ========================================================================= */}
        {/* SECTION TARIFS : OFFRES AGRESSIVES & TRANSPARENTES */}
        {/* ========================================================================= */}
        <section id="tarifs" className="w-full max-w-6xl mx-auto px-6 py-16 text-center border-t border-slate-900">
          
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// DES PRIX QUI DÉFIENT TOUTE CONCURRENCE</span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Des offres nettes. Zéro frais caché.</h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Pas d'abonnement mensuel. On crée votre compte hébergeur ensemble, vous restez propriétaire à 100%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* OFFRE 1 : VITRINE BASIC */}
            <div className="bg-slate-900/20 backdrop-blur-sm border border-slate-900 rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300 hover:border-slate-800">
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">// FORMULE ESSENTIELLE</span>
                <h3 className="text-lg font-bold text-white">Site Vitrine</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Idéal pour poser votre présence en ligne avec un design haut de gamme et ultra-rapide.</p>
                <div className="pt-2">
                  <span className="text-2xl font-black text-white">290€</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase ml-2">Prix unique</span>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-400">
                  <li>✓ Page unique d'impact (Landing Page)</li>
                  <li>✓ Design 100% Mobile & PC</li>
                  <li>✓ Formulaire de contact direct</li>
                  <li>✓ Aide au déploiement (Hébergement gratuit)</li>
                </ul>
              </div>
              <a href="#contact" className="mt-6 block w-full text-center text-xs font-bold uppercase tracking-widest bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-xl transition border border-slate-800">
                Sélectionner
              </a>
            </div>

            {/* OFFRE 2 : L'OFFRE PHARE (LE PACK ULTIME) */}
            <div className="bg-slate-900/40 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl p-6 flex flex-col justify-between text-left relative shadow-2xl shadow-indigo-500/5">
              <span className="absolute -top-3 right-6 text-[9px] bg-indigo-500 text-white px-3 py-1 rounded-full font-bold tracking-widest uppercase shadow">
                Le Meilleur Choix
              </span>
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-indigo-400 uppercase">// PACK DIGITALISATION</span>
                <h3 className="text-lg font-bold text-white">Vitrine + CRM Interne</h3>
                <p className="text-xs text-slate-400 leading-relaxed">La fusion parfaite : votre vitrine publique connectée à votre propre logiciel de gestion privé.</p>
                <div className="pt-2">
                  <span className="text-2xl font-black text-white">690€</span>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase ml-2">Rapport qualité/prix imbattable</span>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-300">
                  <li className="text-indigo-300 font-medium">✓ Jusqu'à 3 pages sur-mesure</li>
                  <li className="text-indigo-300 font-medium">✓ Espace de gestion privé (CRM)</li>
                  <li className="text-indigo-300 font-medium">✓ Générateur de factures automatisé</li>
                  <li className="text-indigo-300 font-medium">✓ Configuration de votre hébergement Vercel</li>
                </ul>
              </div>
              <a href="#contact" className="mt-6 block w-full text-center text-xs font-bold uppercase tracking-widest bg-indigo-600 text-white hover:bg-indigo-500 py-3 rounded-xl transition shadow-lg shadow-indigo-600/20">
                Lancer mon projet
              </a>
            </div>

            {/* OFFRE 3 : SUR-MESURE TOTAL */}
            <div className="bg-slate-900/20 backdrop-blur-sm border border-slate-900 rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300 hover:border-slate-800">
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">// PROJET SUR-MESURE</span>
                <h3 className="text-lg font-bold text-white">Outil Métier & SaaS</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Pour les entreprises ayant un besoin complexe ou une idée d'application web unique.</p>
                <div className="pt-2">
                  <span className="text-2xl font-black text-white">Sur Devis</span>
                </div>
                <ul className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-400">
                  <li>✓ Logique de base de données avancée</li>
                  <li>✓ Intégrations d'API tierces</li>
                  <li>✓ Sécurité et comptes utilisateurs</li>
                  <li>✓ Accompagnement architecture cloud</li>
                </ul>
              </div>
              <a href="#contact" className="mt-6 block w-full text-center text-xs font-bold uppercase tracking-widest bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-xl transition border border-slate-800">
                Discuter de l'idée
              </a>
            </div>

          </div>
          {/* PETITE NOTE TRANSPARENCE : LE PROCESS D'HÉBERGEMENT */}
          <div className="mt-12 max-w-2xl mx-auto bg-slate-900/10 border border-slate-900/60 rounded-xl p-4 text-left">
            <p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">// PROCESSUS DE LIVRAISON INDÉPENDANT</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Zéro abonnement technique avec le studio :</strong> Pour votre totale autonomie, nous créons votre propre compte hébergeur (Vercel/Netlify) ensemble lors de la livraison. Le site y est propulsé gratuitement, vous restez propriétaire à 100% de votre code et de vos accès, sans aucun intermédiaire.
            </p>
          </div>
        </section>

      {/* SECTION À PROPOS / SERVICES */}
      <section id="services" className="bg-slate-950 py-32 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          
          {/* LIGNE D'ACCUEIL DE LA SECTION */}
          <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-6">
            02 / Notre Philosophie
          </p>

        {/* GROS TITRE ASYMÉTRIQUE MODIFIÉ */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
  <h2 className="lg:col-span-7 text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-white">
    Vous imaginez, <span className="text-indigo-400 font-light">nous développons.</span> Aucun compromis technique.
  </h2>
  <p className="lg:col-span-5 text-slate-400 text-sm md:text-base leading-relaxed font-medium pt-2">
    Du site vitrine ultra-minimaliste à l'application métier sur-mesure, nous transformons chaque défi technique en interface fluide. Grâce à un workflow moderne et propulsé par les derniers outils technologiques, nous livrons des résultats d'élite, sans barrière technique.
  </p>
</div>

          {/* GRILLE DES COMPÉTENCES (STYLE STUDIO PREMIUM) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-900 pt-16">
            
            {/* EXPERTISE 1 */}
            <div className="space-y-4 group">
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest">// 01 . INTERFACES HAUTE COUTURE</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">UI / UX Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conception de maquettes minimalistes et immersives adaptées à votre image. Chaque pixel, transition et animation est pensé pour capter l'attention de vos visiteurs.
              </p>
            </div>

            {/* EXPERTISE 2 */}
            <div className="space-y-4 group">
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest">// 02 . ARCHITECTURE MODERNE</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">Développement Next.js</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Code propre, performant et optimisé pour le référencement (SEO). Nous utilisons les dernières technologies pour garantir un affichage instantané sur mobile et ordinateur.
              </p>
            </div>

            {/* EXPERTISE 3 */}
            <div className="space-y-4 group">
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest">// 03 . AUTONOMIE TOTALE</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">Solutions Connectées</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intégration d'API tierces (YouTube, Stripe), de bases de données dynamiques ou d'outils de gestion de contenu simples pour vous laisser les commandes de votre site.
              </p>
            </div>

          </div>

        </div>
      </section>

{/* SECTION CONTACT / FORMULAIRE */}
      <section id="contact" className="bg-slate-950 py-32 px-6 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          
          {/* EN-TÊTE */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">03 / Parlons-en</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-4 text-white">
              Soumettez votre défi.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Pas de grilles de tarifs pré-conçues ni d'offres rigides. Notre spécialité est le code et le design de haute précision, mais nous sommes ouverts à tout type de projet. Discutons de votre idée.
            </p>
          </div>

        {/* TON FORMULAIRE CONNECTÉ RE-CALIBRÉ */}
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("loading"); // Passe en mode chargement immédiat
              
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData);

              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });

                // Ton terminal affichant un succès 200, on valide si response.ok OU status 200
                if (response.ok || response.status === 200) {
                  setStatus("success");
                  e.target.reset(); // Sécurisé : e.target ne devient pas indéfini après le await
                } else {
                  setStatus("error");
                }
              } catch (err) {
                console.error("Erreur attrapée par le formulaire :", err);
                setStatus("error");
              }
            }}
            className="space-y-6 bg-slate-900/20 border border-slate-900 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative"
          >
            {status === "success" && (
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-6 z-40">
                <span className="text-3xl mb-2">✨</span>
                <h3 className="text-xl font-bold text-indigo-400 uppercase tracking-wide">Brief bien reçu !</h3>
                <p className="text-xs text-slate-400 max-w-sm mt-1">Un mail de confirmation vient de vous être envoyé. On analyse votre défi et on vous recontacte très vite.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-[10px] uppercase tracking-widest font-bold text-white underline">Envoyer un autre message</button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-mono">// Votre Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="nom@exemple.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-mono">// Numéro de téléphone</label>
                <input 
                  type="tel" 
                  name="telephone"
                  placeholder="06 00 00 00 00"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-mono">// Budget Approximatif (À titre indicatif)</label>
              <select 
                name="budget"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              >
                <option value="À définir ensemble">À définir ensemble / Petit budget</option>
                <option value="Moins de 1000€">Moins de 1000€</option>
                <option value="1000€ — 3000€">1000€ — 3000€</option>
                <option value="Plus de 3000€">Plus de 3000€ / Projet complexe</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-mono">// Détails de votre projet / Votre demande</label>
              <textarea 
                name="demande"
                required
                rows={5}
                placeholder="Décrivez votre idée, vos objectifs..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-white text-slate-950 font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Envoi du brief en cours..." : "Envoyer le brief au studio →"}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400 text-center font-medium mt-2">Une erreur est survenue lors de l'envoi. Veuillez réessayer.</p>
            )}
          </form>

        </div>
      </section>
      {/* NOUVEAU FOOTER ASYMÉTRIQUE ET MINIMALISTE */}
 {/* NOUVEAU FOOTER AJUSTÉ ET PLUS COMPACT */}
      <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
        {/* Un léger dégradé bleu nuit en fond pour la profondeur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#030712_0%,transparent_60%)] opacity-60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12"> {/* Réduit de py-20 à py-12 */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 items-center"> {/* Aligne verticalement au centre au lieu de items-start */}
            
            {/* GAUCHE : LOGO ET STATUT */}
            <div className="space-y-3">
              <div className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">
                LEVEL<span className="text-indigo-500">UP</span>
              </div>
              
              <div className="space-y-1 pt-3 border-t border-slate-900 max-w-sm">
                <p className="text-[11px] font-medium tracking-wide text-slate-400">
                  Création technologique et code haute couture.
                </p>
                <p className="text-[9px] tracking-widest text-slate-600 uppercase font-mono">
                  // PARIS, FRANCE — DISPONIBLE MONDE ENTIER
                </p>
              </div>
            </div>

            {/* DROITE : ICONES ET INFOS */}
            <div className="flex flex-col items-start md:items-end gap-6"> {/* Réduit le gap de 10 à 6 */}
              
              {/* Le badge de dispo décalé pour le style */}
              <span className="text-emerald-400 flex items-center gap-1.5 normal-case font-medium tracking-normal text-[11px] bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponible pour des missions
              </span>

              {/* BLOC ICONES EN CODE INFAILLIBLE */}
              <div className="flex items-center gap-4"> {/* Réduit l'écart entre les icônes */}
                {/* EMAIL */}
                <a href="mailto:soagency08@gmail.com" title="Envoyer un e-mail" className="group">
                  <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-indigo-500/30 transition-all shadow-xl">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition" />
                  </div>
                </a>
                
                {/* INSTAGRAM */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="group">
                  <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-indigo-500/30 transition-all shadow-xl flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                </a>
                
                {/* LINKEDIN */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group">
                  <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-indigo-500/30 transition-all shadow-xl flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Mentions légales discrètes en bas */}
          <div className="mt-12 pt-6 border-t border-slate-900 text-center"> {/* Réduit de mt-20 à mt-12 */}
            <p className="text-[9px] text-slate-600 tracking-widest uppercase">
              © 2026 LevelUP — TOUS DROITS RÉSERVÉS // Fait avec passion à Paris
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}