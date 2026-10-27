import React from 'react';
import { 
  PlayCircle, 
  Star, 
  ChevronRight, 
  Sparkles, 
  Video, 
  Camera, 
  Bot, 
  TrendingUp, 
  Disc3, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Sliders,
  Film,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { BeatPlaceSection } from './components/BeatPlaceSection';
import { StatsAndClients } from './components/StatsAndClients';
import { VideoPortfolioSection } from './components/VideoPortfolioSection';
import { Cinema3DBackground } from './components/Cinema3DBackground';
import { AnimatedDeliveriesHeadline } from './components/AnimatedDeliveriesHeadline';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-white font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* 3D Animated Particle & Lighting Atmosphere */}
      <Cinema3DBackground />

      {/* Top Floating Agency Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/80 border-b border-white/10 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo with 3D Ambient Glow */}
          <a href="/" className="inline-flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-sm group-hover:bg-cyan-500/40 transition-colors" />
              <img 
                src="/logo-agencia.png" 
                alt="AGÊNCIA VIRTUAL PLACE" 
                className="h-10 sm:h-12 w-auto object-contain relative z-10 rounded-xl border border-white/10 shadow-lg group-hover:scale-105 transition-transform" 
                loading="eager"
              />
            </div>
            
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">AGÊNCIA 4K</span>
              <span className="text-[9px] text-neutral-400 font-mono">CREATIVE AGENCY</span>
            </div>
          </a>

          {/* Center Agency Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <a href="#portfolio-videos" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-300">
              <Film className="w-3.5 h-3.5 text-cyan-400" />
              <span>Portfólio 4K</span>
            </a>
            <a href="/precos" className="hover:text-cyan-400 transition-colors text-cyan-400 font-bold flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
              <span>Tabela /precos</span>
            </a>
            <a href="/calculadora" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-neutral-300">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calculadora Tráfego</span>
            </a>
            <a href="/agentes" className="hover:text-purple-400 transition-colors flex items-center gap-1 text-purple-300">
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>Kit IA & Obsidian</span>
            </a>
            <a href="https://bplace-five.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">
              <span>Beat Place</span>
              <ArrowUpRight className="w-3 h-3 text-pink-400" />
            </a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">Resultados</a>
          </nav>

          {/* Action Button: WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Agency Status Pill */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>4K DISPONÍVEL</span>
            </div>

            <a
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Virtual%20Place%20e%20gostaria%20de%20um%20atendimento%20para%20produ%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 pb-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>PRODUÇÃO 4K • POST EM ALTA QUALIDADE</span>
        </motion.div>

        {/* Master Animated Headline with rotating deliverables */}
        <AnimatedDeliveriesHeadline />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Soluções completas em produção audiovisual 4K, fotografia em alta escala, assessoria estratégica de tráfego pago, squads de inteligência artificial, talentos freelas, DJs para eventos, design profissional e sites de alta conversão.
        </motion.p>

        {/* 4K Cinema Monitor Frame with Live Interactive Video Portfolio */}
        <motion.div
          id="portfolio-videos"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="scroll-mt-24 mb-14"
        >
          <VideoPortfolioSection embedded={true} initialVideoId="BXAlAHQZ0Nw" />
        </motion.div>

        {/* Agency 4 Pillars Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-14 text-left">
          {[
            {
              icon: Video,
              title: '4K + Post Alta Qualidade',
              sub: 'Stories na hora • Aftermovie',
              color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40'
            },
            {
              icon: Camera,
              title: 'Fotografia em Volume',
              sub: 'Milhares de fotos / evento',
              color: 'text-amber-400 bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40'
            },
            {
              icon: Bot,
              title: 'Squads de IA',
              sub: 'Troque funcionários p/ robôs',
              color: 'text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40'
            },
            {
              icon: TrendingUp,
              title: 'Tráfego Pago',
              sub: 'Campanhas & Escala Digital',
              color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40'
            }
          ].map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 group transition-all ${item.color.split(' ').pop()}`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color.split(' ').slice(0, 3).join(' ')}`}>
                  <ItemIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-white">{item.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{item.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Hero Button: WhatsApp */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a 
            href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Virtual%20Place."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Chamar no WhatsApp</span>
            <ChevronRight className="w-5 h-5 text-black" />
          </a>
        </motion.div>

        {/* SIMULADOR DE TRÁFEGO PAGO (Botão & Card para /calculadora) */}
        <motion.div 
          id="calculadora-trafego" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 scroll-mt-24"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>Simulador Estratégico Interativo</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-3">
                Calculadora de Tráfego Pago & Retorno
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                Simule seu orçamento em anúncios, alcance estimado, leads qualificados e potencial de retorno para o segmento do seu negócio em uma página exclusiva.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Projeção por Nicho</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Meta & Google Ads</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Dados Analíticos Reais</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href="/calculadora"
                className="px-7 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] transition-all cursor-pointer text-center"
              >
                <Sliders className="w-4 h-4 text-black" />
                <span>Abrir Calculadora de Tráfego</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* BEAT PLACE - Agência de Festas e DJs */}
        <div className="mb-24">
          <BeatPlaceSection />
        </div>

        {/* Estatísticas e Empresas Trabalhadas */}
        <div id="cases" className="mb-24">
          <StatsAndClients />
        </div>

        {/* Depoimento & Resultados do Cliente */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-20 text-left"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl relative">
            {/* Header: Cliente e Estrelas (Sem texto falso e sem citar nome pessoal) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-black text-cyan-400 text-xl shadow-inner shrink-0">
                  PP
                </div>
                <div>
                  <h4 className="font-black text-white text-lg uppercase tracking-tight">Português Play</h4>
                  <p className="text-sm text-cyan-400 font-mono font-semibold">@portuguesplay</p>
                </div>
              </div>

              {/* 5 Estrelas */}
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/60 border border-neutral-800 self-start sm:self-auto">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Métricas Reais de Lançamentos com este Cliente */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-colors text-center">
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight mb-1">
                  +10
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-200 uppercase leading-snug">
                  Campanhas de Marketing
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">
                  Lançamentos de cursos e livros com este cliente
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-colors text-center">
                <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono tracking-tight mb-1">
                  6 em 3
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-200 uppercase leading-snug">
                  100k em 3 Dias
                </div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">
                  Lançamento 6 dígitos (R$ 100 mil) em 3 dias
                </div>
              </div>
            </div>
          </div>

          {/* Vídeo do Depoimento */}
          <div className="mt-8 rounded-3xl overflow-hidden bg-black shadow-2xl border border-neutral-800 aspect-video relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/QW9InbF3eZE?autoplay=0&rel=0"
              title="Depoimento - Português Play"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-neutral-500 mt-3 text-center flex items-center justify-center gap-1.5 font-mono">
            <PlayCircle className="w-4 h-4 text-cyan-400" /> Depoimento Oficial — Português Play
          </p>
        </motion.div>

      </main>

      {/* Agency Footer */}
      <footer className="py-14 border-t border-white/10 text-center text-neutral-400 text-xs bg-neutral-950 font-mono relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-agencia.png" 
              alt="AGÊNCIA VIRTUAL PLACE" 
              className="h-9 w-auto object-contain rounded-lg border border-white/10 mx-auto" 
              loading="lazy"
            />
            <span className="font-bold text-white uppercase tracking-wider">VIRTUAL PLACE AGÊNCIA</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-neutral-400">
            <a href="/precos" className="text-cyan-400 font-bold hover:underline">Tabela de Preços (/precos)</a>
            <a href="/calculadora" className="hover:text-cyan-400 transition-colors">Calculadora Tráfego</a>
            <a href="#portfolio-videos" className="hover:text-cyan-400 transition-colors">Portfólio 4K</a>
            <a href="/agentes" className="hover:text-cyan-400 transition-colors">Kit IA & Obsidian</a>
            <a href="/institucional" className="hover:text-white transition-colors">Institucional</a>
            <a href="https://bplace-five.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Beat Place</a>
            <a href="https://wa.me/5549991052315" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Suporte VIP WhatsApp</a>
          </div>

          <p className="text-neutral-600 text-[10px]">
            © {new Date().getFullYear()} Agência Virtual Place. Todos os direitos reservados. Produção Audiovisual 4K & Inteligência Digital.
          </p>
        </div>
      </footer>
    </div>
  );
}
