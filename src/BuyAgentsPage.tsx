import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Lock,
  Zap,
  FolderCheck,
  FolderOpen,
  BookOpen,
  Laptop,
  Check,
  ChevronRight,
  ShieldCheck,
  Terminal,
  Cpu,
  Brain,
  Video,
  FileCode2,
  HelpCircle,
  PlayCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function BuyAgentsPage() {
  const navigate = useNavigate();
  const [activeFolderTab, setActiveFolderTab] = useState<'todos' | 'obsidian' | 'skills' | 'opensource' | 'curso'>('todos');

  const folderItems = [
    {
      id: 'obsidian',
      title: 'Segundo Cérebro com Obsidian',
      badge: 'Cofre Digital & Memória',
      icon: Brain,
      color: 'border-purple-500/30 text-purple-400 bg-purple-950/20',
      description: 'Templates e estrutura de anotações interconectadas. Suas ideias, clientes, processos e histórico de projetos organizados para que a IA consulte sempre com contexto real.',
      highlights: [
        'Cofre pronto para abrir no Obsidian (gratuito e offline)',
        'Modelos de notas para reuniões, projetos, clientes e rotinas',
        'Conexão bidirecional: a IA lê o cofre e nunca perde o contexto',
        'Privacidade total: seus dados ficam salvos no seu computador'
      ]
    },
    {
      id: 'skills',
      title: 'Skills Seguras & Blindadas',
      badge: 'Instruções Calibradas',
      icon: ShieldCheck,
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20',
      description: 'Arquivos de regras e diretrizes (.systemrules e prompts avançados) que impedem alucinações, loops infinitos ou consumo excessivo de tokens.',
      highlights: [
        'Skills pré-testadas para Claude Code, AntiGravity e VS Code',
        'Blindagem contra erros e respostas genéricas',
        'Economia de até 70% de tokens nas interações diárias',
        'Comportamento focado em execução de tarefas práticas'
      ]
    },
    {
      id: 'opensource',
      title: 'Projetos Open Source Filtrados',
      badge: 'Curadoria Limpa',
      icon: FileCode2,
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20',
      description: 'Seleção criteriosa dos melhores códigos e repositórios abertos do mundo. Todos testados, limpos de bugs e organizados para rodar de imediato.',
      highlights: [
        'Curadoria dos melhores projetos do GitHub prontos para uso',
        'Elimina o risco de instalar códigos maliciosos ou quebrados',
        'Arquivos de configuração prontos (.env.example, scripts rápidos)',
        'Exemplos de automações comerciais e web sem dor de cabeça'
      ]
    },
    {
      id: 'curso',
      title: 'Curso Passo a Passo em Vídeo',
      badge: 'Didática para Leigos',
      icon: Video,
      color: 'border-amber-500/30 text-amber-400 bg-amber-950/20',
      description: 'Aulas gravadas em linguagem simples mostrando do zero como baixar a pasta, abrir no Claude Code, AntiGravity ou VS Code e configurar o Obsidian.',
      highlights: [
        'Do clique do mouse até a primeira tarefa concluída com IA',
        'Sem termos difíceis de programação: focado no resultado',
        'Como usar o Obsidian como segundo cérebro diário',
        'Suporte para tirar dúvidas durante o aprendizado'
      ]
    }
  ];

  const filteredItems = activeFolderTab === 'todos' 
    ? folderItems 
    : folderItems.filter(item => item.id === activeFolderTab);

  return (
    <div className="min-h-screen bg-[#06080F] text-white flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden scroll-smooth">
      
      {/* Dynamic Background */}
      <NeonBackground3D />

      {/* Cyber Grid Scanlines Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>

      <div className="w-full max-w-5xl z-10 relative">
        
        {/* Top Header Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full font-mono cursor-pointer shadow-sm"
              id="back-button"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>← Voltar ao Início</span>
            </button>
            <span className="text-xs font-mono text-neutral-400">
              Virtual Place • IA Aplicada
            </span>
          </div>

          <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-purple-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wider">WORKSPACE COMPLETO + CURSO EM VÍDEO</span>
          </div>
        </div>

        {/* Hero Section: Fácil para Leigos */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-purple-500/30 font-mono text-[11px] text-purple-300 uppercase tracking-widest shadow-xl">
            <FolderCheck className="w-4 h-4 text-purple-400" />
            <span>PASTA PRONTA + SEGUNDO CÉREBRO NO OBSIDIAN</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight uppercase font-sans">
            Otimize o Uso de IA <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400">
              Sem Precisar Ser Programador
            </span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Você vai receber uma <strong>pasta organizada pronta</strong> para conectar diretamente no <strong>Claude Code</strong>, <strong>AntiGravity</strong> ou <strong>VS Code</strong>. Armazene todo o conhecimento do seu negócio em um <strong>Segundo Cérebro com Obsidian</strong>, com curso passo a passo em vídeo, projetos Open Source filtrados e skills seguras já testadas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <a 
              href="#planos"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-black" />
              <span>Garantir Minha Pasta (A Partir de R$ 197)</span>
            </a>
            <a 
              href="#como-funciona"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/15 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Como Funciona para Leigos</span>
            </a>
          </div>
        </div>

        {/* 1. SEÇÃO EXPLICATIVA: COMO FUNCIONA PARA LEIGOS (EM 3 PASSOS SIMPLES) */}
        <div id="como-funciona" className="mb-14 scroll-mt-20 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-2">
              DESCOMPLICADO & DIRETO AO PONTO
            </span>
            <h3 className="text-2xl font-black text-white uppercase">
              Como Funciona na Prática?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Esqueça comandos difíceis ou tutoriais técnicos confusos. O processo foi criado para qualquer pessoa usar no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#090D18] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Você Baixa a Pasta Pronta
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Ao finalizar sua inscrição, você recebe um arquivo limpo e organizado com todas as pastas já estruturadas: regras, prompts, skills e projetos prontos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-purple-300 font-mono flex items-center gap-1.5">
                <FolderOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Download imediato no seu PC</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#090D18] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Conecta no Claude Code, AntiGravity ou VS Code
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Você simplesmente abre essa pasta no seu aplicativo favorito. Mostramos na tela como fazer isso com 2 cliques. A IA lê a pasta automaticamente e ganha superpoderes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-cyan-300 font-mono flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                <span>Compatível com as principais IDEs</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#090D18] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Segundo Cérebro no Obsidian
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Seus arquivos, notas de clientes, ideias e materiais ficam guardados no Obsidian. A IA usa esse segundo cérebro para responder sempre com precisão cirúrgica.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-300 font-mono flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                <span>Memória contínua da sua empresa</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. O QUE VEM DENTRO DA PASTA (EXPLORADOR DINÂMICO) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/40 border border-purple-500/30 px-3 py-1 rounded-full inline-block mb-1">
                CONTEÚDO DO PACOTE
              </span>
              <h3 className="text-2xl font-black text-white uppercase mt-1">
                O Que Tem Dentro da Pasta?
              </h3>
              <p className="text-xs text-neutral-400">
                Veja detalhadamente cada módulo que você vai baixar para o seu computador.
              </p>
            </div>

            {/* Tabs Filter */}
            <div className="flex flex-wrap gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10 font-mono">
              <button 
                onClick={() => setActiveFolderTab('todos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFolderTab === 'todos' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}
              >
                Tudo Incluso
              </button>
              <button 
                onClick={() => setActiveFolderTab('obsidian')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFolderTab === 'obsidian' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}
              >
                Obsidian
              </button>
              <button 
                onClick={() => setActiveFolderTab('skills')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFolderTab === 'skills' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}
              >
                Skills
              </button>
              <button 
                onClick={() => setActiveFolderTab('opensource')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFolderTab === 'opensource' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}
              >
                Open Source
              </button>
              <button 
                onClick={() => setActiveFolderTab('curso')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFolderTab === 'curso' ? 'bg-purple-600 text-white shadow' : 'text-neutral-400 hover:text-white'}`}
              >
                Curso Vídeo
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="p-6 rounded-xl bg-[#080B15] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-3">
                      {item.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span>ARQUIVO PRONTO INCLUSO</span>
                    <span className="text-purple-400 font-bold flex items-center gap-1">
                      Ver no Curso →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner de Compatibilidade Universal */}
          <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-black to-cyan-950/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white font-mono uppercase">Onde posso conectar a pasta?</p>
                <p className="text-[11px] text-neutral-400">Funciona no <strong>Claude Code</strong>, <strong>AntiGravity</strong>, <strong>VS Code</strong>, <strong>Cursor</strong> e em qualquer terminal. Você escolhe onde se sente mais confortável.</p>
              </div>
            </div>
            <a 
              href="#planos"
              className="px-5 py-2.5 rounded-lg bg-white text-black hover:bg-neutral-200 font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-lg transition-all shrink-0"
            >
              Baixar Agora
            </a>
          </div>
        </div>

        {/* 3. COMPARATIVO: SEM O KIT VS. COM O KIT */}
        <div className="max-w-4xl mx-auto mb-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="text-center sm:text-left mb-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full inline-block mb-2">
              COMPARAÇÃO REAL
            </span>
            <h3 className="text-2xl font-black text-white uppercase">
              Por Que Usar Essa Pasta Muda Tudo?
            </h3>
            <p className="text-neutral-400 text-xs mt-1">
              Entenda a diferença prática entre usar IA de forma amadora e usar o ecossistema pronto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Sem a Pasta */}
            <div className="bg-[#0A0D15] border border-red-500/30 rounded-xl p-5 text-left flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-red-400 bg-red-950/40 px-2.5 py-1 rounded uppercase font-mono border border-red-500/30">
                  Usando IA sem o Kit (Frustração)
                </span>
                <h4 className="text-base font-bold mt-3 mb-4 text-white">IA Genérica & Sem Memória</h4>
                
                <div className="space-y-3 text-xs text-neutral-400">
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Toda vez precisa explicar quem você é, sua empresa e suas regras do zero.</span>
                  </div>
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Respostas genéricas, rasas e que parecem texto de robô padrão.</span>
                  </div>
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Perde horas pesquisando no GitHub códigos quebrados ou perigosos.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Gasta créditos e tokens em vão com respostas que não servem para nada.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Com a Pasta */}
            <div className="bg-[#0A0D15] border border-emerald-500/40 rounded-xl p-5 text-left relative flex flex-col justify-between shadow-lg shadow-emerald-500/5">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded uppercase font-mono border border-emerald-500/30">
                  Com Nossa Pasta + Obsidian (Alta Performance)
                </span>
                <h4 className="text-base font-bold mt-3 mb-4 text-white">Segundo Cérebro Ativo & Skills</h4>
                
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>A IA lê suas notas no Obsidian e já sabe todo o contexto e suas preferências.</span>
                  </div>
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Skills seguras evitam alucinações e garantem respostas precisas e rápidas.</span>
                  </div>
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Projetos Open Source limpos e testados prontos para você rodar sem risco.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Curso em vídeo ensinando exatamente o que fazer, passo a passo, em poucos minutos.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SEÇÃO DE PLANOS (R$ 197 VS R$ 997) */}
        <div id="planos" className="scroll-mt-20 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          
          {/* PLANO 1: R$ 197,00 (Plano Essencial Vitalício + 30 Dias de Suporte) */}
          <div className="p-8 rounded-2xl border border-white/20 bg-[#0A0E1A] hover:border-purple-500/50 transition-all flex flex-col justify-between relative shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[11px] font-mono text-purple-400 font-bold uppercase tracking-widest">
                  <FolderCheck className="w-4 h-4" /> Plano Essencial
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase">
                  Pasta Completa + Curso + 30 Dias Suporte
                </h2>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Ideal para quem quer organizar seu segundo cérebro com Obsidian, conectar a pasta no Claude Code ou AntiGravity e otimizar sua rotina sem complicação.
                </p>

                <div className="bg-black/50 p-4 rounded-xl border border-white/10 mb-6">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block mb-1">Acesso Vitalício • Pagamento Único</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-neutral-400 font-mono">R$</span>
                    <span className="text-4xl font-black text-white tracking-tight font-mono">197,00</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">/ vitalício</span>
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-2 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> Sem mensalidades! Parcelado em até 12x via Kiwify
                  </p>
                </div>

                <div className="space-y-3 mb-8 border-t border-white/10 pt-4 text-xs">
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Acesso Vitalício</strong> à Pasta Completa Estruturada</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Segundo Cérebro no Obsidian</strong> configurado com templates</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Projetos Open Source Filtrados</strong> e testados para rodar</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Skills Seguras</strong> pré-calibradas para evitar alucinações</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Curso Passo a Passo em Vídeo</strong> gravado para leigos</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>30 Dias de Suporte Técnico</strong> via WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://pay.kiwify.com.br/2yfNvHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-purple-600/30 text-xs text-center uppercase cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>BAIXAR PASTA POR R$ 197</span>
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-neutral-400 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Pagamento Seguro e Imediato via Kiwify</span>
                </div>
              </div>
            </div>
          </div>

          {/* PLANO 2: R$ 997,00 (Acesso Vitalício + Suporte 1 Ano + Pasta Pessoal do Produtor) */}
          <div className="p-8 rounded-2xl border-2 border-cyan-400/60 bg-[#0A0E1A] hover:border-cyan-400 transition-all flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
            {/* Tag de Destaque */}
            <div className="absolute top-0 right-0">
              <span className="text-[10px] uppercase font-mono bg-cyan-400 text-black font-black px-3.5 py-1.5 rounded-bl-xl shadow-md inline-block tracking-wider">
                ⭐ PLANO VIP COMPLETO
              </span>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> Plano VIP Agência
                </div>
                <h2 className="text-2xl font-black text-white mb-2 uppercase">
                  Pasta Pessoal do Produtor + 1 Ano Suporte
                </h2>
                <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
                  Tenha acesso à <strong>pasta pessoal que o próprio produtor usa na agência Virtual Place</strong>, com automações avançadas, além de <strong>1 ano inteiro de suporte prioritário</strong> e onboarding 1x1.
                </p>

                <div className="bg-black/50 p-4 rounded-xl border border-white/10 mb-6">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block mb-1">Acesso Vitalício VIP • Pagamento Único</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-neutral-400 font-mono">R$</span>
                    <span className="text-4xl font-black text-cyan-400 tracking-tight font-mono">997,00</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">/ vitalício</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-mono font-semibold mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> Parcelado em até 12x no cartão via Kiwify
                  </p>
                </div>

                <div className="space-y-3 mb-8 border-t border-white/10 pt-4 text-xs">
                  <div className="flex items-start gap-2 text-cyan-300 font-bold">
                    <FolderCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Pasta Pessoal do Produtor</strong> com automações da Agência Virtual Place</span>
                  </div>
                  <div className="flex items-start gap-2 text-white font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>1 Ano Inteiro de Suporte Prioritário</strong> direto com nossa equipe</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Onboarding Individual 1x1</strong> para deixar tudo pronto para você</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Tudo incluso do Plano Essencial (Obsidian + Open Source + Skills)</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Atualizações futuras de novos projetos e skills sem custo</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://pay.kiwify.com.br/rViC8d1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-black flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-cyan-500/25 text-xs text-center uppercase cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>GARANTIR PLANO VIP AGÊNCIA (R$ 997)</span>
                </a>
                
                <div className="flex gap-2 items-center justify-center text-[10px] text-neutral-400 mt-3 font-mono">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Processamento Seguro e Garantido via Kiwify SSL</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5. FAQ DESCOMPLICADO PARA LEIGOS */}
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-10 pb-16">
          <h3 className="text-xl font-bold text-center mb-6 text-white flex items-center justify-center gap-2 uppercase font-mono">
            <HelpCircle className="w-5 h-5 text-purple-400" /> Dúvidas Frequentes
          </h3>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-1.5">Eu não sei programar e sou leigo, vou conseguir usar?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Com certeza! Esse produto foi criado especificamente para pessoas que não são desenvolvedoras. O curso em vídeo mostra clique por clique onde clicar, como abrir a pasta no Claude Code, AntiGravity ou VS Code e como usar no dia a dia.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-1.5">O que é o Segundo Cérebro com Obsidian?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                O Obsidian é um aplicativo gratuito, rápido e seguro para você guardar anotações, documentos e ideias no seu computador. Nós entregamos um cofre configurado para que a inteligência artificial leia essas anotações e entenda seu negócio como se fosse um assistente pessoal experiente.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-1.5">O que são as "Skills Seguras" e os "Projetos Open Source Filtrados"?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                São instruções e modelos já calibrados para que a IA não cometa erros básicos, não alucine e não gaste seus créditos em respostas inúteis. E a curadoria de projetos Open Source reúne códigos e ferramentas públicas já testados, limpos e livres de vulnerabilidades.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-1.5">Qual a diferença entre o plano de R$ 197 e R$ 997?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Ambos dão <strong>acesso vitalício</strong> à pasta com Obsidian, skills seguras, projetos open source e ao curso em vídeo. O plano de R$ 197 inclui 30 dias de suporte técnico via WhatsApp. Já o plano de R$ 997 inclui <strong>1 Ano de Suporte Prioritário</strong>, onboarding individual 1x1 e o acesso exclusivo à <strong>pasta pessoal do produtor</strong> com todas as automações internas da agência.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h4 className="text-sm font-bold text-white mb-1.5">Como recebo o acesso após o pagamento?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Assim que seu pagamento for aprovado pela Kiwify, você recebe imediatamente no seu e-mail o link para download da pasta e o acesso à área de membros com as vídeo-aulas gravadas.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Footer */}
        <footer className="mt-8 pt-8 pb-12 border-t border-white/10 text-center text-neutral-400 text-xs">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="/" className="px-5 py-2 rounded-full border border-white/10 hover:border-white text-neutral-400 hover:text-white font-semibold transition-all">Página Inicial 4K</a>
            <a href="/#portfolio-videos" className="px-5 py-2 rounded-full border border-white/10 hover:border-white text-neutral-400 hover:text-white font-semibold transition-all">Portfólio de Vídeos</a>
            <a href="/institucional" className="px-5 py-2 rounded-full border border-white/10 hover:border-white text-neutral-400 hover:text-white font-semibold transition-all">Institucional</a>
            <a href="https://wa.me/5549991052315" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-white/10 hover:border-white text-neutral-400 hover:text-white font-semibold transition-all">Suporte no WhatsApp</a>
          </div>
          <p className="text-neutral-500 font-mono text-[11px]">VIRTUAL PLACE AGÊNCIA • CNPJ: 31.509.856/0001-10 • Todos os direitos reservados</p>
        </footer>

      </div>

    </div>
  );
}
