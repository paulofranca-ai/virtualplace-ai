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
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function LojaPage() {
  const navigate = useNavigate();

  // State for Calculator
  const [photoMode, setPhotoMode] = useState<'hourly' | 'venda'>('hourly');
  const [photoHours, setPhotoHours] = useState<number>(4);
  const [photoQtyDigital, setPhotoQtyDigital] = useState<number>(20);
  const [photoQtyA4, setPhotoQtyA4] = useState<number>(5);

  const [videoMode, setVideoMode] = useState<'filmmaker' | 'videomaker' | 'premium' | 'none'>('filmmaker');
  const [videoHours, setVideoHours] = useState<number>(4);
  const [videoMinutes, setVideoMinutes] = useState<number>(2);

  const [addTravelExp, setAddTravelExp] = useState<boolean>(true);
  const [addFood, setAddFood] = useState<boolean>(true);
  const [addAccess, setAddAccess] = useState<boolean>(true);

  // Paid Traffic States
  const [addTraffic, setAddTraffic] = useState<boolean>(false);
  const [trafficMonths, setTrafficMonths] = useState<number>(3); // 3 months default as typical cycle

  // Math totals
  const photoCost = photoMode === 'hourly' 
    ? photoHours * 160 
    : (photoQtyDigital * 10) + (photoQtyA4 * 20);

  const videoCost = videoMode === 'filmmaker' 
    ? videoHours * 160 
    : videoMode === 'videomaker' 
      ? videoHours * 80 
      : videoMode === 'premium'
        ? videoMinutes * 750
        : 0;

  const trafficCost = addTraffic ? trafficMonths * 1500 : 0;
  const totalCost = photoCost + videoCost + trafficCost;

  // Build WhatsApp Message Link dynamically
  const getWhatsAppLink = () => {
    let msg = `Olá! Estive no site da SquadClawVirtual e gostaria de fazer um orçamento de Audiovisual.\n\n`;
    
    if (photoMode === 'hourly') {
      msg += `📸 Cobertura Fotográfica: Plano por Hora (${photoHours} hora(s)) - Est. R$ ${photoHours * 160},00\n`;
    } else {
      msg += `📸 Venda de Fotos Particulares (Est. ${photoQtyDigital} digitais e ${photoQtyA4} impressões A4)\n`;
    }

    if (videoMode !== 'none') {
      const videoTypeStr = videoMode === 'filmmaker' 
        ? 'Filmmaker Profissional (R$160/hora)' 
        : videoMode === 'videomaker'
          ? 'Videomaker Mobile (R$80/hora)'
          : 'Vídeo Profissional com Top Freelas (R$750/minuto final)';
      const quantityStr = videoMode === 'premium' ? `${videoMinutes} minuto(s) final(is)` : `${videoHours} hora(s)`;
      msg += `🎥 Captação de Vídeo: ${videoTypeStr} (${quantityStr}) - Est. R$ ${videoCost},00\n`;
    }

    if (addTraffic) {
      msg += `📈 Assessoria de Tráfego Pago: Ativada por ${trafficMonths} mês(meses) (Meta Ads, Google, TikTok) - Est. R$ ${trafficCost},00\n`;
    }
    msg += `\n`;
    
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
        <div id="loja-catalog-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          
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
                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-[#00F0FF]/30 bg-[#00F0FF]/5 hover:border-[#00F0FF]/50 transition-all">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Opção 1: Por hora contratada</span>
                    <span className="text-[#00F0FF] font-black">R$ 160 / hora</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Você garante cobertura flexível de acordo com a duração exata do seu evento e recebe todas as fotos registradas e editadas profissionalmente.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-gray-800">
                  <div className="font-bold text-xs text-white mb-1 uppercase flex items-center justify-between">
                    <span>Opção 2: Venda direta do site (Fotto/Banlek)</span>
                    <span className="text-purple-400 font-black">Sob Demanda</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed space-y-1.5">
                    <span>• Fotos sem custo de hora/diária para a organização.</span><br />
                    <span>• Venda de Foto pelo site por <strong className="text-white">R$10 cada digital</strong> download na hora.</span><br />
                    <span>• Impressão física opcional por <strong className="text-white">R$20 cada folha A4</strong>.</span><br />
                    <span>• Bônus: Fotos gerais gratuitas do evento e da diretoria incluídas.</span><br />
                    <span>• Plataforma com reconhecimento facial inteligente.</span>
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

          {/* Card 2: Vídeo Aftermovie & Captação */}
          <div id="loja-card-video" className="p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/50 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-[#2563EB]/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6 border border-[#2563EB]/25">
                <Video className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">
                Captação Audiovisual Profissional
              </h2>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                Vídeos de alta energia para carrosséis, Reels ou YouTube. Produzidos com equipamentos modernos de gravação terrestre e aérea.
              </p>

              {/* Pricing Options details */}
              <div className="space-y-3.5 mb-8">
                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-purple-500/20 bg-[#0A0F1C]/40 hover:border-purple-500/50 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-white uppercase flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-blue-400" /> Videomaker Mobile</span>
                    <span className="text-sm font-black text-white">R$ 80 <span className="text-[10px] font-normal text-gray-400">/ hora</span></span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Focado em mídias rápidas e carrosséis dinâmicos usando iPhones de última geração e setups portáteis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-[#00F0FF]/30 bg-[#00F0FF]/5 hover:border-[#00F0FF]/50 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-[#00F0FF] uppercase flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" /> Filmmaker Professional</span>
                    <span className="text-sm font-black text-[#00F0FF]">R$ 160 <span className="text-[10px] font-normal text-gray-400">/ hora</span></span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Captação cinematográfica premium usando câmeras profissionais dedicadas, lentes cinema e drones de alta definição.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50 transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black text-purple-400 uppercase flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-purple-400" /> Vídeo Profissional</span>
                    <span className="text-sm font-black text-purple-400">R$ 750 <span className="text-[10px] font-normal text-gray-400">/ minuto</span></span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Takes e aftermovie premium com os melhores profissionais freelancers credenciados da plataforma.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800/60">
              <div className="bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-lg p-3 text-[10px] text-gray-300 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>
                  Cada projeto acompanha nossa consultoria de roteirização rápida para reter atenção nos primeiros 3 segundos de reprodução.
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Assessoria de Tráfego Pago */}
          <div id="loja-card-traffic" className="p-8 rounded-2xl border border-gray-800 bg-[#0F172A]/50 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/25">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">
                Assessoria de Tráfego Pago
              </h2>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                Gestão e otimização de anúncios nas principais redes de anúncios (Meta, Google, TikTok Ads) focada em tração, geração de leads e vendas recorrentes.
              </p>

              {/* Pricing Options details */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-[#0A0F1C]/70 border border-[#00F0FF]/30 bg-[#00F0FF]/5 hover:border-[#00F0FF]/60 transition-all">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-black text-white uppercase flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" /> Gestão Mensal</span>
                    <span className="text-sm font-black text-[#00F0FF]">R$ 1.500 <span className="text-[10px] font-normal text-gray-400">/mês</span></span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Estratégia, configuração de pixel, remarketing e análise contínua de criativos de alta conversão para maximizar o seu ROAS.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800/60">
              <div className="bg-purple-950/20 border border-purple-500/30 rounded-lg p-3 text-[10px] text-gray-300 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  Plano ideal para quem quer expandir marcas institucionais, políticos em campanha e negócios locais de forma automatizada e constante.
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-800/80 pb-8 mb-6">
              
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
                    Por Hora (R$160/h)
                  </button>
                  <button 
                    onClick={() => setPhotoMode('venda')}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoMode === 'venda' 
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Venda de fotos (Site)
                  </button>
                </div>

                {photoMode === 'hourly' ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Horas estimadas de cobertura: <strong>{photoHours} hora(s)</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="40" 
                      value={photoHours} 
                      onChange={(e) => setPhotoHours(parseInt(e.target.value))}
                      className="w-full accent-[#00F0FF] cursor-pointer"
                    />
                    <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                      <span>1 hora</span>
                      <span>20 horas</span>
                      <span>40 horas</span>
                    </div>
                    <div className="text-right text-xs font-extrabold text-[#00F0FF] mt-2">
                      Subtotal: R$ {photoHours * 160},00
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
                  <Video className="w-4 h-4 text-purple-400" /> 2. Configurações Captação Vídeo
                </h4>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setVideoMode('filmmaker')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoMode === 'filmmaker' 
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Filmmaker Professional</span>
                    <span>R$ 160 / h</span>
                  </button>
                  <button 
                    onClick={() => setVideoMode('videomaker')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoMode === 'videomaker' 
                        ? 'bg-purple-950/25 border-purple-500 text-purple-300' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Videomaker Mobile</span>
                    <span>R$ 80 / h</span>
                  </button>
                  <button 
                    onClick={() => setVideoMode('premium')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoMode === 'premium' 
                        ? 'bg-purple-950/30 border-purple-500 text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Vídeo Profissional (Top Freelas)</span>
                    <span>R$ 750 / min</span>
                  </button>
                  <button 
                    onClick={() => setVideoMode('none')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoMode === 'none' 
                        ? 'bg-red-950/15 border-red-900/40 text-red-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Nenhum Vídeo</span>
                    <span>R$ 0</span>
                  </button>
                </div>

                {videoMode !== 'none' ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 mt-2">
                    {videoMode === 'premium' ? (
                      <>
                        <label className="text-[11px] text-gray-400 block mb-1">Minutos finais de vídeo estimado: <strong>{videoMinutes} minuto(s)</strong></label>
                        <input 
                          type="range" 
                          min="1" 
                          max="20" 
                          value={videoMinutes} 
                          onChange={(e) => setVideoMinutes(parseInt(e.target.value))}
                          className="w-full accent-purple-500 cursor-pointer"
                        />
                        <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                          <span>1 min</span>
                          <span>10 min</span>
                          <span>20 min</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <label className="text-[11px] text-gray-400 block mb-1">Horas estimadas de captação: <strong>{videoHours} hora(s)</strong></label>
                        <input 
                          type="range" 
                          min="1" 
                          max="40" 
                          value={videoHours} 
                          onChange={(e) => setVideoHours(parseInt(e.target.value))}
                          className="w-full accent-purple-500 cursor-pointer"
                        />
                        <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                          <span>1 hora</span>
                          <span>20 horas</span>
                          <span>40 horas</span>
                        </div>
                      </>
                    )}
                    <div className="text-right text-xs font-extrabold text-purple-400 mt-2">
                      Subtotal: R$ {videoCost},00
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/30 border border-gray-900 text-center py-8 text-gray-500 text-[10.5px]">
                    <p>Nenhuma captação de vídeo selecionada no estimador.</p>
                  </div>
                )}
              </div>

              {/* Paid Traffic settings column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-purple-400" /> 3. Assessoria de Tráfego Pago
                </h4>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setAddTraffic(true)}
                    className={`flex-1 py-1.5 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-center ${
                      addTraffic 
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Ativar (R$1.500/mês)
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

                {addTraffic ? (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Período de assessoria: <strong>{trafficMonths} {trafficMonths === 1 ? 'mês' : 'meses'}</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="12" 
                      value={trafficMonths} 
                      onChange={(e) => setTrafficMonths(parseInt(e.target.value))}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
                      <span>1 mês</span>
                      <span>6 meses</span>
                      <span>12 meses</span>
                    </div>
                    <div className="text-right text-xs font-extrabold text-purple-400 mt-2">
                      Subtotal: R$ {trafficMonths * 1500},00
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/30 border border-gray-900 text-center py-8 text-gray-500 text-[10.5px]">
                    <p>Otimize sua divulgação local com anúncios patrocinados no Meta Ads (Facebook/Instagram), Google Ads e TikTok.</p>
                  </div>
                )}
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
