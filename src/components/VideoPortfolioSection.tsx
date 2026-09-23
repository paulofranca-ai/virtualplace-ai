import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Sparkles, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  X,
  MessageSquare,
  Award
} from 'lucide-react';
import { StudioMonitorVideo } from './StudioMonitorVideo';

export interface PortfolioVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  shortTitle: string;
  client: string;
  location: string;
  year: string;
  badge: string;
  badgeColor: string;
  description: string;
  specs: string[];
}

// Cavalgada 2026 é o destaque principal. Os outros vídeos aparecem logo abaixo em miniaturas menores para abrir em popup.
export const FEATURED_VIDEO: PortfolioVideoItem = {
  id: 'tropeiro-2026',
  youtubeId: 'OkQzNAAGdeU',
  title: 'Cavalgada Dia do Tropeiro 2026 - AMURC & Associação dos Tropeiros',
  shortTitle: 'Cavalgada do Tropeiro 2026 (Destaque)',
  client: 'AMURC & Associação dos Tropeiros',
  location: 'Curitibanos, SC',
  year: '2026',
  badge: 'Destaque Principal • 4K 60fps',
  badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  description: 'Cobertura cinematográfica completa em 4K HDR para a Cavalgada do Dia do Tropeiro 2026, reunindo centenas de cavaleiros, famílias e lideranças regionais de Santa Catarina com captação profissional Sony ZV-E10.',
  specs: ['Sony ZV-E10', 'Captação 4K 60fps', 'Color Grading de Cinema', 'Áudio Masterizado', 'Aftermovie Oficial']
};

// Demais produções (sem repetição de depoimento e sem categorias)
export const OTHER_PORTFOLIO_VIDEOS: PortfolioVideoItem[] = [
  {
    id: 'tropeiro-2025',
    youtubeId: 'g-o083FkYEI',
    title: 'Cavalgada Dia do Tropeiro 2025 - Tradição & Cultura Tropeira',
    shortTitle: 'Cavalgada do Tropeiro 2025',
    client: 'Associação dos Tropeiros & AMURC',
    location: 'Curitibanos, SC',
    year: '2025',
    badge: 'Edição 2025 • Tradição',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    description: 'Cobertura completa da edição anterior com planos de campo abertos, ritmo dinâmico e registro histórico da cultura tropeira catarinense.',
    specs: ['Captação Dinâmica', 'Pós-Produção 4K', 'Trilha Sincronizada']
  },
  {
    id: 'institucional-apresentacao',
    youtubeId: 'SSwGhh99DOc',
    title: 'Showreel & Apresentação Oficial Virtual Place 4K',
    shortTitle: 'Apresentação Oficial 4K',
    client: 'Virtual Place Agência',
    location: 'Brasil',
    year: '2026',
    badge: 'Showreel Oficial',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    description: 'Demonstração de potência visual, transições fluidas, ritmo moderno e captação de alta fidelidade para marcas e eventos.',
    specs: ['Motion Graphics', 'Color Grading', 'Sound Design']
  },
  {
    id: 'case-trafego-100k',
    youtubeId: 'QW9InbF3eZE',
    title: 'Case de Sucesso: 100k em Vendas com ROI 7,3x em Tráfego',
    shortTitle: 'Case Tráfego 100k (ROI 7,3x)',
    client: 'Lançamento Digital',
    location: 'Brasil',
    year: '2025',
    badge: 'Case de Vendas • Tráfego',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'Bastidores reais de estratégia de tráfego patrocinado gerando mais de R$ 100.000 em faturamento com retorno sobre investimento de 7,3x.',
    specs: ['Meta & Google Ads', 'Funis de Conversão', 'ROI 7,3x']
  },
  {
    id: 'depoimento-lideranca',
    youtubeId: 't93fNnIL0v0',
    title: 'Depoimento Oficial: Confiabilidade, Pontualidade & Entrega',
    shortTitle: 'Depoimento de Parceiro',
    client: 'Liderança Pública & Associações',
    location: 'Santa Catarina',
    year: '2025',
    badge: 'Depoimento Real',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'Relato espontâneo de liderança e parceiros regionais sobre o profissionalismo, pontualidade de entrega e impacto visual gerado.',
    specs: ['Entrevista', 'Áudio Lapela', 'Avaliação 5 Estrelas']
  }
];

interface VideoPortfolioSectionProps {
  id?: string;
  theme?: 'dark' | 'light';
  embedded?: boolean;
  initialVideoId?: string;
}

