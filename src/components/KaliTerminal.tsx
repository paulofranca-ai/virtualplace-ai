import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, Play, CheckCircle2, Copy, Check, CornerDownLeft, Sparkles } from 'lucide-react';

interface LogLine {
  id: string;
  timestamp: string;
  type: 'system' | 'agent' | 'success' | 'warning' | 'cmd';
  text: string;
}

export default function KaliTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialLogs: LogLine[] = [
    { id: '1', timestamp: '00:00:01', type: 'system', text: 'PARADOX OS (Linux paradox-core 6.8.11-kali-amd64 #1 SMP PREEMPT)' },
    { id: '2', timestamp: '00:00:02', type: 'system', text: 'root@paradox-team:~# systemctl start paradox-swarm.service' },
    { id: '3', timestamp: '00:00:03', type: 'agent', text: '[+] [SWARM_INIT] Loading 30+ Autonomous Agent Nodes into memory buffer...' },
    { id: '4', timestamp: '00:00:04', type: 'agent', text: '[+] [CORE_DAEMON] Daemon active on port 7788 (Claude Code CLI + AntiGravity Socket)' },
    { id: '5', timestamp: '00:00:05', type: 'success', text: '[✓] [MARKETING_OPS] Copywriter & Viral Growth Swarm: DEPLOYED (10x Output)' },
    { id: '6', timestamp: '00:00:06', type: 'success', text: '[✓] [DEV_SQUAD] React/TypeScript/Vite & Python Microservices Engine: COMPILED' },
    { id: '7', timestamp: '00:00:07', type: 'success', text: '[✓] [SALES_CLOAK] WhatsApp 24/7 Closing Protocol: INJECTED & LISTENING' },
    { id: '8', timestamp: '00:00:08', type: 'success', text: '[✓] [SHIELD_NET] Anti-Prompt Injection & Token Armor v2.4: ARMED (Zero Leaks)' },
    { id: '9', timestamp: '00:00:09', type: 'agent', text: '[!] [JARVIS_PRODUCER] Folder "Jarvis_Agencia_v2026" loaded with high-ticket scripts.' },
    { id: '10', timestamp: '00:00:10', type: 'system', text: 'root@paradox-team:~# echo "PARADOX TEAM READY FOR INFILTRATION."' },
  ];

  const [logs, setLogs] = useState<LogLine[]>(initialLogs);

  // Auto-simulate continuous live terminal telemetry
  useEffect(() => {
    const streamItems = [
      { type: 'agent' as const, text: '[+] [TELEMETRY] Agent #04 (Closer) converted lead from WhatsApp webhook (Ticket: R$ 1.500)' },
      { type: 'success' as const, text: '[✓] [AUTONOMY] Agent #12 (Dev Front) generated 4 clean React UI components with zero bugs' },
      { type: 'agent' as const, text: '[+] [GROWTH_NET] Agent #02 (Media Buyer) optimized Meta Ads campaign ROAS to 4.2x' },
      { type: 'system' as const, text: '[i] [TOKEN_ARMOR] Compression engine saved 72.4% API tokens on Claude 3.7 Sonnet pipeline' },
      { type: 'agent' as const, text: '[+] [DESIGN_OPS] Agent #08 (Art Director) dispatched 12 hyper-realistic visual prompts' },
      { type: 'success' as const, text: '[✓] [SHADOW_CFO] Cashflow balancing complete: Projected 12-month net margin +310%' }
    ];

    let index = 0;
    const interval = setInterval(() => {
      const item = streamItems[index % streamItems.length];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      setLogs((prev) => [
        ...prev.slice(-25), // Keep last 25 lines
        {
          id: String(Date.now()),
          timestamp: timeStr,
          type: item.type,
          text: item.text
        }
      ]);
      index++;
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const timeStr = new Date().toTimeString().split(' ')[0];

    const newLog: LogLine = {
      id: String(Date.now()),
      timestamp: timeStr,
      type: 'cmd',
      text: `root@paradox-team:~# ${cmd}`
    };

    let responseLog: LogLine;

    if (trimmed === 'help') {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'system',
        text: 'Comandos disponíveis: help | agents | squads | jarvis | status | clear | buy'
      };
    } else if (trimmed === 'agents' || trimmed === 'squads') {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'agent',
        text: '30+ Agentes Ativos: Marketing (Copy, Tráfego, SEO, Viral) | Design (Midjourney, UI/UX, Motion) | Vendas (Closer, Hunter, Follow-up, Upsell) | Devs (Arquiteto, Front React, n8n/API, Code Review) | Segurança (Auditor, Anti-Prompt, LGPD, Tokens) | Financeiro (CFO, CAC/LTV, Metas)'
      };
    } else if (trimmed === 'jarvis') {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'success',
        text: '[★] JARVIS DA AGÊNCIA: Pasta Pessoal do Produtor com prompts secretos de alta conversão disponível no Plano VIP (R$ 997).'
      };
    } else if (trimmed === 'status') {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'success',
        text: '[STATUS 100% ONLINE] Sistema operacional estável. 32 nós de IA ativos. Zero sobrecarga.'
      };
    } else if (trimmed === 'buy') {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'success',
        text: 'Redirecionando para os planos Kiwify: R$197 (Vitalício Básico) ou R$997 (VIP Pasta do Produtor).'
      };
      window.location.href = '#planos';
    } else if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else {
      responseLog = {
        id: String(Date.now() + 1),
        timestamp: timeStr,
        type: 'warning',
        text: `Comando desconhecido: "${cmd}". Digite "help" para listar as rotinas do Paradox.`
      };
    }

    setLogs((prev) => [...prev, newLog, responseLog]);
    setInputVal('');
  };

  const handleCopyCode = () => {
    const snippet = `git clone https://github.com/paradox-team/esquadrao-agentes.git\ncd esquadrao-agentes\nchmod +x deploy.sh && ./deploy.sh --autonomous --all-squads`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#05080E] border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] font-mono text-xs text-gray-300">
      
      {/* Terminal Top Bar (Kali Linux Shell Style) */}
      <div className="bg-[#0A0E17] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer"></div>
          <span className="text-[11px] font-bold text-gray-400 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-gray-300" />
            root@paradox-team:~# (Kali Linux 2026.1 // Multi-Agent Core)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            SWARM: ATIVO (32 AGENTES)
          </span>
          <button 
            onClick={handleCopyCode}
            className="text-[10px] text-gray-400 hover:text-white bg-gray-900/80 hover:bg-gray-800 px-2.5 py-1 rounded border border-gray-700 flex items-center gap-1 cursor-pointer transition-all"
            title="Copiar comando de inicialização"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copiado!' : 'Copiar Shell'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Screen / Logs View */}
      <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto bg-[#04060A] space-y-1.5 scrollbar-thin scrollbar-thumb-gray-800">
        
        {/* Banner ASCII Monocromático */}
        <div className="text-[9px] sm:text-[10px] text-gray-500 leading-none select-none font-bold py-1 border-b border-gray-900 mb-3">
          {`██████╗  █████╗ ██████╗  █████╗ ██████╗  ██████╗ ██╗  ██╗████████╗███████╗ █████╗ ███╗   ███╗`}
          <br />
          {`██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔═══██╗╚██╗██╔╝╚══██╔══╝██╔════╝██╔══██╗████╗ ████║`}
          <br />
          {`██████╔╝███████║██████╔╝███████║██║  ██║██║   ██║ ╚███╔╝    ██║   █████╗  ███████║██╔████╔██║`}
          <br />
          {`██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║  ██║██║   ██║ ██╔██╗    ██║   ██╔══╝  ██╔══██║██║╚██╔╝██║`}
          <br />
          {`██║     ██║  ██║██║  ██║██║  ██║██████╔╝╚██████╔╝██╔╝ ██╗   ██║   ███████╗██║  ██║██║ ╚═╝ ██║`}
        </div>

        {logs.map((log) => (
          <div key={log.id} className="leading-relaxed flex items-start gap-2">
            <span className="text-gray-600 select-none text-[10px]">[{log.timestamp}]</span>
            <span className={`
              ${log.type === 'system' ? 'text-gray-400' : ''}
              ${log.type === 'agent' ? 'text-gray-200 font-semibold' : ''}
              ${log.type === 'success' ? 'text-emerald-400 font-bold' : ''}
              ${log.type === 'warning' ? 'text-amber-300 font-bold' : ''}
              ${log.type === 'cmd' ? 'text-white font-bold' : ''}
            `}>
              {log.text}
            </span>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Interactive Command Input Line */}
      <div className="bg-[#080C14] p-3 border-t border-gray-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (inputVal.trim()) handleCommand(inputVal);
          }}
          className="flex-1 flex items-center gap-2 bg-[#030408] px-3 py-2 rounded-xl border border-gray-800 focus-within:border-gray-500 transition-colors"
        >
          <span className="text-emerald-400 font-bold select-none text-[11px]">root@paradox:~#</span>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Digite um comando (ex: help, agents, jarvis, status, buy)..."
            className="bg-transparent text-white placeholder-gray-600 focus:outline-none w-full text-xs font-mono"
          />
          <button 
            type="submit" 
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800 transition-colors cursor-pointer"
            title="Executar"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Quick Command Trigger Chips */}
        <div className="flex flex-wrap items-center gap-1.5 select-none">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden lg:inline">Atalhos:</span>
          <button 
            type="button"
            onClick={() => handleCommand('agents')}
            className="px-2.5 py-1 rounded bg-gray-900/90 border border-gray-800 text-[10px] font-bold text-gray-300 hover:text-white hover:border-gray-600 cursor-pointer transition-all"
          >
            --squads
          </button>
          <button 
            type="button"
            onClick={() => handleCommand('jarvis')}
            className="px-2.5 py-1 rounded bg-gray-900/90 border border-gray-800 text-[10px] font-bold text-gray-300 hover:text-white hover:border-gray-600 cursor-pointer transition-all"
          >
            --jarvis
          </button>
          <button 
            type="button"
            onClick={() => handleCommand('status')}
            className="px-2.5 py-1 rounded bg-gray-900/90 border border-gray-800 text-[10px] font-bold text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 cursor-pointer transition-all"
          >
            --status
          </button>
        </div>
      </div>

    </div>
  );
}
