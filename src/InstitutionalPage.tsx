import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, CheckCircle2, ArrowRight, Loader2, Mail, Phone, User, Building, TrendingUp, Target, PlayCircle, Award, Instagram, Shield, Clock, Zap, Plus, Minus, X } from 'lucide-react';
import { supabase } from './lib/supabase';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function InstitutionalPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

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
        origem: 'LP-institucional',
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
        window.location.href = 'https://t.me/VirtualplaceIA_bot';
      }, 2000);
    } catch (error: any) {
      console.error("Erro detalhado ao enviar:", error);
      setErrorMessage(error?.message || 'Erro ao comunicar com o banco de dados. (Sua tabela/RLS está configurada?)');
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

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    { q: "Como funciona a cobertura de eventos institucionais?", a: "Nossa equipe cuida de tudo: desde a pré-divulgação estratégica para envolver a comunidade, até a entrega de fotos, vídeos, stories em tempo real e o aftermovie final que documenta o sucesso e o impacto do evento." },
    { q: "A IA pode ser usada para transparência pública?", a: "Sim. Implementamos soluções de IA para automação de atendimento ao cidadão, triagem de demandas e análise de dados, garantindo mais eficiência, agilidade e transparência na gestão municipal ou associativa." },
    { q: "Como é feito o fomento ao turismo?", a: "Criamos campanhas audiovisuais de alto padrão que destacam as potencialidades da região, focando em atrair visitantes e investidores através de uma narrativa visual envolvente e profissional." },
    { q: "Como a consultoria ajuda na influência institucional?", a: "Trabalhamos o posicionamento de autoridade da sua instituição, garantindo que sua mensagem de prestação de contas chegue com clareza e impacto ao público-alvo, fortalecendo a imagem pública." }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-[#00F0FF]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 md:gap-0">
          <div className="text-[#F8FAFC] font-bold text-xl tracking-tighter shrink-0">
            VIRTUAL<span className="text-[#00F0FF]">PLACE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 items-center">
            <a href="/" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">Comercial</a>
            <a href="/institucional" className="text-xs md:text-sm font-semibold text-[#00F0FF] transition-colors">Institucional</a>
            <a href="https://loja-virtualplace.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-sm font-semibold text-[#F8FAFC] bg-[#2563EB]/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#2563EB]/50 hover:bg-[#2563EB]/40 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] text-center">Contrate Agentes</a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-40 md:pt-32 pb-32 overflow-hidden border-b border-[#2563EB]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2032&auto=format&fit=crop" 
            alt="Institutional Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-[#0A0F1C]/90 to-[#0A0F1C]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2 text-[#00F0FF] mb-6 tracking-[0.2em] text-[10px] font-black uppercase">
                <Shield className="w-4 h-4" />
                SOLUÇÕES ESTRATÉGICAS PARA O SETOR PÚBLICO E ASSOCIAÇÕES
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-[#F8FAFC] leading-tight tracking-tight">
                Eleve a Influência e a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#2563EB]">Transparência</span> da sua Gestão
              </h1>
              
              <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Unimos Audiovisual de alto impacto e Inteligência Artificial para transformar a comunicação institucional. Preste contas com clareza, fomente o turismo e demonstre o uso eficiente dos recursos públicos com tecnologia de ponta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/VirtualplaceIA_bot" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold flex items-center justify-center gap-3 transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                >
                  <Brain className="w-5 h-5" />
                  Iniciar Conversa com Agente de Inteligência Artificial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problema (Agitação da Dor) */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">
                Sua gestão sofre com a falta de percepção de valor pela população?
              </h2>
              <p className="text-[#94A3B8] text-lg mb-6 leading-relaxed">
                A comunicação institucional falha quando não consegue demonstrar resultados. Recursos são investidos, mas sem uma narrativa visual e tecnológica, a percepção de transparência e eficiência é baixa.
              </p>
              <ul className="space-y-4">
                {[
                  'Dificuldade em prestar contas de forma clara e envolvente',
                  'Baixo engajamento da comunidade nos canais oficiais',
                  'Potencial turístico da região subutilizado por falta de divulgação',
                  'Processos de atendimento ao cidadão lentos e manuais'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-[#94A3B8]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#2563EB]/30 bg-[#050810] p-8 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F0FF] to-[#2563EB]"></div>
                <h3 className="text-xl font-bold mb-6 text-white">O Impacto da Comunicação Moderna</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#94A3B8]">Economia de tempo com Automação de IA*</span>
                      <span className="text-[#00F0FF] font-bold">~12.5h/semana</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-[#00F0FF] h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-[10px] text-[#64748B] mt-2 italic">*Economia média reportada por gestores públicos em tarefas operacionais.</p>
                    <div className="flex gap-4 mt-2">
                       <a href="https://www.ibm.com/industries/government/ai" target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#2563EB] hover:underline">IBM Research</a>
                       <a href="https://www.mckinsey.com/industries/public-sector/our-insights" target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#2563EB] hover:underline">McKinsey & Co.</a>
                       <a href="https://www.gartner.com/en/newsroom/press-releases/2024-03-25-gartner-identifies-top-10-strategic-technology-trends-for-government-in-2024" target="_blank" rel="noopener noreferrer" className="text-[9px] text-[#2563EB] hover:underline">Gartner Trends</a>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#94A3B8]">Desperdício anual por microgerenciamento**</span>
                      <span className="text-orange-400 font-bold">R$ 75.000,00</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-[10px] text-[#64748B] mt-2 italic">**Simulação baseada em salário de R$ 20k (Prefeito/Secretário) perdendo 50h/mês.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Nossos Serviços */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Pilares da Gestão Moderna</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Tecnologia e audiovisual a serviço da transparência e do desenvolvimento regional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: 'Cobertura Institucional', desc: 'Registro completo de obras, eventos e ações com foco em prestação de contas e transparência pública.' },
              { icon: Target, title: 'Fomento ao Turismo', desc: 'Produções cinematográficas que elevam o potencial turístico e atraem novos investimentos para a região.' },
              { icon: Brain, title: 'IA Governamental', desc: 'Automação de atendimento ao cidadão e análise de dados para uma gestão mais ágil e baseada em evidências.' },
              { icon: TrendingUp, title: 'Influência & Imagem', desc: 'Estratégias de conteúdo orgânico para fortalecer a autoridade e a imagem da instituição perante a sociedade.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#050810] border border-[#2563EB]/20 hover:border-[#00F0FF]/50 transition-all group relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6 border border-[#2563EB]/20">
                  <service.icon className="w-7 h-7 text-[#00F0FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#F8FAFC]">{service.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefícios Tangíveis */}
      <section className="py-24 bg-[#050810] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Transparência Total', desc: 'Demonstração clara do uso dos recursos públicos através de registros profissionais.' },
              { icon: Clock, title: 'Agilidade no Atendimento', desc: 'IA reduzindo filas e tempo de espera do cidadão em canais oficiais.' },
              { icon: Award, title: 'Autoridade Regional', desc: 'Posicionamento da instituição como referência em gestão e inovação.' },
              { icon: Zap, title: 'Engajamento Cívico', desc: 'Aumento da participação e aprovação popular através de comunicação eficiente.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6 border border-[#2563EB]/30">
                  <item.icon className="w-8 h-8 text-[#00F0FF]" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Prova Social & Portfólio */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Resultados Institucionais</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto mb-4">Confira o impacto real da nossa metodologia na visão da gestão pública.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Building, val: '3', label: 'Associações Atendidas' },
              { icon: Target, val: '5', label: 'Municípios Impactados' },
              { icon: PlayCircle, val: '71', label: 'Vídeos Institucionais (Municipais e Associações)' },
              { icon: Award, val: '123', label: 'Eventos registrados' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#050810] border border-[#2563EB]/20"
              >
                <item.icon className="w-10 h-10 text-[#00F0FF] mb-4 opacity-80" />
                <div className="text-5xl font-bold text-[#F8FAFC] mb-3 tracking-tight">{item.val}</div>
                <div className="text-[#94A3B8] text-sm font-medium text-center">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-12 mb-20 max-w-5xl mx-auto">
            {/* Marcas */}
            <div className="mb-12">
              <h3 className="text-center text-xl font-bold text-[#F8FAFC] mb-8">Empresas que confiaram no nosso trabalho:</h3>
              
              <div className="flex flex-wrap justify-center gap-3 mb-6">
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
                    className="px-4 py-2 rounded-full border border-[#00F0FF]/50 text-[#00F0FF] text-sm font-bold hover:bg-[#00F0FF]/10 transition-all flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    {ig.handle}
                  </a>
                ))}
                
                <div className="px-4 py-2 rounded-full border border-orange-500/50 text-orange-400 text-sm font-bold bg-orange-500/10 flex items-center gap-2">
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
                  <span key={idx} className="px-3 py-1.5 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#94A3B8] text-xs font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-[#2563EB]/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] aspect-video relative bg-black"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/t93fNnIL0v0?autoplay=0&rel=0"
                title="Depoimento Cliente"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* New Results Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <motion.div
                  key={`res-${num}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border-2 border-[#2563EB]/20 shadow-xl bg-[#0A0F1C] cursor-pointer group hover:border-[#00F0FF]/50 transition-all"
                  onClick={() => setSelectedImage(`/Resultados${num}.png`)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={`/Resultados${num}.png`}
                      alt={`Relatório Institucional ${num}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F0FF]">Relatório {num}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#2563EB]/20 rounded-xl bg-[#050810] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#2563EB]/5 transition-colors"
                >
                  <span className="font-semibold text-[#F8FAFC] pr-8">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-[#00F0FF]" /> : <Plus className="w-5 h-5 text-[#00F0FF]" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-[#94A3B8] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-24 relative bg-[#050810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0F1C] border border-[#2563EB]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(37,99,235,0.1)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#F8FAFC]">Inicie a Transformação da sua Gestão</h2>
                <p className="text-[#94A3B8] mb-8">
                  Nossa equipe analisará seu cenário institucional e apresentará um plano de comunicação e tecnologia sob medida.
                </p>
                <ul className="space-y-4">
                  {[
                    'Diagnóstico de imagem e influência',
                    'Plano de cobertura e fomento regional',
                    'Estratégia de modernização com IA'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#94A3B8]">
                      <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden">
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu Nome" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail Institucional" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select 
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 px-2 text-[#F8FAFC]"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <div className="relative flex-grow">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="WhatsApp" 
                        className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input 
                      type="text" 
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Instituição / Município" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                    />
                  </div>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input 
                      type="text" 
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="Instagram (Opcional)" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm text-center">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-6"
                >
                  {status === 'submitting' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Conectando...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-5 h-5" /> Redirecionando para o Telegram...</>
                  ) : (
                    'Iniciar Conversa com Agente de Inteligência Artificial'
                  )}
                </button>
              </form>
              </div>

              {/* Temporary direct CTA replacement for hidden form */}
              <div className="flex flex-col items-center justify-center p-8 bg-[#050810]/50 rounded-2xl border border-[#2563EB]/20">
                <Brain className="w-16 h-16 text-[#00F0FF] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Pronto para começar?</h3>
                <p className="text-[#94A3B8] mb-8 text-center max-w-md">
                  Fale diretamente com nosso Agente de Inteligência Artificial no Telegram.
                </p>
                <a 
                  href="https://t.me/VirtualplaceIA_bot" target="_blank" rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <Brain className="w-5 h-5" />
                  Iniciar Conversa com Agente
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2563EB]/20 text-center text-[#94A3B8] text-sm bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a 
              href="/"
              className="px-6 py-2 rounded-full border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-semibold transition-all hover:bg-[#00F0FF]/5"
            >
              Página Comercial
            </a>
            <a 
              href="https://loja-virtualplace.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-semibold transition-all hover:bg-[#00F0FF]/5"
            >
              Contrate Agentes
            </a>
            <a 
              href="/jobs"
              className="px-6 py-2 rounded-full border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-semibold transition-all hover:bg-[#00F0FF]/5"
            >
              Seja um Freela Credenciado (Trabalhe Conosco)
            </a>
          </div>
          <p>© {new Date().getFullYear()} Virtual Place Institucional. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Image Modal */}
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
            alt="Zoomed Result" 
            className={`transition-all duration-300 ${isZoomed ? 'w-full max-w-none cursor-zoom-out' : 'w-full max-w-5xl cursor-zoom-in'} h-auto object-contain mt-10 mb-10 rounded-xl shadow-2xl`}
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
          />
          <button 
            className="fixed top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-[60]"
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
