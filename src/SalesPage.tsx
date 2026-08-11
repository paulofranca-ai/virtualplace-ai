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
  Scissors
} from 'lucide-react';
import { supabase } from './lib/supabase';
import NeonBackground3D from './components/NeonBackground3D';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function SalesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkoutStatus = searchParams.get('checkout_status');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isStripeLoading, setIsStripeLoading] = useState(false);
  const [stripeError, setStripeError] = useState('');
  
  // Custom states for interactive elements
  const [promoDate, setPromoDate] = useState('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatted = tomorrow.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
    setPromoDate(formatted);
  }, []);

  const handleStripeCheckout = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsStripeLoading(true);
    setStripeError('');
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStripeError(data.error || 'Erro ao conectar ao Stripe.');
        setIsStripeLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      setStripeError('Erro ao iniciar conexão com o Stripe.');
      setIsStripeLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      
      const payload: any = {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        company: formData.company,
        origem: 'LP-comercial',
        created_at: new Date().toISOString()
      };
      if (formData.instagram) payload.instagram = formData.instagram;

      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([payload]);
        
      if (supabaseError) throw supabaseError;
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
      setTimeout(() => {
        window.location.href = 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Enviei%20meus%20dados%20no%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor.';
      }, 2000);
    } catch (error: any) {
      console.error("Erro ao enviar lead:", error);
      setErrorMessage(error?.message || 'Erro de conexão com o banco de dados.');
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 7000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      title: "Atendimento Instantâneo 24/7",
      description: "Qualifique e responda leads no WhatsApp em menos de 10 segundos. Transforme contatos frios em clientes prontos para comprar sem qualquer intervenção manual.",
      badge: "Zero Fricção",
      icon: Zap
    },
    {
      title: "Redução Extrema de Custos",
      description: "Substitua atendimentos lentos e softwares caros por agentes inteligentes treinados com a inteligência do seu negócio.",
      badge: "Até 90% de Economia",
      icon: Shield
    },
    {
      title: "Tráfego e ROAS Otimizados",
      description: "Campanhas profissionais e cirúrgicas no Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads gerando leads qualificados para alimentar seus funis de IA continuamente.",
      badge: "Escala Real",
      icon: TrendingUp
    },
    {
      title: "Automação de Conteúdo e Postagem",
      description: "Sistemas integrados para planejar estratégias, gerar roteiros persuasivos e criar posts de forma totalmente autônoma e inteligente.",
      badge: "Presença Digital",
      icon: Brain
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico de Conversão",
      desc: "Analisamos seus anúncios, copywriting e estrutura atual de vendas para identificar gargalos.",
      icon: Target
    },
    {
      number: "02",
      title: "Anúncios Cirúrgicos",
      desc: "Ativamos campanhas no Meta, Google, TikTok e LinkedIn Ads focando no público comprador exato.",
      icon: MousePointerClick
    },
    {
      number: "03",
      title: "Implantação do Agente de IA",
      desc: "Treinamos e instalamos seus robôs de atendimento e qualificação no WhatsApp e Telegram.",
      icon: Brain
    },
    {
      number: "04",
      title: "Vendas no Piloto Automático",
      desc: "Seu ecossistema rodando 24 horas por dia com alta performance e o menor custo operacional.",
      icon: Rocket
    }
  ];

  const comparisons = [
    {
      activity: "Planejamento e Estratégia de Marketing",
      withoutIA: "Processo lento de pesquisa que leva dias de planejamento para rascunhar ideias básicas.",
      withIA: "Estruturação completa e personalizada em apenas 5 minutos com dados de mercado em tempo real.",
      saved: "Economia de dias de trabalho"
    },
    {
      activity: "Criação de um Post Simples para Redes Sociais",
      withoutIA: "Designers e copywriters gastam cerca de 2 horas para pesquisar, redigir e desenhar uma única arte.",
      withIA: "Geração instantânea em 15 minutos de carrosséis e copys de altíssimo apelo visual.",
      saved: "8x mais rápido"
    },
    {
      activity: "Edição e Tratamento de Fotos do Evento/Produto",
      withoutIA: "Fotógrafo gasta dias de trabalho manual isolando, ajustando cores e exportando uma a uma.",
      withIA: "Tratamento em lote com IA em apenas 30 minutos para mais de 8.000 fotos de altíssima definição.",
      saved: "De dias para 30 minutos"
    },
    {
      activity: "Desenvolvimento de Landing Pages de Alta Conversão",
      withoutIA: "Semanas de reuniões, programadores caros, designers lentos e testes intermináveis.",
      withIA: "Conclusão de páginas ultra otimizadas em apenas 10% do tempo tradicional, acelerando testes de anúncios.",
      saved: "9x mais rápido"
    }
  ];

  const faqs = [
    { 
      q: "Quanto tempo leva?", 
      a: "Download imediato após pagamento, em poucos minutos você conecta com Claude Code, VSCode, Antigravity ou similares e já sai promptando. Mas só o tempo vai otimizar seu cérebro personalizado conforme vai precisando e criando agentes + habilidades." 
    },
    { 
      q: "A inteligência artificial vai substituir meus funcionários humanos?", 
      a: "Não, ela potencializa o trabalho humano. Os robôs cuidam das tarefas repetitivas de triagem e suporte 24h, liberando sua equipe humana para fechar os clientes mais valiosos e estratégicos." 
    },
    { 
      q: "Como funcionam os custos operacionais com chaves de IA?", 
      a: "Diferente de sistemas fechados que cobram taxas abusivas por mensagem, nós configuramos o sistema para usar chaves de API padrão. O custo é extremamente baixo, girando em torno de apenas R$ 100/mês para milhares de atendimentos." 
    },
    { 
      q: "O que está incluso na Consultoria de Tráfego de R$1.500 mensal?", 
      a: "É a nossa assessoria mensal premium onde criamos, monitoramos e otimizamos diariamente suas campanhas no Meta Ads, Google Ads, TikTok Ads e LinkedIn Ads. Focamos em copywriting de alta conversão para atrair leads prontos para seus funis de IA." 
    },
    { 
      q: "Como posso solicitar uma demonstração ou atendimento?", 
      a: "Você pode falar diretamente com nossa equipe no WhatsApp pelo número +55 (49) 99105-2315. Nós tiramos suas dúvidas e apresentamos o ecossistema ideal para a sua empresa." 
    },
    { 
      q: "Preciso ter conhecimento de programação ou tecnologia?", 
      a: "Absolutamente nenhum. Nosso time entrega o ecossistema 100% configurado, testado e integrado. Você só acompanha o fluxo de leads, os relatórios de conversão e o faturamento." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-[#00F0FF]/30 relative overflow-x-hidden">
      <NeonBackground3D />
      
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
              <h4 className="font-bold text-sm">
                {checkoutStatus === 'success' ? 'Pagamento Aprovado!' : 'Pagamento Cancelado'}
              </h4>
              <p className="text-xs opacity-90 mt-1">
                {checkoutStatus === 'success' 
                  ? 'Parabéns! O seu Time de Agentes de IA foi configurado com sucesso. Prepare-se para colher resultados!' 
                  : 'A transação do Stripe foi cancelada. Se precisar de suporte, voltar a qualquer momento.'}
              </p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-3 text-xs font-semibold underline opacity-80 hover:opacity-100 cursor-pointer text-white"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* 1. Navigation (Optimized for paid traffic - Logo + single CTA to reduce friction) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="shrink-0 flex items-center">
            <img 
              src="https://i.imgur.com/w2iO5CR.png" 
              alt="Virtual Place Logo" 
              className="h-[96px] md:h-[120px] w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/precos"
              className="text-xs md:text-sm font-black text-purple-400 hover:text-white uppercase tracking-tight hidden sm:inline-block transition-colors"
            >
              Preços & Orçamentos
            </a>
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20consultor."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-tight transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section (Above the Fold) */}
      <section className="relative pt-48 pb-24 md:pt-56 md:pb-28 overflow-hidden border-b border-[#2563EB]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop" 
            alt="Virtual Place AI Marketing Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/75 via-[#0A0F1C]/90 to-[#0A0F1C]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              CENTRAL DE TALENTOS - AGÊNCIA DE MARKETING
            </span>
            
            {/* Impact Headline - Max 10-12 words */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight">
              Escale seu Negócio com Estrutura Completa: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-400">IA, Tráfego Pago e Produção Audiovisual</span>.
            </h1>
            
            {/* Subheadline with core benefit + numeric proof */}
            <p className="text-[#94A3B8] text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Unimos automação inteligente de vendas com IA, gestão de tráfego pago de alta performance (Meta, Google, TikTok e LinkedIn Ads) e cobertura audiovisual profissional com gravação, fotografia e edição de vídeo. Atraia clientes qualificados e fortaleça sua marca com um ecossistema unificado.
            </p>

            {/* Scarcity Notice */}
            <div className="mb-6 flex justify-center items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <p className="text-xs font-black text-red-400 uppercase tracking-widest">
                VAGAS LIMITADAS PARA DEMONSTRAÇÃO GRATUITA ESTA SEMANA (Promoção até {promoDate})
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-14">
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" /> Comece seu projeto agora
              </a>
            </div>

            {/* Video Section - Kept Exactly as requested, placed right below */}
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#00F0FF] animate-pulse" /> Assista nosso Aftermovie mais recente e contrate ainda hoje nossos Profissionais Indicados com selo FreelaPro da VirtualPlace.
              </p>
              
              <div className="rounded-2xl overflow-hidden border-2 border-[#2563EB]/40 shadow-[0_0_45px_rgba(37,99,235,0.25)] aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ZtC7aKaTD5w?autoplay=0&rel=0"
                  title="SquadClawVirtual - Portfólio de Alta Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção de Benefícios / Resultados */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20">
              VANTAGENS COMPETITIVAS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Máxima Conversão Sem Esforço
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto mt-2 text-sm md:text-base">
              A automatização perfeita que conecta tráfego de alta performance a agentes virtuais que respondem em segundos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#050810] border border-[#2563EB]/20 hover:border-[#00F0FF]/50 transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/20 flex items-center justify-center mb-6">
                  <b.icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <span className="text-[9px] font-bold uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 mb-3 inline-block">
                  {b.badge}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">{b.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
            </a>
          </div>
        </div>
      </section>

      {/* COMPARATIVO: Sem IA vs Com Agentes AutoLead */}
      <section className="py-24 bg-[#050810] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
              MÉTRICAS DE PRODUTIVIDADE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Sem IA vs Com Agentes AutoLead
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto mt-2 text-sm">
              Veja a diferença brutal no tempo de execução e na escala operacional de processos cruciais de marketing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#0A0F1C]/80 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-800 bg-black/40">
                  <th className="p-5 text-xs font-black uppercase text-[#94A3B8]">Processo / Atividade</th>
                  <th className="p-5 text-xs font-black uppercase text-red-400">Operação Sem IA (Antes)</th>
                  <th className="p-5 text-xs font-black uppercase text-[#00F0FF]">Com Agentes AutoLead</th>
                  <th className="p-5 text-xs font-black uppercase text-purple-400 text-right">Resultado / Ganho</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {comparisons.map((c, idx) => (
                  <tr key={idx} className="hover:bg-gray-900/30 transition-colors">
                    <td className="p-5 text-sm font-extrabold text-[#F8FAFC]">{c.activity}</td>
                    <td className="p-5 text-xs text-gray-400 leading-relaxed max-w-[240px]">{c.withoutIA}</td>
                    <td className="p-5 text-xs text-[#F8FAFC] leading-relaxed max-w-[240px] font-medium">
                      <span className="inline-flex items-center gap-1.5 text-[#00F0FF] font-extrabold mb-1 block">
                        <Check className="w-3.5 h-3.5 text-[#00F0FF]" /> IA Ativa
                      </span>
                      {c.withIA}
                    </td>
                    <td className="p-5 text-xs font-black text-purple-400 text-right uppercase tracking-wider">{c.saved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
            </a>
          </div>
        </div>
      </section>

      {/* 4. Como Funciona */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
              IMPLEMENTAÇÃO ACELERADA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              4 Passos Para a Sua Máquina de Vendas
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto mt-2 text-sm">
              Desenvolvemos, testamos e ativamos todo o ecossistema com suporte técnico contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-[#050810] border border-gray-800">
                <div className="absolute top-4 right-4 text-3xl font-black text-gray-800 font-mono">
                  {s.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{s.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
            </a>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / DOWNLOAD GRATUITO DE GUIAS */}
      <section className="py-24 bg-[#050810] border-b border-[#2563EB]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/15 px-3 py-1 rounded border border-[#00F0FF]/30">
              MATERIAIS EXCLUSIVOS E GRATUITOS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Acelere Seus Resultados Agora
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-xs md:text-sm">
              Baixe gratuitamente os nossos guias práticos focados em divulgação, anúncios de alta performance e conversão automática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Magnet 1 */}
            <div className="p-6 rounded-2xl bg-[#0A0F1C] border border-gray-800 flex flex-col justify-between hover:border-[#00F0FF]/40 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/15 flex items-center justify-center text-[#00F0FF] border border-[#00F0FF]/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded border border-[#00F0FF]/30 uppercase tracking-widest">
                    Prompts de IA
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  Prompts para Geração de Imagens de IA para Anúncios
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Descubra os melhores prompts e estruturas visuais para gerar imagens impactantes de alta conversão para seus anúncios patrocinados com Inteligência Artificial.
                </p>
              </div>
              <a 
                href="https://wa.me/5549991052315?text=Quero%20receber%20os%20Prompts%20para%20Gera%C3%A7%C3%A3o%20de%20Imagens%20de%20IA%20para%20An%C3%BAncios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gray-900 hover:bg-[#00F0FF]/20 border border-gray-800 hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] transition-all text-xs font-black uppercase text-center flex items-center justify-center gap-1.5"
              >
                <ArrowDownToLine className="w-4 h-4" /> Baixar Prompts de Imagem
              </a>
            </div>

            {/* Magnet 2 */}
            <div className="p-6 rounded-2xl bg-[#0A0F1C] border border-gray-800 flex flex-col justify-between hover:border-purple-500/40 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 border border-purple-500/30">
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/30 uppercase tracking-widest">
                    Análise Grátis
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  Análise de Perfil Empresarial para Receber Anúncios Patrocinados
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Entenda os critérios essenciais para estruturar o perfil da sua empresa, otimizar sua presença digital e estar 100% pronto para receber campanhas de tráfego pago.
                </p>
              </div>
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%2C%20quero%20solicitar%20a%20An%C3%A1lise%20de%20Perfil%20Empresarial%20para%20An%C3%BAncios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gray-900 hover:bg-purple-500/20 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-purple-400 transition-all text-xs font-black uppercase text-center flex items-center justify-center gap-1.5"
              >
                <ArrowDownToLine className="w-4 h-4" /> Solicitar Análise de Perfil
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
            </a>
          </div>
        </div>
      </section>

      {/* 5. Prova Social, Estatísticas e Marcas */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20">
              AUTORIDADE COMPROVADA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
              Eles Já Estão no Próximo Nível
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto mt-2 text-sm">
              Mais de 60 marcas atendidas com tráfego otimizado, fotografia profissional, audiovisual premium e IA integrada.
            </p>
          </div>

          {/* Marcas Grid */}
          <div className="mb-20 text-center">
            <h3 className="text-sm font-black uppercase text-gray-400 tracking-wider mb-6">
              Nossos Parceiros e Clientes de Sucesso:
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { handle: '@gramatica_na_veia', url: 'https://www.instagram.com/gramatica_na_veia' },
                { handle: '@portuguesplay', url: 'https://www.instagram.com/portuguesplay' },
                { handle: '@andreluis.vsw', url: 'https://www.instagram.com/andreluis.vsw' },
                { handle: '@luizoliveiraoficiall', url: 'https://www.instagram.com/luizoliveiraoficiall' },
                { handle: '@z4.veiculos_', url: 'https://www.instagram.com/z4.veiculos_' },
                { handle: '@fio.automoveis', url: 'https://www.instagram.com/fio.automoveis' },
                { handle: '@regiao_amurc', url: 'https://www.instagram.com/regiao_amurc' },
                { handle: '@culturaturismoamurc', url: 'https://www.instagram.com/culturaturismoamurc' }
              ].map((ig, idx) => (
                <a 
                  key={idx}
                  href={ig.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-800 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF] text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  {ig.handle}
                </a>
              ))}
              <div className="px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold bg-orange-500/10">
                + 61 projetos executados
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                "Vendedor Imbatível", "Escolinha Lucrativa", 
                "Curso Mike Bravo", "Avenida Pneus", 
                "Associação dos Tropeiros", "NZ Motos", "THCElétrica", "Niles Mat Construção", 
                "Lucas Sebbem Advogado", "CM Reparos Automotivos", "Souz Place", "Plantão do Gole", 
                "Fava Cruz Produções", "Hotel Pinotti", "Lia Tattoer", "Vintage Barber Shop"
              ].map((brand, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-[#2563EB]/15 border border-[#2563EB]/25 text-[#94A3B8] text-[10px] font-semibold">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Depoimento em Vídeo Léo que já está no site */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                DEPOIMENTO DO NOSSO CLIENTE LÉO
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                "Venho aqui falar do trabalho do Paulo, gestor de tráfego. Olha, gostei bastante, ele me ajudou em várias campanhas, conseguimos aí a ter ROI de 3x, 4x, alavancando também as minhas vendas."
              </h3>
              <p className="text-[#94A3B8] text-xs md:text-sm leading-relaxed">
                Assista ao depoimento em vídeo gravado pelo nosso parceiro Léo, detalhando como a nossa estratégia de tráfego pago aliada ao atendimento de ponta destravou o crescimento financeiro do negócio.
              </p>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-black text-white text-sm shrink-0 border border-emerald-500/30">
                  L
                </div>
                <div>
                  <h5 className="font-extrabold text-xs text-white">Léo - Parceiro Comercial</h5>
                  <p className="text-[10px] text-gray-400">Escala em Lançamentos e Tráfego Patrocinado</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#2563EB]/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/t93fNnIL0v0?autoplay=0&rel=0"
                  title="Depoimento de Cliente Virtual Place Léo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Results Cases Grid - 9 Images with zoom functionality */}
          <div className="pt-12 border-t border-gray-900">
            <h4 className="text-center text-xs font-black uppercase tracking-widest text-gray-400 mb-8">
              📊 RELATÓRIOS E COMPROVAÇÕES DE CONTAS EXECUTADAS (CLIQUE PARA AMPLIAR):
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div
                  key={`res-${num}`}
                  className="rounded-xl overflow-hidden border-2 border-gray-800 shadow-lg bg-[#050810] cursor-pointer group hover:border-[#00F0FF]/50 transition-all"
                  onClick={() => setSelectedImage(`/Resultados${num}.png`)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={`/Resultados${num}.png`}
                      alt={`Resultado de Performance Virtual Place ${num}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#00F0FF] bg-black/80 px-2 py-0.5 rounded border border-[#00F0FF]/30">
                        Case de Sucesso {num}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Oferta Irresistível & Tabela de Valores (Planos atualizados) */}
      <section id="oferta-irresistivel" className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20 tracking-wider">
              SOLUÇÕES & SERVIÇOS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight text-center">
              Nossos Serviços Especializados
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-xs md:text-sm text-center">
              Conheça em detalhes cada um dos nossos serviços de inteligência artificial, cobertura audiovisual e performance de vendas. Solicite o seu orçamento personalizado pelo WhatsApp.
            </p>
          </div>

          {/* Lista de Serviços um abaixo do outro (sem preços) na ordem solicitada */}
          <div className="space-y-4 max-w-5xl mx-auto mb-12">
            
            {/* 1. Squad Jarvis IA */}
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
                    Assistente Mestre Jarvis com Squad de 30 SubAgentes de IA prontos para automatizar prospecção, qualificação de leads, criação de roteiros para WhatsApp e atendimento comercial 24 horas por dia.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> 30 Agentes Especializados</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Roteiros para WhatsApp</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Importação & Onboarding Rápido</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20Squad%20Jarvis%20IA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 2. Assessoria de Tráfego Pago */}
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
                    Gestão diária das suas campanhas patrocinadas (Meta, Google, TikTok e LinkedIn Ads) focada em atração de clientes compradores e retorno de investimento. Otimização de anúncios, criação de públicos e relatórios transparentes.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Otimização Diária de Campanhas</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-blue-400" /> Criação de Públicos Compradores</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Assessoria%20de%20Tr%C3%A1fego%20Pago."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 3. Edição de Vídeo Avulsa */}
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
                    Edição profissional para materiais e gravações que você já possui. Diferentes durações (1min, 3min, 30min, 1h) e níveis de complexidade (Cortes simples, Avançada com Narração IA inclusa e SuperAvançada com VFX).
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> Edição Simples (Cortes, Cor e Legendas)</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> Edição Avançada (Com Narração IA)</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-violet-400" /> SuperAvançada (Animações 3D & VFX)</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 4. Cobertura Audiovisual de Eventos */}
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
                    Gravação e edição de vídeos institucionais, comerciais, aftermovies e cobertura completa para feiras e congressos. Equipe técnica especializada, câmeras HD/4K e entrega dos arquivos brutos organizados.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Captação Profissional HD/4K</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Arquivos Brutos Inclusos</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#00F0FF]" /> Primeiras 4 Horas Inclusas por Minuto</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Cobertura%20de%20Eventos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 5. Cobertura Fotográfica Profissional */}
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
                    Fotógrafo dedicado no local cobrindo palestras, estandes, participantes, interação de público, marcas e fotos oficiais para assessoria de imprensa.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Fotos em Alta Resolução</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-amber-400" /> Tratamento e Edição de Cor</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Cobertura%20Fotogr%C3%A1fica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 6. StoryMaker (Stories & Reels Realtime) */}
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
                    Cobertura mobile dedicada no estilo StoryMaker, gravando, editando e publicando conteúdos dinâmicos em tempo real diretamente nas redes sociais durante o andamento do seu evento.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-pink-400" /> Captação & Edição Mobile Rápida</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-pink-400" /> Publicação no Mesmo Dia</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex md:flex-col gap-2">
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20StoryMaker."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

            {/* 7. Meia Diária Extra de Captação */}
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
                <a
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Meia%20Di%C3%A1ria%20Extra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Comece seu projeto agora
                </a>
              </div>
            </div>

          </div>

          {/* Banner para página de preços / calculadora */}
          <div className="text-center p-6 rounded-2xl bg-[#050810] border border-gray-800 max-w-2xl mx-auto mb-16">
            <p className="text-xs text-gray-400 mb-3">Deseja simular valores e consultar nossa calculadora de orçamentos?</p>
            <a 
              href="/precos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white font-bold text-xs uppercase transition-all"
            >
              <Calculator className="w-4 h-4" /> Acesse Nossa Tabela de Preços & Calculadora
            </a>
          </div>

          {/* Interactive Form/CTA Block */}
          <div id="conversion-cta-block" className="max-w-4xl mx-auto bg-[#050810] border border-gray-850 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(37,99,235,0.05)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                  Comece Seu Projeto Agora
                </h3>
                <p className="text-[#94A3B8] text-xs md:text-sm leading-relaxed mb-6">
                  Fale com nossa equipe diretamente no WhatsApp para cotação e alinhamento do seu projeto.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span>Orçamento rápido e sem compromisso</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span>Atendimento direto e personalizado via WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-stretch justify-center">
                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" /> Comece seu projeto agora
                </a>

                <a 
                  href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20me%20candidatar%20como%20Freela." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl border border-gray-800 bg-[#0A0F1C] hover:bg-gray-800 text-gray-300 font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Briefcase className="w-4 h-4 text-gray-400" /> Quero ser contratado como Freela
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Objeções / FAQ */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 uppercase tracking-tight">
              Objeções Eliminadas
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl bg-[#050810] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#0A0F1C]/50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm md:text-base text-[#F8FAFC] pr-8">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-4 h-4 text-[#00F0FF] shrink-0" /> : <Plus className="w-4 h-4 text-[#00F0FF] shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-xs md:text-sm text-[#94A3B8] leading-relaxed border-t border-gray-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seção Final com CTA forte + Garantia */}
      <section className="py-24 bg-[#050810] relative text-center border-b border-[#2563EB]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/15 px-3 py-1 rounded border border-[#00F0FF]/30 mb-6">
            <Shield className="w-3.5 h-3.5 text-[#00F0FF]" /> GARANTIA DE SATISFAÇÃO & EFICIÊNCIA
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Não perca mais leads para a concorrência que já usa IA.
          </h2>
          
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-xs md:text-base leading-relaxed mb-10">
            Acelere sua captação de leads e expanda sua presença digital no mercado agora mesmo. Garantimos o funcionamento e a melhor entrega inteligente para o seu negócio decolar de forma sustentável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-10">
            <a 
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20come%C3%A7ar%20meu%20projeto." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase flex items-center justify-center gap-2 transition-all text-center shadow-[0_0_25px_rgba(16,185,129,0.35)]"
            >
              <MessageSquare className="w-5 h-5" /> Comece seu projeto agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-400 text-xs bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/precos" className="px-5 py-2 rounded-full border border-[#00F0FF]/40 text-[#00F0FF] font-semibold transition-all">Preços & Orçamentos</a>
            <a href="https://lp.autolead.site/institucional" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Institucional</a>
            <a href="/agentes" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Compre Robôs de IA</a>
            <a href="/loja" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Contrate Humanos</a>
            <a href="/jobs" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Seja um Freela (Trabalhe Conosco)</a>
          </div>
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-[11px] mt-1">CNPJ: 31.509.856/0001-10</p>
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
            alt="Relatório Zoomed Result Virtual Place" 
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
