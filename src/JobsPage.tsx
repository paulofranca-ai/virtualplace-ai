import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, ShieldCheck, Star, CreditCard, CheckCircle2, ArrowRight, Loader2, Mail, Phone, User, Building, Search, PlayCircle, Plus, Minus, X } from 'lucide-react';
import { supabase } from './lib/supabase';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function JobsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', userType: 'freelancer' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        company: formData.userType, // Reusing company column for userType if needed, or add new
        origem: 'LP-jobs',
        created_at: new Date().toISOString()
      };

      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([payload]);
        
      if (supabaseError) throw supabaseError;
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', countryCode: '+55', userType: 'freelancer' });
      setTimeout(() => {
        window.location.href = 'https://t.me/VirtualPlaceIAbot?text=%2Fbot%20Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20sobre%20o%20trabalho%20da%20VirtualPlace';
      }, 2000);
    } catch (error: any) {
      console.error("Erro detalhado ao enviar:", error);
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

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    { q: "Como funciona a intermediação de pagamento?", a: "O cliente paga pela plataforma. O dinheiro fica retido de forma segura conosco e só é liberado para o freelancer quando o trabalho é entregue e aprovado, garantindo segurança para ambos os lados." },
    { q: "Quem pode se cadastrar como freelancer?", a: "Qualquer profissional que passe pelo nosso rigoroso processo de verificação e qualidade. Buscamos especialistas comprometidos em entregar excelência." },
    { q: "Existe um selo de qualidade?", a: "Sim. Nossos processos de avaliação constante e review dos clientes garantem um selo de qualidade para os profissionais que consistenmente entregam resultados." },
    { q: "Qual o custo para usar a plataforma?", a: "A inscrição é gratuita. Cobramos apenas uma pequena taxa de intermediação sobre os trabalhos concluídos com sucesso para cobrir os custos financeiros e de segurança." }
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
            <a href="/institucional" className="text-xs md:text-sm font-semibold text-[#94A3B8] hover:text-[#00F0FF] transition-colors">Institucional</a>
            <a href="https://loja-virtualplace.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-sm font-semibold text-[#F8FAFC] bg-[#2563EB]/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[#2563EB]/50 hover:bg-[#2563EB]/40 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] text-center">Contrate Agentes</a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-40 md:pt-32 pb-32 overflow-hidden border-b border-[#2563EB]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Colaboração e Trabalho" 
            className="w-full h-full object-cover opacity-20"
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
                <ShieldCheck className="w-4 h-4" />
                SEJA UM FREELA CREDENCIADO
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#F8FAFC] leading-tight tracking-tight">
                Conectando <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#2563EB]">Excelência</span> a Projetos que Importam.
              </h1>
              
              <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                O portal definitivo para vagas e trabalhos pontuais. Com selo de qualidade, intermediação de pagamentos segura e sistema rigoroso de avaliações mútuas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/VirtualPlaceIAbot?text=%2Fbot%20Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20sobre%20o%20trabalho%20da%20VirtualPlace" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-bold flex items-center justify-center gap-3 transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                >
                  <Briefcase className="w-5 h-5" />
                  Conhecer a Plataforma via Agente de IA
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Pilares de Segurança e Qualidade */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Por que ser um Freela Credenciado?</h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">Acabou a insegurança na contratação. Desenhamos um sistema à prova de calotes e entregas ruins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Selo de Qualidade', desc: 'Profissionais verificados e atestados com base em métricas de performance rigorosas.' },
              { icon: CreditCard, title: 'Intermediação de Pagamento', desc: 'O cliente paga seguro na plataforma. O dinheiro só é liberado mediante a entrega aprovada.' },
              { icon: Star, title: 'Avaliação 360º', desc: 'Tanto clientes quanto freelancers se avaliam após o final do projeto. Transparência total.' },
              { icon: Search, title: 'Match Inteligente', desc: 'Nossa Inteligência Artificial conecta o escopo do projeto com o freelancer ideal em segundos.' }
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

      {/* FAQ */}
      <section className="py-24 bg-[#0A0F1C] border-b border-[#2563EB]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F8FAFC]">Como Funciona</h2>
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
                <h2 className="text-3xl font-bold mb-4 text-[#F8FAFC]">Faça parte da nossa rede</h2>
                <p className="text-[#94A3B8] mb-8">
                  Quer contratar os melhores talentos ou quer oferecer seus serviços com segurança de recebimento? Inscreva-se.
                </p>
                <ul className="space-y-4">
                  {[
                    'Sem risco de calote',
                    'Profissionais qualificados',
                    'Acesso e match rápido'
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
                {/* Form fields intentionally hidden per prior request, replacing with specific CTA */}
              </form>
              </div>

              {/* Temporary direct CTA replacement for hidden form */}
              <div className="flex flex-col items-center justify-center p-8 bg-[#050810]/50 rounded-2xl border border-[#2563EB]/20">
                <ShieldCheck className="w-16 h-16 text-[#00F0FF] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2 text-center">Vamos conversar?</h3>
                <p className="text-[#94A3B8] mb-8 text-center max-w-md">
                  Fale com nosso agente assistente para iniciar seu cadastro e entender seu perfil (Cliente ou Freelancer).
                </p>
                <a 
                  href="https://t.me/VirtualPlaceIAbot?text=%2Fbot%20Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20sobre%20o%20trabalho%20da%20VirtualPlace" target="_blank" rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <Briefcase className="w-5 h-5" />
                  Quero fazer parte
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
              Comercial
            </a>
            <a 
              href="/institucional"
              className="px-6 py-2 rounded-full border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-semibold transition-all hover:bg-[#00F0FF]/5"
            >
              Institucional
            </a>
            <a 
              href="https://loja-virtualplace.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#00F0FF] font-semibold transition-all hover:bg-[#00F0FF]/5"
            >
              Contrate Agentes
            </a>
          </div>
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
