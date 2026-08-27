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
  Workflow
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function PricesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ia_crm' | 'audiovisual' | 'marketing' | 'jarvis'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      id: 'consultoria_ia',
      category: 'ia_crm',
      title: 'Consultoria Estratégica em Inteligência Artificial',
      subtitle: 'Automação de processos, agentes autônomos e eficiência operacional',
      badge: 'Solução Corporativa',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
      icon: Brain,
      iconColor: 'text-emerald-400',
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
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
      icon: Database,
      iconColor: 'text-cyan-400',
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
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-950/40',
      icon: GraduationCap,
      iconColor: 'text-purple-400',
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
      title: 'Produção & Edição de Vídeos (Audiovisual)',
      subtitle: 'Gravação presencial no local ou somente edição remota dos seus brutos',
      badge: 'Audiovisual Sob Medida',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
      icon: Video,
      iconColor: 'text-cyan-400',
      description: 'Vídeos verticais para Reels, TikTok e Shorts, anúncios comerciais para Meta/Google, VSLs para lançamentos e institucionais. Você escolhe se prefere apenas edição ou gravação completa.',
      features: [
        'Modalidades: Somente Edição ou Gravação Presencial + Edição',
        'Opcional: Inteligência Artificial (Cenários e B-rolls)',
        'Opcional: Efeitos Especiais & VFX Motion',
        'Opcional: Estilo Cinematográfico (Color Grading de filme)',
        'Opcional: Narração por Locutor Humano ou Voz de IA Neural',
        'Opcional: Legendas e Lettering com letras de alto impacto'
      ],
      ctaText: 'Pedir Orçamento de Vídeo no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Produ%C3%A7%C3%A3o%20e%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos.'
    },
    {
      id: 'artes_design',
      category: 'audiovisual',
      title: 'Artes Gráficas & Criativos de Alta Conversão',
      subtitle: 'Design profissional para posts, anúncios, capas e identidade visual',
      badge: 'Design de Alto Impacto',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
      icon: Palette,
      iconColor: 'text-emerald-400',
      description: 'Criativos que chamam atenção no feed do Instagram, geram cliques em campanhas de tráfego pago e elevam a percepção de valor da sua marca.',
      features: [
        'Posts individuais, carrosséis educativos e banners promocionais',
        'Criativos otimizados para campanhas de Meta Ads e Google Ads',
        'Capas de Reels, thumbnails para YouTube e destaques',
        'Opcionais: Elementos gerados com IA e Lettering estilizado'
      ],
      ctaText: 'Pedir Orçamento de Artes no WhatsApp',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Artes%20Gr%C3%A1ficas%20e%20Criativos.'
    },
    {
      id: 'marketing_coproducao',
      category: 'marketing',
      title: 'Gestão de Tráfego Pago & Coprodução 6 em 7',
      subtitle: 'Autoridade comprovada: +23 lançamentos executados no mercado digital',
      badge: 'Coprodutor 6 em 7',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-950/40',
      icon: TrendingUp,
      iconColor: 'text-blue-400',
      description: 'Gerenciamos seus anúncios no Instagram, Facebook, Google e TikTok com foco em retorno real. Para infoprodutores, executamos lançamentos completos 6 em 7 (+ R$ 100k em 7 dias).',
      features: [
        'Estratégia para Comércios e Negócios Locais atraírem clientes da cidade',
        'Coprodução e tráfego pago em escala para infoprodutores e criadores',
        'Estruturação de funis de vendas, páginas de captura e VSLs',
        'Otimização diária de verba e relatórios claros de ROI'
      ],
      ctaText: 'Falar sobre Tráfego & Lançamentos',
      ctaUrl: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20Gest%C3%A3o%20de%20Tr%C3%A1fego%20e%20Coprodu%C3%A7%C3%A3o%206%20em%207.'
    }
  ];

  const faqs = [
    {
      question: 'Como funciona a Consultoria em IA e a Instalação de CRM?',
      answer: 'Iniciamos com um alinhamento direto pelo WhatsApp ou chamada de vídeo. Diagnosticamos as rotinas manuais da sua empresa, indicamos o CRM ideal e configuramos as integrações e automações de IA necessárias para seu time atender mais rápido e vender mais.'
    },
    {
      question: 'O Treinamento de Equipe pode ser feito de forma online ou presencial?',
      answer: 'Sim! Realizamos treinamentos online ao vivo (gravados para consulta posterior) ou presenciais, ensinando seus funcionários a utilizarem ferramentas de IA, operarem o CRM e atenderem clientes no WhatsApp de forma eficiente e padronizada.'
    },
    {
      question: 'Como solicito um orçamento para Produção de Vídeos e Artes?',
      answer: 'Basta clicar no botão de WhatsApp do serviço desejado e nos contar o que precisa (por exemplo: quantidade de vídeos, se já tem o material gravado ou se precisa de captação presencial, se deseja efeitos especiais, voz de IA ou locutor humano). Enviamos uma proposta personalizada em poucos minutos.'
    },
    {
      question: 'Quem é o responsável pela gestão de Marketing e Lançamentos?',
      answer: 'Nossa equipe é liderada por Coprodutor 6 em 7, com mais de 23 lançamentos executados no mercado digital (gerando lançamentos acima de R$ 100 mil de faturamento em apenas uma semana). Aplicamos essa mesma inteligência tanto para alavancar comércios e negócios locais quanto para infoprodutores do Brasil e do mundo.'
    },
    {
      question: 'Qual é o valor do Cérebro de IA (Squad Jarvis 30+ Agentes)?',
      answer: 'O Cérebro de IA possui valor fixo transparente: R$ 197,00 em pagamento único para acesso vitalício via Kiwify (incluindo todos os 30+ robôs, scripts e tutorial em vídeo passo a passo para Claude Code, AntiGravity, Cursor e terminais) ou R$ 997,00 no plano anual com suporte e onboarding individual.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden">
      <NeonBackground3D />

      {/* Cyber Scanline Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="https://i.imgur.com/w2iO5CR.png" 
              alt="Virtual Place Logo" 
              className="h-12 md:h-14 w-auto object-contain brightness-110" 
              referrerPolicy="no-referrer" 
            />
          </a>

          <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 items-center">
            <a href="/" className="text-xs md:text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              Início
            </a>
            <a href="/precos" className="text-xs md:text-sm font-semibold text-emerald-400 transition-colors">
              Serviços & Soluções
            </a>
            <a 
              href="/agentes" 
              className="px-3 py-1 rounded-lg bg-black border border-emerald-500/40 hover:bg-gray-900 text-white text-xs font-bold transition-all shadow-[0_0_12px_rgba(0,255,102,0.15)] flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Cérebro IA (R$ 197)
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Virtual%20Place." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-black uppercase transition-all shadow-[0_0_15px_rgba(0,255,102,0.25)] flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 font-mono text-[10px] sm:text-xs text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOLUÇÕES COMPLETAS SOB MEDIDA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-4">
              Serviços, Consultoria <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-gray-400">
                & Inteligência de Vendas
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Atendemos comércios locais, empresas físicas e infoprodutores de todo o Brasil e do mundo. Solicite propostas sob medida direto pelo WhatsApp com atendimento humanizado e rápido.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {[
                { id: 'all', label: 'Todos os Serviços', icon: Layers },
                { id: 'ia_crm', label: 'Consultoria IA, CRM & Treinamento', icon: Brain },
                { id: 'audiovisual', label: 'Audiovisual & Artes', icon: Video },
                { id: 'marketing', label: 'Tráfego & Coprodução 6 em 7', icon: TrendingUp },
                { id: 'jarvis', label: 'Cérebro IA Jarvis (R$ 197)', icon: Terminal }
              ].map((cat) => {
                const Icon = cat.icon;
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 border cursor-pointer ${
                      active
                        ? 'bg-emerald-400 text-black border-emerald-400 shadow-[0_0_20px_rgba(0,255,102,0.3)]'
                        : 'bg-[#060911] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white'
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
      <section className="py-12 bg-black relative border-t border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services
              .filter(s => activeCategory === 'all' || s.category === activeCategory)
              .map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    className="p-7 rounded-2xl border border-gray-800 bg-[#060911] hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-gray-700 text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded border ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                        {service.title}
                      </h3>
                      <p className="text-emerald-400 text-xs font-semibold mb-3">
                        {service.subtitle}
                      </p>

                      <p className="text-gray-400 text-xs leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6 border-t border-gray-800/80 pt-4 text-xs text-gray-300">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-800/80">
                      <a
                        href={service.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,102,0.2)] cursor-pointer text-center"
                      >
                        <MessageSquare className="w-4 h-4 text-black" />
                        {service.ctaText}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* SPECIAL CARD: CÉREBRO DE IA (SQUAD JARVIS) COM VALOR FIXO */}
      {(activeCategory === 'all' || activeCategory === 'jarvis') && (
        <section className="py-16 bg-black relative border-b border-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#060911] border border-purple-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 font-mono text-[10px] text-purple-300 uppercase mb-3">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>PRODUTO DIGITAL DE ACESSO IMEDIATO • CHECKOUT SEGURO</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    Squad Jarvis IA (30+ Agentes + Tutorial em Vídeo)
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    O único produto do nosso catálogo com valor pré-fixado. Você adquire o cérebro completo de 30+ agentes especializados (Marketing, Vendas, Programação, Finanças e Segurança) pronto para rodar em Claude Code, AntiGravity, Cursor e terminais, com vídeo tutorial passo a passo para iniciantes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>30+ Agentes Prontos para Uso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Vídeo Tutorial Fácil de Instalar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Instalação em Menos de 5 Minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Acesso Vitalício via Kiwify</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center bg-black/60 p-6 rounded-xl border border-gray-800 text-center">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Acesso Vitalício</span>
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
                    <Zap className="w-4 h-4 text-white" /> Comprar via Kiwify
                  </a>

                  <a
                    href="/agentes"
                    className="text-[11px] font-mono text-gray-400 hover:text-purple-300 underline"
                  >
                    Ver detalhes de todos os 30+ robôs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-black relative border-b border-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl bg-[#060911] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-900/30 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-white pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-gray-400 leading-relaxed border-t border-gray-800/80 pt-3 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-center relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#060911] border border-gray-800 shadow-2xl">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
              ATENDIMENTO PERSONALIZADO
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
              Vamos Conversar Sobre Seu Negócio?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
              Nossa equipe está pronta para entender suas metas e desenhar uma proposta customizada sem burocracia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20personalizado." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-black" /> Falar no WhatsApp Agora
              </a>
              <a 
                href="/agentes" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-gray-900 border border-gray-700 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-emerald-400" /> Conhecer o Cérebro de IA (R$ 197)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900 text-center text-gray-500 text-xs bg-black font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
          <p className="text-gray-400 text-xs">VIRTUAL PLACE // CONSULTORIA EM IA, CRM, TREINAMENTO & AUDIOVISUAL</p>
          <div className="flex flex-wrap justify-center gap-3 text-gray-500">
            <a href="/" className="hover:text-emerald-400">Início</a>
            <span>•</span>
            <a href="/precos" className="hover:text-emerald-400">Serviços & Soluções</a>
            <span>•</span>
            <a href="/agentes" className="hover:text-emerald-400">Cérebro IA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
