"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ExternalLink, Database, Layout, 
  ShieldCheck, ArrowRight, FileText, 
  Cpu, Settings, Video, Globe 
} from 'lucide-react';

export default function FacturationProjectPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-indigo-500 selection:text-white pb-32">
      
      {/* CONTENEUR GLOBAL */}
      <div className="max-w-6xl mx-auto px-6 pt-32">
        
        {/* 1. BOUTON RETOUR ÉLÉGANT */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="w-fit py-2.5 px-5 bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold tracking-widest hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/20 transition-all flex items-center gap-2 uppercase rounded-full"
          >
            <ArrowLeft size={14} className="text-indigo-400" /> Retour au studio
          </Link>
        </div>

        {/* 2. HEADER DU PROJET ACCENTUÉ INDIGO */}
        <div className="mb-24 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] text-indigo-400 font-bold border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest">
              Statut : En cours de développement
            </span>
          </div>

          <h1 className="text-white text-3xl md:text-6xl font-black tracking-tight uppercase mb-6 leading-none">
             <span className="text-slate-500 font-light">Gestionnaire de facture </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mb-8 font-medium">
            Conception d'une application web métier dédiée à la facturation pour indépendants et TPE. Automatisation du calcul des taxes, génération instantanée de PDF conformes et suivi temps réel des encaissements sur une interface épurée.          </p>

          <a 
            href="https://projet-facturation-mu.vercel.app/"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-fit py-3.5 px-8 bg-white text-slate-950 text-xs font-bold tracking-widest hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-2 uppercase rounded-full shadow-lg shadow-black/20"
          >
            Tester l'application en direct <ExternalLink size={14} />
          </a>
        </div>

       {/* 3. COIN DÉMONSTRATION RESPONSIVE (ORDINATEUR + TÉLÉPHONE) */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-12 border-b border-slate-900 pb-4">
            <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">01 / Interface multiplateforme</span>
          </div>

          {/* GRILLE DU JEU DE RESPONSIVE MOCKUPS */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full mx-auto">
            
            {/* LE MOCKUP ORDINATEUR (À GAUCHE) */}
            <div className="w-full lg:w-[65%] relative group">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all group-hover:border-indigo-500/30">
                {/* Barre supérieure style Mac/Windows */}
                <div className="bg-slate-950 px-4 py-3 flex gap-2 border-b border-slate-900">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>
                {/* Zone de rendu de la capture/vidéo Ordinateur */}
                <div className="bg-slate-950 aspect-video relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-indigo-500/5 z-10 pointer-events-none" />
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://sdakhrqpvztbabsynbxo.supabase.co/storage/v1/object/public/medias_du_projet/videos/nassima_desktop.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            
            {/* FLÈCHE DE TRANSITION DYNAMIQUE INDIGO */}
            <div className="flex items-center justify-center shrink-0 py-2 lg:py-0">
              <div className="text-indigo-400 animate-pulse rotate-90 lg:rotate-0">
                <ArrowRight size={32} strokeWidth={2.5} />
              </div>
            </div>

            {/* LE MOCKUP TÉLÉPHONE SMARTPHONE (À DROITE) */}
            <div className="w-48 bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative shrink-0 aspect-[9/19] flex flex-col justify-between group hover:border-indigo-500/30 transition-all">
              {/* Encoche du haut / Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-20" />
              
              {/* Zone de rendu de la capture/vidéo Mobile */}
              <div className="w-full h-full bg-slate-950 relative z-10 overflow-hidden flex items-center justify-center">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="https://sdakhrqpvztbabsynbxo.supabase.co/storage/v1/object/public/medias_du_projet/videos/nassima_mobile.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
    
          </div>
        </div>

        {/* 4. DÉTAILS, MODULES ET FICHE TECHNIQUE EN BAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE (RÉSUMÉ MISSION + SYSTÈMES) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* RÉSUMÉ MISSION */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText size={16} className="text-indigo-400" />
                <h3 className="text-white text-xs font-bold tracking-widest uppercase">Résumé de mission</h3>
              </div>
              
              <div className="bg-slate-900/40 border-l-2 border-indigo-500 p-6 md:p-8 backdrop-blur-md rounded-r-2xl border border-slate-900 shadow-xl">
                <p className="text-white text-base leading-relaxed mb-4 italic text-slate-200">
                  "Conception d'un outil de facturation rapide, pensé pour réduire le temps de gestion administrative."
                </p>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                La plateforme intègre un moteur de calcul réactif côté client combiné à une base de données relationnelle sécurisée. L'architecture permet l'édition de documents comptables, l'exportation PDF et Excel immédiate et la réconciliation des paiements.                </p>
              </div>
            </section>

            {/* BLOCS DE MODULES TECHNIQUES */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Settings size={16} className="text-indigo-400" />
                <h3 className="text-white text-xs font-bold tracking-widest uppercase">Composants du Système</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
{ title: "Flux Média API", desc: "Récupération dynamique et intégration propre des reportages vidéo.", icon: <Video size={20} />,  },                  { title: "Structure SQL avec Supabase", desc: "Architecture de base de données stable pour le stockage des factures.", icon: <Database size={20} /> },
                  { title: "Responsive Fluidity", desc: "Adaptation pixel-perfect testée sur différentes platformes.", icon: <Layout size={20} /> },
                  { title: "Validation & Guard", desc: "Formulaires de contact sécurisés contre les injections malveillantes.", icon: <ShieldCheck size={20} /> }
                ].map((feat, idx) => (
                  <div key={idx} className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl shrink-0">
                        {feat.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">
                          
                        </span>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">{feat.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE FISCALE / FICHE TECHNIQUE STICKY */}
          <div className="lg:col-span-4 lg:sticky lg:top-12">
            <aside className="bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="bg-slate-900/80 border-b border-slate-900 p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-indigo-400" />
                  <h3 className="text-white text-[11px] font-bold tracking-widest uppercase">Fiche technique</h3>
                </div>
                <Globe size={14} className="text-slate-600" />
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-indigo-400 text-[10px] tracking-widest uppercase font-bold mb-1">Client final</p>
                  <p className="text-white text-sm font-medium">Freelances, Artisans & TPE (SaaS B2B)</p>
                </div>
                
                <div className="h-[1px] w-full bg-slate-900" />
                
                <div>
                  <p className="text-indigo-400 text-[10px] tracking-widest uppercase font-bold mb-3">Stack Technologique</p>
                  <div className="flex flex-wrap gap-2">
                    {['PHP 8', 'MySQL', 'REST API', 'JavaScript'].map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800 uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0 animate-pulse" />
                  <p className="text-slate-400 text-[11px] leading-relaxed font-medium">
                    Numérotation séquentielle inviolable et conformité légale garanties pour chaque document généré.                  </p>
                </div>
              </div>
            </aside>
          </div>

        </div>

      </div>
    </div>
  );
}