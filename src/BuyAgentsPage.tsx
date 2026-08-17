import React, { useState } from 'react';
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
  Layers,
  FolderCheck,
  Star,
  MessageSquare,
  TrendingUp,
  Palette,
  DollarSign,
  ShieldCheck,
  Code2,
  Wallet,
  Cpu,
  Flame,
  CheckCircle2,
  Terminal,
  Server,
  Workflow,
  Target,
  FileCode2,
  Share2,
  Check,
  ChevronRight,
  Radio,
  ExternalLink
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';
import KaliTerminal from './components/KaliTerminal';
import ParadoxHackerGallery from './components/ParadoxHackerGallery';

export default function BuyAgentsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'vendas' | 'marketing' | 'design' | 'devs' | 'seguranca' | 'financeiro'>('all');

  const agentSquads = [
    {
      id: 'marketing',
      title: 'Marketing & Tráfego (Growth Infiltration)',
      badge: 'Escala 10x',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: TrendingUp,
      agents: [
        { name: 'Copywriter Estrategista Neuro-Persuasivo', role: 'Escreve VSLs hipnóticas, cartas de vendas, e-mails e criativos virais de conversão extrema.' },
        { name: 'Gestor de Tráfego & Media Buyer IA', role: 'Briefings cirúrgicos de Meta Ads, Google Ads e TikTok com segmentação de público e testes A/B.' },
        { name: 'Infiltrador SEO & Autoridade Orgânica', role: 'Gera artigos massivos de autoridade otimizados para motores de busca e ranqueamento topo 1.' },
        { name: 'Growth Hacker de Viral Loops', role: 'Ganchos para Reels, TikTok, Shorts e engenharia reversa de retenção algorítmica.' },
      ]
    },
    {
      id: 'design',
      title: 'Design & Visual (Visual Matrix)',
      badge: 'Pixel Perfect Noir',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: Palette,
      agents: [
        { name: 'Diretor de Arte Prompt Master', role: 'Engenharia de prompts avançada para Midjourney v6, Leonardo, Flux Pro e ComfyUI.' },
        { name: 'Designer de Landing Pages High-Ticket', role: 'Estruturação de wireframes e design UI/UX de altíssima persuasão visual.' },
        { name: 'Especialista em Branding & Dark Aesthetics', role: 'Cria manuais de marca, paletas de cores magnéticas e tipografia de alto impacto.' },
        { name: 'Roteirista de Motion & Aftermovie Noir', role: 'Storyboards dinâmicos para vídeos, trailers cinematográficos e anúncios institucionais.' },
      ]
    },
    {
      id: 'vendas',
      title: 'Vendas & Negociação (Ghost Closer 24/7)',
      badge: 'Fechamento Automático',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: DollarSign,
      agents: [
        { name: 'Closer de WhatsApp 24/7', role: 'Qualifica leads, quebra objeções profundas com PNL e fecha pagamentos no piloto automático.' },
        { name: 'Hunter de Prospecção Ativa B2B', role: 'Gera scripts frios hiper-personalizados para abordagem de decisores e CEOs no LinkedIn.' },
        { name: 'Agente de Follow-up Perpétuo', role: 'Recupera vendas perdidas, boletos pendentes e reativa clientes antigos sem soar invasivo.' },
        { name: 'Consultor de Upsell & Ticket Máximo', role: 'Identifica o timing exato para ofertar serviços adicionais e aumentar o LTV da carteira.' },
      ]
    },
    {
      id: 'devs',
      title: 'Desenvolvedores & Automações (Red Team Devs)',
      badge: 'Full-Stack Turbo',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: Code2,
      agents: [
        { name: 'Arquiteto de Software & APIs', role: 'Modela bancos de dados escaláveis, cria microsserviços REST/GraphQL e integrações seguras.' },
        { name: 'Dev Front-end React / TypeScript / Vite', role: 'Escreve interfaces responsivas modernas, com transições suaves e zero código duplicado.' },
        { name: 'Especialista em Webhooks, n8n & Evolution API', role: 'Conecta CRMs, Typebots, WhatsApp e gateways de pagamento sem atrito.' },
        { name: 'Code Reviewer & Refactoring Specialist', role: 'Audita código, limpa dependências pesadas e acelera builds em produção.' },
      ]
    },
    {
      id: 'seguranca',
      title: 'Segurança & Governança (Token Armor & Shield)',
      badge: 'Defesa 360°',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: ShieldCheck,
      agents: [
        { name: 'Auditor de Vulnerabilidades & Endpoints', role: 'Verifica brechas em APIs, proteção de chaves de ambiente e controle de acessos.' },
        { name: 'Compliance & LGPD Advisor', role: 'Garante termos de uso e privacidade em conformidade com as leis de dados vigentes.' },
        { name: 'Supervisor Anti-Prompt Injection', role: 'Blindagem de agentes para impedir que usuários mal-intencionados desviem o comportamento da IA.' },
        { name: 'Guardião de Tokens & Otimizador de Custos', role: 'Comprime prompts e gerencia chamadas de API para reduzir gastos em até 80%.' },
      ]
    },
    {
      id: 'financeiro',
      title: 'Assistente Financeiro Pessoal (Shadow CFO)',
      badge: 'Controle Lucrativo',
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-700',
      icon: Wallet,
      agents: [
        { name: 'CFO Virtual & Planejador de Lucro', role: 'Planejamento de fluxo de caixa, precificação de serviços e projeção de margem líquida.' },
        { name: 'Analista de CAC, LTV & Payback', role: 'Mede o custo de aquisição e retenção para prever exatamente quando reinvestir.' },
        { name: 'Gerenciador de Metas & Retiradas', role: 'Organiza relatórios mensais e traça plano de distribuição de lucros para sócios.' },
        { name: 'Estrategista Tributário Inteligente', role: 'Orientações ágeis sobre emissão de notas, enquadramento e redução lícita de impostos.' },
      ]
    }
  ];

  const filteredSquads = activeTab === 'all' 
    ? agentSquads 
    : agentSquads.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#04060A] text-white flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden scroll-smooth">
      
      {/* Dynamic Background */}
      <NeonBackground3D />

      {/* Cyber Grid Scanlines Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      <div className="w-full max-w-5xl z-10 relative">
        
        {/* Top Hacker Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors self-start border border-gray-700 bg-black/70 hover:bg-white/10 px-4 py-1.5 rounded-full font-mono cursor-pointer shadow-sm"
              id="back-button"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              [← INÍCIO]
            </button>
            <a 
              href="/precos"
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors hidden sm:inline"
            >
              /tabela-precos
            </a>
          </div>

          <div className="flex items-center gap-2 bg-black/90 border border-gray-700 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-gray-300 shadow-md">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-bold">PARADOX_TEAM // 30+ AGENTS ONLINE</span>
          </div>
        </div>

        {/* Hero Section: Branding ParadoxTeam - Esquadrão de Agentes */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black border border-gray-700 font-mono text-[10px] sm:text-xs text-white uppercase tracking-widest shadow-xl">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>PARADOXTEAM — ESQUADRÃO DE AGENTES DE IA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-tight uppercase font-sans">
            O Submundo da IA: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Esquadrão de Agentes Autônomos
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-sans">
            <strong>Marketing, Design, Vendas, Segurança, Devs e Assistente Financeiro Pessoal.</strong> O cérebro multi-agente atualizado que opera nos bastidores de grandes operações, pronto para você plugar no Claude Code, AntiGravity, Cursor e Terminais.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a 
              href="#planos"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-black text-xs uppercase tracking-tight transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-black" />
              Acessar Esquadrão Agora (R$ 197 / R$ 997)
            </a>
            <a 
              href="#terminal"
              className="px-6 py-3.5 rounded-xl bg-black/80 hover:bg-gray-900 text-gray-300 hover:text-white border border-gray-700 font-mono text-xs uppercase tracking-tight transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              Testar Terminal Kali
            </a>
          </div>
        </div>

        {/* 1. Terminal Kali Linux Interativo em Tempo Real */}
        <div id="terminal" className="mb-14 scroll-mt-10">
          <KaliTerminal />
        </div>

        {/* 2. Galeria Noir Hacker: Jovens de moletom com notebook nas ruas à noite */}
        <ParadoxHackerGallery />

        {/* 3. MODO MEGABRAIN: Interactive Squad Explorer */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#060911]/90 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-black px-2.5 py-0.5 rounded border border-gray-700">
                  🧠 ARQUITETURA MULTI-AGENTES
                </span>
                <span className="text-xs text-gray-400 font-mono">30+ Robôs Integrados</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 uppercase">
                Departamentos do ParadoxTeam
              </h3>
            </div>

            {/* Tabs Filter */}
            <div className="flex flex-wrap gap-1.5 bg-black p-1.5 rounded-xl border border-gray-800 font-mono">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'all' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Todos (30+)
              </button>
              <button 
                onClick={() => setActiveTab('marketing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'marketing' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Marketing
              </button>
              <button 
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'design' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Design
              </button>
              <button 
                onClick={() => setActiveTab('vendas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'vendas' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Vendas
              </button>
              <button 
                onClick={() => setActiveTab('devs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'devs' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Devs
              </button>
              <button 
                onClick={() => setActiveTab('seguranca')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'seguranca' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Segurança
              </button>
              <button 
                onClick={() => setActiveTab('financeiro')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'financeiro' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}
              >
                Financeiro
              </button>
            </div>
          </div>

          {/* Grid de Esquadrões */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSquads.map((squad) => {
              const Icon = squad.icon;
              return (
                <div 
                  key={squad.id}
                  className="p-5 rounded-xl bg-black/90 border border-gray-800 hover:border-gray-500 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-gray-900 border border-gray-700 text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-300 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
                        {squad.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white mb-3">
                      {squad.title}
                    </h4>

                    <div className="space-y-2.5">
                      {squad.agents.map((agent, i) => (
                        <div key={i} className="border-l-2 border-gray-700 pl-2.5 py-0.5 group-hover:border-white transition-colors">
                          <p className="text-xs font-bold text-gray-200">{agent.name}</p>
                          <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{agent.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-900 flex items-center justify-between text-[10px] text-gray-400 font-mono group-hover:text-white transition-colors">
                    <span>[PRONTO PARA PLUGAR]</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner de Plug-and-Play */}
          <div className="mt-8 p-5 rounded-xl bg-black border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center shrink-0">
                <Workflow className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Como plugar no seu projeto?</p>
                <p className="text-[11px] text-gray-400">Você recebe a pasta estruturada com prompts, personas, instruções de sistema (.systemrules) e scripts de inicialização rápida.</p>
              </div>
            </div>
            <a 
              href="#planos"
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black font-black text-xs uppercase tracking-tight whitespace-nowrap shadow-lg cursor-pointer transition-all"
            >
              Ver Planos & Ativar
            </a>
          </div>
        </div>

        {/* 4. IDEs Compatíveis Section */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-gray-800 bg-[#060911]/60 backdrop-blur-md">
          <div className="text-center sm:text-left mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black border border-gray-700 px-3 py-1 rounded-full inline-block mb-2">
              ⚡ COMPATIBILIDADE UNIVERSAL
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              Feito para Claude Code, AntiGravity, VSCode, Cursor e Kali Linux
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Plugue em qualquer ambiente de desenvolvimento ou use diretamente nos seus chats e automações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-black border border-gray-800 flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-white mt-1 shrink-0"></div>
              <div>
                <h5 className="text-xs font-bold text-white">VSCode & Terminais</h5>
                <p className="text-[11px] text-gray-400 mt-0.5">Workspaces prontos com arquivos .env e snippets de automação direta.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black border border-gray-800 flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0"></div>
              <div>
                <h5 className="text-xs font-bold text-white">AntiGravity IDE</h5>
                <p className="text-[11px] text-gray-400 mt-0.5">Execução multi-agente sem bloqueios de limite com economia de tokens.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black border border-gray-800 flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-white mt-1 shrink-0"></div>
              <div>
                <h5 className="text-xs font-bold text-white">Cursor & Claude Code</h5>
                <p className="text-[11px] text-gray-400 mt-0.5">Compatibilidade com CLI nativo e regras de sistema .cursorrules.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black border border-gray-800 flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0"></div>
              <div>
                <h5 className="text-xs font-bold text-white">WhatsApp & Webhooks</h5>
                <p className="text-[11px] text-gray-400 mt-0.5">Integração com n8n, Typebot e Evolution API para atendimento 24h.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Cards de Exibição dos Planos (197 vs 997) */}
        <div id="planos" className="scroll-mt-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          
          {/* PLANO 1: R$ 197,00 (Agente Vitalício + 30 Dias de Suporte) */}
          <div className="p-8 rounded-2xl border border-gray-700 bg-[#060911] hover:border-gray-500 transition-all flex flex-col justify-between relative shadow-2xl overflow-hidden">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-gray-300 font-bold uppercase tracking-widest">
                  <Bot className="w-3.5 h-3.5 text-white" /> Acesso Vitalício Básico
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase">
                  Esquadrão Vitalício + 30 Dias Suporte
                </h2>
                <p className="text-xs text-gray-400 mb-6 font-medium">
                  Ideal para quem deseja implementar o ParadoxTeam no seu negócio com acesso permanente e 30 dias de suporte técnico.
                </p>

                <div className="bg-black p-4 rounded-xl border border-gray-800 mb-6">
                  <span className="text-[10px] uppercase font-mono text-gray-500 block mb-1">Pagamento Único</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-400 font-mono">R$</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight font-mono">197,00</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">/ vitalício</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2.5 flex items-center gap-1 font-mono">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" /> Sem mensalidades! Parcelado em até 12x via Kiwify
                  </p>
                </div>

                <div className="space-y-2.5 mb-8 border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-gray-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Acesso Vitalício</strong> ao ParadoxTeam de 30+ Agentes</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Suporte técnico por 30 dias</strong> via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Todos os arquivos de Prompts e Personas inclusos</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Vídeo-aulas gravadas passo a passo para setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Guia de Integração para WhatsApp e IDEs</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://pay.kiwify.com.br/2yfNvHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-white hover:bg-gray-200 text-black font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] text-xs text-center uppercase cursor-pointer"
                >
                  🚀 ADQUIRIR ESQUADRÃO (R$ 197)
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-gray-500 mt-2 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Pagamento Seguro via Kiwify</span>
                </div>
              </div>
            </div>
          </div>

          {/* PLANO 2: R$ 997,00 (Acesso Vitalício + Suporte 1 Ano + Pasta Pessoal com Jarvis da Agência) */}
          <div className="p-8 rounded-2xl border-2 border-white bg-black hover:border-gray-300 transition-all flex flex-col justify-between relative shadow-[0_0_50px_rgba(255,255,255,0.1)] overflow-hidden">
            {/* Tag de Destaque */}
            <div className="absolute top-0 right-0">
              <span className="text-[9px] uppercase font-mono bg-white text-black font-black px-3.5 py-1.5 rounded-bl-xl shadow-md inline-block">
                🔥 PLANO COMPLETO — PASTA DO PRODUTOR
              </span>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" /> Acesso Vitalício VIP + Jarvis Agência
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase">
                  Esquadrão VIP + 1 Ano Suporte + Pasta Pessoal
                </h2>
                <p className="text-xs text-gray-300 mb-6 font-medium leading-relaxed">
                  A experiência subterrânea completa: acesso vitalício, <strong>1 ano de suporte prioritário</strong> e acesso direto à <strong>pasta pessoal do produtor</strong> com a versão mais recente do Jarvis da Agência.
                </p>

                <div className="bg-[#080C14] p-4 rounded-xl border border-gray-700 mb-6">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Pagamento Único</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-gray-400 font-mono">R$</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight font-mono">997,00</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">/ vitalício</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-mono font-semibold mt-2.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 shrink-0" /> Parcelado em até 12x no cartão via Kiwify
                  </p>
                </div>

                <div className="space-y-2.5 mb-8 border-t border-gray-800 pt-4">
                  <div className="flex items-start gap-2 text-[11px] text-emerald-400 font-bold">
                    <FolderCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Pasta Pessoal do Produtor</strong> com a última versão do Jarvis da Agência</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white font-bold">
                    <CheckCircle className="w-3.5 h-3.5 text-white shrink-0" />
                    <span><strong>Suporte Prioritário por 1 Ano Inteiro</strong> (12 meses)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span><strong>Acesso Vitalício</strong> a todos os robôs e atualizações futuras</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Onboarding 1x1 e auxílio direto na integração</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Prompts avançados e esteira de automação comercial</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://pay.kiwify.com.br/rViC8d1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-white hover:bg-gray-200 text-black font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] text-xs text-center uppercase cursor-pointer"
                >
                  ✨ ADQUIRIR PLANO VIP AGÊNCIA (R$ 997)
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-gray-500 mt-3 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Processamento Garantido por Kiwify SSL</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 6. MÓDULO COMPARATIVO FINANCEIRO E DE PERFORMANCE */}
        <div className="max-w-4xl mx-auto mb-16 bg-black/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <div className="text-center sm:text-left mb-6">
            <span className="text-[9px] font-mono font-bold tracking-widest text-white bg-gray-900 border border-gray-700 px-3 py-1 rounded-full inline-block mb-2">
              📊 POR QUE ESTE É O MELHOR INVESTIMENTO?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              Custo vs. Produtividade Sem Limites
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Desenvolvemos uma estrutura focada em eliminar travas operacionais e acelerar seus resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            <div className="bg-[#05070D] border border-red-900/40 rounded-xl p-5 text-left">
              <span className="text-[10px] font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded uppercase font-mono">
                Caminho Tradicional (Alto Custo)
              </span>
              <h4 className="text-sm font-black mt-2 mb-4 text-white">Equipe CLT ou Vários Softwares</h4>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span className="text-gray-400">Salário CLT de Atendente / Dev / Designer:</span>
                  <span className="font-mono font-bold text-red-400">R$ 48.000+ /ano</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span className="text-gray-400">Assinaturas separadas de ferramentas:</span>
                  <span className="font-mono font-semibold text-red-300">R$ 800+ /mês recorrente</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-gray-400">Disponibilidade de equipe humana:</span>
                  <span className="font-mono text-red-300">Apenas em horário comercial</span>
                </div>
              </div>
            </div>

            <div className="bg-[#05070D] border border-gray-700 rounded-xl p-5 text-left relative">
              <span className="text-[10px] font-bold text-white bg-gray-800 px-2 py-0.5 rounded uppercase font-mono">
                ParadoxTeam (Acesso Vitalício)
              </span>
              <h4 className="text-sm font-black mt-2 mb-4 text-white">Ecossistema Chave-na-Mão Autônomo</h4>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span className="text-gray-400">Licença Vitalícia R$ 197 ou R$ 997:</span>
                  <span className="font-mono font-bold text-emerald-400">Sem mensalidades</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-900 pb-2">
                  <span className="text-gray-400">Disponibilidade dos 30+ agentes:</span>
                  <span className="font-mono font-bold text-emerald-400">24h por dia, 7 dias por semana</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-gray-400">Última versão Jarvis da Agência:</span>
                  <span className="font-mono font-bold text-white">Prompts de alta conversão</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-4 sm:p-5 text-left font-mono">
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-white" /> COMPREENSÃO CRÍTICA: CLAUDE COWORKING VS. ANTIGRAVITY & VSCODE
            </h4>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-3 font-sans">
              Por que não utilizar apenas o Claude Teams ou Coworking nativo? Eles aplicam limitações sérias sobre o volume de tokens e mensagens quando você produz em escala.
            </p>
            <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
              O ecossistema fornecido na licença te ensina a configurar IDEs modernas (como o <strong>AntiGravity</strong> ou <strong>VSCode</strong>) para conectar outros planos e chaves de API reservas. Assim, você aproveita o melhor do Claude Code e dos modelos mais avançados sem paradas de fluxo de trabalho.
            </p>
          </div>
        </div>

        {/* 7. FAQ */}
        <div className="max-w-2xl mx-auto border-t border-gray-800 pt-10 pb-16">
          <h3 className="text-lg font-bold text-center mb-6 text-white flex items-center justify-center gap-2 uppercase font-mono">
            <Terminal className="w-4 h-4 text-emerald-400" /> Perguntas Frequentes
          </h3>
          <div className="space-y-4">
            <div className="bg-black/90 border border-gray-800 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">Qual a diferença entre os planos de R$ 197 e R$ 997?</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Ambos incluem <strong>Acesso Vitalício</strong> aos robôs do ParadoxTeam. O plano de R$ 197 inclui 30 dias de suporte técnico. O plano de R$ 997 inclui <strong>1 Ano de Suporte Prioritário</strong>, onboarding 1x1 e o diferencial exclusivo: a <strong>pasta pessoal do produtor</strong> com a versão mais recente do Jarvis da Agência.
              </p>
            </div>
            <div className="bg-black/90 border border-gray-800 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">Como funciona a personalização dos agentes para o meu nicho?</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Cada agente possui um arquivo de configuração com variáveis simples onde você insere o nome da sua empresa, serviços, preços e tom de voz. O agente adapta todas as respostas imediatamente.
              </p>
            </div>
            <div className="bg-black/90 border border-gray-800 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">O que é a Pasta Pessoal do Produtor?</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                É a pasta de arquivos e prompts que o próprio produtor utiliza no dia a dia da agência, contendo os robôs Jarvis configurados com os fluxos mais recentes e testados de alta conversão.
              </p>
            </div>
            <div className="bg-black/90 border border-gray-800 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-white mb-1">Como vou receber o acesso após o pagamento?</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Assim que a Kiwify aprovar o seu pagamento, você receberá automaticamente em seu e-mail o link para baixar os arquivos, prompts e o acesso às vídeo-aulas de implementação imediata.
              </p>
            </div>
          </div>
        </div>

        {/* 8. Footer */}
        <footer className="mt-16 pt-8 pb-12 border-t border-gray-800 text-center text-gray-400 text-xs">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/" className="px-5 py-2 rounded-full border border-gray-800 hover:border-white text-gray-400 hover:text-white font-semibold transition-all">Comercial</a>
            <a href="/precos" className="px-5 py-2 rounded-full border border-gray-800 hover:border-white text-gray-400 hover:text-white font-semibold transition-all">Preços & Orçamentos</a>
            <a href="https://lp.autolead.site/institucional" className="px-5 py-2 rounded-full border border-gray-800 hover:border-white text-gray-400 hover:text-white font-semibold transition-all">Institucional</a>
            <a href="/loja" className="px-5 py-2 rounded-full border border-gray-800 hover:border-white text-gray-400 hover:text-white font-semibold transition-all">Contrate Humanos</a>
            <a href="/jobs" className="px-5 py-2 rounded-full border border-gray-800 hover:border-white text-gray-400 hover:text-white font-semibold transition-all">Seja um Freela</a>
          </div>
          <p className="text-gray-500 font-mono text-[11px]">VIRTUAL PLACE - CNPJ: 31.509.856/0001-10 - 2018 - Todos os direitos reservados</p>
        </footer>

      </div>

    </div>
  );
}
