import React, { useState } from 'react';
import { Disc3, Sparkles, ExternalLink, Music2, Calendar, Radio, Activity, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function BeatPlaceSection() {
  const [rotateDisc, setRotateDisc] = useState(true);

  return (
    <section className="py-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 border border-purple-500/30 shadow-2xl"
      >
        {/* Ambient 3D Laser & Volumetric Lights */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none" />

        {/* Studio HUD lines */}
        <div className="absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono text-purple-400/80">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <span>BEAT PLACE STAGE AUDIO • 4K LIVE CAPTURE</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          {/* 3D Vinyl Disc Centerpiece with realistic spin */}
          <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer" onClick={() => setRotateDisc(!rotateDisc)}>
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              
              {/* 3D Vinyl */}
              <motion.div
                animate={rotateDisc ? { rotate: 360 } : { rotate: 0 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black border-4 border-neutral-800 shadow-2xl flex items-center justify-center overflow-hidden"
              >
                {/* Grooves */}
                <div className="absolute inset-1 rounded-full border border-neutral-700/50" />
                <div className="absolute inset-3 rounded-full border border-neutral-800" />
                <div className="absolute inset-5 rounded-full border border-neutral-700/60" />
                <div className="absolute inset-7 rounded-full border border-neutral-800" />
                
                {/* Center Label */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center shadow-inner">
                  <Disc3 className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-xs font-bold text-purple-300 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Divisão de Entretenimento & Festas</span>
          </div>

          {/* Main Titles */}
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase mb-3 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
            BEAT PLACE
          </h2>
          <p className="text-base sm:text-xl font-bold text-pink-400 uppercase tracking-wider mb-5 flex items-center justify-center gap-2">
            <span>Agência de Festas, DJs & Coberturas 4K</span>
          </p>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Especialistas em booking de DJs de alta relevância, cenografia imersiva, live streaming multicâmera no TikTok e YouTube, além de aftermovies cinemáticos masterizados em 4K HDR.
          </p>

          {/* 3D Glass Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <Disc3 className="w-5 h-5 text-pink-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase">Booking de DJs</div>
              <p className="text-[10px] text-neutral-400 mt-0.5">Line-ups exclusivos</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <Calendar className="w-5 h-5 text-purple-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase">Produção Executiva</div>
              <p className="text-[10px] text-neutral-400 mt-0.5">Gestão ponta a ponta</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <Music2 className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase">Live Streaming</div>
              <p className="text-[10px] text-neutral-400 mt-0.5">Multicâmera TikTok & YT</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <Radio className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-xs font-bold text-white uppercase">Aftermovies 4K</div>
              <p className="text-[10px] text-neutral-400 mt-0.5">Finalização de cinema</p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://bplace-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-purple-900/50 hover:scale-[1.02] transition-all cursor-pointer group"
            >
              <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>Acessar Portal Beat Place</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-[11px] text-neutral-500 mt-4 font-mono">
            Plataforma oficial: <span className="text-neutral-300 underline">bplace-five.vercel.app</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
