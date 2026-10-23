import React from 'react';
import { 
  Car, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Target, 
  Zap, 
  Gauge, 
  ShieldCheck, 
  ChevronRight,
  Database,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

export function AutoLeadSection() {
  return (
    <section id="autolead" className="py-8 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl bg-[#090C15] text-white p-6 sm:p-12 lg:p-14 border border-cyan-500/30 shadow-2xl"
      >
        {/* Ambient Automotive Glows (Cyan & Emerald Racing Speed Lights) */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-cyan-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-emerald-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />

        {/* Automotive HUD Tracker Header */}
        <div className="absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono text-cyan-400/90">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>PORTAL & ECOSSISTEMA AUTOMOTIVO • @AUTOLEAD.SITE</span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-4">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-5">
            <Car className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ecossistema Especialista em Venda de Carros</span>
          </div>

          {/* Main Title & Brand Identity */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-3 bg-gradient-to-r from-white via-neutral-100 to-cyan-300 bg-clip-text text-transparent">
            AUTOLEAD.SITE
          </h2>
          
          <p className="text-sm sm:text-lg font-bold text-cyan-400 uppercase tracking-wider mb-5 flex items-center justify-center gap-2">
            <span className="font-mono text-neutral-300">@autolead.site</span>
            <span>•</span>
            <span>Aceleradora de Vendas para Lojas & Concessionárias</span>
          </p>

          <p className="text-neutral-300 text-xs sm:text-base leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Um ecossistema completo e inteligente de tecnologia, tráfego qualificado e portal digital desenvolvido exclusivamente para transformar pátios de veículos em máquinas contínuas de vendas e negociação direta no WhatsApp.
          </p>

          {/* 4 Feature Cards do Ecossistema */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 backdrop-blur-sm transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-black uppercase text-white mb-1 tracking-wide">
                Portal de Estoque
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-mono">
                Vitrine moderna e veloz para cada carro, com ficha técnica e botão de proposta direta.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 backdrop-blur-sm transition-all group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-black uppercase text-white mb-1 tracking-wide">
                Tráfego Ultra-Focado
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-mono">
                Campanhas geolocalizadas em Meta e Google Ads que encontram compradores prontos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 backdrop-blur-sm transition-all group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-black uppercase text-white mb-1 tracking-wide">
                Automação & CRM
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-mono">
                Encaminhamento ágil de leads qualificados direto para o time de vendedores no WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 backdrop-blur-sm transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                <Gauge className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-black uppercase text-white mb-1 tracking-wide">
                Audiovisual & 4K
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-mono">
                Produção de fotos em volume e vídeos em 4K que valorizam cada detalhe do veículo.
              </p>
            </div>
          </div>

          {/* Highlights Metrics Bar */}
          <div className="p-5 rounded-2xl bg-black/60 border border-cyan-500/20 mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">R$ 60.000+</div>
              <div className="text-[11px] text-neutral-400 font-mono uppercase">Verba Operada em Vendas de Carros</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 bg-white/10" />
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100% Digital</div>
              <div className="text-[11px] text-neutral-400 font-mono uppercase">Leads Direto no WhatsApp</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 bg-white/10" />
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">Multi-Plataforma</div>
              <div className="text-[11px] text-neutral-400 font-mono uppercase">Meta, Google & Portal Próprio</div>
            </div>
          </div>

          {/* Big Interactive CTA to https://carros.autolead.site */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://carros.autolead.site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Car className="w-5 h-5" />
              <span>Acessar Portal de Carros (carros.autolead.site)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20ecossistema%20AutoLead%20para%20venda%20de%20carros%20%28@autolead.site%29."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 rounded-2xl transition-all cursor-pointer"
            >
              <span>Conectar Minha Loja ao AutoLead</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          <p className="text-[11px] text-neutral-500 font-mono mt-4">
            Portal oficial: <a href="https://carros.autolead.site" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://carros.autolead.site</a> • Marca e ecossistema @autolead.site
          </p>

        </div>
      </motion.div>
    </section>
  );
}
