import React, { useState } from 'react';
import { Heart, ChevronRight, Check, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
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

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      
      // Spawn floating hearts
      const newHeart = { id: Date.now(), x: (Math.random() - 0.5) * 40 };
      setFloatingHearts(prev => [...prev.slice(-4), newHeart]);
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 1000);
    }
  };

  const Icon = service.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Geometric Decorative Graphic Header */}
      <div className={`h-32 w-full ${service.bgGradient} relative overflow-hidden flex items-center justify-between p-5`}>
        {/* Subtle geometric background shapes */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="90" cy="20" r="35" fill="currentColor" />
            <polygon points="0,0 35,0 0,60" fill="currentColor" />
            <rect x="50" y="60" width="30" height="30" rx="6" fill="currentColor" transform="rotate(25 65 75)" />
          </svg>
        </div>

        {/* Category Icon with Geometric Frame */}
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center border border-white/40">
          <Icon className={`w-6 h-6 ${service.accentColor}`} />
        </div>

        {/* Interactive Like Button */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={handleLike}
            aria-label="Curtir serviço"
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all active:scale-95 ${
              isLiked 
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' 
                : 'bg-white/80 hover:bg-white text-gray-700 shadow-sm'
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
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-sm shadow-sm">
              {service.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
            {service.category}
          </div>
          <h3 className="text-lg font-black text-gray-900 leading-snug tracking-tight mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Quick bullet points */}
          <ul className="space-y-1.5 mb-5">
            {service.features.map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Price Tag */}
          <div className="pt-4 border-t border-gray-100 flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase text-gray-400 block font-semibold">Investimento</span>
              <div className="text-2xl font-black text-gray-900 font-mono tracking-tight">
                {service.price}
                {service.unit && <span className="text-xs font-semibold text-gray-500 font-sans ml-1">{service.unit}</span>}
              </div>
            </div>
          </div>

          {/* Action Link / Button */}
          <a 
            href={service.link}
            target={service.link.startsWith('http') ? '_blank' : '_self'}
            rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`w-full py-3 px-4 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-1.5 transition-all shadow-sm text-center ${
              service.link.includes('wa.me') 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-gray-900 hover:bg-black text-white'
            }`}
          >
            <span>{service.linkText}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
