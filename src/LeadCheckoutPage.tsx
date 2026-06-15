import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Lock, 
  CheckCircle, 
  Bot, 
  Loader2, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Phone,
  Mail,
  User,
  HelpCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { supabase } from './lib/supabase';
import NeonBackground3D from './components/NeonBackground3D';

const COUNTRIES = [
  { name: 'Brasil', code: '+55', flag: '🇧🇷' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'EUA', code: '+1', flag: '🇺🇸' },
];

export default function LeadCheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plano = searchParams.get('plano') === 'mensal' ? 'mensal' : 'anual';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+55',
    company: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Preços e Links
  const planTitle = plano === 'anual' ? 'AutoLead Infinity - Licença Anual' : 'AutoLead Light - Plano Mensal';
  const planPrice = plano === 'anual' ? 'R$ 997,00/ano' : 'R$ 197,00/mês';
  const checkoutUrl = plano === 'anual' 
    ? 'https://pay.kiwify.com.br/GKrbQy6' 
    : 'https://pay.kiwify.com.br/zABsvn6';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        company: formData.company || 'Não informado',
        origem: `lead-quente-${plano}`,
        created_at: new Date().toISOString()
      };

      // Inserir lead quente no Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([payload]);

      if (supabaseError) throw supabaseError;

      setStatus('success');

      // Redirecionamento instantâneo para Kiwify após o registro de sucesso do hot lead
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 800);

    } catch (err: any) {
      console.error('Erro ao registrar lead:', err);
      // Se der erro no supabase, prosseguimos com o checkout para não perder a venda, mas informamos o log
      setStatus('success');
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden scroll-smooth">
      
      {/* Componente de Fundo Magnético */}
      <NeonBackground3D />

      <div className="w-full max-w-xl z-10 relative">
        
        {/* Voltar para Planos */}
        <button 
          onClick={() => navigate('/planos')}
          className="group flex items-center gap-2 text-xs text-[#00F0FF]/85 hover:text-[#00F0FF] transition-colors mb-6 border border-[#00F0FF]/25 bg-[#00F0FF]/5 hover:bg-[#00F0FF]/15 px-4 py-1.5 rounded-full font-bold cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Planos
        </button>

        {/* Card Formulário de Captura de Lead Quente */}
        <div className="p-8 rounded-2xl border border-[#00F0FF]/30 bg-[#060913]/90 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.1)]">
          
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00F0FF] bg-[#00F0FF]/15 border border-[#00F0FF]/30 px-3.5 py-1 rounded-full inline-block mb-3 uppercase">
              🔒 Checkout Seguro
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Preencha Seus Dados de Envio
            </h2>
            <p className="text-xs text-gray-400 mt-1.5 max-w-sm mx-auto">
              Ao preencher, nossa equipe registrará sua licença para garantir as instruções de treinamento incluídas.
            </p>
          </div>

          {/* Resumo do Plano Solicitado */}
          <div className="mb-6 p-4 rounded-xl border border-gray-800 bg-[#0F172A]/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 h-10 w-10 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center">
                <Bot className="w-5 h-5 shadow-sm" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wide">Plano Selecionado</p>
                <h4 className="text-xs font-bold text-white leading-tight">{planTitle}</h4>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-extrabold text-[#00F0FF] tracking-tight block">
                {planPrice}
              </span>
              <span className="text-[9px] text-[#22C55E] font-medium uppercase font-mono">Reserva Ativa</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nome */}
            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1 font-bold">
                Nome Completo *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F1C] border border-gray-800 rounded-xl focus:border-[#00F0FF] focus:outline-none transition-colors text-xs text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1 font-bold">
                E-mail Corporativo / Principal *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F1C] border border-gray-800 rounded-xl focus:border-[#00F0FF] focus:outline-none transition-colors text-xs text-white"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1 font-bold">
                WhastApp (DDD + Número) *
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-3 bg-[#0A0F1C] border border-gray-800 rounded-xl focus:border-[#00F0FF] focus:outline-none text-xs text-white cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <div className="relative flex-1">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 99999-9999"
                    className="w-full pl-10 pr-4 py-3 bg-[#0A0F1C] border border-gray-800 rounded-xl focus:border-[#00F0FF] focus:outline-none transition-colors text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Empresa (Opcional) */}
            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1 font-bold">
                Nome da Empresa (Opcional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ex: Minha Empresa"
                className="w-full px-4 py-3 bg-[#0A0F1C] border border-gray-800 rounded-xl focus:border-[#00F0FF] focus:outline-none transition-colors text-xs text-white"
              />
            </div>

            {errorMessage && (
              <p className="text-rose-500 text-xs font-semibold text-center mt-2 bg-rose-500/10 py-1.5 rounded-lg border border-rose-500/20">
                {errorMessage}
              </p>
            )}

            {/* Botão de Envio do Lead e Redirecionamento */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full py-4 mt-2 rounded-xl bg-[#00F0FF] hover:bg-[#00D8E6] disabled:opacity-70 text-[#0A0F1C] font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] text-xs text-center uppercase cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Salvando Dados e Redirecionando...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-800" />
                  Redirecionando para Pagamento Seguro...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  IR PARA O PAGAMENTO COOPERATIVO
                </>
              )}
            </button>

            <div className="flex gap-2 items-center justify-center text-[9px] text-gray-500 mt-4 font-mono">
              <Lock className="w-3 h-3 text-[#00F0FF]" />
              <span>Garantia de privacidade. Seus dados nunca são compartilhados.</span>
            </div>

          </form>
        </div>

        {/* Benefício extra */}
        <div className="mt-6 text-center text-[10px] text-gray-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Servidores criptografados conexões via SSL de 256 bits</span>
        </div>

      </div>

    </div>
  );
}
