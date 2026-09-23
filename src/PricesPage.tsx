import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Video, 
  Sparkles, 
  Check, 
  Camera, 
  ChevronDown, 
  Zap, 
  Palette,
  Scissors,
  Clapperboard,
  Mic,
  Type,
  TrendingUp,
  Terminal,
  Layers,
  Phone,
  MessageSquare,
  Users,
  Database,
  GraduationCap,
  Award,
  Settings,
  ShieldCheck,
  Bot,
  Building2,
  Globe2,
  Workflow,
  Sliders,
  Flame,
  Target,
  Film
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';
import { TrafegoCalculator } from './components/TrafegoCalculator';

interface ServiceItem {
  id: string;
  category: 'ia_crm' | 'audiovisual' | 'marketing' | 'jarvis';
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: any;
  iconColor: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  promoOffer?: {
    title: string;
    price?: string;
    ctaText: string;
    ctaUrl: string;
  };
}

export default function PricesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ia_crm' | 'audiovisual' | 'marketing' | 'jarvis'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      id: 'consultoria_ia',
      category: 'ia_crm',
      title: 'Consultoria Estratégica em Inteligência Artificial',
      subtitle: 'Automação de processos, agentes autônomos e eficiência operacional',
      badge: 'Solução Corporativa',
      badgeColor: 'border-green-200 text-green-600 bg-green-50',
      icon: Brain,
      iconColor: 'text-green-600',
      description: 'Mapeamos os gargalos da sua empresa e implementamos ferramentas de IA para automatizar tarefas repetitivas, atendimento ao cliente, geração de conteúdo e análise de dados.',
      features: [
        'Diagnóstico completo de processos e oportunidades com IA',
        'Criação e implantação de agentes personalizados para seu nicho',
        'Integração de IA no WhatsApp e sistemas internos',
        'Redução drástica de tempo operacional da sua equipe'
      ],
      ctaText: 'Solicitar Consultoria no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20em%20Intelig%C3%AAncia%20Artificial%20para%20minha%20empresa.'
    },
    {
      id: 'crm_instalacao',
      category: 'ia_crm',
      title: 'Venda & Instalação Completa de CRM',
      subtitle: 'Estruturação de funil de vendas, WhatsApp multiatendente e automação',
      badge: 'Gestão de Vendas',
      badgeColor: 'border-blue-200 text-blue-600 bg-blue-50',
      icon: Database,
      iconColor: 'text-blue-600',
      description: 'Chega de perder clientes no WhatsApp! Configuramos e instalamos a plataforma de CRM ideal para o seu modelo de negócio, com funil visual, múltiplos atendentes no mesmo número e mensagens automáticas.',
      features: [
        'Escolha e configuração da ferramenta ideal (Kommo, RD Station, HubSpot, etc.)',
        'Organização de funis de vendas (Lead, Contato, Proposta, Fechamento)',
        'Integração direta com WhatsApp, formulários e redes sociais',
        'Automações de boas-vindas, follow-up e recuperação de vendas'
      ],
      ctaText: 'Implantar CRM na Minha Empresa',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Venda%20e%20Instala%C3%A7%C3%A3o%20de%20CRM.'
    },
    {
      id: 'treinamento_equipe',
      category: 'ia_crm',
      title: 'Treinamento de Equipe Interna (Hands-on)',
      subtitle: 'Capacitação prática para seu time dominar IA, CRM e processos modernos',
      badge: 'Capacitação',
      badgeColor: 'border-purple-500/30 text-purple-600 bg-purple-950/40',
      icon: GraduationCap,
      iconColor: 'text-purple-600',
      description: 'Treinamos seus colaboradores e equipe de atendimento/vendas para extrair o máximo das novas tecnologias, gerando resultados rápidos no dia a dia.',
      features: [
        'Treinamento prático de uso diário de ferramentas de IA (ChatGPT, Claude, etc.)',
        'Capacitação do time comercial para operar o CRM e manter o funil atualizado',
        'Técnicas de atendimento humanizado e ágil pelo WhatsApp',
        'Material de apoio, checklists e suporte para tirar dúvidas pós-treinamento'
      ],
      ctaText: 'Agendar Treinamento de Equipe',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Quero%20agendar%20um%20Treinamento%20de%20Equipe%20Interna.'
    },
    {
      id: 'audiovisual_videos',
      category: 'audiovisual',
      title: '4K + Post em Alta Qualidade',
      subtitle: 'Stories na Hora + Brutos + Aftermovie Cinemático 4K',
      badge: '4K + Post na Hora',
      badgeColor: 'border-blue-200 text-blue-600 bg-blue-50',
      icon: Video,
      iconColor: 'text-blue-600',
      description: 'Produção audiovisual completa em 4K + post em alta qualidade no local: inclui postagem de stories em tempo real durante o evento, entrega de 100% dos arquivos brutos sem compressão e Aftermovie Cinemático masterizado em 4K HDR com color grading de cinema.',
      promoOffer: {
        title: 'Gravação: Stories na Hora + Brutos + Aftermovie Cinemático 4K',
        ctaText: 'Contratar Produção 4K',
        ctaUrl: 'https://pay.kiwify.com.br/cG8n7jh'
      },
      features: [
        'Captação 4K 60fps com post em alta qualidade durante o evento',
        'Stories gravados e publicados na hora durante a cobertura',
        'Entrega de todos os arquivos brutos sem corte para o seu acervo',
        'Aftermovie cinemático masterizado em 4K com color grading profissional',
        'Opcional: Captação aérea com Drone 4K Ultra HD',
        'Opcional: Inteligência Artificial (Cenários e B-rolls)',
        'Qualidade cinematográfica com orçamentos acessíveis'
      ],
      ctaText: 'Pedir Orçamento de Produção 4K no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Produ%C3%A7%C3%A3o%20Audiovisual%204K%20%2B%20Post%20em%20Alta%20Qualidade.'
    },
    {
      id: 'fotografia_eventos',
      category: 'audiovisual',
      title: 'Fotografia em Volume',
      subtitle: 'Milhares de Fotos por Evento • Comercial, Institucional e Eventos',
      badge: 'Milhares de Fotos por Evento',
      badgeColor: 'border-amber-200 text-amber-600 bg-amber-50',
      icon: Camera,
      iconColor: 'text-amber-600',
      description: 'Fotografia em volume com milhares de fotos por evento em altíssima resolução. Cobertura completa para Comercial, Institucional e Eventos em geral (convenções, feiras, eventos corporativos, atos públicos, formaturas e festas). Equipamentos full-frame de ponta e pós-produção com tratamento de cor refinado.',
      promoOffer: {
        title: 'Fotografia em Volume: Milhares de Fotos por Evento',
        ctaText: 'Solicitar Orçamento Fotográfico',
        ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Fotografia%20em%20Volume%20%28Milhares%20de%20Fotos%20por%20Evento%20-%20Comercial%2C%20Institucional%20e%20Eventos%29.'
      },
      features: [
        'Milhares de fotos registradas por evento em alta resolução',
        'Comercial, Institucional e Eventos em geral',
        'Equipamentos profissionais e tratamento de cor de alto nível',
        'Entrega ágil via galeria privativa online para download e compartilhamento',
        'Alta capacidade de cobertura com orçamentos acessíveis'
      ],
      ctaText: 'Pedir Orçamento de Fotografia no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Fotografia%20em%20Volume%20%28Milhares%20de%20Fotos%20por%20Evento%29.'
    },
    {
      id: 'artes_design',
      category: 'audiovisual',
      title: 'Artes Gráficas: R$ 100',
      subtitle: 'Design de Alta Conversão por Arte (R$ 100)',
      badge: 'R$ 100 por Arte',
      badgeColor: 'border-green-200 text-green-600 bg-green-50',
      icon: Palette,
      iconColor: 'text-green-600',
      description: 'Artes e criativos profissionais de alta conversão para Instagram (feed, stories, carrosséis), anúncios de tráfego pago, lançamentos e banners promocionais por apenas R$ 100 cada arte.',
      promoOffer: {
        title: 'Arte Gráfica Profissional (R$ 100 cada)',
        price: 'R$ 100',
        ctaText: 'Solicitar Arte (R$ 100)',
        ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20Artes%20Gr%C3%A1ficas%20%28R%24%20100%20cada%29.'
      },
      features: [
        'Apenas R$ 100 por arte / criativo',
        'Posts individuais, carrosséis educativos e banners promocionais',
        'Criativos otimizados para campanhas de Meta Ads e Google Ads',
        'Formatos 1:1, 4:5 e 9:16 adaptados com psicologia de consumo',
        'Entrega rápida em alta resolução PNG e PDF vetorial'
      ],
      ctaText: 'Solicitar Artes por R$ 100 no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20Artes%20Gr%C3%A1ficas%20%28R%24%20100%20cada%29.'
    },
    {
      id: 'trafego_pago_gestao',
      category: 'marketing',
      title: 'Assessoria de Tráfego Pago: R$ 1.500',
      subtitle: 'Redes Sociais Limitadas Apenas Pela Verba',
      badge: 'ROI 7,3x Comprovado • R$ 1.500',
      badgeColor: 'border-emerald-300 text-emerald-600 bg-emerald-50',
      icon: Target,
      iconColor: 'text-emerald-600',
      description: 'Gestão de tráfego pago com ROI de 7,3x comprovado em mais de 100k de vendas de cursos com alta lucratividade, margem e escala. Campanhas em Meta Ads (Instagram/Facebook), Google Ads e TikTok Ads — redes sociais limitadas apenas pela verba do cliente.',
      promoOffer: {
        title: 'Gestão de Tráfego Pago: R$ 1.500 / mês',
        price: 'R$ 1.500/mês',
        ctaText: 'Contratar Tráfego (R$ 1.500)',
        ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20a%20Assessoria%20de%20Tr%C3%A1fego%20Pago%20de%20R%24%201.500%20%28ROI%207%2C3x%20comprovado%29.'
      },
      features: [
        'Valor fixo de gestão: R$ 1.500 / mês',
        'Redes sociais limitadas apenas pela sua verba de anúncio',
        'ROI 7,3x comprovado em 100k de vendas de cursos com alta lucratividade',
        'Otimização diária de CPA, ROAS e relatórios transparentes de conversão',
        'Simulador interativo de retorno e recomendação de verba integrado'
      ],
      ctaText: 'Contratar Gestão de Tráfego por R$ 1.500',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20a%20Assessoria%20de%20Tr%C3%A1fego%20Pago%20de%20R%24%201.500%20%28ROI%207%2C3x%20comprovado%29.'
    },
    {
      id: 'squads_ia',
      category: 'jarvis',
      title: 'Kit Produtividade IA: Pasta Pronta + Segundo Cérebro Obsidian',
      subtitle: 'Conecte no Claude Code, AntiGravity ou VS Code • Curso + Skills Seguras',
      badge: 'Pasta Pronta + Obsidian + Curso',
      badgeColor: 'border-purple-300 text-purple-600 bg-purple-50',
      icon: Bot,
      iconColor: 'text-purple-600',
      description: 'Compre uma pasta organizada pronta e conecte no Claude Code, AntiGravity ou VS Code para otimizar o uso de IA. Armazene um segundo cérebro com Obsidian, acompanhado de curso passo a passo em vídeo, projetos Open Source filtrados e skills seguras já testadas.',
      promoOffer: {
        title: 'Kit Completo com Pasta + Obsidian + Curso',
        ctaText: 'Acessar Kit na Kiwify (R$ 197)',
        ctaUrl: 'https://pay.kiwify.com.br/2yfNvHR'
      },
      features: [
        'Pasta estruturada pronta para Claude Code, AntiGravity e VS Code',
        'Segundo Cérebro com Obsidian para contexto e notas do seu negócio',
        'Seleção de projetos Open Source filtrados e livres de bugs',
        'Skills seguras pré-calibradas para evitar alucinações e desperdício de tokens',
        'Curso passo a passo em vídeo gravado especialmente para leigos'
      ],
      ctaText: 'Conhecer Todos os Detalhes do Kit',
      ctaUrl: '/agentes'
    },
    {
      id: 'marketing_coproducao',
      category: 'marketing',
      title: 'Coprodução & Lançamentos para Infoprodutores',
      subtitle: 'Plano sob medida para especialistas que querem alta margem e escala',
      badge: 'Projeto Sob Medida',
      badgeColor: 'border-blue-200 text-blue-600 bg-blue-50',
      icon: TrendingUp,
      iconColor: 'text-blue-600',
      description: 'Estruturação completa para quem já vende conhecimento ou quer criar seu próximo curso escalável com ROI 7,3x comprovado em mais de 100k de vendas.',
      promoOffer: {
        title: 'Sessão Estratégica de Lançamento',
        ctaText: 'Falar com Coprodutor',
        ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Sou%20infoprodutor%20e%20gostaria%20de%20conversar%20sobre%20Coprodu%C3%A7%C3%A3o%20e%20Lançamentos.'
      },
      features: [
        'Planejamento do lançamento ou funil perpétuo de alta margem',
        'Criação de páginas de captura, vendas e VSL de alta conversão',
        'Gestão de tráfego avançada com ROI 7,3x comprovado',
        'Parceria focada em retorno financeiro escalável'
      ],
      ctaText: 'Tirar dúvidas rápidas no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Sou%20infoprodutor%20e%20gostaria%20de%20conversar%20sobre%20Coprodu%C3%A7%C3%A3o%20e%20Lançamentos.'
    }
  ];

  const faqs = [
    {
      question: 'Como funciona a Consultoria em IA e a Instalação de CRM?',
      answer: 'Iniciamos com um alinhamento direto pelo WhatsApp ou chamada de vídeo. Diagnosticamos as rotinas manuais da sua empresa, indicamos o CRM ideal e configuramos as integrações e automações de IA necessárias para seu time atender mais rápido e vender mais.'
    },
    {
      question: 'Como funciona a Assessoria de Tráfego Pago por R$ 1.500?',
      answer: 'A taxa de gestão da agência é de R$ 1.500 mensais fixos. As redes sociais (Meta Ads/Instagram, Google Ads e TikTok Ads) são limitadas apenas pela verba de anúncios do cliente. O cliente define o orçamento ou utiliza nossa calculadora para saber a verba ideal baseada no seu ticket e produto.'
    },
    {
      question: 'Quanto custam as Artes Gráficas?',
      answer: 'Nossas artes gráficas e criativos de alta conversão têm valor de apenas R$ 100 cada arte, com entrega em alta resolução adaptada para feed, stories, carrosséis ou anúncios patrocinados.'
    },
    {
      question: 'Como funciona a Fotografia em Volume?',
      answer: 'Realizamos cobertura completa com milhares de fotos por evento para Comercial, Institucional e Eventos em geral. Todas as fotos são tratadas e entregues em galeria privativa online para download imediato.'
    },
    {
      question: 'O que está incluso na produção 4K + Post em Alta Qualidade?',
      answer: 'Inclui captação 4K 60fps no local, postagens de stories em tempo real durante o evento, entrega de 100% dos arquivos brutos sem corte e Aftermovie Cinemático masterizado em 4K HDR com color grading profissional.'
    },
    {
      question: 'Como funciona o Kit de Produtividade com IA, Obsidian e Pasta Pronta?',
      answer: 'Você compra uma pasta organizada e a conecta diretamente no Claude Code, AntiGravity ou VS Code. Ela vem com o Segundo Cérebro configurado no Obsidian, projetos Open Source filtrados e testados, skills seguras pré-calibradas e um curso passo a passo em vídeo gravado especialmente para pessoas leigas.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-400 selection:text-white relative overflow-x-hidden">
      <NeonBackground3D />

      {/* Cyber Scanline Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/logo-agencia.png" 
              alt="AGÊNCIA VIRTUAL PLACE" 
              className="h-10 sm:h-12 w-auto object-contain rounded-lg border border-gray-200" 
            />
          </a>

          {/* Centralizado no cabeçalho */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto hidden sm:block">
            <a 
              href="https://instagram.com/virtualplace.agencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold text-black hover:text-green-600 transition-colors tracking-tight"
            >
              @virtualplace.agencia
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#calculadora" 
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-700 bg-emerald-50 text-xs font-bold uppercase hover:bg-emerald-100 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              <span>Calculadora de Tráfego</span>
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Virtual%20Place." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-white text-xs font-black uppercase transition-all shadow-sm flex items-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 font-mono text-[10px] sm:text-xs text-green-600 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-green-600" />
              <span>ORÇAMENTOS ACESSÍVEIS & ALTA QUALIDADE TÉCNICA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
              Serviços, Consultoria <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                & Inteligência de Vendas
              </span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Soluções completas com orçamentos acessíveis: produção audiovisual 4K + post em alta qualidade, fotografia em volume, artes por R$ 100, squads de IA e assessoria de tráfego pago por R$ 1.500 com redes limitadas apenas pela verba.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {[
                { id: 'all', label: 'Todos os Serviços', icon: Layers },
                { id: 'audiovisual', label: 'Audiovisual 4K & Design', icon: Video },
                { id: 'marketing', label: 'Tráfego Pago (R$ 1.500)', icon: Target },
                { id: 'jarvis', label: 'Squads de IA', icon: Bot },
                { id: 'ia_crm', label: 'Consultoria IA & CRM', icon: Brain }
              ].map((cat) => {
                const Icon = cat.icon;
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 border cursor-pointer ${
                      active
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 bg-white relative border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services
              .filter(s => activeCategory === 'all' || s.category === activeCategory)
              .map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="p-7 rounded-2xl border border-gray-200 bg-gray-50 hover:border-green-300 transition-all shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-300 text-green-600 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded border ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">
                        {service.title}
                      </h3>
                      <p className="text-green-600 text-xs font-semibold mb-3">
                        {service.subtitle}
                      </p>

                      <p className="text-gray-600 text-xs leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {service.promoOffer && (
                        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 mb-5 text-xs">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-bold uppercase text-[10px] text-blue-600 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-blue-600" /> DESTAQUE DA AGÊNCIA
                            </span>
                            {service.promoOffer.price && (
                              <span className="text-xs font-mono font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                                {service.promoOffer.price}
                              </span>
                            )}
                          </div>
                          <div className="font-bold text-gray-900 text-xs">{service.promoOffer.title}</div>
                        </div>
                      )}

                      <div className="space-y-2 mb-6 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-200/80 space-y-2">
                      {service.promoOffer && (
                        <a
                          href={service.promoOffer.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center"
                        >
                          <Zap className="w-4 h-4 text-white" />
                          {service.promoOffer.ctaText}
                        </a>
                      )}
                      <a
                        href={service.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer text-center ${
                          service.promoOffer
                            ? 'bg-white hover:bg-gray-100 border border-gray-300 text-gray-600 hover:text-gray-900 text-[11px]'
                            : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-sm'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        {service.ctaText}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* SPECIAL CARD: PACOTES AUDIOVISUAIS PROMOCIONAIS */}
      {(activeCategory === 'all' || activeCategory === 'audiovisual' || activeCategory === 'marketing') && (
        <section className="py-16 bg-white relative border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 font-mono text-[10px] text-blue-600 uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>SOLUÇÕES ESSENCIAIS • ORÇAMENTOS ACESSÍVEIS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                Pacotes & Soluções em Destaque
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pacote 1: 4K + Post em Alta Qualidade */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-blue-200 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-blue-300 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none transition-all" />
                <div>
                  <div className="inline-block text-[10px] font-mono font-bold uppercase text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full mb-2">
                    4K + Post na Hora
                  </div>
                  <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">
                    4K + Post em Alta Qualidade
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    Captação presencial 4K com postagem de stories no local, 100% dos brutos entregues e aftermovie cinemático masterizado em 4K HDR com color grading de cinema.
                  </p>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-4 tracking-wider bg-blue-100/50 py-1.5 px-2.5 rounded-lg inline-block">
                    Stories + Brutos + Aftermovie 4K
                  </div>
                </div>
                <a
                  href="https://pay.kiwify.com.br/cG8n7jh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[11px] uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center"
                >
                  <Zap className="w-3.5 h-3.5 text-white" /> Contratar Produção 4K
                </a>
              </div>

              {/* Pacote 2: Fotografia em Volume */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-amber-200 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-300 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl pointer-events-none transition-all" />
                <div className="relative z-10">
                  <div className="inline-block text-[10px] font-mono font-bold uppercase text-amber-600 bg-amber-100/60 px-2.5 py-0.5 rounded-full mb-2">
                    Milhares de Fotos
                  </div>
                  <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">
                    Fotografia em Volume
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    Milhares de fotos por evento para Comercial, Institucional e Eventos em geral. Equipamento full-frame, tratamento de cor refinado e galeria digital.
                  </p>
                  <div className="text-xs font-bold text-amber-600 uppercase mb-4 tracking-wider bg-amber-100/50 py-1.5 px-2.5 rounded-lg inline-block">
                    Comercial, Institucional e Eventos
                  </div>
                </div>
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Fotografia%20em%20Volume%20%28Milhares%20de%20Fotos%20por%20Evento%20-%20Comercial%2C%20Institucional%20e%20Eventos%29."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-[11px] uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center relative z-10"
                >
                  <Camera className="w-3.5 h-3.5 text-white" /> Solicitar Fotografia
                </a>
              </div>

              {/* Pacote 3: Artes: R$ 100 */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-green-200 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-green-300 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl pointer-events-none transition-all" />
                <div className="relative z-10">
                  <div className="inline-block text-[10px] font-mono font-bold uppercase text-green-600 bg-green-100/60 px-2.5 py-0.5 rounded-full mb-2">
                    R$ 100 por Arte
                  </div>
                  <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">
                    Artes Gráficas: R$ 100
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    Design profissional de alta conversão para Instagram (feed/stories/carrossel), anúncios e campanhas promocionais por apenas R$ 100 cada.
                  </p>
                  <div className="text-xs font-bold text-green-600 uppercase mb-4 tracking-wider bg-green-100/50 py-1.5 px-2.5 rounded-lg inline-block">
                    R$ 100 / Arte
                  </div>
                </div>
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20Artes%20Gr%C3%A1ficas%20%28R%24%20100%20cada%29."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-black text-[11px] uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center relative z-10"
                >
                  <Zap className="w-3.5 h-3.5 text-white" /> Solicitar Arte (R$ 100)
                </a>
              </div>

              {/* Pacote 4: Tráfego Pago: R$ 1.500 */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-emerald-300 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-400 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none transition-all" />
                <div className="relative z-10">
                  <div className="inline-block text-[10px] font-mono font-bold uppercase text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full mb-2">
                    ROI 7,3x Comprovado
                  </div>
                  <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">
                    Tráfego Pago: R$ 1.500
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    ROI 7,3x comprovado em 100k de vendas de cursos com alta lucratividade, margem e escala. Redes sociais limitadas apenas pela sua verba.
                  </p>
                  <div className="text-xs font-bold text-emerald-600 uppercase mb-4 tracking-wider bg-emerald-100 py-1.5 px-2.5 rounded-lg inline-block">
                    R$ 1.500 / mês
                  </div>
                </div>
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20a%20Assessoria%20de%20Tr%C3%A1fego%20Pago%20de%20R%24%201.500%20%28ROI%207%2C3x%20comprovado%29."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[11px] uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center relative z-10"
                >
                  <Target className="w-3.5 h-3.5 text-white" /> Contratar Tráfego
                </a>
              </div>

            </div>

            {/* Banner Portfólio de Vídeos 4K */}
            <div className="mt-8 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    Quer ver nossas produções em vídeo 4K na prática?
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Confira o portfólio completo com Cavalgada do Tropeiro 2026, edição 2025, cases e aftermovies gravados com Sony ZV-E10.
                  </p>
                </div>
              </div>
              <a
                href="/#portfolio-videos"
                className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Assistir ao Portfólio 4K</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CALCULADORA DE TRÁFEGO PAGO EMBARCADA */}
      <section id="calculadora" className="py-16 bg-neutral-900 text-white relative border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TrafegoCalculator />
        </div>
      </section>

      {/* SPECIAL CARD: CÉREBRO DE IA (SQUAD JARVIS) COM VALOR FIXO */}
      {(activeCategory === 'all' || activeCategory === 'jarvis') && (
        <section className="py-16 bg-white relative border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-purple-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-200 font-mono text-[10px] text-purple-300 uppercase mb-3">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>KIT PRODUTIVIDADE IA • PASTA PRONTA + SEGUNDO CÉREBRO</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
                    Kit Produtividade IA: Pasta Pronta + Segundo Cérebro Obsidian
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                    Compre uma pasta organizada pronta e conecte no Claude Code, AntiGravity ou VS Code para otimizar o uso de inteligência artificial. Armazene um segundo cérebro com Obsidian, acompanhado de curso passo a passo em vídeo gravado para leigos, projetos Open Source filtrados e skills seguras.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Pasta para Claude Code, AntiGravity e VS Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Segundo Cérebro no Obsidian com Templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Projetos Open Source Filtrados e Testados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Skills Seguras Pré-Calibradas sem Erros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Curso Passo a Passo em Vídeo para Leigos</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center bg-white/60 p-6 rounded-xl border border-gray-200 text-center">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">A partir de R$ 197 • Vitalício</span>
                  <div className="text-2xl sm:text-3xl font-black text-purple-600 uppercase tracking-tight mt-1 mb-1">
                    Kit IA & Obsidian
                  </div>
                  <p className="text-[11px] text-gray-500 mb-4">Pasta completa + vídeo aulas + suporte</p>

                  <a
                    href="/agentes"
                    className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer text-center mb-2"
                  >
                    <Zap className="w-4 h-4 text-white" /> Ver Detalhes do Kit
                  </a>

                  <a
                    href="https://pay.kiwify.com.br/2yfNvHR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-purple-600 hover:text-purple-800 underline"
                  >
                    Ir direto para o Checkout Kiwify (R$ 197) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-white relative border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono font-bold uppercase text-green-600">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 uppercase">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-100/30 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-green-600 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-gray-500 leading-relaxed border-t border-gray-200/80 pt-3 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white text-center relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 shadow-2xl">
            <span className="text-[10px] font-mono font-bold uppercase text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200 inline-block mb-3">
              ATENDIMENTO PERSONALIZADO
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase mb-3">
              Vamos Conversar Sobre Seu Negócio?
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto mb-6">
              Soluções sob medida com orçamentos acessíveis. Nossa equipe está pronta para entender suas metas e desenhar uma proposta customizada sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20personalizado." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" /> Falar no WhatsApp Agora
              </a>
              <a 
                href="https://pay.kiwify.com.br/2yfNvHR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-white" /> Squads de IA Kiwify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-xs bg-white font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
          <p className="text-gray-500 text-xs">VIRTUAL PLACE AGÊNCIA // CONSULTORIA EM IA, CRM, AUDIOVISUAL 4K & TRÁFEGO PAGO</p>
          <div className="flex flex-wrap justify-center gap-3 text-gray-500">
            <a href="/" className="hover:text-green-600">Início</a>
            <span>•</span>
            <a href="/precos" className="hover:text-green-600">Serviços & Soluções</a>
            <span>•</span>
            <a href="#calculadora" className="hover:text-green-600">Calculadora de Tráfego</a>
            <span>•</span>
            <a href="https://pay.kiwify.com.br/2yfNvHR" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Squads de IA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
