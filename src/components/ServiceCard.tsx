import React, { useState, useRef } from 'react';
import { Heart, ChevronRight, Check, LucideIcon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  unit?: string;
  link: string;
  linkText: string;
  badge?: string;
  category: string;
  accentColor: string;
  bgGradient: string;
  icon: LucideIcon;
  features: string[];
  initialLikes: number;
}

interface ServiceCardProps {
  service: ServiceItem;
  key?: React.Key;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [likes, setLikes] = useState(service.initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  // 3D Tilt state
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10; // max 10 deg tilt
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      
      const newHeart = { id: Date.now(), x: (Math.random() - 0.5) * 40 };
      setFloatingHearts(prev => [...prev.slice(-4), newHeart]);
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 1000);
    }
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-cyan-500/40 transition-shadow duration-300 flex flex-col justify-between overflow-hidden h-full"
      >
        {/* Dynamic Specular 3D Glare Sheen */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.45) 0%, transparent 60%)`,
            opacity: glarePos.opacity
          }}
        />

        {/* 4K Studio Viewfinder Lines (Subtle Top-Right & Bottom-Left) */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gray-400/40 pointer-events-none z-20" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gray-400/40 pointer-events-none z-20" />

        {/* Header Visual with 3D Pop Layer */}
        <div 
          className={`h-32 w-full ${service.bgGradient} relative overflow-hidden flex items-center justify-between p-5`}
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Subtle geometric 3D grid */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="90" cy="20" r="35" fill="currentColor" />
              <polygon points="0,0 35,0 0,60" fill="currentColor" />
              <rect x="50" y="60" width="30" height="30" rx="6" fill="currentColor" transform="rotate(25 65 75)" />
            </svg>
          </div>

          {/* 4K Resolution Stamp */}
          <div className="absolute bottom-2 right-3 font-mono text-[9px] font-bold tracking-widest text-black/40 uppercase pointer-events-none flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block animate-pulse" />
            <span>4K MASTER</span>
          </div>

          {/* Category Icon in Floating 3D Frame */}
          <div 
            className="relative z-10 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform duration-300"
            style={{ transform: 'translateZ(30px)' }}
          >
            <Icon className={`w-6 h-6 ${service.accentColor}`} />
          </div>

          {/* Interactive Like Counter */}
          <div className="relative z-10" style={{ transform: 'translateZ(25px)' }}>
            <button
              type="button"
              onClick={handleLike}
              aria-label="Curtir serviço"
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all active:scale-90 ${
                isLiked 
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' 
                  : 'bg-white/90 hover:bg-white text-gray-700 shadow-sm border border-gray-200/60'
              }`}
            >
              <motion.div
                animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-white text-white' : 'text-rose-500'}`} />
              </motion.div>
              <span className="font-mono text-[11px]">{likes}</span>

              {/* Floating Heart Particles */}
              <AnimatePresence>
                {floatingHearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    initial={{ opacity: 1, y: 0, scale: 0.8, x: heart.x }}
                    animate={{ opacity: 0, y: -45, scale: 1.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute pointer-events-none -top-2 left-1/2 -translate-x-1/2"
                  >
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500 drop-shadow-sm" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </button>
          </div>

          {/* Badge */}
          {service.badge && (
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2" style={{ transform: 'translateZ(25px)' }}>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 text-white backdrop-blur-sm shadow-md border border-white/15">
                {service.badge}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(15px)' }}>
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-600 mb-1.5">
              <span>{service.category}</span>
              <span className="text-gray-400">PRO LEVEL</span>
            </div>

            <h3 className="text-lg font-black text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-cyan-700 transition-colors">
              {service.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>

            {/* Quick bullet points */}
            <ul className="space-y-1.5 mb-5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Price Tag (if defined) */}
            {service.price && (
              <div className="pt-4 border-t border-gray-100 flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 block font-bold tracking-wider">Investimento</span>
                  <div className="text-2xl font-black text-gray-900 font-mono tracking-tight">
                    {service.price}
                    {service.unit && <span className="text-xs font-semibold text-gray-500 font-sans ml-1">{service.unit}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* Action Link / Button */}
            <a 
              href={service.link}
              target={service.link.startsWith('http') ? '_blank' : '_self'}
              rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-md text-center cursor-pointer relative overflow-hidden group/btn ${
                service.link.includes('wa.me') 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-black hover:bg-neutral-900 text-white'
              }`}
            >
              <span>{service.linkText}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
