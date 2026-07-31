import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Mail, 
  Phone, 
  User, 
  Building, 
  TrendingUp, 
  Target, 
  Video, 
  Sparkles, 
  Calculator, 
  Check, 
  Camera, 
  HelpCircle, 
  ChevronDown, 
  Zap, 
  FileText, 
  Lock, 
  Clock, 
  ShieldCheck, 
  Utensils, 
  MapPin, 
  DollarSign, 
  Layers,
  Smartphone,
  Scissors
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';
import InteractiveCalculator from './components/InteractiveCalculator';

export default function PricesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'audiovisual' | 'traffic' | 'calculator'>('all');

  // Interactive Calculator State
  const [photoHours, setPhotoHours] = useState<number>(4);
  const [includePhotographer, setIncludePhotographer] = useState<boolean>(true);

  const [videoType, setVideoType] = useState<'none' | 'videomaker' | 'filmmaker'>('filmmaker');
  const [videoHours, setVideoHours] = useState<number>(4);
  
  const [editMinutes, setEditMinutes] = useState<number>(2);
  const [includeEditing, setIncludeEditing] = useState<boolean>(true);

  const [trafficMonths, setTrafficMonths] = useState<number>(1);
  const [includeTraffic, setIncludeTraffic] = useState<boolean>(false);

  const [addTravelExp, setAddTravelExp] = useState<boolean>(true);
  const [addFood, setAddFood] = useState<boolean>(true);

  // Calculations
  const photoTotal = includePhotographer ? photoHours * 120 : 0;
  
  const videoTotal = videoType === 'videomaker' 
    ? videoHours * 80 
    : videoType === 'filmmaker' 
      ? videoHours * 160 
      : 0;

  const editingTotal = includeEditing ? editMinutes * 297 : 0;
  const trafficTotal = includeTraffic ? trafficMonths * 1500 : 0;

  const grandTotal = photoTotal + videoTotal + editingTotal + trafficTotal;

  // Build WhatsApp Budget Link
  const getWhatsAppBudgetLink = () => {
    let msg = `Olá! Gostaria de formalizar um orçamento através da Tabela de Preços da VirtualPlace.\n\n`;
    
    msg += `📋 *RESUMO DO ORÇAMENTO:* \n`;
    if (includePhotographer) {
      msg += `📸 Cobertura Fotográfica: ${photoHours} hora(s) (R$ 120/h) = R$ ${photoTotal},00\n`;
    }
    if (videoType !== 'none') {
      const vName = videoType === 'videomaker' ? 'Videomaker Mobile (R$ 80/h)' : 'Filmmaker Professional (R$ 160/h)';
      msg += `🎥 Captação de Vídeo: ${vName} por ${videoHours} hora(s) = R$ ${videoTotal},00\n`;
    }
    if (includeEditing) {
      msg += `✂️ Edição & Pós-Produção: ${editMinutes} minuto(s) final(is) (R$ 297/min) = R$ ${editingTotal},00\n`;
    }
    if (includeTraffic) {
      msg += `📈 Assessoria de Tráfego Pago: ${trafficMonths} mês(es) (R$ 1.500/mês) = R$ ${trafficTotal},00\n`;
    }

    msg += `\n*Ajustes de Logística:*\n`;
    msg += `- Deslocamento/Viagem: ${addTravelExp ? 'Sim (a calcular/incluso)' : 'Não necessário'}\n`;
    msg += `- Alimentação Equipe: ${addFood ? 'Sim (fornecida no local)' : 'Não necessário'}\n`;

    msg += `\n💰 *VALOR TOTAL ESTIMADO:* R$ ${grandTotal},00\n\nPodemos confirmar a disponibilidade para a minha data?`;

    return `https://wa.me/5549984101144?text=${encodeURIComponent(msg)}`;
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o pagamento do Squad Jarvis IA (R$ 197)?',
      answer: 'O pagamento é único e via Kiwify (Pix ou cartão em até 12x). Após a confirmação, você recebe o download imediato dos robôs, prompts e roteiros de vendas com acesso vitalício. Se preferir suporte anual dedicado e onboarding individual, você pode assinar o Plano de 1 Ano por R$ 997.'
    },
    {
      question: 'Como é calculada a diária/hora de gravação e fotografia?',
      answer: 'Nossos profissionais possuem valor hora fixo e transparente (Fotógrafo R$ 120/h, Videomaker Mobile R$ 80/h, Filmmaker R$ 160/h). A contagem das horas é feita a partir da chegada da equipe no local do evento. Não há taxas ocultas.'
    },
    {
      question: 'Qual o prazo de entrega dos vídeos editados e fotos?',
      answer: 'As fotos tratadas em alta resolução são entregues em até 48 horas úteis via link no Google Drive ou Pixieset. O Aftermovie e vídeos verticais editados possuem prazo padrão de 3 a 5 dias úteis após o término da captação.'
    },
    {
      question: 'O que está incluso na Assessoria de Tráfego Pago (R$ 1.500/mês)?',
      answer: 'Inclui gestão estratégica de anúncios no Meta Ads (Instagram/Facebook), Google Ads, TikTok Ads e LinkedIn Ads, criação de copys e peças, configuração de píxels e tags, otimização diária de orçamentos, testes A/B de públicos e relatórios de métricas e ROI.'
    },
    {
      question: 'Como emitir nota fiscal e receber contrato formal?',
      answer: 'Emitimos Nota Fiscal de Serviços Eletrônica (NFS-e) para todos os contratos corporativos e prestação de serviços de marketing/audiovisual. O contrato digital com assinatura jurídica é enviado via Clicksign ou DocuSign antes do início do projeto.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-[#00F0FF]/30 relative overflow-x-hidden">
      <NeonBackground3D />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white uppercase">
              VIRTUAL<span className="text-[#00F0FF]">PLACE</span>
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 items-center">
            <a href="/" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">
              Comercial
            </a>
            <a href="/precos" className="text-xs md:text-sm font-semibold text-[#00F0FF] transition-colors">
              Preços & Orçamentos
            </a>
            <a href="/agentes" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">
              Robôs de IA
            </a>
            <a href="/loja" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">
              Contrate Humanos
            </a>
            <a href="/jobs" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">
              Seja um Freela
            </a>
            <a href="https://lp.autolead.site/institucional" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">
              Institucional
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              CENTRAL DE PREÇOS, SERVIÇOS E ORÇAMENTOS
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Tabela Transparente <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-purple-400 to-[#2563EB]">
                & Calculadora de Valores
              </span>
            </h1>

            <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8">
              Confira os custos sem pegadinhas para Inteligência Artificial, Produção Audiovisual de Eventos, Fotografia e Gestão de Tráfego Pago. Monte seu orçamento em tempo real.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {[
                { id: 'all', label: 'Todos os Serviços', icon: Layers },
                { id: 'ai', label: 'Robôs de IA (Jarvis)', icon: Brain },
                { id: 'audiovisual', label: 'Audiovisual & Eventos', icon: Video },
                { id: 'traffic', label: 'Tráfego Pago', icon: TrendingUp },
                { id: 'calculator', label: 'Simulador de Orçamento', icon: Calculator }
              ].map((cat) => {
                const Icon = cat.icon;
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 border ${
                      active
                        ? 'bg-[#00F0FF] text-[#0A0F1C] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                        : 'bg-[#050810] text-[#94A3B8] border-gray-800 hover:border-gray-700 hover:text-white'
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

      {/* Main Pricing & Services Presentation Section */}
      {(activeCategory === 'all' || activeCategory === 'ai' || activeCategory === 'audiovisual' || activeCategory === 'traffic') && (
        <section className="py-12 bg-[#0A0F1C] relative border-t border-b border-[#2563EB]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20 tracking-wider">
                CATÁLOGO DE SERVIÇOS
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-3 uppercase tracking-tight">
                Nossos Serviços e Soluções
              </h2>
              <p className="text-[#94A3B8] text-xs md:text-sm mt-1 max-w-xl mx-auto">
                Conheça a nossa linha completa de soluções. Você pode simular valores e personalizar seu pacote na calculadora interativa abaixo.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* CARD 1: SQUAD JARVIS IA */}
              {(activeCategory === 'all' || activeCategory === 'ai') && (
                <div className="p-6 rounded-2xl border border-purple-500/30 bg-[#050810] hover:border-purple-400 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center border border-purple-500/30 text-[#00F0FF] shrink-0 group-hover:scale-105 transition-transform">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Squad Jarvis IA (Robôs de Vendas e Atendimento)
                        </h3>
                        <span className="text-[9px] font-black uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          Inteligência Artificial
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Assistente Mestre Jarvis com Squad de 30 SubAgentes de IA prontos para automatizar prospecção, qualificação de leads, criação de roteiros para WhatsApp e atendimento comercial 24h.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> 30 Agentes Especializados</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Roteiros para WhatsApp</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Importação & Onboarding Rápido</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 2: ASSESSORIA DE TRÁFEGO PAGO */}
              {(activeCategory === 'all' || activeCategory === 'traffic') && (
                <div className="p-6 rounded-2xl border border-blue-500/20 bg-[#050810] hover:border-blue-500/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/25 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Assessoria de Tráfego Pago e Performance (Meta, Google, TikTok & LinkedIn Ads)
                        </h3>
                        <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          Anúncios & Mídia
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Gestão diária de anúncios patrocinados no Meta Ads (Instagram/Facebook), Google Ads, TikTok Ads e LinkedIn Ads para atração constante de clientes qualificados.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Otimização Diária de Campanhas</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Criação de Públicos Compradores</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 3: EDIÇÃO DE VÍDEO AVULSA */}
              {(activeCategory === 'all' || activeCategory === 'audiovisual') && (
                <div className="p-6 rounded-2xl border border-violet-500/20 bg-[#050810] hover:border-violet-500/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center border border-violet-500/25 text-violet-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Scissors className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Edição de Vídeo Avulsa (Somente Pós-Produção)
                        </h3>
                        <span className="text-[9px] font-black uppercase text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                          Edição & Pós
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Edição profissional para vídeos que você já gravou. Diferentes durações (1min, 3min, 30min, 1h) e níveis (Cortes simples, Avançada com Narração IA inclusa e SuperAvançada com VFX).
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> Edição Simples (Cortes, Cor e Legendas)</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> Edição Avançada (Com Narração IA)</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> SuperAvançada (Animações 3D & VFX)</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-300 font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 4: COBERTURA AUDIOVISUAL E EVENTOS */}
              {(activeCategory === 'all' || activeCategory === 'audiovisual') && (
                <div className="p-6 rounded-2xl border border-[#00F0FF]/20 bg-[#050810] hover:border-[#00F0FF]/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/15 flex items-center justify-center border border-[#00F0FF]/25 text-[#00F0FF] shrink-0 group-hover:scale-105 transition-transform">
                      <Video className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Cobertura de Eventos e Produção Audiovisual
                        </h3>
                        <span className="text-[9px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
                          Captação + Pós-Produção
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Gravação e edição de vídeos institucionais, comerciais, aftermovies e cobertura para feiras e congressos. Equipe técnica especializada, câmeras HD/4K e arquivos brutos inclusos.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Captação Profissional HD/4K</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Arquivos Brutos Inclusos</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Primeira Captação Inclusa por Minuto</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/30 text-[#00F0FF] font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 5: FOTÓGRAFO PROFISSIONAL */}
              {(activeCategory === 'all' || activeCategory === 'audiovisual') && (
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-[#050810] hover:border-amber-500/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center border border-amber-500/25 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Cobertura Fotográfica Profissional
                        </h3>
                        <span className="text-[9px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Fotografia
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Fotógrafo dedicado no local cobrindo palestras, estandes, participantes, interação de público, marcas e fotos oficiais para imprensa.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Fotos em Alta Resolução</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Tratamento e Edição de Cor</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 6: STORYMAKER */}
              {(activeCategory === 'all' || activeCategory === 'audiovisual') && (
                <div className="p-6 rounded-2xl border border-pink-500/20 bg-[#050810] hover:border-pink-500/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/15 flex items-center justify-center border border-pink-500/25 text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          StoryMaker (Stories & Reels Realtime)
                        </h3>
                        <span className="text-[9px] font-black uppercase text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                          Social Media ao Vivo
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Cobertura mobile dedicada no estilo StoryMaker, gravando, editando e publicando conteúdos dinâmicos em tempo real diretamente nas redes sociais durante o evento.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-pink-400" /> Captação & Edição Mobile Rápida</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-pink-400" /> Publicação no Mesmo Dia</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

              {/* CARD 7: CAPTAÇÃO EXTRA */}
              {(activeCategory === 'all' || activeCategory === 'audiovisual') && (
                <div className="p-6 rounded-2xl border border-purple-500/20 bg-[#050810] hover:border-purple-500/40 transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center border border-purple-500/25 text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">
                          Meia Diária Extra de Captação (4 Horas)
                        </h3>
                        <span className="text-[9px] font-black uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          Gravação Adicional
                        </span>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">
                        Horas extras de gravação presencial no local do evento para cobrir múltiplos palcos, estandes em feiras estendidas ou bastidores adicionais.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400" /> Gravações no Local do Evento</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-purple-400" /> Bloco de 4 Horas por Meia Diária</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <button
                      onClick={() => {
                        setActiveCategory('calculator');
                        const el = document.getElementById('simulador-orcamento');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Calculator className="w-3.5 h-3.5" /> Simular na Calculadora
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* INTERACTIVE BUDGET CALCULATOR SECTION */}
      {(activeCategory === 'all' || activeCategory === 'calculator') && (
        <section id="simulador-orcamento" className="py-20 bg-[#050810] relative border-b border-[#2563EB]/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <InteractiveCalculator />
          </div>
        </section>
      )}

      {/* DETAILED PRICE TABLE SECTION */}
      <section className="py-20 bg-[#0A0F1C] relative border-b border-[#2563EB]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
              TABELA CONSOLIDADA DE VALORES
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mt-4 uppercase tracking-tight">
              Visão Geral de Serviços e Escopo
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#050810] shadow-2xl">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0A0F1C] text-[#00F0FF] uppercase text-[10px] font-black tracking-wider border-b border-gray-800">
                <tr>
                  <th className="py-4 px-6">Serviço / Produto</th>
                  <th className="py-4 px-6">Modalidade / Valor Base</th>
                  <th className="py-4 px-6">Entrega / Formato</th>
                  <th className="py-4 px-6">Formas de Pagamento</th>
                  <th className="py-4 px-6 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80">
                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400 shrink-0" />
                    Squad Jarvis IA (30 Robôs)
                  </td>
                  <td className="py-4 px-6 font-bold text-[#00F0FF]">
                    R$ 197 <span className="text-[10px] text-gray-500 font-normal">(único)</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Download Imediato + Guia</td>
                  <td className="py-4 px-6 text-gray-400">Kiwify (Pix ou até 12x)</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="https://pay.kiwify.com.br/2yfNvHR" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Comprar
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                    Squad Jarvis IA (Suporte 1 Ano + Onboarding)
                  </td>
                  <td className="py-4 px-6 font-bold text-emerald-400">
                    R$ 997 <span className="text-[10px] text-gray-500 font-normal">/ ano</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Acesso Anual + Onboarding 1x1</td>
                  <td className="py-4 px-6 text-gray-400">Kiwify (Pix ou até 12x)</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="https://pay.kiwify.com.br/rViC8d1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Assinar
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Camera className="w-4 h-4 text-purple-400 shrink-0" />
                    Fotógrafo Profissional
                  </td>
                  <td className="py-4 px-6 font-bold text-white">
                    R$ 120 <span className="text-[10px] text-gray-500 font-normal">/ hora</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Fotos em Alta Resolução em 48h</td>
                  <td className="py-4 px-6 text-gray-400">Pix / Faturamento PJ (50%+50%)</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="#simulador-orcamento" 
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-[#00F0FF] font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Simular
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    Videomaker Mobile (Conteúdo Vertical)
                  </td>
                  <td className="py-4 px-6 font-bold text-white">
                    R$ 80 <span className="text-[10px] text-gray-500 font-normal">/ hora</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Brutos + Takes para Reels</td>
                  <td className="py-4 px-6 text-gray-400">Pix / Faturamento PJ</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="#simulador-orcamento" 
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-[#00F0FF] font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Simular
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-400 shrink-0" />
                    Filmmaker Professional (Câmeras 4K)
                  </td>
                  <td className="py-4 px-6 font-bold text-white">
                    R$ 160 <span className="text-[10px] text-gray-500 font-normal">/ hora</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Captação Cinematográfica 4K</td>
                  <td className="py-4 px-6 text-gray-400">Pix / Faturamento PJ</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="#simulador-orcamento" 
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-[#00F0FF] font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Simular
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00F0FF] shrink-0" />
                    Edição e Pós-produção Audiovisual
                  </td>
                  <td className="py-4 px-6 font-bold text-white">
                    R$ 297 <span className="text-[10px] text-gray-500 font-normal">/ min final</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Aftermovie / Vídeo Institucional em 3-5 dias</td>
                  <td className="py-4 px-6 text-gray-400">Pix / Faturamento PJ</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="#simulador-orcamento" 
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-[#00F0FF] font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Simular
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
                    Assessoria de Tráfego Pago
                  </td>
                  <td className="py-4 px-6 font-bold text-[#00F0FF]">
                    R$ 1.500 <span className="text-[10px] text-gray-500 font-normal">/ mês</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">Gestão diária Meta, Google, TikTok e LinkedIn Ads</td>
                  <td className="py-4 px-6 text-gray-400">Mensal recorrente / Boleto PJ</td>
                  <td className="py-4 px-6 text-right">
                    <a 
                      href="https://wa.me/5549984101144?text=Quero%20contratar%20Tráfego%20Pago" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#2563EB] hover:bg-blue-600 text-white font-bold rounded text-[10px] uppercase inline-block"
                    >
                      Contratar
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#050810] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mt-4 uppercase tracking-tight">
              Perguntas sobre Faturamento e Preços
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-gray-800 bg-[#0A0F1C] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-white hover:text-[#00F0FF] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#00F0FF] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-[#94A3B8] leading-relaxed border-t border-gray-800/60 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[#0A0F1C] border-t border-gray-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Precisa de um Projeto Personalizado?
          </h2>
          <p className="text-[#94A3B8] text-xs md:text-sm max-w-xl mx-auto mb-8">
            Nossa equipe prepara uma proposta comercial sob medida para demandas corporativas de grande porte ou coberturas de eventos em todo o Brasil.
          </p>

          <a
            href="https://wa.me/5549984101144?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20personalizada%20de%20marketing%20e%20audiovisual."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00F0FF] text-[#0A0F1C] font-black text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <Phone className="w-4 h-4" /> Solicitar Proposta Especial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-400 text-xs bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Comercial</a>
            <a href="/precos" className="px-5 py-2 rounded-full border border-[#00F0FF]/40 text-[#00F0FF] font-semibold transition-all">Preços & Orçamentos</a>
            <a href="https://lp.autolead.site/institucional" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Institucional</a>
            <a href="/agentes" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Compre Robôs de IA</a>
            <a href="/loja" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Contrate Humanos</a>
            <a href="/jobs" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Seja um Freela</a>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-[#F8FAFC]">VirtualPlace — Inteligência Artificial, Audiovisual & Marketing</p>
            <p className="text-[10px] text-gray-600">CNPJ & Termos de Uso • Todos os Direitos Reservados © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
