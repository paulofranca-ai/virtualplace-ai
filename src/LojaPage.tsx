import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Camera, 
  Video, 
  MapPin, 
  Utensils, 
  Ticket, 
  Sparkles, 
  Check, 
  Calculator, 
  Info,
  Layers,
  ArrowRight,
  TrendingUp,
  Palette,
  Bot
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';
import { TrafegoCalculator } from './components/TrafegoCalculator';

export default function LojaPage() {
  const navigate = useNavigate();

  // State for Project Estimator (No hourly pricing)
  const [photoOption, setPhotoOption] = useState<'volume' | 'plataforma'>('volume');
  const [photoEvents, setPhotoEvents] = useState<number>(1);
  const [photoQtyDigital, setPhotoQtyDigital] = useState<number>(20);
  const [photoQtyA4, setPhotoQtyA4] = useState<number>(5);

  const [videoOption, setVideoOption] = useState<'aftermovie' | 'reels' | 'none'>('aftermovie');
  const [videoCount, setVideoCount] = useState<number>(1);

  const [artesCount, setArtesCount] = useState<number>(3);
  const [addTraffic, setAddTraffic] = useState<boolean>(true);
  const [trafficMonths, setTrafficMonths] = useState<number>(1);

  const [addTravelExp, setAddTravelExp] = useState<boolean>(true);
  const [addFood, setAddFood] = useState<boolean>(true);
  const [addAccess, setAddAccess] = useState<boolean>(true);

  // Math totals (No hourly calculations)
  const photoCost = photoOption === 'volume'
    ? photoEvents * 650 // Pacote de cobertura completa
    : (photoQtyDigital * 10) + (photoQtyA4 * 20);

  const videoCost = videoOption === 'aftermovie'
    ? videoCount * 850 // Produção completa 4K 60fps
    : videoOption === 'reels'
      ? videoCount * 250 // Reels editado
      : 0;

  const artesCost = artesCount * 100; // R$ 100 por arte
  const trafficCost = addTraffic ? trafficMonths * 1500 : 0; // R$ 1.500 / mês
  const totalCost = photoCost + videoCost + artesCost + trafficCost;

  // Dynamic WhatsApp Link
  const getWhatsAppLink = () => {
    let msg = `Olá! Estive no site da VIRTUAL PLACE AGÊNCIA e gostaria de solicitar um orçamento personalizado.\n\n`;
    
    if (photoOption === 'volume') {
      msg += `📸 Fotografia em Volume: ${photoEvents} evento(s) - Milhares de fotos em alta qualidade (Est. R$ ${photoCost},00)\n`;
    } else {
      msg += `📸 Venda Direta por Reconhecimento Facial (Fotto/Banlek): Est. ${photoQtyDigital} digitais e ${photoQtyA4} impressões A4\n`;
    }

    if (videoOption !== 'none') {
      const vDesc = videoOption === 'aftermovie' 
        ? `Aftermovie Cinemático 4K 60fps (Sony ZV-E10)` 
        : `Vídeo Reels/Carrossel em Alta Qualidade`;
      msg += `🎥 Audiovisual: ${videoCount} produção(ões) (${vDesc}) - Est. R$ ${videoCost},00\n`;
    }

    if (artesCount > 0) {
      msg += `🎨 Design & Criativos: ${artesCount} arte(s) a R$ 100 cada - Est. R$ ${artesCost},00\n`;
    }

    if (addTraffic) {
      msg += `📈 Gestão de Tráfego Pago: ${trafficMonths} mês(meses) (R$ 1.500/mês) - Est. R$ ${trafficCost},00\n`;
    }
    
    msg += `\nDespesas logísticas:\n`;
    if (addTravelExp) msg += `- Deslocamento/despesas alinhadas\n`;
    if (addFood) msg += `- Alimentação da equipe inclusa\n`;
    if (addAccess) msg += `- Credencial/acesso ao evento\n`;
    
    msg += `\nTotal estimado: R$ ${totalCost},00`;
    
    return `https://wa.me/5549991052315?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="loja-root" className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden">
      <NeonBackground3D />

      {/* Header */}
      <nav id="loja-nav" className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              id="loja-back-btn"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400" /> Início
            </button>
            <a 
              href="/precos"
              className="text-xs md:text-sm font-semibold text-emerald-400 hover:text-white transition-all hidden sm:inline-block"
            >
              Catálogo Geral
            </a>
          </div>

          <div className="text-center">
            <a 
              href="https://instagram.com/virtualplace.agencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-black tracking-tight text-white hover:text-emerald-400 transition-colors uppercase font-mono"
            >
              VIRTUAL PLACE <span className="text-emerald-400">AGÊNCIA</span>
            </a>
          </div>

          <a 
            id="loja-nav-cta"
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] uppercase transition-all shadow-sm"
          >
            Orçamento
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <main id="loja-main" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Page Hero */}
        <div id="loja-hero" className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4 font-mono">
              ✨ A MELHOR ENTREGA DA REGIÃO COM ORÇAMENTOS ACESSÍVEIS
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">
              Tabela de Serviços & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Soluções da Agência</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Fotografia em volume com milhares de fotos por evento, gravações em 4K 60fps com Sony ZV-E10, tráfego pago com ROI comprovado de 7,3x e squads de IA para automatizar o seu negócio.
            </p>
          </motion.div>
        </div>

        {/* Catalog of Services Grid */}
        <div id="loja-catalog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          
          {/* Card 1: Fotografia em Volume */}
          <div id="loja-card-photo" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 border border-emerald-500/25">
                <Camera className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Alto Volume
              </span>
              <h2 className="text-lg font-black text-white mt-2 mb-2 uppercase tracking-tight">
                Fotografia em Volume
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Milhares de fotos por evento. Comercial, Institucional e Eventos em geral com tratamento profissional e entrega rápida.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-emerald-500/30">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Cobertura Completa</span>
                    <span className="text-emerald-400 font-black">Por Evento</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Milhares de fotos tratadas, iluminação dedicada e link em nuvem para download em alta resolução.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-gray-800">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Venda via Plataforma</span>
                    <span className="text-cyan-400 font-black">Sob Demanda</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Reconhecimento facial com download imediato por R$ 10 digital e R$ 20 impressão A4.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-[10px] font-mono text-gray-400 block mb-1">Acesso e Despesas:</span>
              <div className="flex gap-2 text-[10px] text-gray-400">
                <span>• Deslocamento</span>
                <span>• Alimentação</span>
              </div>
            </div>
          </div>

          {/* Card 2: Audiovisual 4K 60fps */}
          <div id="loja-card-video" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 border border-cyan-500/25">
                <Video className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Sony ZV-E10 • 4K 60fps
              </span>
              <h2 className="text-lg font-black text-white mt-2 mb-2 uppercase tracking-tight">
                Gravação & Pós 4K
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                4K + post em alta qualidade. Aftermovies cinemáticos, vídeos para anúncios e Reels de alto engajamento.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-cyan-500/30">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Aftermovie Cinemático</span>
                    <span className="text-cyan-400 font-black">4K 60fps</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Color grading refinado de cinema, sound design imersivo e cortes rítmicos.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-gray-800">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Reels & Criativos</span>
                    <span className="text-purple-400 font-black">Alta Conversão</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Captação dinâmica focada em retenção nos 3 primeiros segundos para anúncios e orgânico.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-[10px] font-mono text-cyan-400 block text-xs font-bold">
                Entrega em Alta Resolução HDR
              </span>
            </div>
          </div>

          {/* Card 3: Artes Estáticas */}
          <div id="loja-card-artes" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 border border-amber-500/25">
                <Palette className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Design Gráfico
              </span>
              <h2 className="text-lg font-black text-white mt-2 mb-2 uppercase tracking-tight">
                Artes Profissionais
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Design gráfico de alto impacto para divulgação de eventos, carrosséis, promoções e criativos de anúncios.
              </p>

              <div className="p-4 rounded-xl bg-[#0A0F1C]/80 border border-amber-500/30 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white uppercase">Preço Fixo</span>
                  <span className="text-xl font-black text-amber-400">R$ 100</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Por arte finalizada em alta definição para feed, stories e banners de campanha.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-[10px] font-mono text-gray-400 block text-xs">
                Pronto para Meta Ads & Impressão
              </span>
            </div>
          </div>

          {/* Card 4: Tráfego Pago */}
          <div id="loja-card-traffic" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 border border-purple-500/25">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                ROI 7,3x Comprovado
              </span>
              <h2 className="text-lg font-black text-white mt-2 mb-2 uppercase tracking-tight">
                Gestão de Tráfego
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Tráfego pago ROI 7,3x comprovado em 100k de vendas de cursos com alta lucratividade, margem e escala.
              </p>

              <div className="p-4 rounded-xl bg-[#0A0F1C]/80 border border-purple-500/30 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white uppercase">Gestão Mensal</span>
                  <span className="text-xl font-black text-purple-400">R$ 1.500</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Redes sociais limitadas apenas pela sua verba (Meta, Google, TikTok, YouTube).
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-[10px] font-mono text-purple-400 block text-xs font-bold">
                Estratégia 6 em 7 Validada
              </span>
            </div>
          </div>

        </div>

        {/* Squads de IA Highlight */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0A0F1C] to-purple-950/20 border border-purple-500/30 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                PRODUTIVIDADE EXPONENCIAL
              </span>
              <h3 className="text-base font-black text-white uppercase mt-1">
                Squads de IA: Troque Funcionários por Robôs
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Faça posts, vídeos, artes, estratégias de marketing e análises de anúncios patrocinados usando inteligência artificial.
              </p>
            </div>
          </div>
          <a
            href="https://pay.kiwify.com.br/2yfNvHR"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase transition-all shadow-sm flex items-center gap-2"
          >
            Acessar Squads Kiwify →
          </a>
        </div>

        {/* Real-time Project Estimator */}
        <div id="loja-calculator-section" className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-800 bg-[#060913] shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-6 text-gray-800 pointer-events-none opacity-10">
            <Calculator className="w-32 h-32" />
          </div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded uppercase font-mono tracking-wider">
              Simulador de Escopo
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white mt-1.5 mb-6 uppercase tracking-tight">
              Monte seu Orçamento Estimado
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-800/80 pb-8 mb-6">
              
              {/* Photo settings column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" /> 1. Fotografia
                </h4>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPhotoOption('volume')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoOption === 'volume' 
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Volume / Evento
                  </button>
                  <button 
                    onClick={() => setPhotoOption('plataforma')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoOption === 'plataforma' 
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Site (Fotto/Banlek)
                  </button>
                </div>

                {photoOption === 'volume' ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Quantidade de eventos/diárias: <strong>{photoEvents} evento(s)</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={photoEvents} 
                      onChange={(e) => setPhotoEvents(parseInt(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                    <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                      <span>1 evento</span>
                      <span>5 eventos</span>
                      <span>10 eventos</span>
                    </div>
                    <div className="text-right text-xs font-extrabold text-emerald-400 mt-2">
                      Subtotal: R$ {photoEvents * 650},00
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 space-y-3">
                    <div>
                      <label className="text-[11px] text-gray-400 block mb-1">Fotos digitais baixadas (Est.): <strong>{photoQtyDigital} un.</strong></label>
                      <input 
                        type="range" 
                        min="1" 
                        max="100" 
                        value={photoQtyDigital} 
                        onChange={(e) => setPhotoQtyDigital(parseInt(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-gray-500">
                        <span>1 un (R$10)</span>
                        <span>100 un</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-400 block mb-1">Fotos Impressas no A4 (Est.): <strong>{photoQtyA4} un.</strong></label>
                      <input 
                        type="range" 
                        min="0" 
                        max="30" 
                        value={photoQtyA4} 
                        onChange={(e) => setPhotoQtyA4(parseInt(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-gray-500">
                        <span>Min (R$20/un)</span>
                        <span>30 un</span>
                      </div>
                    </div>
                    <div className="text-right text-xs font-extrabold text-emerald-400 pt-1">
                      Subtotal Estimado: R$ {(photoQtyDigital * 10) + (photoQtyA4 * 20)},00
                    </div>
                  </div>
                )}
              </div>

              {/* Video settings column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-cyan-400" /> 2. Gravação 4K
                </h4>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setVideoOption('aftermovie')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'aftermovie' 
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Aftermovie 4K Cinemático</span>
                    <span>R$ 850 / prod.</span>
                  </button>
                  <button 
                    onClick={() => setVideoOption('reels')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'reels' 
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Reels / Carrossel em Alta Qualidade</span>
                    <span>R$ 250 / prod.</span>
                  </button>
                  <button 
                    onClick={() => setVideoOption('none')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'none' 
                        ? 'bg-red-950/15 border-red-900/40 text-red-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Nenhum Vídeo</span>
                    <span>R$ 0</span>
                  </button>
                </div>

                {videoOption !== 'none' ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 mt-2">
                    <label className="text-[11px] text-gray-400 block mb-1">Quantidade de produções: <strong>{videoCount}</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={videoCount} 
                      onChange={(e) => setVideoCount(parseInt(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                    <div className="text-right text-xs font-extrabold text-cyan-400 mt-2">
                      Subtotal: R$ {videoCost},00
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/30 border border-gray-900 text-center py-6 text-gray-500 text-[10.5px]">
                    <p>Nenhuma captação de vídeo selecionada no estimador.</p>
                  </div>
                )}
              </div>

              {/* Artes & Tráfego Pago column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-purple-400" /> 3. Artes & Tráfego Pago
                </h4>

                {/* Artes */}
                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] text-gray-300 font-bold uppercase flex items-center gap-1">
                      <Palette className="w-3 h-3 text-amber-400" /> Artes Estáticas (R$ 100/un)
                    </span>
                    <span className="text-xs font-black text-amber-400">{artesCount} un</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="20" 
                    value={artesCount} 
                    onChange={(e) => setArtesCount(parseInt(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="text-right text-xs font-bold text-amber-400 mt-1">
                    R$ {artesCost},00
                  </div>
                </div>

                {/* Tráfego Pago */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setAddTraffic(true)}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-center ${
                      addTraffic 
                        ? 'bg-purple-500/15 border-purple-500 text-purple-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Tráfego (R$ 1.500/mês)
                  </button>
                  <button 
                    onClick={() => setAddTraffic(false)}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-center ${
                      !addTraffic 
                        ? 'bg-red-950/10 border-red-900/40 text-red-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Sem Tráfego
                  </button>
                </div>

                {addTraffic && (
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Período de assessoria: <strong>{trafficMonths} {trafficMonths === 1 ? 'mês' : 'meses'}</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="12" 
                      value={trafficMonths} 
                      onChange={(e) => setTrafficMonths(parseInt(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer"
                    />
                    <div className="text-right text-xs font-extrabold text-purple-400 mt-1">
                      Subtotal: R$ {trafficCost},00
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Logistics obligations */}
            <div className="mb-6">
              <span className="text-[10px] text-gray-400 font-mono block mb-2 uppercase">Logística & Despesas de Projeto:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => setAddTravelExp(!addTravelExp)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-[10px] font-bold text-left justify-between transition-all cursor-pointer ${
                    addTravelExp 
                      ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-300' 
                      : 'bg-[#0A0F1C]/50 border-gray-800 text-gray-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Adicional deslocamento
                  </span>
                  <span>{addTravelExp ? 'Ativado ✓' : 'Pendente'}</span>
                </button>

                <button 
                  onClick={() => setAddFood(!addFood)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-[10px] font-bold text-left justify-between transition-all cursor-pointer ${
                    addFood 
                      ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-300' 
                      : 'bg-[#0A0F1C]/50 border-gray-800 text-gray-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" /> Alimentação da equipe
                  </span>
                  <span>{addFood ? 'Ativado ✓' : 'Pendente'}</span>
                </button>

                <button 
                  onClick={() => setAddAccess(!addAccess)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-[10px] font-bold text-left justify-between transition-all cursor-pointer ${
                    addAccess 
                      ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-300' 
                      : 'bg-[#0A0F1C]/50 border-gray-800 text-gray-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5" /> Ingressos / Acesso total
                  </span>
                  <span>{addAccess ? 'Ativado ✓' : 'Pendente'}</span>
                </button>
              </div>
            </div>

            {/* Cost panel footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A0F1C]/90 p-6 rounded-xl border border-gray-800">
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block mb-0.5">Total Estimado do Projeto</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-bold text-emerald-400">R$</span>
                  <span className="text-3xl font-extrabold text-white tracking-tight">{totalCost},00</span>
                  <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">(Orçamento acessível sob medida)</span>
                </div>
              </div>

              <a 
                id="loja-submit-wa"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black flex items-center justify-center gap-3 transition-all text-xs uppercase shadow-sm select-none cursor-pointer"
              >
                <span>Fechar Escopo no WhatsApp</span> <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Embedded Advanced Traffic Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <TrafegoCalculator />
        </div>

        {/* Informações de Plataformas */}
        <div id="loja-platforms" className="max-w-4xl mx-auto rounded-xl p-6 bg-[#0E1527]/50 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">Plataformas de Galerias de Fotos Ativas</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Utilizamos as galerias profissionais mais robustas e confiáveis do território nacional para hospedar o acervo do seu evento: <strong className="text-white">Fotto</strong> e <strong className="text-white">Banlek</strong> com reconhecimento facial.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-[#121A2E] text-white py-1 px-3.5 rounded-lg font-mono text-[10px] border border-gray-800 font-bold">fotto.com.br</span>
            <span className="bg-[#121A2E] text-white py-1 px-3.5 rounded-lg font-mono text-[10px] border border-gray-800 font-bold">banlek.com</span>
          </div>
        </div>

      </main>

      {/* Mini Footer */}
      <footer id="loja-footer" className="py-8 border-t border-gray-800/80 text-center text-gray-400 text-xs bg-[#0A0F1C]/50 relative z-10 font-mono">
        <p>VIRTUAL PLACE AGÊNCIA // CONSULTORIA EM IA, CRM, AUDIOVISUAL 4K & TRÁFEGO PAGO</p>
      </footer>
    </div>
  );
}
