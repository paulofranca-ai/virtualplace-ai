import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Brain, MousePointerClick, BarChart3, CheckCircle2, ArrowRight, Loader2, Mail, Phone, User, Building, TrendingUp, Target, Users, PlayCircle, Car, Award, ChevronDown, Instagram } from 'lucide-react';

// ============================================================================
// CONFIGURAÇÃO DO GOOGLE SHEETS (APPS SCRIPT)
// ============================================================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyeI7VMfWsoKX3kE0oaJdi8NouXhxYmak1lPNatGhmEzb-zj1jTaw1OjPjIxzP5xUSU/exec";

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+55', company: '', instagram: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'phone') {
          formDataToSend.append(key, `${formData.countryCode} ${formData.phone}`);
        } else if (key !== 'countryCode') {
          formDataToSend.append(key, value as string);
        }
      });

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

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

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30">
      {/* Featured Service Section (Now Hero) */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-medium text-white mb-6">
                <Target className="w-4 h-4" />
                NOVO SERVIÇO EM FOCO
              </div>
              <h1 className="text-2xl md:text-5xl font-bold mb-6 text-white leading-tight">
                O MELHOR AGENTE DE IA COMO MAESTRO DA SUA NOVA EMPRESA DE AGENTES DE INTELIGÊNCIA ARTIFICIAL
              </h1>
              {/* Video Embed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video relative bg-gray-900 mb-10"
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/AR0CrvxlnQ4?autoplay=1&loop=1&playlist=AR0CrvxlnQ4&mute=0&rel=0"
                  title="Treinamento OpenClaw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="https://pay.kiwify.com.br/x6qCx7u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-bold flex items-center justify-center gap-2 transition-all text-sm"
                >
                  CONTRATE JÁ
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 rounded-full bg-transparent border border-white hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  AGENDAR DEMO
                </button>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Vendemos a configuração, treinamento e suporte para a plataforma opensource que não apenas conversa, mas age com foco em solução e resultado. Com nossa consultoria você terá velocidade na implementação, maior segurança e melhor economia de tokens, a unidade de medida de consumo de I.A.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium mb-4 text-gray-400"
          >
            Sistema de Vendas e Comunicação com Inteligência Artificial
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
          >
            CRM Partner
          </motion.h3>

          {/* Video moved from Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video relative bg-gray-900 mb-12"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Arv9cMfd-Kg?autoplay=0&rel=0"
              title="Sistema de Vendas IA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <button 
              onClick={scrollToForm}
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-bold flex items-center justify-center gap-2 transition-all text-sm"
            >
              <PlayCircle className="w-4 h-4" />
              AGENDAR DEMO
            </button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Se você é uma empresa, instituição ou figura pública, nosso Ecossistema Comercial e Institucional vai resolver seus gargalos de forma eficiente e com custos otimizados, visando retorno e influência do público com base em comportamento humano e inteligência de dados.
          </motion.p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm font-medium text-white mb-16">
            <Award className="w-4 h-4" />
            Lançador 6 em 7
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
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
                className="flex flex-col items-center justify-center"
              >
                <item.icon className="w-8 h-8 text-white mb-4 opacity-80" />
                <div className="text-5xl font-bold text-white mb-3 tracking-tight">{item.val}</div>
                <div className="text-gray-400 text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Facebook Ads Print */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="/fb-ads-results.png" alt="Resultados Facebook Ads" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-900/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O que dizem nossos clientes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Veja o impacto real da nossa metodologia na visão de quem já está escalando.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[9/16] relative bg-black"
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
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossas Soluções</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que sua empresa precisa para crescer de forma previsível e escalável no ambiente digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: 'Tráfego Pago', desc: 'Gestão de anúncios focada em conversão, autoridade e posicionamento de marca.' },
              { icon: MousePointerClick, title: 'Landing Pages', desc: 'Páginas institucionais e comerciais otimizadas para experiência do usuário e conversão.' },
              { icon: Brain, title: 'Agentes de IA', desc: 'Funcionários trabalhando por você 24/7 sem reclamar.' },
              { icon: Rocket, title: 'Criativos', desc: 'Design e vídeos de alta performance que transmitem credibilidade e capturam a atenção.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-white/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Portfólio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Confira alguns dos nossos trabalhos de destaque.</p>
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
              <div key={`yt-${idx}`} className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative bg-gray-900">
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
              <div key={`ig-${idx}`} className="rounded-2xl overflow-hidden border border-white/10 aspect-[9/16] relative bg-gray-900">
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

      {/* Form Section */}
      <section id="contact-form" className="py-24 relative bg-gray-900/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Pronto para escalar sua marca?</h2>
                <p className="text-gray-400 mb-8">
                  Preencha o formulário abaixo. Nossa equipe analisará seu cenário e entrará em contato com um plano de ação estratégico e comercial.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Diagnóstico do seu posicionamento atual',
                    'Estratégia personalizada de presença digital',
                    'Foco total em aumento de audiência institucional ou monetizável, com análise de dados dos usuários e inteligência artificial.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu Nome" 
                      className="w-full bg-gray-900 border border-white/20 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-500"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail Profissional" 
                      className="w-full bg-gray-900 border border-white/20 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select 
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-gray-900 border border-white/20 rounded-xl py-3 px-2 focus:outline-none focus:border-white text-white"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.code} className="bg-black">{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <div className="relative flex-grow">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="WhatsApp" 
                        className="w-full bg-gray-900 border border-white/20 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da Empresa" 
                      className="w-full bg-gray-900 border border-white/20 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      name="instagram"
                      required
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="@ do Instagram" 
                      className="w-full bg-gray-900 border border-white/20 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-white hover:bg-gray-200 text-black font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-6"
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
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <img 
            src="/logo.png" 
            alt="Agência Virtual Place Logo" 
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
