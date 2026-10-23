import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Sliders
} from 'lucide-react';
import { TrafegoCalculator } from './components/TrafegoCalculator';
import { Cinema3DBackground } from './components/Cinema3DBackground';

export default function CalculadoraPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090E] text-white font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* 3D Atmosphere Background */}
      <Cinema3DBackground />

      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/85 border-b border-white/10 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo & Agency Title */}
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
              <span className="text-[9px] text-neutral-400 font-mono">VIRTUAL PLACE</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <a href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-neutral-400">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </a>
            <a href="/precos" className="hover:text-cyan-400 transition-colors text-white font-bold flex items-center gap-1 bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg">
              <span>Tabela /precos</span>
            </a>
            <a href="/#portfolio-videos" className="hover:text-cyan-400 transition-colors">
              <span>Portfólio 4K</span>
            </a>
            <a href="/agentes" className="hover:text-purple-400 transition-colors text-purple-300">
              <span>Kit IA</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="/precos"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-cyan-400 transition-all cursor-pointer"
            >
              /precos
            </a>
            <a
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Acessei%20a%20Calculadora%20de%20Tr%C3%A1fego%20Pago%20da%20Virtual%20Place%20e%20gostaria%20de%20um%20planejamento%20de%20campanhas."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Falar com Gestor
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-8 pb-24 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Breadcrumbs */}
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 hover:text-cyan-300 transition-colors px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Voltar para o Início</span>
          </a>

          <div className="text-[11px] font-mono text-neutral-500 hidden sm:block">
            <span>Home</span> <span className="text-neutral-600">/</span> <span className="text-cyan-400 font-bold">Calculadora de Tráfego</span>
          </div>
        </div>

        {/* Hero Banner for Calculator */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider mb-3.5 border bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-md">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>SIMULADOR ESTRATÉGICO • META ADS & GOOGLE ADS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
            Calculadora de Tráfego & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Previsão de Retorno</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Selecione o segmento do seu negócio, regule o orçamento desejado de anúncios e configure seu ticket médio para simular alcance, cliques qualificados, estimativa de leads e projeção de faturamento.
          </p>
        </div>

        {/* The Calculator Component */}
        <div className="mb-14">
          <TrafegoCalculator />
        </div>

        {/* Strategic Methodology Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14 text-left">
          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-black uppercase text-white mb-1.5">Estrutura Profissional</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Configuração avançada de API de Conversões (CAPI), Pixel do Meta, tags de Google Ads e testes A/B contínuos de criativos audiovisuais.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-black uppercase text-white mb-1.5">Sem Falsas Promessas</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Trabalhamos com dados analíticos reais, otimização semanal de CPA (custo por aquisição) e foco na lucratividade líquida da sua operação.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-black uppercase text-white mb-1.5">Sinergia Audiovisual</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Anúncios gravados em 4K e design de alta conversão reduzem drasticamente o custo por clique (CPC) e aumentam a retenção do público.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 text-center shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-2">
            Pronto para colocar as campanhas no ar?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6">
            Converse diretamente com o gestor de tráfego da Virtual Place e conheça também nossa tabela detalhada de serviços.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20de%20tr%C3%A1fego%20pago%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Falar no WhatsApp com o Gestor</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/precos"
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Ver Tabela de Preços (/precos)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-neutral-400 text-xs bg-neutral-950 font-mono relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-agencia.png" 
              alt="AGÊNCIA VIRTUAL PLACE" 
              className="h-8 w-auto object-contain rounded-lg border border-white/10" 
              loading="lazy"
            />
            <span className="font-bold text-white uppercase tracking-wider">VIRTUAL PLACE AGÊNCIA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-neutral-400">
            <a href="/" className="hover:text-cyan-400 transition-colors">Página Inicial</a>
            <a href="/precos" className="text-cyan-400 font-bold hover:underline">Tabela /precos</a>
            <a href="/#portfolio-videos" className="hover:text-cyan-400 transition-colors">Portfólio 4K</a>
            <a href="/agentes" className="hover:text-purple-400 transition-colors">Squads de IA</a>
            <a href="/institucional" className="hover:text-white transition-colors">Institucional</a>
          </div>
          <p className="text-[10px] text-neutral-600">
            © {new Date().getFullYear()} Virtual Place Agência. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