export function VideoPortfolioSection({
  id = 'portfolio-videos',
  theme = 'dark',
  embedded = false,
  initialVideoId
}: VideoPortfolioSectionProps) {
  // Estado do popup modal do vídeo
  const [popupVideo, setPopupVideo] = useState<PortfolioVideoItem | null>(null);

  const isDark = theme === 'dark';

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPopupVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const content = (
    <div className={`${embedded ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} relative z-10`}>
      
      {/* 1. HEADLINE EM DESTAQUE (Imponente e Direto) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider mb-4 border bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold">PORTFÓLIO AUDIOVISUAL 4K • PRODUÇÃO CINEMATOGRÁFICA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
          Produções 4K & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Cobertura de Alto Impacto</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300 font-normal">
          Captação profissional com câmera <strong>Sony ZV-E10 em 4K 60fps</strong>, color grading de cinema e pós-produção dinâmica para grandes cavalgadas, prefeituras, associações e marcas.
        </p>
      </motion.div>

      {/* 2. VÍDEO EM DESTAQUE: CAVALGADA 2026 (Monitor Sony 4K) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-2 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-rose-400">
              EM DESTAQUE: CAVALGADA DO TROPEIRO 2026
            </span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
            4K 60FPS • SONY ZV-E10
          </span>
        </div>

        <StudioMonitorVideo 
          youtubeUrl={`https://www.youtube.com/embed/${FEATURED_VIDEO.youtubeId}?autoplay=0&rel=0`}
          title={FEATURED_VIDEO.title}
        />

        {/* Ficha Técnica da Cavalgada 2026 */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto -mt-4 p-5 sm:p-6 rounded-2xl border bg-neutral-900/90 border-neutral-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl text-left">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
              <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase border ${FEATURED_VIDEO.badgeColor}`}>
                {FEATURED_VIDEO.badge}
              </span>
              <span className="flex items-center gap-1 text-neutral-400">
                <MapPin className="w-3 h-3 text-red-400" /> {FEATURED_VIDEO.location}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Calendar className="w-3 h-3 text-amber-400" /> {FEATURED_VIDEO.year}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
              {FEATURED_VIDEO.title}
            </h3>
            
            <p className="text-xs leading-relaxed text-neutral-400">
              {FEATURED_VIDEO.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {FEATURED_VIDEO.specs.map((spec, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md border bg-neutral-950 border-neutral-800 text-neutral-300 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2">
            <a
              href={`https://wa.me/5549991052315?text=${encodeURIComponent('Olá! Assisti ao vídeo da Cavalgada 2026 no portfólio da Virtual Place e gostaria de solicitar um orçamento para o meu evento/empresa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer text-center bg-cyan-400 hover:bg-cyan-300 text-black shadow-cyan-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Orçar Vídeo Como Este</span>
            </a>

            <a
              href={`https://youtu.be/${FEATURED_VIDEO.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-[11px] font-bold font-mono uppercase flex items-center justify-center gap-1.5 transition-colors text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Ver no YouTube</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. OUTROS VÍDEOS EM TAMANHO MENOR (Miniaturas para dar play no Popup Modal) */}
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-5 border-b border-white/10 pb-3"
        >
          <div>
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Outras Produções & Cases de Sucesso</span>
            </h4>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Clique em qualquer miniatura abaixo para reproduzir no player popup com som e tela cheia.
            </p>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-full hidden sm:inline-block">
            {OTHER_PORTFOLIO_VIDEOS.length} PRODUÇÕES DISPONÍVEIS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OTHER_PORTFOLIO_VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setPopupVideo(video)}
              className="group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-900 hover:border-cyan-500/50 transition-all p-3 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-cyan-500/10"
            >
              <div>
                {/* Thumbnail Container com Play Overlay */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-2.5">
                  <img 
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 transition-all shadow-md">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Badge de Ano/Tipo */}
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-mono font-bold bg-black/80 px-2 py-0.5 rounded text-white border border-white/15">
                      {video.year}
                    </span>
                  </div>

                  {/* Tag Superior Direita */}
                  <div className="absolute top-2 right-2">
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${video.badgeColor}`}>
                      {video.badge.split('•')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Título e Cliente */}
                <h5 className="text-xs font-bold text-white line-clamp-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {video.title}
                </h5>
                <p className="text-[10px] text-neutral-400 line-clamp-1 mt-1 font-mono">
                  {video.client}
                </p>
              </div>

              {/* Botão Assistir Vídeo */}
              <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono">
                <span className="text-neutral-500">{video.location}</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Assistir Vídeo <Play className="w-2.5 h-2.5 fill-current" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. POPUP MODAL DO VÍDEO SELECIONADO */}
      <AnimatePresence>
        {popupVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setPopupVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0E18] border border-white/20 rounded-2xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative text-left"
            >
              {/* Header do Popup com Título e Botão Fechar */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${popupVideo.badgeColor}`}>
                      {popupVideo.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {popupVideo.location} • {popupVideo.year}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase leading-snug">
                    {popupVideo.title}
                  </h3>
                </div>

                <button
                  onClick={() => setPopupVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  title="Fechar vídeo (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Player Iframe 16:9 */}
              <div className="rounded-xl overflow-hidden aspect-video bg-black border border-white/10 relative shadow-inner mb-4">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${popupVideo.youtubeId}?autoplay=1&rel=0`}
                  title={popupVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Descrição e Especificações */}
              <div className="space-y-3">
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {popupVideo.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {popupVideo.specs.map((spec, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação do Popup */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/5549991052315?text=${encodeURIComponent(`Olá! Assisti ao vídeo "${popupVideo.title}" no portfólio da Virtual Place e quero solicitar um orçamento.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Orçar Vídeo Similar no WhatsApp</span>
                </a>

                <a
                  href={`https://youtu.be/${popupVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir diretamente no YouTube</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );

  if (embedded) {
    return (
      <div id={id} className="w-full relative scroll-mt-24">
        {content}
      </div>
    );
  }

  return (
    <section id={id} className={`py-16 md:py-24 relative scroll-mt-24 ${isDark ? 'bg-neutral-950 text-white' : 'bg-white text-gray-900'}`}>
      {content}
    </section>
  );
}
