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
  Calculator, 
  Layers,
  ArrowRight,
  TrendingUp,
  Palette,
  Bot,
  Smartphone,
  Sparkles
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';
import { TrafegoCalculator } from './components/TrafegoCalculator';

export default function LojaPage() {
  const navigate = useNavigate();

  // State for Project Estimator with unified pricing
  const [includeCampanha30Dias, setIncludeCampanha30Dias] = useState<boolean>(false);
  const [photoOption, setPhotoOption] = useState<'ensaio' | 'avulsa' | 'none'>('ensaio');
  const [photoDays, setPhotoDays] = useState<number>(1);
  const [photoQtyDigital, setPhotoQtyDigital] = useState<number>(20);
  const [photoQtyImpressa, setPhotoQtyImpressa] = useState<number>(5);

  // Unified per-minute video pricing
  const [videoOption, setVideoOption] = useState<'celular' | 'camera' | 'none'>('camera');
  const [videoMinutes, setVideoMinutes] = useState<number>(1);
  const [addDrone, setAddDrone] = useState<boolean>(false);
  const [droneMinutes, setDroneMinutes] = useState<number>(1);

  // Avulsos R$ 1.500
  const [addSocialMedia, setAddSocialMedia] = useState<boolean>(false);
  const [addTraffic, setAddTraffic] = useState<boolean>(true);
  const [addProjetosIA, setAddProjetosIA] = useState<boolean>(false);

  const [addTravelExp, setAddTravelExp] = useState<boolean>(true);
  const [addFood, setAddFood] = useState<boolean>(true);
  const [addAccess, setAddAccess] = useState<boolean>(true);

  // Math totals
  const campanhaCost = includeCampanha30Dias ? 5000 : 0;

  const photoCost = photoOption === 'ensaio'
    ? photoDays * 500 // Ensaio R$ 500 a diária
    : photoOption === 'avulsa'
      ? (photoQtyDigital * 14) + (photoQtyImpressa * 25)
      : 0;

  const baseVideoCost = videoOption === 'camera'
    ? videoMinutes * 550 // Vídeo com câmera R$ 550/min
    : videoOption === 'celular'
      ? videoMinutes * 250 // Vídeo com celular R$ 250/min
      : 0;

  const droneCost = (videoOption !== 'none' && addDrone) ? droneMinutes * 300 : 0; // Adicional drone R$ 300/min
  const videoCost = baseVideoCost + droneCost;

  const socialMediaCost = addSocialMedia ? 1500 : 0;
  const trafficCost = addTraffic ? 1500 : 0;
  const projetosIACost = addProjetosIA ? 1500 : 0;

  const totalCost = campanhaCost + photoCost + videoCost + socialMediaCost + trafficCost + projetosIACost;

  // Dynamic WhatsApp Link
  const getWhatsAppLink = () => {
    let msg = `Olá! Estive no site da VIRTUAL PLACE AGÊNCIA e gostaria de solicitar um orçamento.\n\n`;
    
    if (includeCampanha30Dias) {
      msg += `🚀 Campanha de Marketing 30 Dias: R$ 5.000,00\n`;
    }

    if (photoOption === 'ensaio') {
      msg += `📸 Fotografia (Ensaio/Diária): ${photoDays} diária(s) (R$ ${photoCost},00)\n`;
    } else if (photoOption === 'avulsa') {
      msg += `📸 Fotos Avulsas: ${photoQtyDigital} digitais (R$ 14/un) e ${photoQtyImpressa} impressas (R$ 25/un) (R$ ${photoCost},00)\n`;
    }

    if (videoOption !== 'none') {
      const vDesc = videoOption === 'camera' 
        ? `Vídeo com Câmera (R$ 550/min)` 
        : `Vídeo com Celular (R$ 250/min)`;
      msg += `🎥 Audiovisual: ${videoMinutes} min de ${vDesc}${addDrone ? ` + ${droneMinutes} min Adicional Drone (R$ 300/min)` : ''} (R$ ${videoCost},00)\n`;
    }

    if (addSocialMedia) {
      msg += `📱 Social Media (Captação semanal + conteúdo mensal de todos os eventos): R$ 1.500,00\n`;
    }

    if (addTraffic) {
      msg += `📈 Assessoria de Tráfego Pago: R$ 1.500,00\n`;
    }

    if (addProjetosIA) {
      msg += `🤖 Projetos com IA (Consultoria, Treinamento + Suporte e Execução + Mensal): R$ 1.500,00\n`;
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
              Tabela Oficial
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
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] uppercase transition-all shadow-sm"
          >
            Orçamento
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <main id="loja-main" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Page Hero */}
        <div id="loja-hero" className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3 font-mono">
              TABELA DE SERVIÇOS & PREÇOS UNIFICADOS
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">
              Pacotes, Avulsos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Vídeos por Minutagem</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Campanha completa de 30 dias por R$ 5.000, pacotes avulsos mensais de R$ 1.500 (Social Media, Tráfego Pago e Projetos com IA) e produção audiovisual unificada por minutagem.
            </p>
          </motion.div>
        </div>

        {/* Highlight Banner: Campanha de Marketing 30 Dias - R$ 5.000 */}
        <div className="max-w-7xl mx-auto mb-8 p-6 sm:p-8 rounded-2xl border-2 border-emerald-400/70 bg-gradient-to-r from-emerald-950/40 via-[#0A0F1C] to-emerald-950/20 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-emerald-400 tracking-wider">
              PACOTE COMPLETO • 30 DIAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              Campanha de Marketing 30 Dias
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
              Planejamento + execução de campanhas de anúncios • Artes e Vídeos de Divulgação + Vídeo Cinemático Pós-Evento.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 shrink-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
              R$ 5.000
            </div>
            <a
              href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Quero%20contratar%20a%20Campanha%20de%20Marketing%20de%2030%20Dias%20%28R%24%205.000%29."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase transition-all"
            >
              Contratar Campanha 30 Dias
            </a>
          </div>
        </div>

        {/* Catalog Grid: Valores Avulsos (R$ 1.500) & Minutagem */}
        <div id="loja-catalog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          
          {/* Card 1: Vídeos por Minutagem Unificados */}
          <div id="loja-card-video" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/25">
                <Video className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-[11px] font-mono uppercase font-bold text-cyan-400">
                Preços por Minutagem
              </span>
              <h2 className="text-lg font-black text-white mt-1 mb-2 uppercase tracking-tight">
                Audiovisual Unificado
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Valores unificados por minuto de vídeo editado em altíssima qualidade:
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="p-3 rounded-xl bg-[#0A0F1C]/80 border border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Vídeo c/ Celular
                  </span>
                  <span className="text-emerald-400 font-black font-mono text-sm">R$ 250/min</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0F1C]/80 border border-cyan-500/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-cyan-400" /> Vídeo c/ Câmera
                  </span>
                  <span className="text-cyan-400 font-black font-mono text-sm">R$ 550/min</span>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0F1C]/80 border border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Adicional Drone
                  </span>
                  <span className="text-amber-400 font-black font-mono text-sm">R$ 300/min</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-xs font-mono text-cyan-400 block font-bold">
                Captação + Edição Profissional
              </span>
            </div>
          </div>

          {/* Card 2: Social Media Avulso R$ 1.500 */}
          <div id="loja-card-social" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/25">
                <Camera className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[11px] font-mono uppercase font-bold text-emerald-400">
                Valor Avulso Mensal
              </span>
              <h2 className="text-lg font-black text-white mt-1 mb-2 uppercase tracking-tight">
                Social Media & Eventos
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Social Media com captação semanal e conteúdo mensal de todos os eventos da sua marca.
              </p>

              <div className="p-4 rounded-xl bg-[#0A0F1C]/80 border border-emerald-500/30 mb-6">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-white uppercase">Plano Mensal</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">R$ 1.500</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Captação presencial toda semana + cobertura e conteúdo mensal de todos os eventos.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-xs font-mono text-gray-400 block">
                Fotografia Ensaio: R$ 500/diária | Avulsa: R$ 14 dig. / R$ 25 imp.
              </span>
            </div>
          </div>

          {/* Card 3: Assessoria de Tráfego Pago R$ 1.500 */}
          <div id="loja-card-traffic" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/25">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-[11px] font-mono uppercase font-bold text-purple-400">
                6 em 3 (100k em 3 dias)
              </span>
              <h2 className="text-lg font-black text-white mt-1 mb-2 uppercase tracking-tight">
                Assessoria de Tráfego Pago
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Gestão de tráfego pago com resultado comprovado de 6 em 3 (100k em 3 dias) em lançamentos e +R$ 60k investidos em vendas automotivas.
              </p>

              <div className="p-4 rounded-xl bg-[#0A0F1C]/80 border border-purple-500/30 mb-6">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-white uppercase">Assessoria Mensal</span>
                  <span className="text-lg font-black text-purple-400 font-mono">R$ 1.500</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Meta Ads, Google Ads, TikTok Ads e YouTube orientados a leads e conversão.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-xs font-mono text-purple-400 block font-bold">
                Estratégia 6 em 3 Validada
              </span>
            </div>
          </div>

          {/* Card 4: Projetos com IA R$ 1.500 */}
          <div id="loja-card-ia" className="p-6 rounded-2xl border border-gray-800 bg-[#0F172A]/70 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/25">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-[11px] font-mono uppercase font-bold text-amber-400">
                Automação & Escala
              </span>
              <h2 className="text-lg font-black text-white mt-1 mb-2 uppercase tracking-tight">
                Projetos com IA
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Consultoria, Treinamento + Suporte e Execução de projetos com IA + Mensal (ferramentas à parte).
              </p>

              <div className="p-4 rounded-xl bg-[#0A0F1C]/80 border border-amber-500/30 mb-6">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-white uppercase">Projeto + Mensal</span>
                  <span className="text-lg font-black text-amber-400 font-mono">R$ 1.500</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Consultoria completa, treinamento de equipe, suporte contínuo e execução (ferramentas à parte).
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800/80">
              <span className="text-xs font-mono text-gray-400 block">
                Arte/Banner: IA R$ 35 | Designer R$ 150
              </span>
            </div>
          </div>

        </div>

        {/* Real-time Project Estimator */}
        <div id="loja-calculator-section" className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-800 bg-[#060913] shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-6 text-gray-800 pointer-events-none opacity-10">
            <Calculator className="w-32 h-32" />
          </div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold text-emerald-400 uppercase font-mono tracking-wider">
              Simulador de Escopo
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white mt-1.5 mb-6 uppercase tracking-tight">
              Monte seu Orçamento Estimado
            </h3>

            {/* Toggle Campanha 30 Dias */}
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black text-emerald-400 uppercase font-mono">
                  Campanha Completa de Marketing 30 Dias (R$ 5.000)
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5">
                  Planejamento + execução de anúncios + Artes e Vídeos de Divulgação + Vídeo Cinemático Pós-Evento
                </p>
              </div>
              <button
                onClick={() => setIncludeCampanha30Dias(!includeCampanha30Dias)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase transition-all cursor-pointer shrink-0 ${
                  includeCampanha30Dias
                    ? 'bg-emerald-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:text-white'
                }`}
              >
                {includeCampanha30Dias ? 'Incluído (R$ 5.000) ✓' : 'Adicionar R$ 5.000'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-800/80 pb-8 mb-6">
              
              {/* 1. Vídeos por Minutagem */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-cyan-400" /> 1. Vídeo por Minutagem
                </h4>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setVideoOption('celular')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'celular' 
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Vídeo com Celular</span>
                    <span>R$ 250 / min</span>
                  </button>
                  <button 
                    onClick={() => setVideoOption('camera')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'camera' 
                        ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Vídeo com Câmera</span>
                    <span>R$ 550 / min</span>
                  </button>
                  <button 
                    onClick={() => setVideoOption('none')}
                    className={`w-full py-2 px-3 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase text-left flex justify-between ${
                      videoOption === 'none' 
                        ? 'bg-red-950/15 border-red-900/40 text-red-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Sem Vídeo Avulso</span>
                    <span>R$ 0</span>
                  </button>
                </div>

                {videoOption !== 'none' && (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 space-y-3">
                    <div>
                      <label className="text-[11px] text-gray-400 block mb-1">
                        Minutagem do Vídeo: <strong>{videoMinutes} min</strong>
                      </label>
                      <input 
                        type="range" 
                        min="1" 
                        max="15" 
                        value={videoMinutes} 
                        onChange={(e) => setVideoMinutes(parseInt(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-gray-800">
                      <button
                        onClick={() => setAddDrone(!addDrone)}
                        className={`w-full py-1.5 px-3 rounded-lg border text-[10px] font-black uppercase flex justify-between items-center cursor-pointer ${
                          addDrone
                            ? 'bg-amber-500/15 border-amber-500 text-amber-400'
                            : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span>+ Adicional Drone</span>
                        <span>R$ 300 / min</span>
                      </button>

                      {addDrone && (
                        <div className="mt-2">
                          <label className="text-[11px] text-gray-400 block mb-1">
                            Minutos de Drone: <strong>{droneMinutes} min</strong>
                          </label>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            value={droneMinutes} 
                            onChange={(e) => setDroneMinutes(parseInt(e.target.value))}
                            className="w-full accent-amber-400 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>

                    <div className="text-right text-xs font-extrabold text-cyan-400 pt-1">
                      Subtotal Vídeo: R$ {videoCost},00
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Valores Avulsos (R$ 1.500) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-purple-400" /> 2. Mensais Avulsos (R$ 1.500)
                </h4>

                <button
                  onClick={() => setAddSocialMedia(!addSocialMedia)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    addSocialMedia
                      ? 'bg-emerald-950/25 border-emerald-500 text-white'
                      : 'bg-[#0A0F1C]/80 border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-black uppercase">
                    <span>Social Media + Eventos</span>
                    <span className="text-emerald-400 font-mono">R$ 1.500</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Captação semanal e conteúdo mensal de todos os eventos
                  </p>
                </button>

                <button
                  onClick={() => setAddTraffic(!addTraffic)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    addTraffic
                      ? 'bg-purple-950/25 border-purple-500 text-white'
                      : 'bg-[#0A0F1C]/80 border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-black uppercase">
                    <span>Assessoria Tráfego Pago</span>
                    <span className="text-purple-400 font-mono">R$ 1.500</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Gestão estratégica de campanhas e anúncios pagos
                  </p>
                </button>

                <button
                  onClick={() => setAddProjetosIA(!addProjetosIA)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    addProjetosIA
                      ? 'bg-amber-950/25 border-amber-500 text-white'
                      : 'bg-[#0A0F1C]/80 border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs font-black uppercase">
                    <span>Projetos com IA + Mensal</span>
                    <span className="text-amber-400 font-mono">R$ 1.500</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Consultoria, Treinamento + Suporte e Execução (ferramentas à parte)
                  </p>
                </button>
              </div>

              {/* 3. Fotografia */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-emerald-400" /> 3. Fotografia
                </h4>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPhotoOption('ensaio')}
                    className={`flex-1 py-2 px-2 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoOption === 'ensaio' 
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Ensaio (R$ 500)
                  </button>
                  <button 
                    onClick={() => setPhotoOption('avulsa')}
                    className={`flex-1 py-2 px-2 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoOption === 'avulsa' 
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Fotos Avulsas
                  </button>
                  <button 
                    onClick={() => setPhotoOption('none')}
                    className={`py-2 px-2.5 rounded-lg border text-[10px] font-black tracking-tight cursor-pointer uppercase ${
                      photoOption === 'none' 
                        ? 'bg-red-950/15 border-red-900/40 text-red-400' 
                        : 'bg-transparent border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Não
                  </button>
                </div>

                {photoOption === 'ensaio' && (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800">
                    <label className="text-[11px] text-gray-400 block mb-1">Diárias de ensaio (R$ 500/diária): <strong>{photoDays}</strong></label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={photoDays} 
                      onChange={(e) => setPhotoDays(parseInt(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                    <div className="text-right text-xs font-extrabold text-emerald-400 mt-2">
                      Subtotal: R$ {photoDays * 500},00
                    </div>
                  </div>
                )}

                {photoOption === 'avulsa' && (
                  <div className="p-4 rounded-xl bg-[#0A0F1C]/90 border border-gray-800 space-y-3">
                    <div>
                      <label className="text-[11px] text-gray-400 block mb-1">Fotos digitais (R$ 14/un): <strong>{photoQtyDigital} un.</strong></label>
                      <input 
                        type="range" 
                        min="1" 
                        max="100" 
                        value={photoQtyDigital} 
                        onChange={(e) => setPhotoQtyDigital(parseInt(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-400 block mb-1">Fotos impressas (R$ 25/un): <strong>{photoQtyImpressa} un.</strong></label>
                      <input 
                        type="range" 
                        min="0" 
                        max="30" 
                        value={photoQtyImpressa} 
                        onChange={(e) => setPhotoQtyImpressa(parseInt(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                    <div className="text-right text-xs font-extrabold text-emerald-400 pt-1">
                      Subtotal: R$ {(photoQtyDigital * 14) + (photoQtyImpressa * 25)},00
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
                  <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">(Orçamento sob medida)</span>
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
          <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-gray-300">
            <span>fotto.com.br</span>
            <span>·</span>
            <span>banlek.com</span>
          </div>
        </div>

      </main>

      {/* Mini Footer */}
      <footer id="loja-footer" className="py-8 border-t border-gray-800/80 text-center text-gray-400 text-xs bg-[#0A0F1C]/50 relative z-10 font-mono">
        <p>VIRTUAL PLACE AGÊNCIA · CONSULTORIA EM IA, SOCIAL MEDIA, AUDIOVISUAL 4K & TRÁFEGO PAGO</p>
      </footer>
    </div>
  );
}
