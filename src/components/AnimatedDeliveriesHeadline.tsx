import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Video, 
  TrendingUp, 
  Bot, 
  Users, 
  Music, 
  Palette, 
  Globe 
} from 'lucide-react';

export interface DeliveryItem {
  id: string;
  name: string;
  gradient: string;
  glowColor: string;
  borderColor: string;
  bgBadge: string;
  textColor: string;
  icon: React.ElementType;
}

export const DELIVERIES: DeliveryItem[] = [
  {
    id: 'fotos',
    name: 'Fotos',
    gradient: 'from-amber-400 via-orange-300 to-rose-400',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    borderColor: 'border-orange-500/40',
    bgBadge: 'bg-orange-500/10 text-orange-300',
    textColor: 'text-orange-400',
    icon: Camera
  },
  {
    id: 'videos',
    name: 'Vídeos',
    gradient: 'from-rose-500 via-pink-400 to-red-400',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    borderColor: 'border-rose-500/40',
    bgBadge: 'bg-rose-500/10 text-rose-300',
    textColor: 'text-rose-400',
    icon: Video
  },
  {
    id: 'trafego-pago',
    name: 'Tráfego Pago',
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    borderColor: 'border-emerald-500/40',
    bgBadge: 'bg-emerald-500/10 text-emerald-300',
    textColor: 'text-emerald-400',
    icon: TrendingUp
  },
  {
    id: 'ia',
    name: 'Inteligência Artificial',
    gradient: 'from-purple-400 via-violet-300 to-indigo-400',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    borderColor: 'border-purple-500/40',
    bgBadge: 'bg-purple-500/10 text-purple-300',
    textColor: 'text-purple-400',
    icon: Bot
  },
  {
    id: 'freelas',
    name: 'Freelas',
    gradient: 'from-blue-400 via-cyan-300 to-sky-400',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    borderColor: 'border-cyan-500/40',
    bgBadge: 'bg-cyan-500/10 text-cyan-300',
    textColor: 'text-cyan-400',
    icon: Users
  },
  {
    id: 'djs',
    name: 'DJs',
    gradient: 'from-pink-400 via-fuchsia-400 to-purple-400',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    borderColor: 'border-pink-500/40',
    bgBadge: 'bg-pink-500/10 text-pink-300',
    textColor: 'text-pink-400',
    icon: Music
  },
  {
    id: 'design',
    name: 'Design',
    gradient: 'from-fuchsia-400 via-pink-300 to-rose-400',
    glowColor: 'rgba(217, 70, 239, 0.4)',
    borderColor: 'border-fuchsia-500/40',
    bgBadge: 'bg-fuchsia-500/10 text-fuchsia-300',
    textColor: 'text-fuchsia-400',
    icon: Palette
  },
  {
    id: 'sites',
    name: 'Sites',
    gradient: 'from-cyan-400 via-teal-300 to-blue-400',
    glowColor: 'rgba(34, 211, 238, 0.4)',
    borderColor: 'border-teal-500/40',
    bgBadge: 'bg-teal-500/10 text-teal-300',
    textColor: 'text-cyan-400',
    icon: Globe
  }
];

interface AnimatedDeliveriesHeadlineProps {
  className?: string;
  intervalMs?: number;
}

export function AnimatedDeliveriesHeadline({
  className = '',
  intervalMs = 2600
}: AnimatedDeliveriesHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DELIVERIES.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, intervalMs]);

  const current = DELIVERIES[currentIndex];
  const CurrentIcon = current.icon;

  return (
    <div className={`w-full ${className}`}>
      {/* Master Animated Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.2] uppercase tracking-tight max-w-5xl mx-auto"
      >
        <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
          A internet é um lugar virtual. Criamos marcas e damos vida a elas com{' '}
        </span>
        
        {/* Animated Rotating Deliverable */}
        <span className="inline-flex items-center align-middle whitespace-nowrap relative px-3 py-1 mx-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all">
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id}
              initial={{ y: 28, opacity: 0, filter: 'blur(6px)', scale: 0.95 }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ y: -28, opacity: 0, filter: 'blur(6px)', scale: 0.95 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-flex items-center gap-2 sm:gap-2.5 font-black text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}
              style={{
                textShadow: `0 0 30px ${current.glowColor}`
              }}
            >
              <CurrentIcon className={`w-5 h-5 sm:w-8 sm:h-8 ${current.textColor} shrink-0 animate-pulse`} />
              <span>{current.name}</span>
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      {/* Interactive Deliveries Pill Row (Permite ver todas as 8 entregas e clicar mantendo animação contínua) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 max-w-4xl mx-auto px-2"
      >
        {DELIVERIES.map((item, idx) => {
          const ItemIcon = item.icon;
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                isActive 
                  ? `${item.bgBadge} ${item.borderColor} scale-105 shadow-lg shadow-black/40 ring-1 ring-white/20` 
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <ItemIcon className={`w-3.5 h-3.5 ${isActive ? item.textColor : 'text-neutral-400 group-hover:text-white'} transition-colors`} />
              <span>{item.name}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
              )}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
