"use client"; // Obligatoire pour utiliser le système de clic (useState)

import { Mail } from 'lucide-react'; // Uniquement Mail !
import { useState, useEffect } from "react";
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
      image: "/images/restaurant.png",
      lien: "#",
      isLive: false,
      delayClass: "delay-[200ms]"
    },
    {
      id: 3,
      titre: "Générateur de Factures",
      type: "Outil Métier (SaaS)",
      description: "Application web permettant de générer, calculer la TVA et exporter des factures pro en PDF en un clic.",
      image: "/images/factures.png",
      lien: "#",
      isLive: false,
      delayClass: "delay-[300ms]"
    }
  ];

  // État pour le carrousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === projets.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [projets.length]);


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
               SAMORA <span className="text-indigo-500">IT</span>
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

      
  {/* 3. LE TITRE GÉANT AU CENTRE - VERSION ULTRA PREMIUM & CONTRASTÉE */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 w-full mt-10">
          
          {/* Petit badge élégant au-dessus du titre */}
          <div className="mb-6 md:mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/90 font-mono drop-shadow-md">
              Studio de création technologique
            </span>
          </div>

          {/* Le grand titre SAMORA IT avec effet de lueur sur le IT */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase text-center flex flex-col md:flex-row items-center justify-center leading-none select-none">
            {/* Ombre portée renforcée pour "SAMORA" */}
            <span className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">SAMORA</span>
            <span className="relative ml-0 md:ml-4 mt-2 md:mt-0">
              {/* Lueur (glow) derrière le IT */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 blur-2xl opacity-60"></span>
              {/* Le texte IT en dégradé */}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-300 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                IT
              </span>
            </span>
          </h1>

          {/* Sous-titre avec ombre portée (text-shadow) pour la lisibilité */}
          <p className="mt-8 md:mt-12 text-sm md:text-base text-slate-200 max-w-2xl text-center font-medium leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] px-4">
            Nous concevons des <strong className="text-white font-bold">applications web</strong> et des <strong className="text-white font-bold">expériences visuelles</strong> sur-mesure pour les entreprises qui refusent les compromis techniques.
          </p>

          {/* Bouton d'action stylisé */}
          <div className="mt-10">
            <a href="#projets" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-xs tracking-widest uppercase overflow-hidden transition-transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]">
              <span className="relative z-10 transition-colors group-hover:text-indigo-600">Explorer les productions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
          
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

  {/* SECTION RÉALISATIONS (IMMERSION TOTALE STYLE FRAMER) */}
      <section id="projets" className="bg-slate-950 py-24 overflow-hidden">
        
        {/* TITRE DE LA ZONE - Plus discret pour laisser la vedette au carrousel */}
        <div className="w-full px-6 md:px-12 mb-10 flex justify-between items-end">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white/90">
            Créations <span className="text-indigo-400">Récentes</span>
          </h2>
          <div className="hidden md:flex gap-4">
            <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">// 2026 EDITION</span>
          </div>
        </div>

 {/* CONTENEUR DU CARROUSEL : IMMERSIF ET LISIBLE */}
        <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto h-[75vh] min-h-[600px] max-h-[900px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group bg-slate-900 border border-white/10 shadow-[0_0_100px_rgba(99,102,241,0.1)]">
          
          {/* LOGIQUE D'AFFICHAGE DU CARROUSEL */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projets.map((p) => (
              <Link 
                key={p.id} 
                href={`/projets/${p.id}`}
                className="w-full h-full flex-shrink-0 relative group/slide cursor-pointer block"
              >
                
                {/* L'image de fond */}
                <img 
                  src={p.image} 
                  alt={p.titre} 
                  className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover/slide:scale-100 transition-transform duration-1000"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />

                {/* OVERLAYS CORRIGÉS */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent w-full md:w-4/5 opacity-90"></div>

                {/* CONTENU TEXTUEL */}
                <div className="absolute inset-0 p-8 md:p-16 lg:p-24 flex flex-col justify-end">
                  <div className="max-w-4xl transform transition-all duration-1000 translate-y-0">
                    
                    {/* Badge avec fond pour ressortir */}
                    <span className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] text-indigo-400 uppercase border border-indigo-500/30 bg-slate-950/50 backdrop-blur-md px-3 py-1.5 rounded-full mb-6">
                      [ {p.type} ]
                    </span>
                    
                    {/* Titre géant */}
                    <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-tight mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                      {p.titre}
                    </h3>
                    
                    <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                      {/* Description lisible */}
                      <p className="text-sm md:text-lg text-slate-300 font-medium leading-relaxed max-w-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        {p.description}
                      </p>
                      
                      {/* BOUTON MODIFIÉ : Mieux visible et animé dès qu'on survole l'image */}
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white mt-2 w-max">
                        <span className="relative pb-2 overflow-hidden">
                          <span className="relative z-10 transition-colors duration-300 group-hover/slide:text-indigo-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Explorer le cas client
                          </span>
                          {/* Ligne de soulignement plus épaisse (2px) et visible par défaut (white/50) */}
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/50 transform origin-left transition-all duration-300 group-hover/slide:scale-x-100 group-hover/slide:bg-indigo-400"></span>
                        </span>
                        
                        {/* Cercle avec flèche animée (bordure plus épaisse) */}
                        <span className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center group-hover/slide:border-indigo-400 group-hover/slide:bg-indigo-500/20 transition-all duration-300 transform group-hover/slide:translate-x-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-colors duration-300 group-hover/slide:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                    </div>

                  </div>
                </div>

              </Link>
            ))}
          </div>

          {/* FLÈCHE DE NAVIGATION DROITE */}
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === projets.length - 1 ? 0 : prev + 1))}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all duration-500 z-20 group/btn"
            aria-label="Projet suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* INDICATEURS DE POSITION */}
          <div className="absolute bottom-8 md:bottom-12 right-8 md:right-16 flex gap-3 z-20">
            {projets.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[2px] transition-all duration-700 ease-out ${
                  currentSlide === idx ? "w-16 bg-white" : "w-6 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
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
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest"></div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">UI / UX Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conception de maquettes minimalistes et immersives adaptées à votre image. Chaque pixel, transition et animation est pensé pour capter l'attention de vos visiteurs.
              </p>
            </div>

            {/* EXPERTISE 2 */}
            <div className="space-y-4 group">
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest"></div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-indigo-400 transition-colors">Développement Next.js</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Code propre, performant et optimisé pour le référencement (SEO). Nous utilisons les dernières technologies pour garantir un affichage instantané sur mobile et ordinateur.
              </p>
            </div>

            {/* EXPERTISE 3 */}
            <div className="space-y-4 group">
              <div className="text-xs font-mono text-indigo-500 font-bold tracking-widest"></div>
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
                 SAMORA <span className="text-indigo-500">IT</span>
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
                © 2026 SAMORA IT — TOUS DROITS RÉSERVÉS // Fait avec passion à Paris
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}