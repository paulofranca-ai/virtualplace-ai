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
  Sliders
} from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES } from './data/services';
import { BeatPlaceSection } from './components/BeatPlaceSection';
import { StatsAndClients } from './components/StatsAndClients';
import { StudioMonitorVideo } from './components/StudioMonitorVideo';
import { Cinema3DBackground } from './components/Cinema3DBackground';
import { AgenciaLogo } from './components/AgenciaLogo';
import { TrafegoCalculator } from './components/TrafegoCalculator';

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
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <a href="#planos" className="hover:text-cyan-400 transition-colors">Serviços 4K</a>
            <a href="#calculadora-trafego" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-300">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calculadora Tráfego</span>
            </a>
            <a href="/precos" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>Tabela Completa</span>
              <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded">PRO</span>
            </a>
            <a href="https://bplace-five.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">
              <span>Beat Place</span>
              <ArrowUpRight className="w-3 h-3 text-pink-400" />
            </a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">Resultados</a>
          </nav>

          {/* Direct WhatsApp VIP Button */}
          <div className="flex items-center gap-3">
            {/* Live Agency Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AGÊNCIA ATIVA • PRODUÇÕES 4K DISPONÍVEIS</span>
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
          <span>A MELHOR ENTREGA DA REGIÃO COM ORÇAMENTOS ACESSÍVEIS • 4K + POST EM ALTA QUALIDADE</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.15] uppercase tracking-tight max-w-4xl mx-auto bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent"
        >
          A internet é um lugar virtual. Nossa missão nela, é criar marcas e dar vida a elas, impulsionadas por tecnologia e criatividade humana.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          A melhor entrega da região com orçamentos acessíveis: produção audiovisual 4K + post em alta qualidade, fotografia em volume com milhares de fotos por evento, squads de IA para automatizar tarefas e tráfego pago com ROI 7,3x comprovado em mais de 100k de vendas.
        </motion.p>

        {/* 4K Cinema Monitor Frame with Live Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StudioMonitorVideo 
            youtubeUrl="https://www.youtube.com/embed/SSwGhh99DOc?autoplay=0&rel=0"
            title="Apresentação Oficial Virtual Place 4K"
          />
        </motion.div>

        {/* Agency 4 Pillars Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-14 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 group hover:border-cyan-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white">4K + Post Alta Qualidade</div>
              <div className="text-[10px] text-neutral-400 font-mono">Stories na hora • Aftermovie</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 group hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white">Fotografia em Volume</div>
              <div className="text-[10px] text-neutral-400 font-mono">Milhares de fotos / evento</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 group hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white">Squads de IA</div>
              <div className="text-[10px] text-neutral-400 font-mono">Troque funcionários p/ robôs</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 group hover:border-emerald-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white">Tráfego: R$ 1.500</div>
              <div className="text-[10px] text-neutral-400 font-mono">ROI 7,3x em 100k de vendas</div>
            </div>
          </div>
        </div>

        {/* CTA Hero Button */}
        <div className="mb-20">
          <a 
            href="#planos"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 text-base sm:text-lg font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Zap className="w-5 h-5 text-black fill-black" />
            <span>Explorar Serviços & Soluções 4K</span> 
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Nossos Planos & Serviços (3D Interactive Tilt Cards) */}
        <div id="planos" className="scroll-mt-24 pt-4 mb-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 rounded-full">
              Catálogo de Soluções 4K & Estratégia
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4">
              Nossos Planos & Serviços
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              A melhor entrega da região com orçamentos acessíveis. Produção audiovisual 4K + post em alta qualidade, fotografia em volume com milhares de fotos por evento, artes por R$ 100, squads de IA e tráfego pago por R$ 1.500.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Banner Tabela Completa */}
          <div className="mt-10 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <h4 className="text-lg font-black text-white uppercase tracking-tight">
                Quer ver a Tabela Completa com todos os preços e opções?
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Consulte valores detalhados por projeto, por evento, artes por R$ 100 e tráfego pago de R$ 1.500 com redes limitadas apenas pela verba.
              </p>
            </div>
            <a
              href="/precos"
              className="px-6 py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Ver Tabela Completa</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* SIMULADOR DE TRÁFEGO PAGO & PREVISÃO DE RETORNO */}
        <div className="mb-24">
          <TrafegoCalculator />
        </div>

        {/* BEAT PLACE - Agência de Festas e DJs */}
        <div className="mb-24">
          <BeatPlaceSection />
        </div>

        {/* Estatísticas e Empresas Trabalhadas */}
        <div id="cases" className="mb-24">
          <StatsAndClients />
        </div>

        {/* Depoimento Léo & Vídeo de Resultados 4K */}
        <div className="max-w-3xl mx-auto mb-20 text-left">
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl relative">
            <div className="absolute -top-5 left-10">
              <div className="flex gap-1 bg-black p-2 rounded-xl shadow-md border border-neutral-800">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <p className="text-neutral-200 text-lg sm:text-xl font-medium italic mt-4 mb-8 leading-relaxed">
              "Eu recomendo o trabalho do Paulo, gestor de tráfego. Tivemos ROI de 7,3x comprovado em mais de 100k de vendas de cursos com alta lucratividade, margem e escala contínua."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-black text-cyan-400 text-xl shadow-inner">
                L
              </div>
              <div>
                <h4 className="font-black text-white text-lg uppercase tracking-tight">Léo</h4>
                <p className="text-sm text-neutral-400 font-mono">Cliente Especialista & Infoprodutor (Case 100k • ROI 7,3x)</p>
              </div>
            </div>
          </div>

          {/* Vídeo do Depoimento no frame 4K */}
          <div className="mt-8 rounded-3xl overflow-hidden bg-black shadow-2xl border border-neutral-800 aspect-video relative">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2 text-[10px] font-mono text-cyan-400 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>PRODUÇÃO & RESULTADOS REAIS</span>
            </div>
            <iframe
              className="absolute inset-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/QW9InbF3eZE?autoplay=0&rel=0"
              title="Depoimento e Resultados de Lançamento"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-neutral-500 mt-3 text-center flex items-center justify-center gap-1.5 font-mono">
            <PlayCircle className="w-4 h-4 text-cyan-400" /> Assista aos bastidores e resultados com a nossa agência
          </p>
        </div>

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
            <a href="#planos" className="hover:text-white transition-colors">Serviços 4K</a>
            <a href="/precos" className="hover:text-white transition-colors">Tabela de Preços</a>
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
