import React from 'react';
import { Disc3, Sparkles, ExternalLink, Music2, Calendar, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export function BeatPlaceSection() {
  return (
    <section className="py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white p-8 sm:p-12 border border-purple-800/40 shadow-2xl"
      >
        {/* Background glow effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-xs font-bold text-purple-300 uppercase tracking-widest mb-6">
            <Disc3 className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Divisão de Eventos & Entretenimento</span>
          </div>

          {/* Main Titles */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mb-3 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
            BEAT PLACE
          </h2>
          <p className="text-lg sm:text-xl font-bold text-pink-400 uppercase tracking-wider mb-4">
            Agência de Festas e DJs
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Especialistas em booking de DJs, produção executiva de eventos, live e gravação de sets, cenografia de impacto e cobertura audiovisual completa para festivais, clubs e festas exclusivas.
          </p>

          {/* Pills / Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2.5">
              <Disc3 className="w-5 h-5 text-pink-400 shrink-0" />
              <span className="text-xs font-medium text-gray-200">Booking de DJs</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-xs font-medium text-gray-200">Produção de Festas</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2.5">
              <Music2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-xs font-medium text-gray-200">Live TikTok & Sets</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2.5">
              <Radio className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-gray-200">Aftermovies 4K</span>
            </div>
          </div>

          {/* Direct CTA to Vercel */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://bplace-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-all cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Conhecer a Beat Place</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-[11px] text-gray-500 mt-4">
            Acesse o site oficial da Beat Place em <span className="text-gray-400">bplace-five.vercel.app</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
