import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Rocket, 
  Shield, 
  CheckCircle, 
  Loader2, 
  Mail, 
  Phone, 
  User, 
  Sparkles, 
  Lock,
  Cpu,
  Bot
} from 'lucide-react';
import { supabase } from './lib/supabase';

export default function BuyAgentsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Seta e formata o telefone para um padrão do WhatsApp brasileiro: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Salvar no Supabase (tabela 'leads', mantendo retrocompatibilidade de campos)
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone.startsWith('+55') ? formData.phone : `+55 ${formData.phone}`,
        origem: 'COMPRA-AGENTES',
        created_at: new Date().toISOString()
      };

      // Tentamos salvar no Supabase de forma transparente e flexível
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([payload]);

      if (supabaseError) {
        console.error('Erro ao salvar no Supabase:', supabaseError);
        // Não travamos o fluxo do usuário caso haja erro temporário no banco
      }

      // 2. Chamar o endpoint da API para gerar a sessão do Stripe
      const stripeResponse = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const stripeData = await stripeResponse.json();

      if (stripeData.url) {
        // Redireciona diretamente para o link de checkout do Stripe (real ou simulador)
        window.location.href = stripeData.url;
      } else {
        throw new Error(stripeData.error || 'Não foi possível iniciar a sessão do Stripe.');
      }

    } catch (err: any) {
      console.error('Erro no fluxo de checkout:', err);
      setErrorMessage(err?.message || 'Ocorreu um erro ao processar o seu checkout. Tente novamente.');
      setStatus('error');
      
      // Se houver algum erro catastrófico, deixamos o usuário tentar novamente após 5s
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.07),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.05),transparent_40%)] pointer-events-none" />

      <div className="w-full max-w-5xl">
        {/* Botão de Voltar */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-sm text-[#00F0FF]/80 hover:text-[#00F0FF] transition-colors mb-8 cursor-pointer border border-[#00F0FF]/25 bg-[#00F0FF]/5 hover:bg-[#00F0FF]/10 px-4 py-2 rounded-full font-semibold"
          id="back-button"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para a Loja Virtual
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Coluna de Benefícios da Oferta */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/40 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 text-cyan-500 bg-cyan-500/5 rounded-bl-xl border-l border-b border-gray-800">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-3 py-1 rounded-full">
                ACESSO IMEDIATO
              </span>

              <h1 className="text-3xl font-extrabold tracking-tight mt-6 mb-4 text-white">
                O Time de Agentes de IA
              </h1>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                Garanta o ecossistema completo de robôs inteligentes configurados e treinados sob medida para alavancar suas conversões digitais e atendimento 24/7.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="p-1.5 h-7 w-7 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 shrink-0 text-[#00F0FF]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Agente de Captação e Prospecção</h4>
                    <p className="text-[11px] text-[#94A3B8]">Prospecta clientes potenciais e qualifica leads automaticamente no automático.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1.5 h-7 w-7 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 shrink-0 text-[#00F0FF]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Atendimento WhatsApp Conversor</h4>
                    <p className="text-[11px] text-[#94A3B8]">Responde objeções, apresenta o produto e encaminha leads prontos para pagamento, 24 horas por dia.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1.5 h-7 w-7 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 shrink-0 text-[#00F0FF]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Setup + Treinamento Gravado em Video Aula</h4>
                    <p className="text-[11px] text-[#94A3B8]">Você paga, recebe os arquivos, assiste as mini-aulas e implementa. Depois é só aproveitar e deixar seu cérebro cada vez mais inteligente! Conectado ao Obsidian, pra organizar e otimizar o uso de tokens!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Garantias */}
            <div className="mt-6 pt-6 border-t border-gray-800/80">
              <div className="flex items-center gap-2 mb-2 text-xs text-white font-semibold">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Garantia de Satisfação de 7 dias</span>
              </div>
              <p className="text-[10px] text-[#64748B] leading-normal font-medium">
                Seu investimento está 100% protegido. Se os agentes não entregarem o combinado, garantimos o reembolso integral do valor.
              </p>
            </div>
          </div>

          {/* Coluna do Formulário de Lead + CTA Stripe */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-10 rounded-2xl border border-[#2563EB]/20 bg-[#070A13] shadow-[0_0_50px_rgba(0,240,255,0.05)]">
            <div className="w-full max-w-md mx-auto">
              
              <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-8">
                <div>
                  <span className="text-[#94A3B8] text-xs uppercase font-mono tracking-wider">Valor do Investimento</span>
                  <div className="text-4xl font-black text-white mt-1">
                    R$ 997,00
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#00F0FF] bg-[#00F0FF]/15 px-2 py-0.5 rounded">
                    Taxa Única
                  </span>
                  <p className="text-[#64748B] text-[10px] font-mono mt-1">Sem mensalidades adicionais</p>
                </div>
              </div>

              {status === 'loading' ? (
                <div id="checkout-loading-state" className="text-center py-12 flex flex-col items-center justify-center min-h-[300px]">
                  <Loader2 className="w-12 h-12 animate-spin text-[#00F0FF] mb-6" />
                  <h3 className="text-xl font-bold mb-2">Processando seus dados...</h3>
                  <p className="text-[#94A3B8] text-sm max-w-xs mx-auto">
                    Aguarde enquanto preparamos seu ambiente e conectamos com a nossa plataforma segura de pagamentos do Stripe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="lead-checkout-form">
                  <div className="space-y-2">
                    <h3 className="text-md font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                      Insira seus dados para faturamento
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Seus agentes serão vinculados ao e-mail informado abaixo.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Input Nome */}
                    <div>
                      <label htmlFor="name-input" className="block text-xs uppercase text-[#94A3B8] mb-1.5 font-bold tracking-wider">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name-input"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Carlos Albuquerque"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0A0F1C] border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm placeholder-gray-600"
                        />
                        <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Input E-mail */}
                    <div>
                      <label htmlFor="email-input" className="block text-xs uppercase text-[#94A3B8] mb-1.5 font-bold tracking-wider">
                        E-mail de Trabalho
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          id="email-input"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: carlos@empresa.com.br"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0A0F1C] border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm placeholder-gray-600"
                        />
                        <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Input WhatsApp */}
                    <div>
                      <label htmlFor="phone-input" className="block text-xs uppercase text-[#94A3B8] mb-1.5 font-bold tracking-wider">
                        WhatsApp Completo (DDD + Número)
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="phone-input"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="Ex: (11) 99999-9999"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0A0F1C] border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all text-sm placeholder-gray-600 font-mono"
                        />
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-500 font-bold bg-rose-500/10 p-3 rounded-lg border border-rose-500/20 text-center animate-shake">
                      {errorMessage}
                    </p>
                  )}

                  {/* Botão de Finalizar */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00F0FF] hover:bg-[#00D8E6] text-[#0A0F1C] font-extrabold flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] group text-sm cursor-pointer"
                  >
                    🚀 SALVAR E CONECTAR PAGAMENTO
                  </button>

                  <div className="flex gap-2 items-center justify-center text-[10px] text-[#64748B]">
                    <Lock className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Conexão direta segura com certificação Stripe SSL</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
