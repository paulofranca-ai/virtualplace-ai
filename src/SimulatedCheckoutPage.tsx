import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Rocket, Shield, ArrowLeft, Loader2, CheckCircle, Terminal } from 'lucide-react';

export default function SimulatedCheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const price = searchParams.get('price') || '997';

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        // Redirect back with checkout_status=success
        window.location.href = '/?checkout_status=success';
      }, 2000);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex flex-col md:flex-row items-stretch justify-center relative font-sans">
      
      {/* Informative Side */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-800 bg-[#0F172A]/50">
        <div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-[#00F0FF]/80 hover:text-[#00F0FF] transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Loja
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#00F0FF]/10 rounded-xl border border-[#00F0FF]/30">
              <Rocket className="w-8 h-8 text-[#00F0FF] animate-pulse" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#00F0FF] font-mono">Modo de Simulação</span>
              <h2 className="text-xl font-bold">Stripe Sandbox</h2>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            O Time de Agentes de IA
          </h3>
          <p className="text-[#94A3B8] leading-relaxed mb-8 max-w-md">
            Sua chave de API do Stripe não foi configurada ainda, por isso iniciamos este fluxo simulado para você verificar o funcionamento técnico ponta-a-ponta.
          </p>

          {/* Setup Guide */}
          <div className="p-5 rounded-xl bg-gray-900/80 border border-gray-800 font-mono text-xs text-[#94A3B8] max-w-md">
            <div className="flex items-center gap-2 text-[#00F0FF] mb-3">
              <Terminal className="w-4 h-4" />
              <span>Como conectar o Stripe real:</span>
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>Acesse o menu <strong className="text-white">Settings/Configurações</strong> do AI Studio.</li>
              <li>Defina a variável secreta <strong className="text-white">STRIPE_SECRET_KEY</strong>.</li>
              <li>Insira a sua chave privada do Stripe (ex: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">sk_live_...</code>).</li>
              <li>Pronto! O aplicativo passará a gerar vendas reais instantaneamente.</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 text-[#64748B] text-xs">
          Todos os pagamentos simulados usam dados fictícios de faturamento.
        </div>
      </div>

      {/* Checkout Side */}
      <div className="flex-1 p-8 md:p-16 flex items-center justify-center bg-[#070A13]">
        <div className="w-full max-w-md">
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Pagamento Simulado Aprovado!</h3>
              <p className="text-[#94A3B8] mb-6">Redirecionando de volta com confirmação de status...</p>
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#00F0FF]" />
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-gray-800 pb-6">
                <div>
                  <span className="text-[#94A3B8] text-sm">Valor Total</span>
                  <div className="text-4xl font-extrabold text-white">R$ {price},00</div>
                </div>
                <div className="text-[#64748B] text-xs font-mono">BRL • Pagamento único</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase text-[#94A3B8] mb-2 font-semibold">E-mail de faturamento</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu-login@servidor.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-[#94A3B8] mb-2 font-semibold">Dados do Cartão (Simulado)</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      placeholder="4242 4242 4242 4242"
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] transition-all"
                    />
                    <CreditCard className="w-5 h-5 text-gray-500 absolute left-4 top-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-[#94A3B8] mb-2 font-semibold">Expiração</label>
                    <input 
                      type="text" 
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      required
                      placeholder="MM/AA"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] transition-all text-center"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-[#94A3B8] mb-2 font-semibold font-mono">CVC</label>
                    <input 
                      type="password" 
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      required
                      placeholder="•••"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] transition-all text-center font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-[#94A3B8] mb-2 font-semibold">Nome no Cartão</label>
                  <input 
                    type="text" 
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    placeholder="Seu Nome Completo"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-[#00F0FF] transition-all"
                  />
                </div>

                <div className="flex gap-2 items-center text-xs text-[#94A3B8] bg-gray-900/50 p-3 rounded-lg border border-gray-800/80">
                  <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Seus dados de pagamento são transmitidos de forma segura com criptografia SSL simulada.</span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-[#00F0FF] hover:bg-[#00D8E6] text-[#0A0F1C] font-extrabold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando Cobrança...
                    </>
                  ) : (
                    `Pagar R$ ${price},00`
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
