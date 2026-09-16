import React, { useEffect, useRef } from 'react';

export function Cinema3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // 3D Particles & floating bokeh orbs
    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
      angle: number;
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(0, 240, 255, ',   // Cyan neon
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(236, 72, 153, ',  // Pink / Magenta
      'rgba(245, 158, 11, ',  // Cinema Gold
      'rgba(255, 255, 255, '  // Pure white bokeh
    ];

    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 100,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedZ: Math.random() * 0.8 + 0.3,
        angle: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle futuristic 3D perspective grid lines
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      const horizon = height * 0.45;
      for (let x = -width; x < width * 2; x += 120) {
        ctx.beginPath();
        ctx.moveTo(cx, horizon);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = horizon + 30; y < height; y += Math.max(15, (y - horizon) * 0.2)) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Render 3D particles with z-projection
      particles.forEach((p) => {
        p.z -= p.speedZ;
        p.angle += 0.005;

        // Reset if past camera
        if (p.z <= 20) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const scale = fov / (fov + p.z);
        const projectedX = cx + p.x * scale + Math.sin(time + p.angle) * 15;
        const projectedY = cy + p.y * scale + Math.cos(time + p.angle) * 10;
        const radius = Math.max(0.5, p.size * scale * 2.5);
        const alpha = Math.min(0.7, (1 - p.z / 1000) * 0.85);

        if (projectedX >= 0 && projectedX <= width && projectedY >= 0 && projectedY <= height) {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.shadowColor = `${p.color}0.8)`;
          ctx.shadowBlur = radius * 3;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Cinematic Vignette & Ambient Radial Glows */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-[35%] right-[-5%] w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-[160px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

      {/* Film grain / anamorphic mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
