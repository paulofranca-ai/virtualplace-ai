import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Zap, 
  Plus, 
  Minus, 
  X, 
  Camera, 
  Video, 
  Sparkles,
  Check,
  ChevronRight,
  MessageSquare,
  Smartphone,
  Scissors,
  Terminal,
  Palette,
  Mic,
  Clapperboard,
  Type,
  ShoppingBag,
  Globe2,
  Users,
  ShieldCheck,
  PlayCircle,
  Database,
  GraduationCap,
  Layers,
  Settings,
  Bot
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function SalesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkoutStatus = searchParams.get('checkout_status');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const faqs = [
    { 
      q: "Como a Consultoria em IA e a Instalação de CRM ajudam minha empresa?", 
      a: "Analisamos o funcionamento do seu negócio e implementamos agentes de IA para automatizar tarefas demoradas, além de configurar um CRM moderno no seu WhatsApp para que nenhum cliente fique sem resposta e sua equipe venda muito mais." 
    },
    { 
      q: "Como funciona o Treinamento de Equipe Interna?", 
      a: "Capacitamos seus colaboradores de forma 100% prática (online ou presencial). Ensinamos seu time a operar o CRM com agilidade e a usar ferramentas de IA generativa para acelerar o atendimento, produção e tarefas diárias." 
    },
    { 
      q: "Como funciona a contratação de Vídeos, Artes e Audiovisual?", 
      a: "Você escolhe o que precisa (artes para redes sociais, criativos de anúncios, ou vídeos com edição profissional ou gravação presencial com nossa equipe). Todos os vídeos contam com opcionais de IA, Efeitos Especiais (VFX), Cinema, Narração e Lettering. Você recebe um orçamento personalizado rápido no WhatsApp." 
    },
    { 
      q: "Sou infoprodutor ou especialista. O que oferecem para lançamentos?", 
      a: "Temos a experiência de Coprodução 6 em 7 (com mais de 23 lançamentos executados no mercado digital gerando lançamentos acima de R$ 100 mil em 7 dias). Cuidamos da estratégia, tráfego pago em escala, VSLs, criativos de alta conversão, automações e disponibilizamos o nosso Cérebro de IA com 30+ agentes." 
    },
    { 
      q: "Como funciona o Cérebro de IA do ParadoxTeam (Squad Jarvis)?", 
      a: "É o único produto do nosso catálogo com valor pré-fixado: R$ 197,00 em pagamento único via Kiwify. Você recebe acesso imediato a 30+ agentes prontos (Marketing, Vendas, Programação, Finanças e Segurança) acompanhado de vídeo tutorial passo a passo super fácil para Claude Code, AntiGravity, Cursor e terminais." 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden">
      <NeonBackground3D />
      
      {/* Cyber Subtle Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      {/* Checkout Alert */}
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
                {checkoutStatus === 'success' ? 'PAGAMENTO APROVADO COM SUCESSO!' : 'PAGAMENTO CANCELADO'}
              </h4>
              <p className="text-xs opacity-90 mt-1">
                {checkoutStatus === 'success' 
                  ? 'Você já tem acesso liberado ao Cérebro de IA e aos materiais!' 
                  : 'A transação foi cancelada. Caso precise de ajuda, nos chame no WhatsApp.'}
              </p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-3 text-xs font-semibold underline opacity-80 hover:opacity-100 cursor-pointer text-white font-mono"
              >
                [Fechar Aviso]
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* 1. Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="shrink-0 flex items-center gap-3">
            <a href="/">
              <img 
                src="https://i.imgur.com/w2iO5CR.png" 
                alt="Virtual Place Logo" 
                className="h-12 md:h-16 w-auto object-contain brightness-110" 
                referrerPolicy="no-referrer" 
              />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
              <Award className="w-3 h-3 text-emerald-400" />
              <span>COPRODUTOR 6 EM 7 • +23 LANÇAMENTOS EXECUTADOS</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a 
              href="/agentes"
              className="px-3.5 py-2 rounded-xl bg-black hover:bg-gray-900 text-white font-mono font-bold text-xs uppercase tracking-tight transition-all shadow-[0_0_15px_rgba(0,255,102,0.15)] flex items-center gap-1.5 border border-emerald-500/40 hover:border-emerald-400 whitespace-nowrap"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Cérebro IA (R$ 197)
            </a>
            <a 
              href="/precos"
              className="text-xs font-semibold text-gray-300 hover:text-emerald-400 uppercase tracking-tight transition-colors px-2 py-1"
            >
              Serviços & Soluções
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20solicitar%20um%20or%C3%A7amento%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase tracking-tight transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" /> WhatsApp Direto
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section (Clear, Punchy & High Authority) */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Authority Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] sm:text-xs text-emerald-300 uppercase tracking-wider font-semibold shadow-2xl">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Coprodutor 6 em 7 • Mais de 23 Lançamentos Executados</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-white leading-tight uppercase font-sans tracking-tight max-w-4xl mx-auto">
            Mais Vendas, Eficiência e Escala: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-gray-300">
              Consultoria IA, CRM, Vídeos & Tráfego
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Seja você um <strong>comércio local</strong> que deseja lotar a agenda, uma <strong>empresa</strong> buscando instalar CRM e automatizar com IA, ou um <strong>infoprodutor</strong> escalando faturamentos no Brasil e no mundo: entregamos soluções completas sem burocracia.
          </p>

          {/* Core Services Highlights Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 max-w-5xl mx-auto mb-10 text-left">
            <div className="p-3 rounded-xl bg-[#060911] border border-gray-800 hover:border-emerald-500/40 transition-colors">
              <Brain className="w-4 h-4 text-emerald-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Consultoria IA</span>
              <span className="text-[9px] text-gray-400">Automações & Processos</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060911] border border-gray-800 hover:border-cyan-500/40 transition-colors">
              <Database className="w-4 h-4 text-cyan-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Instalação CRM</span>
              <span className="text-[9px] text-gray-400">Funil & WhatsApp</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060911] border border-gray-800 hover:border-purple-500/40 transition-colors">
              <GraduationCap className="w-4 h-4 text-purple-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Treinamento</span>
              <span className="text-[9px] text-gray-400">Capacitação do Time</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060911] border border-gray-800 hover:border-cyan-500/40 transition-colors">
              <Video className="w-4 h-4 text-cyan-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Audiovisual</span>
              <span className="text-[9px] text-gray-400">Vídeos & Opcionais IA</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060911] border border-gray-800 hover:border-blue-500/40 transition-colors">
              <TrendingUp className="w-4 h-4 text-blue-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Tráfego 6 em 7</span>
              <span className="text-[9px] text-gray-400">+23 Lançamentos</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060911] border border-purple-500/40 bg-purple-950/20">
              <Terminal className="w-4 h-4 text-purple-400 mb-1.5" />
              <span className="text-[11px] font-bold text-white block">Squad Jarvis</span>
              <span className="text-[9px] text-purple-300 font-mono">R$ 197 Vitalício</span>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center max-w-2xl mx-auto mb-12">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20para%20minha%20empresa." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs sm:text-sm uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(0,255,102,0.3)] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-black" /> Falar com Especialista no WhatsApp
            </a>
            <a 
              href="/precos"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#060911] hover:bg-gray-900 border border-gray-700 text-white font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4 text-emerald-400" /> Ver Todos os Serviços & Soluções
            </a>
          </div>

          {/* Video Showcase (Portfolio Reel) */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="p-1 rounded-2xl bg-gradient-to-r from-gray-800 via-emerald-500/30 to-gray-800 shadow-[0_0_40px_rgba(0,255,102,0.1)]">
              <div className="rounded-xl overflow-hidden aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZtC7aKaTD5w?autoplay=0&rel=0"
                  title="Portfólio de Alta Definição"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
              <PlayCircle className="w-4 h-4 text-emerald-400" /> Assista ao vídeo de apresentação e qualidade das nossas produções
            </p>
          </div>

        </div>
      </section>

      {/* 3. QUEM ATENDEMOS (PÚBLICOS-ALVO) */}
      <section className="py-20 bg-[#060911] border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              ATENDIMENTO PERSONALIZADO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight">
              Soluções Desenhadas Para o Seu Momento
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-2 text-xs sm:text-sm">
              Desde comércios físicos que precisam de clientes diários até empresas e infoprodutores estruturando operações avançadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD A: Negócios & Cidades Pequenas */}
            <div className="p-8 rounded-2xl bg-black border border-gray-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>

                <div className="inline-block text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded mb-2">
                  Negócios Físicos, Lojas & Prestadores de Serviço
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-3">
                  Comércios, Clínicas & Pequenas Empresas
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Transforme seu Instagram e WhatsApp em um canal ativo de vendas diárias. Criamos artes e vídeos de impacto, instalamos CRM para organizar seus contatos e gerenciamos anúncios locais direcionados para a sua cidade.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-gray-300 border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Artes profissionais para posts de Instagram, banners e promoções</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Vídeos gravados no seu comércio ou editados com dinamismo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instalação de CRM com WhatsApp multiatendimento para sua equipe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Anúncios locais para fazer moradores da região irem comprar de você</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Tenho%20um%20com%C3%A9rcio%2Fneg%C3%B3cio%20local%20e%20gostaria%20de%20uma%20proposta%20sob%20medida."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-black" /> Impulsionar Meu Negócio no WhatsApp
              </a>
            </div>

            {/* CARD B: Infoprodutores & Empresas Escaláveis */}
            <div className="p-8 rounded-2xl bg-black border border-gray-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
                  <Globe2 className="w-6 h-6" />
                </div>

                <div className="inline-block text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded mb-2">
                  Infoprodutores, Mentores & Operações B2B
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-3">
                  Coprodução 6 em 7, Consultoria em IA & Escala
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Para operações que buscam alta performance: estratégias comprovadas de lançamento (+23 lançamentos executados / múltiplos 6 em 7 acima de R$ 100k em 7 dias), consultoria de processos com IA, treinamento de time e VSLs cinematográficas.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-gray-300 border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Coprodução validada em mais de 23 lançamentos reais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Consultoria em IA para automação de atendimento e processos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Treinamento prático da equipe comercial e operacional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Vídeos com Efeitos Especiais (VFX), IA, Cinema, Locução e Lettering</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Sou%20infoprodutor%2Fempresa%20e%20gostaria%20de%20conversar%20sobre%20Consultoria%2C%20Coprodu%C3%A7%C3%A3o%20e%20Escala."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center"
              >
                <Rocket className="w-4 h-4 text-black" /> Conversar Sobre Coprodução & IA
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CARDÁPIO COMPLETO DE SERVIÇOS (COM BOTÕES PARA WHATSAPP) */}
      <section className="py-20 bg-black border-b border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              CARDÁPIO COMPLETO DE SOLUÇÕES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 uppercase tracking-tight">
              O Que Podemos Fazer Pela Sua Empresa
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-2 text-xs sm:text-sm">
              Propostas sob medida com entrega rápida e atendimento humanizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* SERVIÇO 1: CONSULTORIA EM IA */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-emerald-400">
                  <Brain className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Consultoria em IA
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Automação
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Mapeamos gargalos e implementamos inteligência artificial para automatizar atendimentos, geração de conteúdos e rotinas manuais da sua empresa.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Diagnóstico de processos e automações viáveis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Integração de agentes autônomos no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Redução drástica de tempo operacional da equipe</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Consultoria%20em%20IA%20na%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" /> Solicitar Consultoria
                </a>
              </div>
            </div>

            {/* SERVIÇO 2: VENDA E INSTALAÇÃO DE CRM */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-cyan-400">
                  <Database className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Venda & Instalação de CRM
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    Vendas
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Estruturação completa de funil de vendas, WhatsApp multiatendente no mesmo número e mensagens automáticas para nunca mais perder um lead.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Configuração do CRM ideal (Kommo, HubSpot, RD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Funis visuais de propostas, follow-up e fechamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Atendimento centralizado no WhatsApp da empresa</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Quero%20um%20or%C3%A7amento%20para%20Venda%20e%20Instala%C3%A7%C3%A3o%20de%20CRM."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" /> Implantar CRM
                </a>
              </div>
            </div>

            {/* SERVIÇO 3: TREINAMENTO DE EQUIPE INTERNA */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-purple-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Treinamento de Equipe
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                    Hands-on
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Capacitação prática para que seus funcionários dominem ferramentas de inteligência artificial, operem o CRM com maestria e atendam com excelência.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Uso prático de IA no dia a dia da empresa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Treinamento comercial para fechar vendas no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Material gravado e checklists de acompanhamento</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20Treinamento%20de%20Equipe%20Interna."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" /> Agendar Treinamento
                </a>
              </div>
            </div>

            {/* SERVIÇO 4: AUDIOVISUAL & VÍDEOS */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-cyan-400">
                  <Video className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Produção de Vídeos
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    Sob Medida
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Vídeos verticais para Reels/TikTok, VSLs, anúncios e institucionais. Escolha entre <strong>Somente Edição</strong> ou <strong>Gravação Presencial + Edição</strong>.
                </p>

                <div className="space-y-1.5 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="font-bold text-[10px] uppercase text-cyan-400 mb-1">Opcionais Disponíveis:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>IA: Cenários e B-rolls gerados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>VFX: Efeitos especiais e Motion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Cinema: Color grading de filme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Narração: Locutor Humano ou Voz IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Lettering: Letras e legendas de alto impacto</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Produ%C3%A7%C3%A3o%20e%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" /> Orçar Vídeos no WhatsApp
                </a>
              </div>
            </div>

            {/* SERVIÇO 5: ARTES GRÁFICAS & CRIATIVOS */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-emerald-400">
                  <Palette className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Artes Gráficas & Criativos
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Design
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Posts que elevam a percepção de valor do seu perfil, capas atraentes para Reels e thumbnails de YouTube, além de criativos de alta conversão para anúncios.
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Posts de feed, carrosséis e banners promocionais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Criativos validados para Meta Ads e Google Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Opcionais: Elementos gerados com IA e Lettering</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Artes%20Gr%C3%A1ficas%20e%20Criativos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-black" /> Orçar Artes no WhatsApp
                </a>
              </div>
            </div>

            {/* SERVIÇO 6: MARKETING & COPRODUÇÃO 6 EM 7 */}
            <div className="p-7 rounded-2xl bg-[#060911] border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-gray-700 flex items-center justify-center mb-5 text-blue-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-black text-white uppercase">
                    Marketing & Coprodução
                  </h3>
                  <span className="text-[9px] font-mono font-bold uppercase text-blue-300 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                    6 em 7
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  Gestão estratégica de anúncios (Meta Ads, Google Ads, TikTok Ads) e coprodução digital com histórico de <strong>+23 lançamentos executados</strong> (+ R$ 100k em 7 dias).
                </p>

                <div className="space-y-2 mb-6 border-t border-gray-800 pt-4 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Tráfego local para comércios da região</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Lançamentos digitais com estratégia 6 em 7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Otimização diária de verba e relatórios de ROI</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20sobre%20Gest%C3%A3o%20de%20Tr%C3%A1fego%20e%20Coprodu%C3%A7%C3%A3o%206%20em%207."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" /> Falar de Tráfego & Lançamentos
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CÉREBRO DE IA - SQUAD JARVIS (ÚNICO PRODUTO COM VALOR FIXO) */}
      <section className="py-20 bg-[#060911] border-b border-gray-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-black border border-purple-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 font-mono text-[10px] text-purple-300 uppercase mb-3">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>PRODUTO DIGITAL COM TUTORIAL EM VÍDEO</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                  Cérebro de IA: Squad Jarvis (30+ Robôs)
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                  Esquadrão pronto para plugar em <strong>Claude Code, AntiGravity, Cursor e terminais</strong>. Acompanha vídeo tutorial passo a passo para quem nunca mexeu com programação ou terminais.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>30+ Agentes Especializados (Copy, Dev, Vendas, CFO)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Tutorial em Vídeo Super Fácil de Instalar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Scripts de Instalação Rápida em 5 Minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Acesso Imediato e Seguro via Kiwify</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center bg-[#060911] p-6 rounded-xl border border-gray-800 text-center">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Valor do Produto Digital</span>
                <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono mt-1 mb-1">
                  R$ 197,00
                </div>
                <p className="text-[11px] text-gray-400 mb-4">Pagamento único ou até 12x no cartão</p>

                <a
                  href="https://pay.kiwify.com.br/2yfNvHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer text-center mb-2"
                >
                  <Zap className="w-4 h-4 text-white" /> Comprar no Kiwify
                </a>

                <a
                  href="/agentes"
                  className="text-[11px] font-mono text-gray-400 hover:text-purple-300 underline"
                >
                  Conhecer todos os 30+ robôs →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROVA SOCIAL & CASES */}
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
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Quero%20conhecer%20mais%20cases%20de%20sucesso%20da%20Virtual%20Place."
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
                className="rounded-xl overflow-hidden border border-gray-800 bg-black cursor-pointer group hover:border-emerald-500/50 transition-all"
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

      {/* 7. FAQ DIRETO E ACESSÍVEL */}
      <section className="py-16 bg-[#060911] border-b border-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
              TIRE SUAS DÚVIDAS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl bg-black overflow-hidden">
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

      {/* 8. CHAMADA FINAL DE CONVERSÃO */}
      <section className="py-16 bg-black text-center relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#060911] border border-gray-800 relative overflow-hidden shadow-2xl">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
              INÍCIO RÁPIDO & SEM COMPLICAÇÃO
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
              Pronto Para Transformar Seu Negócio?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
              Fale diretamente com nossa equipe no WhatsApp para receber um atendimento dedicado e desenhar o plano ideal para a sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-black" /> Falar no WhatsApp Agora
              </a>
              <a 
                href="/precos"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-gray-900 border border-gray-700 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Ver Cardápio de Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-900 text-center text-gray-500 text-xs bg-black font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/" className="text-gray-400 hover:text-white">Início</a>
            <span className="text-gray-700">|</span>
            <a href="/precos" className="text-gray-400 hover:text-white">Serviços & Soluções</a>
            <span className="text-gray-700">|</span>
            <a href="/agentes" className="text-emerald-400 hover:underline">Cérebro IA (Squad Jarvis)</a>
          </div>
          <p className="text-gray-600 text-[11px]">PARADOXTEAM & VIRTUAL PLACE // COPRODUTOR 6 EM 7 // TODOS OS DIREITOS RESERVADOS</p>
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
