import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, X, Sparkles, Download } from 'lucide-react';
import { Cinema3DBackground } from './components/Cinema3DBackground';

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), x, currentY);
  }
}

export default function PricesPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [flyerDataUrl, setFlyerDataUrl] = useState<string>('');
  const baseFlyerUrl = '/assets/aistudio/Tabela_de_pre_os_VIRTUAL_PLACE_atualizada_88161792.png';

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = baseFlyerUrl;

    img.onload = () => {
      const renderFlyer = () => {
        const W = 1122;
        const H = 1730;
        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 1. Base matte dark background matching original flyer
        ctx.fillStyle = '#070907';
        ctx.fillRect(0, 0, W, H);

        // 2. Copy exact Top Header from original image (3D DSLR Camera, 3D Drone, Brand & Headline)
        ctx.drawImage(img, 0, 0, W, 464, 0, 0, W, 464);

        // 3. ROW 1: Campanha de Marketing 30 Dias (R$ 5.000) + Fotografia
        // 3A. Copy original Campanha de Marketing 30 Dias box (x=24..748, y=464..778)
        ctx.drawImage(img, 24, 464, 724, 314, 24, 464, 724, 314);

        // Replace R$ 1.000 inside Campanha box with R$ 5.000 in exact neon lime green
        ctx.fillStyle = '#080A07';
        ctx.fillRect(218, 586, 410, 80);

        ctx.save();
        ctx.font = '900 78px "Montserrat", "Inter", system-ui, -apple-system, sans-serif';
        ctx.fillStyle = '#9EF832';
        ctx.textBaseline = 'alphabetic';
        ctx.shadowColor = 'rgba(158, 248, 50, 0.25)';
        ctx.shadowBlur = 12;
        ctx.fillText('R$ 5.000', 224, 658);
        ctx.restore();

        // 3B. Right Card in Row 1: FOTOGRAFIA (copied from original image x=749..1090, y=788..1028 and styled to fit Row 1 height)
        const photoCardX = 755;
        const photoCardY = 471;
        const photoCardW = 335;
        const photoCardH = 301;
        drawRoundedRect(ctx, photoCardX, photoCardY, photoCardW, photoCardH, 22);
        ctx.fillStyle = '#161715';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#333631';
        ctx.stroke();

        // Copy original FOTOGRAFIA inner content (icon + header + divider + pricing text)
        ctx.drawImage(img, 756, 795, 326, 225, photoCardX + 4, photoCardY + 34, 326, 225);

        // 4. ROW 2: PREÇOS UNIFICADOS POR MINUTAGEM (Vídeo com Celular R$250/min | Com Câmera R$550/min | Adicional Drone R$300/min)
        const row2Y = 792;
        const row2H = 250;
        const colX = [32, 392, 749];
        const colW = 341;

        const videoCards = [
          {
            titleLine1: 'VÍDEO',
            titleLine2: 'COM CELULAR',
            price: 'R$ 250/min',
            desc: 'Preço unificado por minutagem • Captação + Edição',
            iconSrc: { sx: 785, sy: 490, sw: 62, sh: 74, dx: 24, dy: 20, dw: 58, dh: 68 }
          },
          {
            titleLine1: 'VÍDEO',
            titleLine2: 'COM CÂMERA',
            price: 'R$ 550/min',
            desc: 'Preço unificado por minutagem • Gravação 4K + Edição',
            iconSrc: { sx: 55, sy: 802, sw: 88, sh: 72, dx: 24, dy: 22, dw: 78, dh: 64 }
          },
          {
            titleLine1: 'ADICIONAL',
            titleLine2: 'DRONE',
            price: 'R$ 300/min',
            desc: 'Preço unificado por minutagem • Imagens aéreas em 4K',
            iconSrc: { sx: 415, sy: 802, sw: 86, sh: 72, dx: 22, dy: 22, dw: 78, dh: 64 }
          }
        ];

        videoCards.forEach((card, idx) => {
          const x = colX[idx];
          const y = row2Y;

          drawRoundedRect(ctx, x, y, colW, row2H, 22);
          ctx.fillStyle = '#161715';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#333631';
          ctx.stroke();

          // Copy original vector-style icon from flyer
          ctx.drawImage(
            img,
            card.iconSrc.sx,
            card.iconSrc.sy,
            card.iconSrc.sw,
            card.iconSrc.sh,
            x + card.iconSrc.dx,
            y + card.iconSrc.dy,
            card.iconSrc.dw,
            card.iconSrc.dh
          );

          // Card Header
          const textX = x + card.iconSrc.dx + card.iconSrc.dw + 16;
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '800 24px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.titleLine1, textX, y + 50);
          ctx.fillText(card.titleLine2, textX, y + 78);

          // Divider line
          ctx.strokeStyle = '#6E726C';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x + 26, y + 104);
          ctx.lineTo(x + colW - 26, y + 104);
          ctx.stroke();

          // Price in Neon Lime Green
          ctx.fillStyle = '#9EF832';
          ctx.font = '900 48px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.price, x + 26, y + 162);

          // Subtitle
          ctx.fillStyle = '#EBEBEB';
          ctx.font = '400 20px "Inter", system-ui, sans-serif';
          wrapCanvasText(ctx, card.desc, x + 26, y + 196, colW - 50, 25);
        });

        // 5. ROW 3: VALORES AVULSOS (R$ 1.500 cada)
        const row3Y = 1060;
        const row3H = 282;

        const avulsosCards = [
          {
            badge: 'VALOR AVULSO',
            titleLine1: 'SOCIAL MEDIA',
            titleLine2: 'EVENTOS & SEMANAL',
            price: 'R$ 1.500',
            desc: 'Com captação semanal e conteúdo mensal de todos os eventos'
          },
          {
            badge: 'VALOR AVULSO',
            titleLine1: 'ASSESSORIA DE',
            titleLine2: 'TRÁFEGO PAGO',
            price: 'R$ 1.500',
            desc: 'Planejamento, gestão estratégica e otimização de campanhas de anúncios'
          },
          {
            badge: 'VALOR AVULSO',
            titleLine1: 'PROJETOS COM IA',
            titleLine2: 'CONSULTORIA + EXECUÇÃO',
            price: 'R$ 1.500',
            desc: 'Consultoria, Treinamento + Suporte e Execução de projetos com IA + Mensal (ferramentas à parte)'
          }
        ];

        avulsosCards.forEach((card, idx) => {
          const x = colX[idx];
          const y = row3Y;

          drawRoundedRect(ctx, x, y, colW, row3H, 22);
          ctx.fillStyle = '#121610';
          ctx.fill();
          ctx.lineWidth = 2.2;
          ctx.strokeStyle = '#62B518';
          ctx.stroke();

          // Kicker label
          ctx.fillStyle = '#9EF832';
          ctx.font = '800 14px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.badge, x + 26, y + 32);

          // Title
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '900 23px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.titleLine1, x + 26, y + 60);
          ctx.fillStyle = '#9EF832';
          ctx.font = '800 20px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.titleLine2, x + 26, y + 85);

          // Divider
          ctx.strokeStyle = '#4A5D39';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x + 26, y + 101);
          ctx.lineTo(x + colW - 26, y + 101);
          ctx.stroke();

          // Price R$ 1.500
          ctx.fillStyle = '#9EF832';
          ctx.font = '900 54px "Montserrat", "Inter", system-ui, sans-serif';
          ctx.fillText(card.price, x + 26, y + 156);

          // Description
          ctx.fillStyle = '#F3F4F6';
          ctx.font = '500 18.5px "Inter", system-ui, sans-serif';
          wrapCanvasText(ctx, card.desc, x + 26, y + 188, colW - 48, 24);
        });

        // 6. Copy exact Bottom Footer from original image (Arte/Banner bar + Vamos divulgar seu negócio + WhatsApp + 3D Camera Lenses)
        ctx.drawImage(img, 0, 1034, W, 368, 0, 1362, W, 368);

        if (isMounted) {
          setFlyerDataUrl(canvas.toDataURL('image/png'));
        }
      };

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(renderFlyer);
      } else {
        renderFlyer();
      }
    };

    return () => {
      isMounted = false;
    };
  }, []);

  const displaySrc = flyerDataUrl || baseFlyerUrl;

  return (
    <div className="min-h-screen bg-[#07090E] text-white font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden flex flex-col justify-between">
      {/* Background Ambience */}
      <Cinema3DBackground />

      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/85 border-b border-white/10 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400 text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Início</span>
          </a>

          <a href="/" className="inline-flex items-center gap-2.5">
            <img 
              src="/logo-agencia.png" 
              alt="Virtual Place" 
              className="h-9 sm:h-10 w-auto object-contain rounded-lg"
            />
          </a>

          {flyerDataUrl && (
            <a
              href={flyerDataUrl}
              download="Tabela_de_Precos_Virtual_Place_Atualizada.png"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Baixar Tabela</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Container: Updated Flyer Image */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>TABELA DE PREÇOS OFICIAL • VIRTUAL PLACE</span>
        </motion.div>

        {/* Pricing Table Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-black/60 rounded-3xl p-3 sm:p-5 border border-white/15 shadow-2xl backdrop-blur-md relative group"
        >
          {/* Quick action overlay to enlarge */}
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-xl bg-black/70 hover:bg-black text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            title="Ampliar imagem"
          >
            <Maximize2 className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Ampliar</span>
          </button>

          {/* The Updated Flyer Image */}
          <div 
            onClick={() => setIsZoomed(true)} 
            className="cursor-zoom-in rounded-2xl overflow-hidden relative shadow-inner border border-white/5 bg-neutral-950"
          >
            <img
              src={displaySrc}
              alt="Tabela de Preços Virtual Place - Campanha 30 Dias R$ 5.000, Avulsos R$ 1.500 e Vídeos por Minutagem"
              className="w-full h-auto object-contain block mx-auto rounded-2xl hover:scale-[1.01] transition-transform duration-300"
              loading="eager"
            />
          </div>
        </motion.div>

      </main>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-2 sm:p-6"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={displaySrc}
              alt="Tabela de Preços Virtual Place Ampliada"
              className="max-w-full max-h-[92vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-white/10 text-center text-xs font-mono text-neutral-500 relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Virtual Place • Todos os direitos reservados</span>
          <a href="/" className="text-emerald-400 hover:underline">Voltar para Home</a>
        </div>
      </footer>
    </div>
  );
}
