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
  AlertCircle
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
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [promoDate, setPromoDate] = useState('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatted = tomorrow.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
    setPromoDate(formatted);
  }, []);

  const promptTemplate = `[PROMPT PREMIUM CLAUDE 3.5 SONNET / FABLE 5]
Atue como o Head de Growth da Virtual Place. Seu objetivo é analisar o nicho do usuário e estruturar uma máquina de marketing com IA de altíssima conversão.
Foque em estruturar:
1. Roteiro cirúrgico de conversão rápida para WhatsApp.
2. Três variações de criativos de alta retenção para tráfego pago (Meta/Google).
3. Configuração de 3 SubAgentes focados em: Qualificação de Leads, Resposta Rápida e Remarketing Ativo.
Entregue o plano completo focado em gerar ROAS e vendas no piloto automático.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptTemplate);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 3000);
  };

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
        window.location.href = 'https://t.me/VirtualPlaceIAbot?text=%2Fbot%20Ol%C3%A1%20Jarvis%2C%20Quero%20Contratar%20um%20Servi%C3%A7o';
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
      description: "Campanhas profissionais e cirúrgicas no Meta Ads, Google Ads e TikTok Ads gerando leads qualificados para alimentar seus funis de IA continuamente.",
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
      desc: "Ativamos campanhas no Google e Meta Ads focando no público comprador exato.",
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
      a: "É a nossa assessoria mensal premium onde criamos, monitoramos e otimizamos diariamente suas campanhas no Meta Ads, Google Ads e TikTok Ads. Focamos em copywriting de alta conversão para atrair leads prontos para seus funis de IA." 
    },
    { 
      q: "Como posso testar os agentes de inteligência artificial gratuitamente?", 
      a: "Você pode interagir e testar nossos robôs em tempo real agora mesmo através do nosso bot do Telegram. Clique no botão de teste grátis e simule exatamente o poder de atendimento que seu cliente receberá." 
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between h-16">
          <div className="shrink-0 flex items-center">
            <img 
              src="https://i.imgur.com/w2iO5CR.png" 
              alt="Virtual Place Logo" 
              className="h-8 md:h-10 w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('oferta-irresistivel')}
              className="text-xs md:text-sm font-black text-purple-400 hover:text-white uppercase tracking-tight hidden sm:inline-block transition-colors cursor-pointer"
            >
              Ver Tabela de Valores
            </button>
            <a 
              href="https://wa.me/5549984101144?text=Ol%C3%A1%2C%20vi%20o%20an%C3%BAncio%20e%20quero%20um%20teste%20gr%C3%A1tis%20do%20Jarvis%20da%20VirtualPlace"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-tight transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section (Above the Fold) */}
      <section className="relative pt-32 pb-24 md:pt-36 md:pb-28 overflow-hidden border-b border-[#2563EB]/20">
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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap className="w-3.5 h-3.5 text-[#00F0FF]" /> AGENTES DE IA QUE GERAM LEADS ENQUANTO VOCÊ DORME
            </span>
            
            {/* Impact Headline - Max 10-12 words */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight uppercase">
              Atraia leads e feche vendas 24h por dia no piloto automático com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-400">Agentes de IA</span>
            </h1>
            
            {/* Subheadline with core benefit + numeric proof */}
            <p className="text-[#94A3B8] text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Reduza custos operacionais em até <strong>90%</strong> e alcance até <strong>+340% mais leads qualificados em 30 dias</strong> integrando robôs de conversão e tráfego pago de alta conversão.
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
                href="https://wa.me/5549984101144?text=Ol%C3%A1%2C%20vi%20o%20an%C3%BAncio%20e%20quero%20um%20teste%20gr%C3%A1tis%20do%20Jarvis%20da%20VirtualPlace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] font-black text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(0,240,255,0.45)] cursor-pointer"
              >
                <Rocket className="w-5 h-5" /> Quero Testar Grátis No WhatsApp
              </a>
              
              <button 
                onClick={() => scrollToSection('oferta-irresistivel')}
                className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <Calculator className="w-5 h-5" /> Ver Planos & Preços de Serviços
              </button>
            </div>

            {/* Video Section - Kept Exactly as requested, placed right below */}
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#00F0FF] animate-pulse" /> Assista em 1 minuto como funciona nosso ecossistema audiovisual e inteligente:
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
            <button 
              onClick={() => scrollToSection('oferta-irresistivel')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] transition-all font-black text-xs uppercase cursor-pointer"
            >
              <Calculator className="w-4 h-4" /> Ver Planos e Valores do Ecossistema
            </button>
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
            <button 
              onClick={() => scrollToSection('oferta-irresistivel')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-[#00F0FF] text-white hover:from-purple-600 hover:to-[#00D8E6] transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <Calculator className="w-4 h-4" /> Começar Agora - Ver Opções de Planos
            </button>
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
            <button 
              onClick={() => scrollToSection('oferta-irresistivel')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] transition-all font-black text-xs uppercase cursor-pointer"
            >
              <Calculator className="w-4 h-4" /> Ver Planos e Ativar Meu Robô
            </button>
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
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded border border-[#00F0FF]/30 uppercase tracking-widest">
                    PDF Grátis
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  Guia Secreto de IA e Tráfego: Como divulgar sua cavalgada / evento
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Descubra os pilares secretos para planejar, atrair milhares de pessoas e automatizar as respostas e vendas de ingressos do seu evento regional.
                </p>
              </div>
              <a 
                href="https://wa.me/5549984101144?text=Quero%20receber%20o%20Guia%20Secreto%20de%20IA%20e%20Tr%C3%A1fego%20sobre%20como%20divulgar%20cavalgadas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gray-900 hover:bg-[#00F0FF]/20 border border-gray-800 hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] transition-all text-xs font-black uppercase text-center flex items-center justify-center gap-1.5"
              >
                <ArrowDownToLine className="w-4 h-4" /> Baixar Guia de Eventos Gratuitamente
              </a>
            </div>

            {/* Magnet 2 */}
            <div className="p-6 rounded-2xl bg-[#0A0F1C] border border-gray-800 flex flex-col justify-between hover:border-purple-500/40 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 border border-purple-500/30">
                    <Car className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/30 uppercase tracking-widest">
                    Tutorial Prático
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">
                  Rastreamento de Conversas para Venda de Carros (Tutorial Tintim)
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Aprenda o passo a passo completo para rastrear leads de anúncios patrocinados que entram no seu WhatsApp e feche mais veículos de forma previsível.
                </p>
              </div>
              <a 
                href="https://wa.me/5549984101144?text=Ol%C3%A1%2C%20quero%20o%20tutorial%20Tintim%20para%20venda%20e%20rastreamento%20de%20an%C3%BAncios%20de%20carros" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gray-900 hover:bg-purple-500/20 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-purple-400 transition-all text-xs font-black uppercase text-center flex items-center justify-center gap-1.5"
              >
                <ArrowDownToLine className="w-4 h-4" /> Baixar Tutorial Tintim Gratuitamente
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => scrollToSection('oferta-irresistivel')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all font-black text-xs uppercase cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Calculator className="w-4 h-4" /> Prefiro Ir Direto aos Planos & Preços
            </button>
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
                "Tivemos ROI de 3x e 4x na nossa operation comercial"
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
              <button 
                onClick={() => scrollToSection('oferta-irresistivel')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] transition-all font-black text-xs uppercase cursor-pointer shadow-lg"
              >
                <Calculator className="w-4 h-4" /> Ver Planos e Garantir Minha Vaga
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLAUDE 3.5 SONNET / FABLE 5 PROMPTS TEMPLATE SECTION */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#050810] border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Sparkles className="w-40 h-40 text-purple-400" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2563EB]/15 text-[#00F0FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-[#2563EB]/35">
                  <Brain className="w-3.5 h-3.5" /> RECURSO PARA CLAUDE 3.5 SONNET / FABLE 5
                </span>
                <span className="text-xs font-bold text-gray-400">Gratuito para Visitantes</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-white">
                Template de Prompt para Configuração de Tráfego e Agentes
              </h3>
              
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                Copie o prompt profissional abaixo e cole no seu modelo de IA favorito (Claude, GPT, Gemini) para planejar sua primeira campanha de tráfego integrado a robôs virtuais.
              </p>

              <div className="relative rounded-xl bg-black/60 p-4 border border-[#2563EB]/20 font-mono text-[11px] text-zinc-300 leading-relaxed max-h-52 overflow-y-auto whitespace-pre-wrap">
                {promptTemplate}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={copyToClipboard}
                  className="px-5 py-2.5 rounded-lg bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] font-extrabold text-xs uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#0A0F1C]" /> Prompt Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copiar Prompt de Growth
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Oferta Irresistível & Tabela de Valores (Planos atualizados) */}
      <section id="oferta-irresistivel" className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
              VALORES CLAROS E TRANSPARENTES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight text-center">
              Opções de Serviços e Baixo Ticket
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-xs md:text-sm text-center">
              Escolha a solução ideal para seu momento atual de escala comercial ou de inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            
            {/* PLANO BAIXO TICKET (R$197) - ESTRELA DO TRÁFEGO PAGO */}
            <div className="p-8 rounded-2xl border-2 border-purple-500 bg-[#050810] flex flex-col justify-between relative overflow-hidden group hover:border-purple-400 transition-all shadow-2xl">
              
              <div className="absolute top-4 right-4 bg-[#00F0FF] text-[#0A0F1C] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                Mais Vendido
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center border border-purple-500/30 text-[#00F0FF]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">
                    Download Imediato
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  Squad Jarvis IA
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Baixe e implemente instantaneamente o nosso assistente mestre Jarvis e seu Squad de <strong>30 SubAgentes de IA</strong> programados para atuar em diversas áreas da sua empresa.
                </p>

                {/* Preço de R$197 */}
                <div className="mb-6 p-4 rounded-xl bg-[#0A0F1C] border border-gray-800">
                  <div className="text-[10px] text-gray-500 line-through">De R$ 997,00 por apenas</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm font-bold text-white">R$</span>
                    <span className="text-3xl font-black text-[#00F0FF]">197</span>
                    <span className="text-xs text-gray-500">pagamento único</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-extrabold mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Acesso vitalício aos robôs
                  </p>
                </div>

                {/* Recursos */}
                <ul className="space-y-2 mb-8">
                  {[
                    "Assistente Master Jarvis inteligente",
                    "30 SubAgentes de IA prontos",
                    "Roteiros de vendas para WhatsApp",
                    "Acesso aos melhores prompts do mercado",
                    "Manual simples de importação"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de checkout Kiwify integrado */}
              <div className="pt-5 border-t border-gray-800">
                <a
                  href="https://pay.kiwify.com.br/zABsvn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer block shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  <Rocket className="w-4 h-4" /> Baixar Robôs por R$ 197
                </a>
                
                <a 
                  href="https://wa.me/5549984101144?text=acabei%20de%20comprar%20o%20Jarvis%20da%20VirtualPlace%2C%20quero%20meu%20onboarding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-[10.5px] text-gray-400 hover:text-white underline mt-3 transition-colors"
                >
                  Comprar pelo WhatsApp e receber onboarding
                </a>
              </div>
            </div>

            {/* Plano 2: Cobertura de Vídeos e Audiovisual */}
            <div className="p-8 rounded-2xl border border-gray-800 bg-[#050810] flex flex-col justify-between relative overflow-hidden group hover:border-[#00F0FF]/30 transition-all shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/15 flex items-center justify-center border border-[#00F0FF]/25 text-[#00F0FF]">
                    <Video className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded border border-[#00F0FF]/20">
                    Registro Profissional
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  Produção Vídeos
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Equipe de filmagem, captação cinematográfica, aftermovie de eventos corporativos e captação móvel de altíssimo padrão.
                </p>

                {/* Opções de Preço por Hora */}
                <div className="space-y-3.5 mb-8">
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C] border border-gray-800/80">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-white uppercase">Videomaker Mobile</span>
                      <span className="text-xs font-black text-[#00F0FF]">R$ 80 / hora</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0A0F1C] border border-gray-800/80">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-white uppercase">Filmmaker Professional</span>
                      <span className="text-xs font-black text-white">R$ 160 / hora</span>
                    </div>
                  </div>

                  {/* USER REQUEST PRICE ADDITION */}
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C] border border-[#00F0FF]/20">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-white uppercase flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#00F0FF]" /> Edição</span>
                      <span className="text-xs font-black text-[#00F0FF]">R$ 297 / minuto final</span>
                    </div>
                    <p className="text-[9px] text-[#94A3B8] mt-1">Edição e pós-produção audiovisual de alta performance, sonorização e correção de cores.</p>
                  </div>
                </div>
              </div>

              {/* Botão de redirecionamento */}
              <div className="pt-5 border-t border-gray-800 flex justify-center">
                <a
                  href="/loja"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-[#0A0F1C] border border-gray-800 hover:border-white text-gray-300 hover:text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4" /> Simular na Calculadora
                </a>
              </div>
            </div>

            {/* Plano 3: Consultoria e Assessoria de Tráfego Pago (R$1.500) */}
            <div className="p-8 rounded-2xl border border-gray-800 bg-[#050810] flex flex-col justify-between relative overflow-hidden group hover:border-[#00F0FF]/30 transition-all shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/15 flex items-center justify-center border border-[#2563EB]/25 text-[#00F0FF]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded border border-[#00F0FF]/20">
                    Performance e ROAS
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  Assessoria Tráfego
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                  Gestão completa e diária das suas campanhas de anúncios patrocinados no Meta Ads e Google Ads para atração massiva de clientes.
                </p>

                {/* Opções de Preço */}
                <div className="space-y-3 mb-8">
                  <div className="p-4 rounded-xl bg-[#0A0F1C] border border-gray-800/80 hover:border-[#2563EB]/40 transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-white uppercase">Consultoria Mensal</span>
                      <span className="text-sm font-black text-[#00F0FF]">R$ 1.500 <span className="text-[10px] font-normal text-gray-500">/ mês</span></span>
                    </div>
                    <div className="text-[10px] text-[#94A3B8] leading-relaxed mt-3 space-y-1 block">
                      <div>• Otimização e testes de criativos diários.</div>
                      <div>• Criação de públicos compradores e públicos de remarketing.</div>
                      <div>• Relatórios mensais completos de retorno sobre investimento.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de redirecionamento */}
              <div className="pt-5 border-t border-gray-800 flex justify-center">
                <a
                  href="/loja"
                  className="w-full text-center py-3.5 px-4 rounded-xl bg-[#0A0F1C] border border-gray-800 hover:border-white text-gray-300 hover:text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4" /> Ver na Calculadora Completa
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form/CTA Block (Optimized with direct CTA routing to lower friction) */}
          <div id="conversion-cta-block" className="max-w-4xl mx-auto mt-16 bg-[#050810] border border-gray-850 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(37,99,235,0.05)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                  Comece Seu Teste Gratuito
                </h3>
                <p className="text-[#94A3B8] text-xs md:text-sm leading-relaxed mb-6">
                  Qualifique e atenda automaticamente no WhatsApp. Fale com um consultor comercial da Virtual Place ou ative nossa triagem gratuita agora.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Diagnóstico de tráfego pago gratuito</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Roteiro de copywriting para o WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-stretch justify-center">
                <a 
                  href="https://wa.me/5549984101144?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20Campanha%20de%20Marketing%2C%20como%20funciona%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <TrendingUp className="w-4 h-4" /> Iniciar Campanha de Marketing
                </a>
                
                <a 
                  href="https://t.me/VirtualPlaceIAbot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-gray-900 hover:bg-[#00F0FF]/20 border border-gray-800 hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] font-black text-xs uppercase flex items-center justify-center gap-2 transition-all text-center cursor-pointer"
                >
                  <Rocket className="w-4 h-4" /> Quero Testar Grátis No Telegram
                </a>

                <a 
                  href="https://t.me/VirtualPlaceIAbot?start=Quero_ser_contratado" 
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
              href="https://wa.me/5549984101144?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20Campanha%20de%20Marketing%2C%20como%20funciona%3F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] font-black text-sm uppercase flex items-center justify-center gap-2 transition-all text-center"
            >
              <TrendingUp className="w-5 h-5" /> Iniciar Tráfego No WhatsApp
            </a>
            
            <a 
              href="https://t.me/VirtualPlaceIAbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-[#050810] border border-gray-800 hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] font-black text-sm uppercase flex items-center justify-center gap-2 transition-all text-center"
            >
              <Rocket className="w-5 h-5" /> Testar Grátis No Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-400 text-xs bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/institucional" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Institucional</a>
            <a href="/agentes" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Compre Robôs de IA</a>
            <a href="/loja" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Contrate Humanos</a>
            <a href="/jobs" className="px-5 py-2 rounded-full border border-[#2563EB]/20 hover:border-[#00F0FF] text-[#94A3B8] hover:text-[#00F0FF] font-semibold transition-all">Seja um Freela (Trabalhe Conosco)</a>
          </div>
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
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
