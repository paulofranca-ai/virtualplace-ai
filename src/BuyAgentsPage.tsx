import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle, 
  Sparkles, 
  Lock,
  Bot,
  Zap,
  Calendar,
  Layers
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function BuyAgentsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden scroll-smooth">
      
      {/* Componente Reutilizável de Fundo 3D Neon Magnético e Reativo */}
      <NeonBackground3D />

      <div className="w-full max-w-5xl z-10 relative">
        
        {/* Header e Navegabilidade */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-800/40">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-xs text-[#00F0FF]/80 hover:text-[#00F0FF] transition-colors self-start border border-[#00F0FF]/20 bg-[#00F0FF]/5 hover:bg-[#00F0FF]/15 px-3.5 py-1.5 rounded-full font-semibold cursor-pointer"
            id="back-button"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Voltar para a Página Inicial
          </button>

          <div className="flex items-center gap-2 bg-[#0F172A]/80 border border-gray-800 px-3 py-1 rounded-full text-[10px] font-mono text-[#94A3B8]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Acesso Chave na Mão Garantido</span>
          </div>
        </div>

        {/* Bloco de Headline de Conversão de Alto Impacto */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/25 px-4 py-1.5 rounded-full inline-block mb-4">
            ✨ ECOSSISTEMA COMPLETO DE AGENTES DE IA
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight bg-gradient-to-r from-white via-[#E2E8F0] to-[#00F0FF] bg-clip-text text-transparent">
            Escolha Seu Plano e Ative Hoje Mesmo
          </h1>
          <p className="text-gray-400 text-sm sm:text-md max-w-2xl mx-auto leading-relaxed">
            Selecione a licença ideal para o tamanho do seu negócio. Comece a capturar, qualificar e treinar seus novos robôs de autoatendimento integrados ao ecossistema moderno.
          </p>
        </div>

        {/* O que você vai receber - Benefícios Gerais */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl border border-gray-800/80 bg-[#0F172A]/40 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-xs font-mono text-[#00F0FF] font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00F0FF]" /> Entregáveis Inclusos no seu Acesso Chave-na-Mão:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Robô via WhatsApp</h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">Derruba objeções, apresenta e fecha vendas de forma 100% autônoma.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Agente de Tráfego</h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">Qualifica leads frios e retém conversas valiosas sem interrupções.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Setup e Vídeo Aulas</h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">Assista às mini-aulas estruturadas e implemente os arquivos prontos rapidamente.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Integração Obsidian</h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">Arquivamento estrategicamente inteligente para poupar tokens e organizar dados.</p>
              </div>
            </div>
          </div>

          {/* IDEs Compatíveis Section */}
          <div className="mt-8 pt-5 border-t border-gray-800/60 text-left">
            <h4 className="text-xs font-black text-[#00F0FF] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              💻 IDEs COMPATÍVEIS (MÁXIMA INTEGRAÇÃO COM VSCODE)
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-4">
              Nosso ecossistema de agentes funciona nativamente integrando-se e fornecendo suporte total para as principais plataformas de desenvolvimento em massa do mercado atual:
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-lg bg-[#2563EB]/15 border border-[#2563EB]/40 text-blue-400 font-bold text-[10px] uppercase font-mono flex items-center gap-1.5 shadow-[0_0_10px_rgba(37,99,235,0.15)]">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> VSCode (Visual Studio Code)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] font-bold text-[10px] uppercase font-mono flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> AntiGravity IDE
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/40 text-purple-400 font-bold text-[10px] uppercase font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Cursor IDE
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold text-[10px] uppercase font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Claude Code (Nativo CLI)
              </span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold uppercase">
              <Shield className="w-4 h-4" />
              <span>Garantia de 7 dias com risco zero</span>
            </div>
            <p className="text-[10px] text-gray-400 max-w-xl">
              Nossa licença fornece 7 dias de garantia incondicional. Se não gostar do ecossistema de robôs de inteligência artificial, você pode solicitar reembolso total.
            </p>
          </div>
        </div>

        {/* Cards de Exibição dos Planos Lado a Lado (Anual Primeiro) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          
          {/* PLANO ANUAL (SquadClawVirtual Infinity) */}
          <div className="p-8 rounded-2xl border border-[#00F0FF]/40 bg-[#060913] hover:border-[#00F0FF] transition-all flex flex-col justify-between relative shadow-[0_0_40px_rgba(0,240,255,0.08)] overflow-hidden">
            {/* Tag de Destaque */}
            <div className="absolute top-0 right-0">
              <span className="text-[9px] uppercase font-mono bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-bl-xl shadow-md inline-block">
                MELHOR CUSTO-BENEFÍCIO (-58% OFF)
              </span>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-[#00F0FF] font-bold uppercase tracking-widest animate-pulse">
                  <Zap className="w-3.5 h-3.5" /> Licença Anual Completa
                </div>
                <h2 className="text-2xl font-black text-white mb-2">
                  SquadClawVirtual Infinity
                </h2>
                <p className="text-xs text-gray-400 mb-6 font-medium">
                  Ideal para economizar e ter acesso contínuo com máximo retorno, equivalente a menos de R$ 83 mensais!
                </p>

                <div className="bg-[#0A0F1C]/90 p-4 rounded-xl border border-gray-800/80 mb-6">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Apenas</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-400">R$</span>
                    <span className="text-4xl font-extrabold text-[#00F0FF] tracking-tight">997,00</span>
                    <span className="text-xs font-mono text-gray-400 font-bold">/ano</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-semibold mt-2.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 shrink-0" /> Pago em até 12x no cartão de crédito via Kiwify
                  </p>
                </div>

                <div className="space-y-2 mb-8 border-t border-gray-800/40 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>Acesso ao Robô de Prospecção</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>Todos os arquivos de Prompt inclusos</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>Mini-aulas detalhadas de implementação</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span>Suporte completo por 12 meses</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
                    <span>Economia de R$ 1.367,00 em relação ao mensal</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://pay.kiwify.com.br/GKrbQy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#00F0FF] hover:bg-[#00D8E6] text-[#0A0F1C] font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] text-xs text-center uppercase cursor-pointer"
                >
                  🚀 ASSINAR LICENÇA ANUAL AGORA
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-[#64748B] mt-4 font-mono">
                  <Lock className="w-3 h-3 text-[#00F0FF]" />
                  <span>Processamento Garantido por Kiwify SSL</span>
                </div>
              </div>
            </div>
          </div>

          {/* PLANO MENSAL (SquadClawVirtual Light) */}
          <div className="p-8 rounded-2xl border border-gray-800/80 bg-[#0F172A]/70 backdrop-blur-lg hover:border-purple-500/50 transition-all flex flex-col justify-between relative shadow-xl overflow-hidden">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-purple-400 font-bold uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" /> Licença Mensal Flexível
                </div>
                <h2 className="text-2xl font-black text-white mb-2">
                  SquadClawVirtual Light
                </h2>
                <p className="text-xs text-gray-400 mb-6 font-medium">
                  Excelente para testar o ecossistema com total liberdade, pagamento recorrente e sem riscos.
                </p>

                <div className="bg-[#0A0F1C]/90 p-4 rounded-xl border border-gray-800/80 mb-6">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Recorrente</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-400">R$</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight">197,00</span>
                    <span className="text-xs font-mono text-gray-400 font-bold">/mês</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-purple-400 shrink-0" /> Cancele quando quiser, sem taxas de saída
                  </p>
                </div>

                {/* Oferta de Upsell de R$ 997 */}
                <div className="mb-6 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-[#00F0FF]">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#00F0FF] animate-pulse" /> Upgrade de Upsell: Anual Completo
                  </div>
                  <p className="text-[11px] text-gray-300 mt-1 leading-relaxed font-medium">
                    Oferecemos o plano Anual de <strong>R$ 997,00 como Upsell</strong> na próxima página, incluindo 1 ano inteiro de suporte prioritário e onboarding!
                  </p>
                </div>

                <div className="space-y-2 mb-8 border-t border-gray-800/40 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Acesso ao Robô de Prospecção</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Todas as instruções de prompt incluídas</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Aulas gravadas passo-a-passo</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Suporte durante a ativação da licença</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://pay.kiwify.com.br/2yfNvHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-[#8B5CF6] hover:from-purple-500 hover:to-[#7C3AED] text-white font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] text-xs text-center uppercase cursor-pointer"
                >
                  🚀 ASSINAR PLANO MENSAL AGORA
                </a>

                <a
                  href="https://pay.kiwify.com.br/rViC8d1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] text-xs text-center uppercase cursor-pointer"
                >
                  ✨ ADQUIRIR PLANO ANUAL POR R$ 997
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-[#64748B] mt-4 font-mono">
                  <Lock className="w-3 h-3 text-purple-400" />
                  <span>Processamento Seguro por Kiwify SSL</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MÓDULO COMPARATIVO FINANCEIRO E DE PERFORMANCE ESTRATÉGICA */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#0F172A]/40 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center sm:text-left mb-6">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1 rounded-full inline-block mb-2">
              📊 POR QUE ESTE É O MELHOR NEGÓCIO DA SUA CARREIRA?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Custo vs. Produtividade Sem Limites
            </h3>
            <p className="text-[#94A3B8] text-xs mt-1">
              Desenvolvemos uma estrutura focada em eliminar travas de orçamentos e te libertar de gargalos operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            <div className="bg-[#0A0F1C]/85 border border-red-500/20 rounded-xl p-5 text-left">
              <span className="text-[10px] font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded uppercase font-mono">
                Caminho Tradicional (Alto Risco)
              </span>
              <h4 className="text-sm font-black mt-2 mb-4 text-white">Contratação de Funcionário ou Várias Assinaturas</h4>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-400">Salário CLT de Designer ou Dev Sênior:</span>
                  <span className="font-mono font-bold text-red-400">R$ 72.000 /ano + impostos</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-400">Gasto com múltiplas IAs isoladas + tokens:</span>
                  <span className="font-mono font-semibold text-red-300">R$ 1.500+ /mês facilmente</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-gray-400">Gargalo de Limite do Claude Coworking:</span>
                  <span className="font-mono text-red-300">Bloqueios rápidos de limite diário</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0F1C]/85 border border-[#00F0FF]/30 rounded-xl p-5 text-left relative">
              <span className="text-[10px] font-bold text-[#00F0FF] bg-[#00F0FF]/15 px-2 py-0.5 rounded uppercase font-mono">
                Nossa Licença Ativa (Máximo Retorno)
              </span>
              <h4 className="text-sm font-black mt-2 mb-4 text-white">O Ecossistema Chave-na-Mão SquadClawVirtual</h4>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-400">Licença Anual Completa:</span>
                  <span className="font-mono font-bold text-emerald-400">R$ 997,00 /ano</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/40 pb-2">
                  <span className="text-gray-400">Custo operacional médio de tokens:</span>
                  <span className="font-mono font-bold text-emerald-400">~ R$ 100/mês para uso comum</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-gray-400">Flexibilidade Multi-Modelos:</span>
                  <span className="font-mono font-bold text-[#00F0FF]">Poder alternar IAs sem travas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A101D] border border-gray-800 rounded-xl p-4 sm:p-5 text-left">
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-[#00F0FF]">
              <Layers className="w-4 h-4" /> COMPREENSÃO CRÍTICA: CLAUDE COWORKING VS. ANTIGRAVITY & VSCODE
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-3">
              Por que não utilizar apenas o Claude Teams ou Coworking nativo? Simples: eles aplicam limitações sérias sobre o volume de tokens e mensagens quando você começa a produzir em massa. Embora o Claude Code oficial forneça uma qualidade de codificação espetacular, depender exclusivamente dos seus limites nativos causa grande frustração e paradas forçadas de fluxo de trabalho.
            </p>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              O ecossistema fornecido na licença te ensina a configurar IDEs modernas (como o <strong>AntiGravity</strong> ou <strong>VSCode</strong>) para conectar outros planos e chaves de API reservas. Assim, você aproveita o melhor do Claude Code, mas consome de forma hibridizada dos planos que custam na média <strong>R$ 100 reais por mês</strong>, destravando limitações diárias e usufruindo de potência total sempre que precisar!
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto border-t border-gray-800/40 pt-10 pb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-white flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#00F0FF]" /> Perguntas Frequentes
          </h3>
          <div className="space-y-4">
            <div className="bg-[#0F172A]/30 border border-gray-800/60 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">Como vou receber as instruções de setup?</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Assim que a Kiwify aprovar o seu pagamento, você receberá automaticamente em seu e-mail os arquivos de Prompt, o link das vídeo-aulas gravadas estruturadas e o acesso imediato.
              </p>
            </div>
            <div className="bg-[#0F172A]/30 border border-gray-800/60 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">O que é a conexão com o Obsidian?</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Nós ensinamos você a organizar seu cérebro digital conectando seus robôs e prompts dentro de uma base Obsidian local, garantindo um super controle e otimização do uso de tokens e histórico.
              </p>
            </div>
            <div className="bg-[#0F172A]/30 border border-gray-800/60 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">Posso cancelar o plano recorrente?</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Sim! No plano recorrente mensal você tem total liberdade para pausar ou cancelar sua assinatura diretamente através do painel Kiwify sem nenhuma multa contratual.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
