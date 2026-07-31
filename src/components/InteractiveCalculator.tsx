import React, { useState } from 'react';
import { 
  Video, 
  Clock, 
  TrendingUp, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Plus, 
  Minus, 
  Calculator,
  Ticket,
  MapPin,
  Utensils,
  Smartphone,
  Camera,
  Scissors
} from 'lucide-react';

export default function InteractiveCalculator() {
  // 1. Minutagem do Vídeo Final (R$ 750/minuto = R$ 12,50/segundo)
  // Progresso: de 15 em 15s até 1min; de 30 em 30s até 3min; depois de 1 em 1min.
  const [includeVideo, setIncludeVideo] = useState<boolean>(true);
  const [videoSeconds, setVideoSeconds] = useState<number>(60); // Padrão 1 minuto (60s)

  // 2. Meia Diária Extra de Captação (4h cada - R$ 500)
  const [includeExtraHalfDays, setIncludeExtraHalfDays] = useState<boolean>(false);
  const [extraHalfDays, setExtraHalfDays] = useState<number>(1);

  // 3. Cobertura Stories & Reels Realtime (StoryMaker - R$ 500 / meia diária 4h)
  const [includeStoryMaker, setIncludeStoryMaker] = useState<boolean>(false);
  const [storyMakerHalfDays, setStoryMakerHalfDays] = useState<number>(1);

  // 4. Cobertura Fotográfica Profissional (R$ 100 / hora)
  const [includePhotographer, setIncludePhotographer] = useState<boolean>(false);
  const [photoHours, setPhotoHours] = useState<number>(4);

  // 5. Edição de Vídeo Avulsa (Pós-Produção)
  const [includeEditing, setIncludeEditing] = useState<boolean>(false);
  const [editingDuration, setEditingDuration] = useState<'1min' | '3min' | '30min' | '1h'>('1min');
  const [editingLevel, setEditingLevel] = useState<'simples' | 'avancada' | 'vfx'>('simples');

  // 6. Assessoria de Tráfego Pago (R$ 1.500/mês)
  const [includeTraffic, setIncludeTraffic] = useState<boolean>(false);
  const [trafficMonths, setTrafficMonths] = useState<number>(1);

  // 7. Robôs de IA (Squad Jarvis)
  const [aiPlan, setAiPlan] = useState<'none' | 'single' | 'annual'>('single');

  // Pricing Matrix for Standalone Video Editing
  const editingPrices: Record<string, Record<string, number | null>> = {
    '1min': { simples: 50, avancada: 100, vfx: null },
    '3min': { simples: 150, avancada: 300, vfx: null },
    '30min': { simples: 300, avancada: 600, vfx: null },
    '1h': { simples: 500, avancada: 1000, vfx: null },
  };

  const editingCost = includeEditing ? (editingPrices[editingDuration][editingLevel] ?? 0) : 0;
  const isEditingVfx = includeEditing && editingLevel === 'vfx';

  // Multipliers and calculations
  const videoCost = includeVideo ? (videoSeconds / 60) * 750 : 0;
  const extraHalfDaysCost = includeExtraHalfDays ? extraHalfDays * 500 : 0;
  const storyMakerCost = includeStoryMaker ? storyMakerHalfDays * 500 : 0;
  const photoCost = includePhotographer ? photoHours * 100 : 0;
  const trafficCost = includeTraffic ? trafficMonths * 1500 : 0;
  const aiCost = aiPlan === 'single' ? 197 : aiPlan === 'annual' ? 997 : 0;

  const grandTotal = videoCost + extraHalfDaysCost + storyMakerCost + photoCost + editingCost + trafficCost + aiCost;

  // Video duration step logic
  const getNextVideoSeconds = (current: number): number => {
    if (current < 60) {
      return current + 15;
    } else if (current < 180) {
      return current + 30;
    } else {
      return current + 60;
    }
  };

  const getPrevVideoSeconds = (current: number): number => {
    if (current <= 60) {
      return Math.max(15, current - 15);
    } else if (current <= 180) {
      return current - 30;
    } else {
      return current - 60;
    }
  };

  const formatVideoDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    if (mins === 0) {
      return `${secs} seg`;
    }
    if (secs === 0) {
      return `${mins} ${mins === 1 ? 'minuto' : 'minutos'}`;
    }
    return `${mins} min e ${secs} seg`;
  };

  const formatMoney = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getWhatsAppBudgetLink = () => {
    let msg = `Olá! Gostaria de formalizar um orçamento personalizado na VirtualPlace.\n\n`;
    msg += `📋 *RESUMO DO ORÇAMENTO CONFIGURADO:*\n`;

    if (includeVideo && videoSeconds > 0) {
      const durationLabel = formatVideoDuration(videoSeconds);
      msg += `🎥 Vídeo Final Editado: ${durationLabel} (R$ 750/min) = R$ ${formatMoney(videoCost)}\n`;
      msg += `   └ (Incluso: 1ª meia diária de 4h + Arquivos Brutos)\n`;
      msg += `   └ (Custos Extras à parte: Deslocamento + Alimentação + Ingressos/Acessos)\n`;
    }

    if (includeExtraHalfDays && extraHalfDays > 0) {
      msg += `⏱️ Meia(s) Diária(s) Extra(s) de Captação (4h): ${extraHalfDays}x (R$ 500/cada) = R$ ${formatMoney(extraHalfDaysCost)}\n`;
    }

    if (includeStoryMaker && storyMakerHalfDays > 0) {
      msg += `📱 Cobertura Stories & Reels Realtime (StoryMaker): ${storyMakerHalfDays}x meia diária 4h (R$ 500/cada) = R$ ${formatMoney(storyMakerCost)}\n`;
    }

    if (includePhotographer && photoHours > 0) {
      msg += `📸 Cobertura Fotográfica Profissional: ${photoHours}h (R$ 100/h) = R$ ${formatMoney(photoCost)}\n`;
    }

    if (includeEditing) {
      const durLabel = editingDuration === '1min' ? 'Até 1 min' : editingDuration === '3min' ? 'Até 3 min' : editingDuration === '30min' ? 'Até 30 min' : 'Até 1h';
      const levelLabel = editingLevel === 'simples' ? 'Edição Simples' : editingLevel === 'avancada' ? 'Edição Avançada (narração IA)' : 'SuperAvançada (VFX & IA)';
      const priceStr = isEditingVfx ? 'Sob Orçamento' : `R$ ${formatMoney(editingCost)}`;
      msg += `✂️ Edição de Vídeo Avulsa: ${durLabel} - ${levelLabel} = ${priceStr}\n`;
    }

    if (includeTraffic && trafficMonths > 0) {
      msg += `📈 Assessoria de Tráfego Pago: ${trafficMonths} mês(es) (R$ 1.500/mês) = R$ ${formatMoney(trafficCost)}\n`;
    }

    if (aiPlan === 'single') {
      msg += `🤖 Robôs de IA: Squad Jarvis IA (Download Único) = R$ 197,00\n`;
    } else if (aiPlan === 'annual') {
      msg += `🤖 Robôs de IA: Squad Jarvis IA (Plano Anual + Onboarding) = R$ 997,00\n`;
    }

    if (!includeVideo && !includeExtraHalfDays && !includeStoryMaker && !includePhotographer && !includeEditing && !includeTraffic && aiPlan === 'none') {
      msg += `(Nenhum serviço selecionado na simulação)\n`;
    }

    msg += `\n💰 *INVESTIMENTO TOTAL ESTIMADO:* R$ ${formatMoney(grandTotal)}\n\nPodemos confirmar a disponibilidade para a minha data e alinhar o projeto?`;

    return `https://wa.me/5549984101144?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="bg-[#0A0F1C] border border-[#2563EB]/30 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
        <div>
          <span className="text-[10px] font-black uppercase text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded border border-[#00F0FF]/20">
            SIMULADOR EM TEMPO REAL
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white mt-2 uppercase tracking-tight">
            Calculadora de Orçamento
          </h3>
          <p className="text-xs text-[#94A3B8] mt-1">
            Selecione e configure a minutagem, meias diárias extras, tráfego e robôs de IA para o seu projeto.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-purple-400 bg-purple-950/30 border border-purple-500/30 px-3.5 py-2 rounded-xl text-xs font-bold">
          <Calculator className="w-4 h-4 text-[#00F0FF]" /> Monte seu Pacote
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* 1. VÍDEO FINAL EDITADO (R$ 750 / MINUTO) */}
          <div className={`p-4 rounded-xl border transition-all ${includeVideo ? 'bg-[#050810] border-[#00F0FF]/50 shadow-[0_0_15px_rgba(0,240,255,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeVideo}
                  onChange={(e) => setIncludeVideo(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-[#00F0FF] focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <Video className="w-4 h-4 text-[#00F0FF]" /> 
                <span>Vídeo Final Editado (R$ 750 / min)</span>
              </label>
              <span className="text-xs font-black text-[#00F0FF]">R$ {formatMoney(videoCost)}</span>
            </div>

            {includeVideo && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-300 font-semibold">Tempo de Vídeo Final:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVideoSeconds(getPrevVideoSeconds(videoSeconds))}
                      disabled={videoSeconds <= 15}
                      className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs flex items-center justify-center cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-black text-white min-w-[5.5rem] text-center bg-gray-900 py-1 px-2 rounded border border-gray-800 tracking-wide">
                      {formatVideoDuration(videoSeconds)}
                    </span>
                    <button
                      onClick={() => setVideoSeconds(getNextVideoSeconds(videoSeconds))}
                      className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Destaque do que está incluso por minuto final */}
                <div className="p-2.5 rounded-lg bg-[#0A0F1C] border border-[#00F0FF]/20 text-[10.5px] text-gray-300 leading-relaxed space-y-2">
                  <div>
                    <span className="font-bold text-[#00F0FF] flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3 text-[#00F0FF]" /> Incluso no valor do vídeo:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[10px] text-gray-300 font-medium">
                      <li className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-purple-400 shrink-0" /> 1ª Meia Diária de Captação (4h)
                      </li>
                      <li className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" /> Arquivos Brutos inclusos
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-gray-800/80 text-[9.5px] text-amber-400/90 flex items-start gap-1">
                    <span className="font-bold text-amber-400 shrink-0">⚡ Custos Extras à Parte:</span>
                    <span className="text-gray-400">Deslocamento + Alimentação + Ingressos com acessos ao evento.</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. MEIA DIÁRIA EXTRA DE CAPTAÇÃO (4h CADA - R$ 500) */}
          <div className={`p-4 rounded-xl border transition-all ${includeExtraHalfDays ? 'bg-[#050810] border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeExtraHalfDays}
                  onChange={(e) => setIncludeExtraHalfDays(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-purple-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <Clock className="w-4 h-4 text-purple-400" /> 
                <span>Meia Diária Extra de Captação (4h = R$ 500/cada)</span>
              </label>
              <span className="text-xs font-black text-purple-400">R$ {formatMoney(extraHalfDaysCost)}</span>
            </div>

            {includeExtraHalfDays && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-300 font-semibold">Qtd. Meias Diárias Extras:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExtraHalfDays(Math.max(1, extraHalfDays - 1))}
                    disabled={extraHalfDays <= 1}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-black text-white min-w-[5.5rem] text-center bg-gray-900 py-1 px-2 rounded border border-gray-800">
                    {extraHalfDays} {extraHalfDays === 1 ? 'meia diária' : 'meias diárias'}
                  </span>
                  <button
                    onClick={() => setExtraHalfDays(extraHalfDays + 1)}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. COBERTURA STORIES & REELS REALTIME (STORYMAKER - R$ 500 / MEIA DIÁRIA 4h) */}
          <div className={`p-4 rounded-xl border transition-all ${includeStoryMaker ? 'bg-[#050810] border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeStoryMaker}
                  onChange={(e) => setIncludeStoryMaker(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-pink-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <Smartphone className="w-4 h-4 text-pink-400" /> 
                <span>Cobertura Stories & Reels Realtime (StoryMaker - R$ 500 / 4h)</span>
              </label>
              <span className="text-xs font-black text-pink-400">R$ {formatMoney(storyMakerCost)}</span>
            </div>

            {includeStoryMaker && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-300 font-semibold">Qtd. Meias Diárias (StoryMaker 4h):</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStoryMakerHalfDays(Math.max(1, storyMakerHalfDays - 1))}
                    disabled={storyMakerHalfDays <= 1}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-black text-white min-w-[5.5rem] text-center bg-gray-900 py-1 px-2 rounded border border-gray-800">
                    {storyMakerHalfDays} {storyMakerHalfDays === 1 ? 'meia diária' : 'meias diárias'}
                  </span>
                  <button
                    onClick={() => setStoryMakerHalfDays(storyMakerHalfDays + 1)}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. COBERTURA FOTOGRÁFICA PROFISSIONAL (R$ 100 / HORA) */}
          <div className={`p-4 rounded-xl border transition-all ${includePhotographer ? 'bg-[#050810] border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includePhotographer}
                  onChange={(e) => setIncludePhotographer(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-amber-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <Camera className="w-4 h-4 text-amber-400" /> 
                <span>Fotógrafo Profissional (R$ 100 / hora)</span>
              </label>
              <span className="text-xs font-black text-amber-400">R$ {formatMoney(photoCost)}</span>
            </div>

            {includePhotographer && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-300 font-semibold">Horas de Fotografia:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPhotoHours(Math.max(1, photoHours - 1))}
                    disabled={photoHours <= 1}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-black text-white min-w-[5.5rem] text-center bg-gray-900 py-1 px-2 rounded border border-gray-800">
                    {photoHours} {photoHours === 1 ? 'hora' : 'horas'}
                  </span>
                  <button
                    onClick={() => setPhotoHours(photoHours + 1)}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 5. EDIÇÃO DE VÍDEO AVULSA (PÓS-PRODUÇÃO) */}
          <div className={`p-4 rounded-xl border transition-all ${includeEditing ? 'bg-[#050810] border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeEditing}
                  onChange={(e) => setIncludeEditing(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-violet-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <Scissors className="w-4 h-4 text-violet-400" /> 
                <span>Edição de Vídeo Avulsa (Pós-Produção)</span>
              </label>
              <span className="text-xs font-black text-violet-400">
                {includeEditing ? (isEditingVfx ? 'Sob Orçamento' : `R$ ${formatMoney(editingCost)}`) : 'A partir de R$ 50'}
              </span>
            </div>

            {includeEditing && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 space-y-3">
                {/* Duração Selector */}
                <div>
                  <span className="text-[11px] text-gray-300 font-semibold block mb-2">Duração do Vídeo:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      { id: '1min', label: 'Até 1 min' },
                      { id: '3min', label: 'Até 3 min' },
                      { id: '30min', label: 'Até 30 min' },
                      { id: '1h', label: 'Até 1h' }
                    ].map((dur) => (
                      <button
                        key={dur.id}
                        type="button"
                        onClick={() => setEditingDuration(dur.id as any)}
                        className={`py-1.5 px-2 rounded text-[10.5px] font-bold border transition-all cursor-pointer ${
                          editingDuration === dur.id
                            ? 'bg-violet-950/70 border-violet-500 text-violet-300'
                            : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        {dur.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexidade Selector */}
                <div>
                  <span className="text-[11px] text-gray-300 font-semibold block mb-2">Nível da Edição:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingLevel('simples')}
                      className={`p-2 rounded-lg text-[10px] text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        editingLevel === 'simples'
                          ? 'bg-violet-950/60 border-violet-500 text-violet-200'
                          : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="font-bold block uppercase text-white">Simples</span>
                      <span className="text-[9px] text-gray-400 mt-0.5">Cortes, cores e legendas</span>
                      <span className="text-[10px] font-black text-violet-400 mt-1">
                        R$ {formatMoney(editingPrices[editingDuration]['simples']!)}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingLevel('avancada')}
                      className={`p-2 rounded-lg text-[10px] text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        editingLevel === 'avancada'
                          ? 'bg-violet-950/60 border-violet-500 text-violet-200'
                          : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="font-bold block uppercase text-white">Avançada (Narração IA)</span>
                      <span className="text-[9px] text-gray-400 mt-0.5">Locução IA + Efeitos Som</span>
                      <span className="text-[10px] font-black text-violet-400 mt-1">
                        R$ {formatMoney(editingPrices[editingDuration]['avancada']!)}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingLevel('vfx')}
                      className={`p-2 rounded-lg text-[10px] text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        editingLevel === 'vfx'
                          ? 'bg-pink-950/60 border-pink-500 text-pink-200'
                          : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="font-bold block uppercase text-white">SuperAvançada (VFX & IA)</span>
                      <span className="text-[9px] text-gray-400 mt-0.5">Animações 3D e VFX</span>
                      <span className="text-[10px] font-black text-pink-400 mt-1">
                        Sob Orçamento
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. ASSESSORIA DE TRÁFEGO PAGO (R$ 1.500 / MÊS) */}
          <div className={`p-4 rounded-xl border transition-all ${includeTraffic ? 'bg-[#050810] border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-start justify-between gap-3">
              <label className="flex items-center gap-2.5 text-xs font-black text-white uppercase cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={includeTraffic}
                  onChange={(e) => setIncludeTraffic(e.target.checked)}
                  className="rounded bg-gray-900 border-gray-700 text-blue-500 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <TrendingUp className="w-4 h-4 text-blue-400" /> 
                <span>Assessoria de Tráfego Pago (R$ 1.500/mês)</span>
              </label>
              <span className="text-xs font-black text-blue-400">R$ {trafficCost},00</span>
            </div>

            {includeTraffic && (
              <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-300 font-semibold">Meses de Gestão Meta/Google/TikTok/LinkedIn:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTrafficMonths(Math.max(1, trafficMonths - 1))}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-black text-white min-w-[2.5rem] text-center bg-gray-900 py-1 px-2 rounded border border-gray-800">
                    {trafficMonths} {trafficMonths === 1 ? 'mês' : 'meses'}
                  </span>
                  <button
                    onClick={() => setTrafficMonths(trafficMonths + 1)}
                    className="w-7 h-7 rounded bg-gray-800 text-white font-bold hover:bg-gray-700 text-xs flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. ROBÔS DE IA - SQUAD JARVIS */}
          <div className={`p-4 rounded-xl border transition-all ${aiPlan !== 'none' ? 'bg-[#050810] border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-[#050810]/60 border-gray-800'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2.5 text-xs font-black text-white uppercase">
                <Brain className="w-4 h-4 text-emerald-400" /> Robôs de IA (Squad Jarvis)
              </span>
              <span className="text-xs font-black text-emerald-400">
                {aiPlan === 'none' ? 'R$ 0,00' : `R$ ${aiCost},00`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setAiPlan('none')}
                className={`p-2.5 rounded-lg text-[10.5px] font-bold uppercase border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  aiPlan === 'none'
                    ? 'bg-gray-800 border-gray-600 text-white'
                    : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span>Nenhum Robô</span>
                <span className="text-[10px] text-gray-500 mt-1">R$ 0</span>
              </button>

              <button
                type="button"
                onClick={() => setAiPlan('single')}
                className={`p-2.5 rounded-lg text-[10.5px] font-bold uppercase border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  aiPlan === 'single'
                    ? 'bg-purple-950/60 border-purple-500 text-purple-300'
                    : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span>Download Único</span>
                <span className="text-[10px] font-black text-purple-400 mt-1">R$ 197 (Único)</span>
              </button>

              <button
                type="button"
                onClick={() => setAiPlan('annual')}
                className={`p-2.5 rounded-lg text-[10.5px] font-bold uppercase border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  aiPlan === 'annual'
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                    : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span>Plano Anual + Onboarding</span>
                <span className="text-[10px] font-black text-emerald-400 mt-1">R$ 997 / ano</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Investment Summary */}
        <div className="lg:col-span-5 bg-[#050810] border border-gray-800/90 rounded-xl p-6 flex flex-col justify-between relative">
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-3 flex items-center justify-between">
              <span>Resumo do Investimento</span>
              <span className="text-[10px] text-gray-500 font-normal">Valores Válidos</span>
            </h4>

            <div className="space-y-3 text-xs mb-6">
              {includeVideo && videoSeconds > 0 ? (
                <div className="flex justify-between items-start text-gray-300 border-b border-gray-800/40 pb-2">
                  <div>
                    <span className="font-bold text-white block">Vídeo Final ({formatVideoDuration(videoSeconds)})</span>
                    <span className="text-[9.5px] text-gray-500">Incluso: 1ª Meia Diária (4h) + Brutos</span>
                  </div>
                  <span className="font-black text-[#00F0FF]">R$ {formatMoney(videoCost)}</span>
                </div>
              ) : null}

              {includeExtraHalfDays && extraHalfDays > 0 ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <span className="font-bold text-white">Captação Extra ({extraHalfDays}x 4h)</span>
                  <span className="font-black text-purple-400">R$ {formatMoney(extraHalfDaysCost)}</span>
                </div>
              ) : null}

              {includeStoryMaker && storyMakerHalfDays > 0 ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <span className="font-bold text-white">StoryMaker Realtime ({storyMakerHalfDays}x 4h)</span>
                  <span className="font-black text-pink-400">R$ {formatMoney(storyMakerCost)}</span>
                </div>
              ) : null}

              {includePhotographer && photoHours > 0 ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <span className="font-bold text-white">Fotógrafo Profissional ({photoHours}h)</span>
                  <span className="font-black text-amber-400">R$ {formatMoney(photoCost)}</span>
                </div>
              ) : null}

              {includeEditing ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <div>
                    <span className="font-bold text-white block">
                      Edição Avulsa ({editingDuration === '1min' ? 'Até 1m' : editingDuration === '3min' ? 'Até 3m' : editingDuration === '30min' ? 'Até 30m' : 'Até 1h'})
                    </span>
                    <span className="text-[9.5px] text-gray-500">
                      {editingLevel === 'simples' ? 'Edição Simples' : editingLevel === 'avancada' ? 'Avançada + Narração IA' : 'SuperAvançada (VFX & IA)'}
                    </span>
                  </div>
                  <span className="font-black text-violet-400">
                    {isEditingVfx ? 'Sob Orçamento' : `R$ ${formatMoney(editingCost)}`}
                  </span>
                </div>
              ) : null}

              {includeTraffic && trafficMonths > 0 ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <span className="font-bold text-white">Tráfego Pago ({trafficMonths}m)</span>
                  <span className="font-black text-blue-400">R$ {formatMoney(trafficCost)}</span>
                </div>
              ) : null}

              {aiPlan !== 'none' ? (
                <div className="flex justify-between text-gray-300 border-b border-gray-800/40 pb-2">
                  <span className="font-bold text-white">
                    {aiPlan === 'single' ? 'Squad Jarvis IA (Único)' : 'Squad Jarvis IA (Anual)'}
                  </span>
                  <span className="font-black text-emerald-400">R$ {formatMoney(aiCost)}</span>
                </div>
              ) : null}

              {!includeVideo && !includeExtraHalfDays && !includeStoryMaker && !includePhotographer && !includeTraffic && aiPlan === 'none' && (
                <p className="text-xs text-gray-500 italic py-4 text-center">
                  Marque as opções ao lado para simular seu orçamento.
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="p-4 rounded-xl bg-[#0A0F1C] border border-[#00F0FF]/30 mb-6 shadow-inner">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
                Estimativa Total do Investimento
              </span>
              <div className="text-3xl md:text-4xl font-black text-[#00F0FF] tracking-tight">
                R$ {formatMoney(grandTotal)}
              </div>
              <p className="text-[9.5px] text-emerald-400 mt-1.5 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transparência total. Sem taxas surpresas.
              </p>
            </div>

            <a
              href={getWhatsAppBudgetLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl block tracking-wide"
            >
              <Phone className="w-4 h-4" /> Gerar Proposta no WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
