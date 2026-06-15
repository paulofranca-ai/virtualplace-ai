import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Rocket, 
  Shield, 
  CheckCircle, 
  Sparkles, 
  Lock,
  Cpu,
  Bot,
  Zap,
  Calendar,
  Layers,
  HelpCircle,
  HelpCircle as QuestionIcon
} from 'lucide-react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
}

export default function BuyAgentsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'anual' | 'mensal'>('anual');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });

  // Monitoramento do scroll para morphing do 3D
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      scrollRef.current.target = window.scrollY / totalHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas 3D interativo magnético de neon geométrico
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Gerar pontos 3D base
    const numPoints = 160;
    const points: Point3D[] = [];
    const currentPoints: Point3D[] = [];

    // Gerar formas geométricas predefinidas
    // 1. Esfera (Shape 0)
    const spherePoints: Point3D[] = [];
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      spherePoints.push({
        x: Math.cos(theta) * Math.sin(phi) * 160,
        y: Math.sin(theta) * Math.sin(phi) * 160,
        z: Math.cos(phi) * 160,
        color: i % 2 === 0 ? 'rgba(0, 240, 255, 0.85)' : 'rgba(139, 92, 246, 0.85)'
      });
    }

    // 2. Toroide / Donut (Shape 1)
    const torusPoints: Point3D[] = [];
    const R = 140; // Raio principal
    const r = 60;  // Raio interno
    for (let i = 0; i < numPoints; i++) {
      const u = (i / numPoints) * Math.PI * 2 * 6; // Voltas completas
      const v = (i / numPoints) * Math.PI * 2;
      torusPoints.push({
        x: (R + r * Math.cos(v)) * Math.cos(u),
        y: (R + r * Math.cos(v)) * Math.sin(u),
        z: r * Math.sin(v),
        color: i % 3 === 0 ? 'rgba(0, 240, 255, 0.85)' : 'rgba(139, 92, 246, 0.85)'
      });
    }

    // 3. Dupla Hélice de DNA (Shape 2)
    const helixPoints: Point3D[] = [];
    for (let i = 0; i < numPoints; i++) {
      const isStrandA = i % 2 === 0;
      const t = (i / numPoints) * Math.PI * 4; // Ângulo ao longo da hélice
      const spiralRadius = 100;
      const tOffset = isStrandA ? 0 : Math.PI;
      helixPoints.push({
        x: Math.cos(t + tOffset) * spiralRadius,
        y: (t - Math.PI * 2) * 60, // Distribuído verticalmente
        z: Math.sin(t + tOffset) * spiralRadius,
        color: isStrandA ? 'rgba(0, 240, 255, 0.85)' : 'rgba(236, 72, 153, 0.85)'
      });
    }

    // Inicializar pontos atuais
    for (let i = 0; i < numPoints; i++) {
      currentPoints.push({
        x: spherePoints[i].x,
        y: spherePoints[i].y,
        z: spherePoints[i].z,
        color: spherePoints[i].color
      });
    }

    let angleX = 0.004;
    let angleY = 0.006;
    let autoRotateAngleX = 0;
    let autoRotateAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left - width / 2;
      mouseRef.current.targetY = e.clientY - rect.top - height / 2;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Suavizar scroll
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
      const t = Math.min(Math.max(scrollRef.current.current, 0), 1);

      // Suavizar mouse remoto
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      // Calcular interpolação entre as formas baseados no progresso do scroll do usuário
      // Se t < 0.5 interpolamos entre Esfera e Toroide
      // Se t >= 0.5 interpolamos entre Toroide e Hélice
      for (let i = 0; i < numPoints; i++) {
        let targetX = 0, targetY = 0, targetZ = 0;
        if (t < 0.5) {
          const ratio = t * 2;
          targetX = spherePoints[i].x * (1 - ratio) + torusPoints[i].x * ratio;
          targetY = spherePoints[i].y * (1 - ratio) + torusPoints[i].y * ratio;
          targetZ = spherePoints[i].z * (1 - ratio) + torusPoints[i].z * ratio;
        } else {
          const ratio = (t - 0.5) * 2;
          targetX = torusPoints[i].x * (1 - ratio) + helixPoints[i].x * ratio;
          targetY = torusPoints[i].y * (1 - ratio) + helixPoints[i].y * ratio;
          targetZ = torusPoints[i].z * (1 - ratio) + helixPoints[i].z * ratio;
        }

        // Suavizar transição da partícula individual
        currentPoints[i].x += (targetX - currentPoints[i].x) * 0.1;
        currentPoints[i].y += (targetY - currentPoints[i].y) * 0.1;
        currentPoints[i].z += (targetZ - currentPoints[i].z) * 0.1;
      }

      // Rotações automáticas e resposta ao mouse
      autoRotateAngleX += angleX;
      autoRotateAngleY += angleY;

      // Adiciona um balanço extra conforme o mouse se move (magnetismo espacial)
      const finalAngleY = autoRotateAngleY + (mouseRef.current.active ? mouseRef.current.x * 0.002 : 0);
      const finalAngleX = autoRotateAngleX + (mouseRef.current.active ? mouseRef.current.y * 0.002 : 0);

      const cosY = Math.cos(finalAngleY);
      const sinY = Math.sin(finalAngleY);
      const cosX = Math.cos(finalAngleX);
      const sinX = Math.sin(finalAngleX);

      // Projetar e Desenhar Partículas 3D
      const projected: { sx: number; sy: number; sz: number; color: string }[] = [];

      for (let i = 0; i < numPoints; i++) {
        const pt = currentPoints[i];

        // Rotação Y
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.z * cosY + pt.x * sinY;

        // Rotação X
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + pt.y * sinX;

        // Efeito de Profundidade de Perspectiva (Projection)
        const cameraDistance = 450;
        const scale = cameraDistance / (cameraDistance + z2);
        
        let screenX = x1 * scale + width / 2;
        let screenY = y2 * scale + height / 2;

        // Atração magnética do cursor nos pontos vizinhos
        if (mouseRef.current.active) {
          const mouseWorldX = mouseRef.current.targetX + width / 2;
          const mouseWorldY = mouseRef.current.targetY + height / 2;
          const dx = mouseWorldX - screenX;
          const dy = mouseWorldY - screenY;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const force = (130 - dist) / 130 * 18; // Força magnética
            screenX += (dx / dist) * force;
            screenY += (dy / dist) * force;
          }
        }

        projected.push({
          sx: screenX,
          sy: screenY,
          sz: z2,
          color: pt.color
        });
      }

      // Desenhar conexões magnéticas geométricas se estiverem próximas
      ctx.lineWidth = 0.55;
      for (let i = 0; i < numPoints; i++) {
        let connections = 0;
        for (let j = i + 1; j < numPoints; j++) {
          if (connections >= 2) break; // Limita conexões para fluidez e leveza do site
          
          const p1 = projected[i];
          const p2 = projected[j];
          const distance = Math.hypot(p1.sx - p2.sx, p1.sy - p2.sy);

          if (distance < 55) {
            const alpha = (1 - distance / 55) * 0.18;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Desenhar os pontos neon brilhantes
      for (let i = 0; i < numPoints; i++) {
        const p = projected[i];
        // O tamanho muda baseado no eixo Z (proximidade da câmera)
        const size = Math.max(1.2, (180 - p.sz) / 45);
        ctx.fillStyle = p.color;
        
        // Efeito glow primário para tons neon
        ctx.shadowBlur = size * 1.5;
        ctx.shadowColor = p.color.includes('139') ? '#8B5CF6' : '#00F0FF';

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0; // Reseta shadow para performance

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#0A0F1C] text-white flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-x-hidden scroll-smooth"
    >
      
      {/* Canvas Interativo 3D com Neon Magnético */}
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full opacity-65"
        />
      </div>

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

          {/* Aba Seletora de Planos */}
          <div className="flex justify-center mt-8">
            <div className="p-1 bg-[#0F172B]/90 backdrop-blur-md rounded-full border border-gray-800 flex items-center justify-center relative shadow-lg">
              <button 
                onClick={() => setActiveTab('anual')}
                className={`px-6 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'anual' 
                    ? 'bg-[#00F0FF] text-[#0A0F1C] shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                PLANO ANUAL (Economia)
                <span className="text-[9px] uppercase font-bold bg-[#0A0F1C]/10 dark:bg-white/10 px-1.5 py-0.5 rounded leading-none text-right">
                  -58% Off
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('mensal')}
                className={`px-6 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'mensal' 
                    ? 'bg-[#00F0FF] text-[#0A0F1C] shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                MENSAL
              </button>
            </div>
          </div>
        </div>

        {/* Cards de Exibição de Plano Dinâmico Conversivo (Sem Formulário!) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto mb-16">
          
          {/* Card Esquerdo: Detalhamento do que vem incluso (Destaque Modular) */}
          <div className="md:col-span-6 p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-lg flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-4 text-[#00F0FF]/15">
              <Bot className="w-20 h-20 rotate-12" />
            </div>

            <div>
              <h3 className="text-sm font-mono text-[#00F0FF] font-bold uppercase tracking-wider mb-2">
                O que você vai receber:
              </h3>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                Todas as tecnologias acompanham a chave de integração direta pra você escalar e poupar tempo operacional imediatamente.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Robô Conversor via WhatsApp</h4>
                    <p className="text-[11px] text-[#94A3B8]">Derruba objeções, apresenta e fecha vendas sem você precisar intervir.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Agente Inteligente de Tráfego & Leads</h4>
                    <p className="text-[11px] text-[#94A3B8]">Qualifica frios e retém conversações de forma assertiva.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Setup + Treinamento em Vídeo Aula</h4>
                    <p className="text-[11px] text-[#94A3B8]">Você paga, recebe os arquivos prontos, assiste as mini-aulas e implementa. Cérebro muito inteligente!</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-1 h-6 w-6 rounded bg-cyan-900/40 flex items-center justify-center shrink-0 border border-cyan-500/20 text-[#00F0FF]">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Integração Direta com Obsidian</h4>
                    <p className="text-[11px] text-[#94A3B8]">Para organizar, otimizar dados de tokens e arquivar conhecimento estrategicamente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/80">
              <div className="flex items-center gap-2 mb-1.5 text-[11px] text-emerald-400 font-bold uppercase">
                <Shield className="w-3.5 h-3.5" />
                <span>Risco Zero e Satisfação Garantida</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Nossa licença fornece 7 dias de garantia incondicional. Se não gostar do ecossistema de robôs construídos, devolvemos cada centavo.
              </p>
            </div>
          </div>

          {/* Card Direito: Plano Ativo Selecionado (Conversor Direto Kiwify) */}
          <div className="md:col-span-6 p-8 rounded-2xl border border-[#00F0FF]/30 bg-[#060913] hover:border-[#00F0FF]/50 transition-all flex flex-col justify-between relative shadow-[0_0_60px_rgba(0,240,255,0.06)] overflow-hidden">
            
            {/* Tag de Destaque */}
            <div className="absolute top-0 right-0">
              <span className="text-[9px] uppercase font-mono bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold px-3 py-1.5 rounded-bl-xl shadow-md inline-block">
                Mais Vendido
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'anual' ? (
                <motion.div
                  key="anual-plan"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-[#00F0FF] font-bold uppercase tracking-widest">
                      <Zap className="w-3.5 h-3.5" /> Licença Anual Completa
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">
                      AutoLead Infinity
                    </h2>
                    <p className="text-xs text-gray-400 mb-6 font-medium">
                      Melhor custo-benefício para quem quer economizar mais de R$ 1.300 por ano e ter acesso total contínuo.
                    </p>

                    <div className="bg-[#0A0F1C]/90 p-4 rounded-xl border border-gray-800/80 mb-6">
                      <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Apenas</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-gray-400">R$</span>
                        <span className="text-4xl font-extrabold text-white tracking-tight">997,00</span>
                        <span className="text-xs font-mono text-gray-400 font-bold">/ano</span>
                      </div>
                      <p className="text-[10px] text-emerald-400 font-semibold mt-2.5 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 shrink-0" /> Pago em até 12x no cartão de crédito via Kiwify
                      </p>
                    </div>

                    <div className="space-y-2 mb-8">
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
                </motion.div>
              ) : (
                <motion.div
                  key="mensal-plan"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-purple-400 font-bold uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" /> Licença Mensal Flexível
                    </div>
                    <h2 className="text-2xl font-black text-white mb-2">
                      AutoLead Light
                    </h2>
                    <p className="text-xs text-gray-400 mb-6 font-medium">
                      Ideal para quem prefere testar o ecossistema com liberdade e com pagamento recorrente sem compromisso anual.
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

                    <div className="space-y-2 mb-8">
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

                  <div>
                    <a
                      href="https://pay.kiwify.com.br/zABsvn6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-[#8B5CF6] hover:from-purple-500 hover:to-[#7C3AED] text-white font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] text-xs text-center uppercase cursor-pointer"
                    >
                      🚀 ASSINAR PLANO MENSAL AGORA
                    </a>
                    
                    <div className="flex gap-2 items-center justify-center text-[10px] text-[#64748B] mt-4 font-mono">
                      <Lock className="w-3 h-3 text-purple-400" />
                      <span>Processamento Seguro por Kiwify SSL</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Mini FAQs de Alta Conversão */}
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
