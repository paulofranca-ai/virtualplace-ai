import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Brain, 
  MousePointerClick, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Mail, 
  Phone, 
  User, 
  Building, 
  TrendingUp, 
  Target, 
  PlayCircle, 
  Car, 
  Award, 
  Instagram, 
  Shield, 
  Clock, 
  Zap, 
  Plus, 
  Minus, 
  X, 
  Briefcase, 
  Camera, 
  Video, 
  MapPin, 
  Utensils, 
  Ticket, 
  Layers, 
  Calculator, 
  Sparkles,
  FileText,
  ArrowDownToLine,
  Check,
  Copy,
  ChevronRight,
  AlertCircle,
  MessageSquare,
  Smartphone,
  Scissors,
  Bot,
  Terminal,
  FolderCheck,
  Code
} from 'lucide-react';
import { supabase } from './lib/supabase';
import NeonBackground3D from './components/NeonBackground3D';

export default function SalesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkoutStatus = searchParams.get('checkout_status');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const faqs = [
    { 
      q: "O que é o Cérebro de IA do ParadoxTeam?", 
      a: "É uma arquitetura com mais de 30 agentes especializados e arquivos de personas/regras prontas. Inclui tutorial completo em vídeo e scripts para plugar no Claude Code, AntiGravity, Cursor, VSCode e terminais." 
    },
    { 
      q: "Como funciona a instalação no Claude Code e AntiGravity?", 
      a: "Você recebe o repositório organizado com arquivos .systemrules, prompts de alta precisão e scripts de inicialização rápida. Em menos de 5 minutos seu terminal está configurado." 
    },
    { 
      q: "Como funcionam os Serviços de Marketing Remotos?", 
      a: "Nossa equipe gerencia suas campanhas no Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads, além de estruturar copy persuasivo e funis de automação integrados à IA. 100% remoto com acompanhamento diário." 
    },
    { 
      q: "Como posso orçar a Produção Audiovisual Sob Demanda?", 
      a: "Oferecemos captação 4K com câmeras e drone no local, cobertura fotográfica de eventos e edição avulsa de vídeos com IA e efeitos visuais. Fale diretamente no WhatsApp para receber nossa tabela ou orçamento sob medida." 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden">
      <NeonBackground3D />
      
      {/* Cyber Matrix Scanlines Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      {checkoutStatus && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`p-4 rounded-xl border flex items-start gap-3 shadow-2xl backdrop-blur-md ${
              checkoutStatus === 'success' 
                ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-100' 
                : 'bg-rose-950/90 border-rose-500/50 text-rose-100'
            }`}
          >
            <div className="mt-0.5">
              {checkoutStatus === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <X className="w-5 h-5 text-rose-400 shrink-0" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm font-mono">
                {checkoutStatus === 'success' ? 'PAGAMENTO APROVADO!' : 'PAGAMENTO CANCELADO'}
              </h4>
              <p className="text-xs opacity-90 mt-1">
                {checkoutStatus === 'success' 
                  ? 'Acesso liberado ao ParadoxTeam! Prepare-se para colher resultados.' 
                  : 'A transação foi cancelada. Volte a qualquer momento.'}
              </p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-3 text-xs font-semibold underline opacity-80 hover:opacity-100 cursor-pointer text-white font-mono"
              >
                [ENTENDIDO]
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* 1. Header Navigation Bar (Hacker Matrix Style) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="shrink-0 flex items-center gap-3">
            <img 
              src="https://i.imgur.com/w2iO5CR.png" 
              alt="Virtual Place Logo" 
              className="h-16 md:h-20 w-auto object-contain brightness-110" 
              referrerPolicy="no-referrer" 
            />
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black border border-gray-800 font-mono text-[10px] text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>CORE_ONLINE: 3 SOLUÇÕES ATIVAS</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a 
              href="/agentes"
              className="px-3.5 py-2 rounded-xl bg-black hover:bg-gray-900 text-white font-mono font-bold text-xs uppercase tracking-tight transition-all shadow-[0_0_15px_rgba(0,255,102,0.15)] flex items-center gap-1.5 border border-emerald-500/40 hover:border-emerald-400 whitespace-nowrap"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Cérebro IA (30+ Agentes)
            </a>
            <a 
              href="/precos"
              className="text-xs font-mono font-semibold text-gray-400 hover:text-white uppercase tracking-tight hidden sm:inline-block transition-colors px-2 py-1"
            >
              /Preços
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20consultor."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs uppercase tracking-tight transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section (Ultra Succinct, Dark Noir & Matrix Green) */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-black border border-gray-800 font-mono text-[11px] text-gray-300 uppercase tracking-widest shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-white font-bold">ESTRUTURA DE ALTA CONVERSÃO & PERFORMANCE</span>
          </div>
          
          {/* Headline - Direct & Punchy */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-white leading-tight uppercase font-sans tracking-tight max-w-4xl mx-auto">
            Cérebro de IA com Tutorial, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-gray-400">
              Marketing Remoto & Audiovisual
            </span>.
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
            Três frentes integradas para acelerar suas vendas: <strong>(1) Cérebro de IA (30+ agentes) com tutorial de instalação para Claude Code & AntiGravity</strong>, <strong>(2) Serviços de Marketing Remotos de alta conversão</strong> e <strong>(3) Produção Audiovisual sob demanda</strong> (gravação 4K, fotografia e edição).
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center max-w-2xl mx-auto mb-12">
            <a 
              href="/agentes"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs sm:text-sm uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-black" /> Cérebro IA + Tutorial (R$ 197 / R$ 997)
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20or%C3%A7ar%20servi%C3%A7os%20de%20Marketing%20Remoto%20ou%20Audiovisual." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black hover:bg-gray-900 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-mono font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,255,102,0.15)] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Orçar Marketing & Audiovisual
            </a>
          </div>

          {/* Video Showcase (Aftermovie) */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="p-1 rounded-2xl bg-gradient-to-r from-gray-800 via-emerald-500/40 to-gray-800 shadow-[0_0_40px_rgba(0,255,102,0.1)]">
              <div className="rounded-xl overflow-hidden aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZtC7aKaTD5w?autoplay=0&rel=0"
                  title="Portfólio de Alta Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-[11px] font-mono text-gray-500 mt-3 flex items-center justify-center gap-1.5">
              <PlayCircle className="w-3.5 h-3.5 text-emerald-400" /> Assista nosso Aftermovie & produção audiovisual de alta definição
            </p>
          </div>

        </div>
      </section>

      {/* 3. OS 3 PILARES PRINCIPAIS (O QUE FAÇO & VENDO) */}
      <section className="py-20 bg-black border-b border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              [ 03 SOLUÇÕES ESSENCIAIS ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight">
              O Que Entregamos Para Sua Empresa
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-2 text-xs sm:text-sm">
              Sem burocracia ou termos complexos: escolha o que precisa e ative sua operação hoje.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* PILAR 1: CÉREBRO DE IA + TUTORIAL */}
            <div className="p-7 rounded-2xl bg-[#060911] border-2 border-emerald-500/40 hover:border-emerald-400 transition-all flex flex-col justify-between group shadow-[0_0_30px_rgba(0,255,102,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <span className="text-[9px] font-mono font-bold uppercase text-black bg-emerald-400 px-3 py-1 rounded-bl-xl">
                  HOT // DOWNLOAD
                </span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  1. Cérebro de IA + Tutorial
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Esquadrão completo de <strong>30+ Agentes Especializados</strong> (Marketing, Vendas, Design, Devs, Segurança e CFO) com <strong>tutorial passo a passo de instalação</strong> para Claude Code, AntiGravity, Cursor e Terminais.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 font-mono text-[11px] text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Tutorial em vídeo & scripts para terminal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instalação Claude Code & AntiGravity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>30+ Agentes com personas e .systemrules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Acesso vitalício no Kiwify (R$ 197 / R$ 997)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a 
                  href="/agentes#planos"
                  className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] cursor-pointer text-center"
                >
                  <Zap className="w-3.5 h-3.5 text-black" /> Acessar Cérebro & Planos
                </a>
              </div>
            </div>

            {/* PILAR 2: MARKETING REMOTO */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-gray-600 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  2. Marketing Remoto
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Gestão estratégica de tráfego pago (Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads), Branding, Copywriting e Funis de Vendas automatizados. Operação 100% remota para acelerar seu faturamento.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 font-mono text-[11px] text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Campanhas no Meta, Google & TikTok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Posicionamento de Branding & Escala</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Copywriting de alta conversão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Otimização diária e relatórios semanais</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20Servi%C3%A7os%20de%20Marketing%20Remotos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" /> Contratar Marketing
                </a>
              </div>
            </div>

            {/* PILAR 3: AUDIOVISUAL SOB DEMANDA */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-gray-600 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-white">
                  <Video className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  3. Audiovisual Sob Demanda
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Produção audiovisual completa: gravação no local (Videomaker 4K, Drone), Fotografia profissional para eventos/marcas e Edição de vídeo (Cortes, Legendas, VFX e Narração com IA).
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 font-mono text-[11px] text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Gravação presencial 4K & Drone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Fotografia em alta resolução tratada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Edição avulsa (Simples, IA e VFX)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Cobertura de feiras, palestras e aftermovies</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20or%C3%A7ar%20Audiovisual%20Sob%20Demanda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-black hover:bg-gray-900 border border-gray-700 hover:border-white text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Orçar Audiovisual
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMPARATIVO SUCCINTO: SEM ESTRUTURA vs COM NOSSA ESTRUTURA */}
      <section className="py-16 bg-black border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase">
              Operação Convencional vs Nosso Ecossistema
            </h3>
            <p className="text-gray-400 text-xs mt-1">Velocidade, economia de tempo e escala instantânea.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#060911] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs">
              <thead>
                <tr className="border-b border-gray-800 bg-black text-[11px] font-mono">
                  <th className="p-4 uppercase text-gray-400">Atividade</th>
                  <th className="p-4 uppercase text-red-400">Sem Nós (Manual / Lento)</th>
                  <th className="p-4 uppercase text-emerald-400">Com Nosso Ecossistema</th>
                  <th className="p-4 uppercase text-white text-right">Ganho</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="p-4 font-bold text-white">Setup de Agentes & Automações</td>
                  <td className="p-4 text-gray-400">Semanas configurando prompts soltos</td>
                  <td className="p-4 text-emerald-300 font-mono">Minutos com tutorial Claude/AntiGravity</td>
                  <td className="p-4 text-right font-mono font-bold text-white">Imediato</td>
                </tr>
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="p-4 font-bold text-white">Anúncios & Gestão de Tráfego</td>
                  <td className="p-4 text-gray-400">Dinheiro queimado sem segmentação</td>
                  <td className="p-4 text-emerald-300 font-mono">Otimização diária focada em ROI</td>
                  <td className="p-4 text-right font-mono font-bold text-white">Alta Conversão</td>
                </tr>
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="p-4 font-bold text-white">Produção Audiovisual & Edição</td>
                  <td className="p-4 text-gray-400">Dias esperando cortes e tratamento</td>
                  <td className="p-4 text-emerald-300 font-mono">Entrega rápida com padrão 4K e VFX</td>
                  <td className="p-4 text-right font-mono font-bold text-white">10x Mais Ágil</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. PROVA SOCIAL & CASES */}
      <section className="py-16 bg-black border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/30">
                RESULTADOS REAIS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
                Métricas & Retorno Comprovado
              </h3>
            </div>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Quero%20conhecer%20mais%20cases%20de%20sucesso."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-400 hover:text-emerald-400 flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <span>Ver mais no WhatsApp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={`res-${num}`}
                className="rounded-xl overflow-hidden border border-gray-800 bg-[#060911] cursor-pointer group hover:border-emerald-500/50 transition-all"
                onClick={() => setSelectedImage(`/Resultados${num}.png`)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={`/Resultados${num}.png`}
                    alt={`Resultado ${num}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <span className="text-[9px] font-mono font-bold uppercase text-emerald-400 bg-black/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      Case #{num}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ DIRETO E SUCCINTO */}
      <section className="py-16 bg-black border-b border-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono font-bold uppercase text-gray-400">
              DÚVIDAS FREQUENTES
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
              Perguntas e Respostas
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl bg-[#060911] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-900/30 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-white pr-4">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-4 h-4 text-emerald-400 shrink-0" /> : <Plus className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-gray-400 leading-relaxed border-t border-gray-800/80 pt-3 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BARRA FINAL DE CONVERSÃO RÁPIDA */}
      <section className="py-16 bg-black text-center relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#060911] border border-gray-800 relative overflow-hidden shadow-2xl">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
              [ INÍCIO IMEDIATO ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
              Pronto Para Escalar Seu Negócio?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
              Adquira o cérebro com tutorial de instalação agora ou fale conosco pelo WhatsApp para orçar marketing e audiovisual.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="/agentes#planos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Comprar Cérebro IA (R$ 197)
              </a>
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20consultor."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-[0_0_20px_rgba(0,255,102,0.2)]"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-900 text-center text-gray-500 text-xs bg-black font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/agentes" className="text-emerald-400 hover:underline">/Cérebro_IA</a>
            <span className="text-gray-700">|</span>
            <a href="/precos" className="text-gray-400 hover:text-white">/Tabela_Preços</a>
            <span className="text-gray-700">|</span>
            <a href="/loja" className="text-gray-400 hover:text-white">/Humanos</a>
            <span className="text-gray-700">|</span>
            <a href="/jobs" className="text-gray-400 hover:text-white">/Seja_Freela</a>
          </div>
          <p className="text-gray-600 text-[11px]">PARADOXTEAM & VIRTUAL PLACE // TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </footer>

      {/* Image Modal for Results */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/95 p-4 overflow-y-auto cursor-zoom-out"
          onClick={() => {
            setSelectedImage(null);
            setIsZoomed(false);
          }}
        >
          <img 
            src={selectedImage} 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.png')) {
                target.src = target.src.replace('.png', '.jpg');
              }
            }}
            alt="Resultado" 
            className={`transition-all duration-300 ${isZoomed ? 'w-full max-w-none cursor-zoom-out' : 'w-full max-w-5xl cursor-zoom-in'} h-auto object-contain mt-10 mb-10 rounded-xl shadow-2xl`}
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
          />
          <button 
            className="fixed top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/90 transition-colors z-[60]"
            onClick={() => {
              setSelectedImage(null);
              setIsZoomed(false);
            }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
