import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, MousePointerClick, BarChart3, CheckCircle2, ArrowRight, Loader2, Mail, Phone, User, Building, TrendingUp, Target, PlayCircle, Car, Award, Instagram, Shield, Clock, Zap, Plus, Minus } from 'lucide-react';
import { supabase } from './lib/supabase';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function InstitutionalPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([{ 
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          company: formData.company,
          instagram: formData.instagram,
          created_at: new Date().toISOString()
        }]);
      if (supabaseError) throw supabaseError;
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
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
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-[#2563EB]/20">
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
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold flex items-center justify-center gap-2 transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                >
                  SOLICITAR CONSULTORIA
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 rounded-full bg-transparent border border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 text-[#00F0FF] font-bold flex items-center justify-center gap-2 transition-all text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  VER PORTFÓLIO
                </button>
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
                      <span className="text-[#94A3B8]">População que prefere vídeos para entender ações públicas</span>
                      <span className="text-[#00F0FF] font-bold">87%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-[#00F0FF] h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#94A3B8]">Aumento na percepção de transparência com IA</span>
                      <span className="text-orange-400 font-bold">+65%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
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
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-6"
                >
                  {status === 'submitting' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-5 h-5" /> Solicitação Enviada!</>
                  ) : (
                    'Solicitar Consultoria Institucional'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2563EB]/20 text-center text-[#94A3B8] text-sm bg-[#0A0F1C]">
        <p>© {new Date().getFullYear()} Virtual Place Institucional. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
