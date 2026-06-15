import React, { useEffect, useRef, useState } from 'react';
import { Bot, HelpCircle, Layers, Zap } from 'lucide-react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
}

export default function NeonBackground3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, targetX: 0, targetY: 0 });
  const [currentShapeIdx, setCurrentShapeIdx] = useState<number>(0);

  const shapes = ['Esfera', 'Losango', 'Bandeira do Brasil', 'Hélice DNA'];

  // Rodar de forma automática entre as formas a cada 5.2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShapeIdx((prev) => (prev + 1) % 4);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numPoints = 160;
    const currentPoints: Point3D[] = [];

    // --- DEFINIR AS FORMAS GEOMÉTRICAS ---

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

    // 2. Losango / Octaedro 3D (Shape 1)
    const losangoPoints: Point3D[] = [];
    const vertices = [
      { x: 0, y: 180, z: 0 },   // Top
      { x: 0, y: -180, z: 0 },  // Bottom
      { x: 130, y: 0, z: 0 },   // Right
      { x: -130, y: 0, z: 0 },  // Left
      { x: 0, y: 0, z: 130 },   // Front
      { x: 0, y: 0, z: -130 }   // Back
    ];
    const faces = [
      [0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2],
      [1, 2, 4], [1, 4, 3], [1, 3, 5], [1, 5, 2]
    ];
    for (let i = 0; i < numPoints; i++) {
      const f = i % 8;
      const r1 = Math.sqrt(((i + 1) * 0.17) % 1);
      const r2 = ((i + 1) * 2.37) % 1;
      const u = 1 - r1;
      const v = r1 * (1 - r2);
      const w = r1 * r2;

      const x = u * vertices[faces[f][0]].x + v * vertices[faces[f][1]].x + w * vertices[faces[f][2]].x;
      const y = u * vertices[faces[f][0]].y + v * vertices[faces[f][1]].y + w * vertices[faces[f][2]].y;
      const z = u * vertices[faces[f][0]].z + v * vertices[faces[f][1]].z + w * vertices[faces[f][2]].z;

      losangoPoints.push({
        x,
        y,
        z,
        color: i % 2 === 0 ? 'rgba(0, 240, 255, 0.9)' : 'rgba(59, 130, 246, 0.9)'
      });
    }

    // 3. Bandeira do Brasil (Shape 2)
    // Usamos uma grade 16x10 = 160 pontos
    const brazilPoints: Point3D[] = [];
    const gridCols = 16;
    const gridRows = 10;
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const u = (c / (gridCols - 1)) * 2 - 1; // -1 a 1
        const v = (r / (gridRows - 1)) * 2 - 1; // -1 a 1

        const x = u * 190;
        const y = v * 120;
        const z = Math.sin(u * 2.5) * 12;

        // Determinar cor da bandeira brasileira
        // Losango Amarelo
        const inRhombus = (Math.abs(u) / 0.78) + (Math.abs(v) / 0.58) <= 1.0;
        // Círculo Azul
        const inCircle = (u * u) / (0.31 * 0.31) + (v * v) / (0.31 * 0.31) <= 1.0;
        // Faixa Branca
        const inWhiteBand = inCircle && (v - u * 0.35 >= -0.05 && v - u * 0.35 <= 0.05);

        let color = 'rgba(34, 197, 94, 0.9)'; // Verde
        if (inWhiteBand) {
          color = 'rgba(255, 255, 255, 0.95)'; // Branco
        } else if (inCircle) {
          color = 'rgba(30, 64, 175, 0.95)'; // Azul escuro
        } else if (inRhombus) {
          color = 'rgba(250, 204, 21, 0.95)'; // Amarelo
        }

        brazilPoints.push({ x, y, z, color });
      }
    }

    // 4. Hélice de DNA (Shape 3)
    const helixPoints: Point3D[] = [];
    for (let i = 0; i < numPoints; i++) {
      const isStrandA = i % 2 === 0;
      const t = (i / numPoints) * Math.PI * 4;
      const spiralRadius = 110;
      const tOffset = isStrandA ? 0 : Math.PI;
      helixPoints.push({
        x: Math.cos(t + tOffset) * spiralRadius,
        y: (t - Math.PI * 2) * 65,
        z: Math.sin(t + tOffset) * spiralRadius,
        color: isStrandA ? 'rgba(0, 240, 255, 0.85)' : 'rgba(236, 72, 153, 0.85)'
      });
    }

    // Inicializar posições correntes das partículas no centro
    for (let i = 0; i < numPoints; i++) {
      currentPoints.push({
        x: spherePoints[i].x,
        y: spherePoints[i].y,
        z: spherePoints[i].z,
        color: spherePoints[i].color
      });
    }

    let angleX = 0.003;
    let angleY = 0.004;
    let autoRotateAngleX = 0;
    let autoRotateAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX - width / 2;
      mouseRef.current.targetY = e.clientY - height / 2;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Mouse magnetismo suavizado
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Definir a forma ativa baseado no estado index
      let targetSourcePoints = spherePoints;
      let activeShapeIdxVal = currentShapeIdx; // Captura o ID atual

      // Garantir compatibilidade dinamicamente
      if (activeShapeIdxVal === 0) targetSourcePoints = spherePoints;
      else if (activeShapeIdxVal === 1) targetSourcePoints = losangoPoints;
      else if (activeShapeIdxVal === 2) targetSourcePoints = brazilPoints;
      else if (activeShapeIdxVal === 3) targetSourcePoints = helixPoints;

      // Animar onda da bandeira do Brasil em tempo real
      const waveOffset = Date.now() * 0.0035;

      // Morphing suave da partícula individual
      for (let i = 0; i < numPoints; i++) {
        const sourcePt = targetSourcePoints[i];
        let targetX = sourcePt.x;
        let targetY = sourcePt.y;
        let targetZ = sourcePt.z;

        // Se for a bandeira do Brasil, faz ela flutuar suavemente
        if (activeShapeIdxVal === 2) {
          const colIdx = i % gridCols;
          const uFactor = (colIdx / (gridCols - 1)) * 3;
          targetZ = Math.sin(uFactor + waveOffset) * 22;
        }

        // Aplica o spring physics para movimento futurista orgânico
        currentPoints[i].x += (targetX - currentPoints[i].x) * 0.07;
        currentPoints[i].y += (targetY - currentPoints[i].y) * 0.07;
        currentPoints[i].z += (targetZ - currentPoints[i].z) * 0.07;
        currentPoints[i].color = sourcePt.color;
      }

      // Rotações gravitacionais
      autoRotateAngleX += angleX;
      autoRotateAngleY += angleY;

      const finalAngleY = autoRotateAngleY + (mouseRef.current.active ? mouseRef.current.x * 0.0015 : 0);
      const finalAngleX = autoRotateAngleX + (mouseRef.current.active ? mouseRef.current.y * 0.0015 : 0);

      const cosY = Math.cos(finalAngleY);
      const sinY = Math.sin(finalAngleY);
      const cosX = Math.cos(finalAngleX);
      const sinX = Math.sin(finalAngleX);

      const projected: { sx: number; sy: number; sz: number; color: string }[] = [];

      for (let i = 0; i < numPoints; i++) {
        const pt = currentPoints[i];

        // Rotação em Y
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.z * cosY + pt.x * sinY;

        // Rotação em X
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + pt.y * sinX;

        // Projeção 3D com distância focal (profundidade)
        const cameraDistance = 500;
        const scale = cameraDistance / (cameraDistance + z2);
        
        let screenX = x1 * scale + width / 2;
        let screenY = y2 * scale + height / 2;

        // Magnetismo interativo ao redor do cursor
        if (mouseRef.current.active) {
          const mX = mouseRef.current.targetX + width / 2;
          const mY = mouseRef.current.targetY + height / 2;
          const dx = mX - screenX;
          const dy = mY - screenY;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            const pull = (140 - d) / 140 * 22; // Força magnética
            screenX += (dx / d) * pull;
            screenY += (dy / d) * pull;
          }
        }

        projected.push({
          sx: screenX,
          sy: screenY,
          sz: z2,
          color: pt.color
        });
      }

      // Conexões estéticas geométricas baseadas em distância próxima
      ctx.lineWidth = 0.5;
      for (let i = 0; i < numPoints; i++) {
        let connected = 0;
        for (let j = i + 1; j < numPoints; j++) {
          if (connected >= 2) break; // Limita a 2 conexões por ponto para ótimo fps
          
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.sx - p2.sx, p1.sy - p2.sy);

          if (dist < 50) {
            const alpha = (1 - dist / 50) * 0.12;
            
            // Cor gradiente suave para conexões da bandeira do Brasil ou neutro cyan
            if (activeShapeIdxVal === 2) {
              ctx.strokeStyle = `rgba(34, 197, 94, ${alpha * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            }

            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
            connected++;
          }
        }
      }

      // Desenhar cada ponto de luz neon com glow
      for (let i = 0; i < numPoints; i++) {
        const p = projected[i];
        const size = Math.max(1.0, (180 - p.sz) / 45);
        ctx.fillStyle = p.color;

        // Ativa glow neon de acordo com a cor do ponto
        ctx.shadowBlur = size * 1.5;
        if (p.color.includes('34, 197')) {
          ctx.shadowColor = '#22c55e'; // Verde
        } else if (p.color.includes('250, 204')) {
          ctx.shadowColor = '#facc15'; // Amarelo
        } else if (p.color.includes('30, 64')) {
          ctx.shadowColor = '#1d4ed8'; // Azul
        } else if (p.color.includes('139, 92')) {
          ctx.shadowColor = '#8b5cf6'; // Roxo
        } else {
          ctx.shadowColor = '#00f0ff'; // Cyan
        }

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0; // Desativa shadow logo após para manter render rápido

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentShapeIdx]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block opacity-50"
      />

      {/* Identificador discreto da geometria ativa no canto */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#0F172A]/80 border border-gray-800/80 px-2.5 py-1 rounded-full text-[9px] font-mono text-gray-500 backdrop-blur-sm shadow-md">
        <Layers className="w-3 h-3 text-[#00F0FF] animate-spin" style={{ animationDuration: '6s' }} />
        <span>Geometria Ativa: </span>
        <span className="text-[#00F0FF] font-bold uppercase">{shapes[currentShapeIdx]}</span>
      </div>
    </div>
  );
}
