import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Camera, 
  Video, 
  Coins, 
  MapPin, 
  Utensils, 
  Ticket, 
  Sparkles, 
  Check, 
  Phone, 
  Calculator, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function LojaPage() {
  const navigate = useNavigate();

  // State for Calculator
  const [photoMode, setPhotoMode] = useState<'hourly' | 'venda'>('hourly');
  const [photoHours, setPhotoHours] = useState<number>(4);
  const [photoQtyDigital, setPhotoQtyDigital] = useState<number>(20);
  const [photoQtyA4, setPhotoQtyA4] = useState<number>(5);

  const [videoMode, setVideoMode] = useState<'pro_drone' | 'mix' | 'iphone_only'>('pro_drone');
  const [videoMinutes, setVideoMinutes] = useState<number>(2);

  const [addTravelExp, setAddTravelExp] = useState<boolean>(true);
  const [addFood, setAddFood] = useState<boolean>(true);
  const [addAccess, setAddAccess] = useState<boolean>(true);

  // Math totals
  const photoCost = photoMode === 'hourly' 
    ? photoHours * 100 
    : (photoQtyDigital * 10) + (photoQtyA4 * 20);

  const videoRate = videoMode === 'pro_drone' 
    ? 700 
    : videoMode === 'mix' 
      ? 600 
      : 500;
  
  const videoCost = videoMinutes * videoRate;
  const totalCost = photoCost + videoCost;

  // Build WhatsApp Message Link dynamically
  const getWhatsAppLink = () => {
    let msg = `Olá! Estive no site da SquadClawVirtual e gostaria de fazer um orçamento de Audiovisual.\n\n`;
    
    if (photoMode === 'hourly') {
      msg += `📸 Cobertura Fotográfica: Plano por Hora (${photoHours} horas) - Est. R$ ${photoHours * 100},00\n`;
    } else {
      msg += `📸 Venda de Fotos Particulares (Est. ${photoQtyDigital} digitais e ${photoQtyA4} impressões A4)\n`;
    }

    const videoTypeStr = videoMode === 'pro_drone' 
      ? 'Câmera Pro + Drone (R$700/min final)' 
      : videoMode === 'mix' 
        ? 'iPhone + Drone ou iPhone + Câmera (R$600/min final)' 
        : 'Apenas iPhone sem drone/câmera (R$500/min final)';

    msg += `🎥 Aftermovie: ${videoMinutes} minuto(s) final no formato "${videoTypeStr}" - Est. R$ ${videoCost},00\n\n`;
    
    msg += `Logística despesas adicionais inclusas:\n`;
    if (addTravelExp) msg += `- Adicional deslocamento/despesas\n`;
    if (addFood) msg += `- Alimentação para equipe fornecida\n`;
    if (addAccess) msg += `- Ingressos/acesso total ao evento\n`;
    
    msg += `\nTotal estimado: R$ ${totalCost},00`;
    
    return `https://wa.me/5549984101144?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="loja-root" className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] font-sans selection:bg-[#00F0FF]/30 relative overflow-x-hidden">
      <NeonBackground3D />

      {/* Header */}
      <nav id="loja-nav" className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            id="loja-back-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#00F0FF]" /> Voltar ao Início
          </button>
          <div className="text-[#F8FAFC] font-bold text-lg tracking-tighter uppercase font-mono">
            SquadClaw<span className="text-[#00F0FF]">Virtual</span>
          </div>
          <a 
            id="loja-nav-cta"
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-[#00F0FF] text-[#0A0F1C] hover:bg-[#00D8E6] font-bold text-[11px] uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
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
            <div className="inline-block px-4 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[9px] font-black uppercase tracking-widest mb-4">
              ✨ Audiovisual de Alta Performance
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">
              Tabela de Serviços de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#2563EB]">Audiovisual & Coberturas</span>
            </h1>
            <p className="text-[#94A3B8] text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Descubra os valores oficiais e transparentes para coberturas fotográficas profissionais e filmagens de Aftermovie. Combine o melhor da tecnologia audiovisual com a SquadClawVirtual.
            </p>
          </motion.div>
        </div>

        {/* Catalog of Services Grid (Two main options specified by user) */}
        <div id="loja-catalog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: Cobertura Fotográfica */}
          <div id="loja-card-photo" className="p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/50 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-[#00F0FF]/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center mb-6 border border-[#00F0FF]/25">
                <Camera className="w-6 h-6 text-[#00F0FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">
                Cobertura Fotográfica Professional
              </h2>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                Garanta fotos de altíssima definição tratadas, ideais para fomento, portfólio, engajamento e registro inesquecível da sua marca e evento.
              </p>

              {/* Pricing Options details */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-gray-800">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Opção 1: Por hora contratada</span>
                    <span className="text-[#00F0FF] font-black">R$ 100 / hora</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Você contrata pelas horas de evento e recebe todas as fotos registradas e tratadas profissionalmente pronto para postar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-gray-800">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Opção 2: Venda direta do site</span>
                    <span className="text-purple-400 font-black">Sob Demanda</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed space-y-1.5">
                    <span>• Fotos sem custo de hora para a organização.</span><br />
                    <span>• Venda de Foto pelo site/particular por <strong className="text-white">R$10 cada digital</strong> para baixar.</span><br />
                    <span>• Impressão física opcional por <strong className="text-white">R$20 cada folha A4</strong>.</span><br />
                    <span>• Bônus: Fotos gerais gratuitas do evento e da diretoria incluídas.</span><br />
                    <span>• Plataforma integrada: Galeria profissional no <strong className="text-white font-mono">Site Fotto ou Banlek</strong>.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800/60">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Despesas Logísticas Necessárias:</h4>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-400">
                <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> Deslocamento</div>
                <div className="flex items-center gap-1"><Utensils className="w-3 h-3 text-amber-500" /> Alimentação</div>
                <div className="flex items-center gap-1"><Ticket className="w-3 h-3 text-purple-400" /> Ingressos/Acesso</div>
              </div>
            </div>
          </div>

          {/* Card 2: Vídeo Aftermovie */}
          <div id="loja-card-video" className="p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/50 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-[#2563EB]/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6 border border-[#2563EB]/25">
                <Video className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">
                Vídeo Aftermovie Cinematográfico
              </h2>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                Vídeos de alta energia para carrosséis, Reels ou YouTube. Produzidos com equipamentos modernos de gravação terrestre e aérea.
              </p>

              {/* Pricing Options details */}
              <div className="space-y-3.5 mb-8">
                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/70 border border-gray-800 hover:border-[#00F0FF]/25 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white uppercase">Câmera Pro + Drone</span>
                    <span className="text-sm font-black text-[#00F0FF]">R$ 700 <span className="text-[10px] font-normal text-gray-400">/min final</span></span>
                  </div>
                  <p className="text-[10.5px] text-[#94A3B8] leading-relaxed">
                    Entrega profissional em altíssima qualidade cinematográfica com transições dinâmicas e tomadas aéreas excepcionais.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/70 border border-gray-800 hover:border-[#2563EB]/25 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white uppercase">iPhone + Drone / Câmera</span>
                    <span className="text-sm font-black text-[#2563EB]">R$ 600 <span className="text-[10px] font-normal text-gray-400">/min final</span></span>
                  </div>
                  <p className="text-[10.5px] text-[#94A3B8] leading-relaxed">
                    Otimizado e híbrido: mescla de ângulos rápidos estáticos e imagens aéreas fluidas para reels de extremo impacto de engajamento social.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0F1C]/70 border border-gray-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-white uppercase">Só iPhone (Sem drone/câmera)</span>
                    <span className="text-sm font-black text-purple-400">R$ 500 <span className="text-[10px] font-normal text-gray-400">/min final</span></span>
                  </div>
                  <p className="text-[10.5px] text-[#94A3B8] leading-relaxed">
                    Estratégia ágil puramente focada no orgânico, trends verticais em altíssima fluidez e rapidez de pós-produção imediata.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800/60">
              <div className="bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-lg p-3 text-[10px] text-gray-300 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>
                  Cada Aftermovie é acompanhado pela nossa consultoria criativa de roteiro de atenção rápido (primeiros 3 segundos).
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Estimador de Projetos (Real-time Calculator) */}
        <div id="loja-calculator-section" className="max-w-4xl mx-auto p-8 rounded-2xl border border-[#2563EB]/30 bg-[#060913] shadow-[0_0_50px_rgba(37,99,235,0.06)] relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-6 text-gray-800 pointer-events-none opacity-10">
            <Calculator className="w-32 h-32" />
          </div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-[#00F0FF] bg-[#00F0FF]/15 px-2.5 py-0.5 rounded uppercase font-mono tracking-wider">
              Calculadora Dinâmica de Escopo
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white mt-1.5 mb-6 uppercase tracking-tight">
              Monte seu Orçamento Estimado
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800/80 pb-8 mb-6">
              
              {/* Photo settings column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-[#00F0FF]" /> 1. Configurações Fotografia
                </h4>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPhotoMode('hourly')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoMode === 'hourly' 
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Por Hora (R$100/h)
                  </button>
                  <button 
                    onClick={() => setPhotoMode('venda')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoMode === 'venda' 
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Venda sob demanda
                  </button>
                </div>

                {photoMode === 'hourly' ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Horas estimadas de cobertura: <strong>{photoHours} horas</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="24" 
                      value={photoHours} 
                      onChange={(e) => setPhotoHours(parseInt(e.target.value))}
                      className="w-full accent-[#00F0FF] cursor-pointer"
                    />
                    <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                      <span>1h</span>
                      <span>12h</span>
                      <span>24h</span>
                    </div>
                    <div className="text-right text-xs font-extrabold text-[#00F0FF] mt-2">
                      Subtotal: R$ {photoHours * 100},00
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
                        className="w-full accent-[#00F0FF] cursor-pointer"
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
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[9px] text-gray-500">
                        <span>Min (R$20/un)</span>
                        <span>30 un</span>
                      </div>
                    </div>
                    <div className="text-right text-xs font-extrabold text-[#00F0FF] pt-1">
                      Subtotal Estimado: R$ {(photoQtyDigital * 10) + (photoQtyA4 * 20)},00
                    </div>
                  </div>
                )}
              </div>

              {/* Video settings column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-purple-400" /> 2. Configurações Aftermovie
                </h4>

                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 uppercase font-mono block">Formato de Captação:</label>
                  <div className="flex flex-col gap-1.5">
                    <button 
                      onClick={() => setVideoMode('pro_drone')}
                      className={`py-1.5 px-3 rounded-lg border text-left text-[10px] font-black cursor-pointer uppercase flex justify-between items-center ${
                        videoMode === 'pro_drone' 
                          ? 'bg-purple-900/15 border-purple-500 text-[#00F0FF]' 
                          : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>🎥 Câmera Pro + Drone</span>
                      <span>R$ 700/min</span>
                    </button>
                    <button 
                      onClick={() => setVideoMode('mix')}
                      className={`py-1.5 px-3 rounded-lg border text-left text-[10px] font-black cursor-pointer uppercase flex justify-between items-center ${
                        videoMode === 'mix' 
                          ? 'bg-purple-900/15 border-purple-500 text-[#00F0FF]' 
                          : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>📱 iPhone + Drone / Câmera</span>
                      <span>R$ 600/min</span>
                    </button>
                    <button 
                      onClick={() => setVideoMode('iphone_only')}
                      className={`py-1.5 px-3 rounded-lg border text-left text-[10px] font-black cursor-pointer uppercase flex justify-between items-center ${
                        videoMode === 'iphone_only' 
                          ? 'bg-purple-900/15 border-purple-500 text-[#00F0FF]' 
                          : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>Apenas iPhone (social)</span>
                      <span>R$ 500/min</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 mt-2">
                  <label className="text-[11px] text-gray-400 block mb-1">Duração final de Aftermovie: <strong>{videoMinutes} minuto(s)</strong></label>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={videoMinutes} 
                    onChange={(e) => setVideoMinutes(parseInt(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                    <span>1 minuto</span>
                    <span>10 minutos</span>
                  </div>
                  <div className="text-right text-xs font-extrabold text-purple-400 mt-2">
                    Subtotal: R$ {videoCost},00
                  </div>
                </div>
              </div>

            </div>

            {/* Logistics obligations */}
            <div className="mb-6">
              <span className="text-[10px] text-gray-400 font-mono block mb-2 uppercase">Logística & Despesas de Projeto (Obrigatório):</span>
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
                    <Ticket className="w-3.5 h-3.5" /> Ingressos acesso total
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
                  <span className="text-sm font-bold text-[#00F0FF]">R$</span>
                  <span className="text-3xl font-extrabold text-white tracking-tight">{totalCost},00</span>
                  <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">(Apenas base preliminar)</span>
                </div>
              </div>

              <a 
                id="loja-submit-wa"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#2563EB] hover:from-[#00D8E6] hover:to-[#1D4ED8] text-white font-black flex items-center justify-center gap-3 transition-all text-xs uppercase shadow-[0_0_25px_rgba(0,240,255,0.3)] select-none cursor-pointer"
              >
                <span>🚀 Fechar Escopo no WhatsApp</span> <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Informações de Plataformas */}
        <div id="loja-platforms" className="max-w-4xl mx-auto rounded-xl p-6 bg-[#0E1527]/50 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[#00F0FF]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">Plataformas de Galerias de Fotos Ativas</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Utilizamos as galerias profissionais mais robustas e confiáveis do território nacional para hospedar o acervo do seu evento: <strong className="text-white">Fotto</strong> e <strong className="text-white">Banlek</strong>.
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
      <footer id="loja-footer" className="py-8 border-t border-gray-800/80 text-center text-gray-500 text-[11px] bg-[#0A0F1C]/50 relative z-10">
        <p>© {new Date().getFullYear()} SquadClawVirtual. Todos os direitos reservados. Fotos e Aftermovies de eventos parceiros com segurança.</p>
      </footer>
    </div>
  );
}
