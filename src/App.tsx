import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, MousePointerClick, BarChart3, CheckCircle2, ArrowRight, Loader2, Mail, Phone, User, Building, TrendingUp, Target, PlayCircle, Car, Award, Instagram, Shield, Clock, Zap, Plus, Minus } from 'lucide-react';
import { supabase } from './lib/supabase';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: fullPhone,
            company: formData.company,
            instagram: formData.instagram,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
      
      // Redireciona após 5 segundos
      setTimeout(() => {
        window.location.href = 'https://calendly.com/paulotrafegopago/consultoria-gratuita';
      }, 5000);
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
    { q: "Como funciona a cobertura de eventos?", a: "Nossa equipe cuida de tudo: desde a pré-divulgação estratégica para atrair público, até a entrega de fotos, vídeos, stories em tempo real e o aftermovie final que consolida o sucesso do evento." },
    { q: "A IA pode ser usada no setor público?", a: "Sim. Implementamos soluções de IA para automação de atendimento ao cidadão, triagem de demandas e análise de dados, garantindo mais eficiência e transparência na gestão municipal ou associativa." },
    { q: "Qual o prazo de entrega dos materiais audiovisuais?", a: "Para coberturas de eventos, entregamos conteúdos para redes sociais (stories/reels) em tempo real ou em até 24h. O aftermovie e o material completo de cobertura são entregues em poucos dias úteis." },
    { q: "Como a consultoria ajuda na influência institucional?", a: "Trabalhamos o posicionamento de autoridade da sua instituição, garantindo que sua mensagem chegue com clareza e impacto ao público-alvo, fortalecendo a imagem pública e o engajamento comunitário." }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-[#00F0FF]/30">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-[#2563EB]/20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop" 
            alt="Abstract Tech Background" 
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
              <div className="flex items-center gap-2 text-[#00F0FF] mb-6 tracking-[0.2em] text-[10px] font-black uppercase">
                <Target className="w-4 h-4" />
                CONSULTORIA EM IA E ASSESSORIA DE MARKETING
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-[#F8FAFC] leading-tight tracking-tight">
                Potencialize sua Influência e Resultados com um Ecossistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#2563EB]">Comercial e Institucional</span> Inteligente
              </h1>
              
              <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                Unimos Audiovisual de alto impacto, Design estratégico e IA para associações, municípios e empresas. Da cobertura completa de eventos à automação de processos, entregamos autoridade e engajamento real para o seu público.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://pay.kiwify.com.br/x6qCx7u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold flex items-center justify-center gap-2 transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                >
                  CONTRATE JÁ
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 rounded-full bg-transparent border border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 text-[#00F0FF] font-bold flex items-center justify-center gap-2 transition-all text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  AGENDAR ANÁLISE
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
                Sua instituição ou empresa sofre com a falta de engajamento e visibilidade?
              </h2>
              <p className="text-[#94A3B8] text-lg mb-6 leading-relaxed">
                Seja no setor público ou privado, a comunicação ineficiente drena recursos. Eventos sem cobertura profissional perdem o timing, e a falta de automação sobrecarrega sua equipe.
              </p>
              <ul className="space-y-4">
                {[
                  'Eventos importantes sem registro ou divulgação estratégica',
                  'Baixo engajamento da comunidade ou clientes nas redes sociais',
                  'Processos institucionais lentos e dependentes de tarefas manuais',
                  'Dificuldade em transmitir autoridade e transparência'
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <h3 className="text-xl font-bold mb-6 text-white">O Impacto da Agilidade e IA</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#94A3B8]">Exigem resposta imediata em vendas/suporte*</span>
                      <span className="text-[#00F0FF] font-bold">82%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-[#00F0FF] h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <p className="text-[10px] text-[#64748B] mt-2 italic">*Fonte: HubSpot Consumer Research</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#94A3B8]">Economia de tempo com IA (Tarefas Repetitivas)</span>
                      <span className="text-orange-400 font-bold">~12.5h/semana</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-[10px] text-[#64748B] mt-2 italic">Média de economia por colaborador (Fonte: Nielsen Norman Group)</p>
                  </div>

                  <div className="pt-4 border-t border-[#2563EB]/20">
                    <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">Cenários de ROI Mensal (Economia Estimada)</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10">
                        <span className="text-xs text-[#94A3B8]">Gestor de Marketing (R$ 100/h)</span>
                        <span className="text-sm font-bold text-[#F8FAFC]">R$ 5.000/mês</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10">
                        <span className="text-xs text-[#94A3B8]">Consultor Especialista (R$ 500/h)</span>
                        <span className="text-sm font-bold text-[#00F0FF]">R$ 25.000/mês</span>
                      </div>
                    </div>
                    <p className="text-[9px] text-[#64748B] mt-3 text-center">Cálculo baseado em 50h economizadas/mês por profissional.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. A Solução */}
      <section className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#050810] border-b border-[#2563EB]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#F8FAFC]">
              A União Perfeita: <br/><span className="text-[#00F0FF]">Marketing + IA</span>
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto mb-12">
              Estancamos a perda de dinheiro e criamos uma máquina de vendas previsível. Nosso ecossistema atrai o cliente ideal e o conduz por um funil de atendimento inteligente, 24 horas por dia, 7 dias por semana.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#00F0FF] font-bold uppercase tracking-widest text-xs mb-4">
              <Award className="w-5 h-5" />
              Especialistas em Lançamentos e Vendas High-Ticket
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Nossos Serviços */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Nossos Pilares de Crescimento</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Tudo o que sua empresa precisa para crescer de forma previsível e escalável no ambiente digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: 'Audiovisual & Eventos', desc: 'Cobertura completa: pré-divulgação, fotos, vídeos, stories em tempo real e aftermovies de alto impacto para associações e municípios.' },
              { icon: MousePointerClick, title: 'Design & Autoridade', desc: 'Identidade visual e interfaces projetadas para transmitir credibilidade institucional e guiar o público com clareza.' },
              { icon: Brain, title: 'Estratégias de IA', desc: 'Implementação de inteligência artificial para automação de atendimento ao cidadão/cliente e análise de dados comportamentais.' },
              { icon: BarChart3, title: 'Mídia & Engajamento', desc: 'Gestão de tráfego pago e orgânico focada em alcance regional, influência e retorno sobre o investimento (ROI).' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#050810] border border-[#2563EB]/20 hover:border-[#00F0FF]/50 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-3xl group-hover:bg-[#00F0FF]/10 transition-colors"></div>
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6 group-hover:bg-[#00F0FF]/20 transition-colors border border-[#2563EB]/20">
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
              { icon: TrendingUp, title: 'Influência Digital', desc: 'Aumento real da percepção de valor e autoridade da sua marca ou instituição.' },
              { icon: Clock, title: 'Timing Perfeito', desc: 'Cobertura e divulgação em tempo real para maximizar o impacto de eventos.' },
              { icon: Shield, title: 'Transparência & Dados', desc: 'Decisões baseadas em inteligência de dados e comportamento humano.' },
              { icon: Zap, title: 'Eficiência Operacional', desc: 'Automação de processos que libera sua equipe para o que realmente importa.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-6 border border-[#2563EB]/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Resultados & Portfólio</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Confira o impacto real da nossa metodologia na visão de quem já está escalando.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {[
              { icon: TrendingUp, val: '738%', label: 'ROAS no Lançamento 6 em 7' },
              { icon: Rocket, val: '34', label: 'Lançamentos de Infoprodutos' },
              { icon: Car, val: '+400', label: 'Veículos vendidos com nossa assessoria' }
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
            {/* Facebook Ads Print */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-[#2563EB]/30 shadow-[0_0_30px_rgba(37,99,235,0.15)] bg-[#050810]"
            >
              <img src="/fb-ads-results.png" alt="Resultados Facebook Ads" className="w-full h-auto object-contain" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* YouTube Videos */}
            {[
              "nnI4p7e8-yc",
              "0PlxH5p4kQM",
              "boIHn_4Oplc",
              "Sq1pGH0imOY",
              "g-o083FkYEI",
              "08VMdyod86Q"
            ].map((videoId, idx) => (
              <div key={`yt-${idx}`} className="rounded-2xl overflow-hidden border border-[#2563EB]/20 aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
            
            {/* Instagram Videos */}
            {[
              "DWW0dniDk64",
              "DO7iQHDjTmW",
              "DOHlp1DDKGq",
              "DVwurwWiQFp",
              "DM-35c4xHE3",
              "DWGp37Cjo1S",
              "DVpDWXVjrZe",
              "DMnknqXOALm",
              "DWhHB-NDaxm",
              "DOhvA4eDVyY",
              "DOqDTJZjg9f",
              "DVi-PRDDUH4",
              "DCkJPY7y1w6"
            ].map((shortcode, idx) => (
              <div key={`ig-${idx}`} className="rounded-2xl overflow-hidden border border-[#2563EB]/20 aspect-[9/16] relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.instagram.com/p/${shortcode}/embed`}
                  title="Instagram video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Sobre a Virtual Place */}
      <section className="py-24 bg-[#050810] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2563EB]/10 border border-[#00F0FF]/30 mb-8 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
              <Building className="w-10 h-10 text-[#00F0FF]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">Sobre a Virtual Place</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              Nascemos da necessidade de unir o que há de mais avançado em tecnologia com estratégias de marketing validadas. Não somos apenas uma agência, somos uma consultoria de negócios focada em implementar inteligência artificial para resolver gargalos comerciais reais.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#2563EB]/20 rounded-xl bg-[#050810] overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#2563EB]/5 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-[#F8FAFC] pr-8">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-[#00F0FF] shrink-0" /> : <Plus className="w-5 h-5 text-[#00F0FF] shrink-0" />}
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

      {/* 9. Form Section (Footer CTA) */}
      <section id="contact-form" className="py-24 relative bg-[#050810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0F1C] border border-[#2563EB]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(37,99,235,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#00F0FF]/10 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#F8FAFC]">Pronto para escalar sua marca?</h2>
                <p className="text-[#94A3B8] mb-8">
                  Preencha o formulário abaixo. Nossa equipe analisará seu cenário e entrará em contato com um plano de ação estratégico e comercial.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Diagnóstico do seu posicionamento atual',
                    'Estratégia personalizada de presença digital',
                    'Foco total em aumento de audiência institucional ou monetizável, com análise de dados dos usuários e inteligência artificial.'
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
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-[#F8FAFC] placeholder-[#94A3B8]"
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
                      placeholder="E-mail Profissional" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-[#F8FAFC] placeholder-[#94A3B8]"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select 
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 px-2 focus:outline-none focus:border-[#00F0FF] text-[#F8FAFC]"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.code} className="bg-[#0A0F1C]">{c.flag} {c.code}</option>
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
                        className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-[#F8FAFC] placeholder-[#94A3B8]"
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
                      placeholder="Nome da Empresa" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-[#F8FAFC] placeholder-[#94A3B8]"
                    />
                  </div>

                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input 
                      type="text" 
                      name="instagram"
                      required
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="@ do Instagram" 
                      className="w-full bg-[#050810] border border-[#2563EB]/30 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-[#F8FAFC] placeholder-[#94A3B8]"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-6 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  {status === 'submitting' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-5 h-5" /> Solicitação Enviada!</>
                  ) : status === 'error' ? (
                    'Erro ao enviar. Tente novamente.'
                  ) : (
                    'Solicitar Análise Gratuita'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2563EB]/20 text-center text-[#94A3B8] text-sm bg-[#0A0F1C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <img 
            src="/logo.png" 
            alt="Virtual Place Logo" 
            className="h-32 md:h-40 w-auto object-contain brightness-110" 
            onError={(e) => {
              console.error("Erro ao carregar a logo no rodapé");
              e.currentTarget.style.display = 'none';
            }}
          />
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
