import React from 'react';
import { Terminal, Shield, Cpu, Activity, Eye, Zap, Lock, Code2 } from 'lucide-react';

export default function ParadoxHackerGallery() {
  const photos = [
    {
      id: 'photo-1',
      title: 'Infiltração Autônoma Noturna',
      tag: 'OP_NIGHT_FALL // 03:14 AM',
      subtitle: 'Hackers operando agentes de inteligência artificial em servidores isolados nas ruas de grandes metrópoles.',
      imgSrc: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop',
      badge: 'CLAUDE CODE CLI',
      icon: Terminal,
      stats: '32 AGENTES ATIVOS'
    },
    {
      id: 'photo-2',
      title: 'Enxame Multi-Agentes AntiGravity',
      tag: 'SWARM_ROOFTOP // CORE',
      subtitle: 'Comunicação contínua entre agentes de vendas, marketing e código sem consumir tokens desnecessários.',
      imgSrc: 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?q=80&w=1200&auto=format&fit=crop',
      badge: 'ANTIGRAVITY ENGINE',
      icon: Cpu,
      stats: 'LATÊNCIA < 40ms'
    },
    {
      id: 'photo-3',
      title: 'Engenharia Reversa & Submundo IA',
      tag: 'KALI_DEEP_INJECT',
      subtitle: 'Prompts proprietários do Jarvis da Agência com blindagem anti-prompt injection e máxima persuasão comercial.',
      imgSrc: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
      badge: 'TOKEN SHIELD v2',
      icon: Shield,
      stats: 'ZERO VULNERABILIDADES'
    },
    {
      id: 'photo-4',
      title: 'Deploy Silencioso & WhatsApp Closers',
      tag: 'GHOST_CLOSER // 24/7',
      subtitle: 'Atendimento e fechamento automático de contratos de alto valor enquanto o mundo dorme.',
      imgSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      badge: 'WHATSAPP CLOSING',
      icon: Code2,
      stats: 'ROAS 4.8X MÉDIO'
    }
  ];

  return (
    <div className="w-full my-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-black/90 border border-gray-700 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              [PARADOX_TEAM // SUBMUNDO_DA_IA]
            </span>
            <span className="text-xs font-mono text-gray-500">NOIR_EDITION_2026</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
            A Elite Subterrânea de Agentes de IA
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Esqueça tutoriais genéricos. O <strong>ParadoxTeam</strong> entrega a arquitetura bruta que agências de ponta utilizam no submundo para automatizar vendas, programar sistemas inteiros e dominar mercados.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400 border border-gray-800 bg-[#06080F] px-3.5 py-2 rounded-xl shrink-0">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>KALI LINUX & NEURAL SYNC</span>
        </div>
      </div>

      {/* Grid de Fotos Reais Preto e Branco com Vibe Hacker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-[#05070D] hover:border-gray-600 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container with Black & White + Contrast Filter */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black">
                <img 
                  src={item.imgSrc}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:contrast-150 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* CRT Scanline & Grain Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-black/60 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[9px] font-mono font-black uppercase text-black bg-white px-2.5 py-1 rounded shadow-md">
                    {item.badge}
                  </span>
                  <span className="text-[9px] font-mono text-gray-300 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-gray-700">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Corner Telemetry Stats */}
                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-emerald-400 bg-black/90 border border-emerald-500/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  {item.stats}
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-5 sm:p-6 border-t border-gray-800/80 bg-[#05070D]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-white" />
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  {item.subtitle}
                </p>
                
                <div className="mt-4 pt-3 border-t border-gray-900 flex items-center justify-between font-mono text-[10px] text-gray-500">
                  <span>SYSTEM_CODE // 0xPARADOX</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors flex items-center gap-1">
                    [ACESSO LIBERADO]
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
