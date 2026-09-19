import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Layers,
  HelpCircle,
  BarChart3,
  Flame
} from 'lucide-react';

interface BusinessTypeConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  defaultTicket: number;
  ticketPresets: number[];
  baseRoas: number;
  minBudget: number;
  recommendedBudget: number;
  platforms: {
    meta: number; // percentage
    google: number;
    tiktok: number;
  };
  tips: string;
}

const BUSINESS_TYPES: Record<string, BusinessTypeConfig> = {
  curso_infoproduto: {
    id: 'curso_infoproduto',
    name: 'Curso Online / Infoproduto',
    category: 'Educação & Escala Digital',
    description: 'Case comprovado de ROI 7,3x em mais de 100k de vendas com alta margem e escala contínua.',
    defaultTicket: 497,
    ticketPresets: [97, 197, 497, 997, 1997],
    baseRoas: 7.3,
    minBudget: 1000,
    recommendedBudget: 3000,
    platforms: { meta: 65, google: 25, tiktok: 10 },
    tips: 'Meta Ads focado em Stories/Reels e VSL, Google Ads capturando buscas no fundo de funil e remarketing agressivo.'
  },
  evento_ingresso: {
    id: 'evento_ingresso',
    name: 'Evento / Show / Ingresso',
    category: 'Entretenimento & Lotes',
    description: 'Venda de ingressos com ciclos rápidos, viradas de lote, geolocalização e remarketing de urgência.',
    defaultTicket: 100,
    ticketPresets: [50, 80, 100, 150, 250, 400],
    baseRoas: 6.2,
    minBudget: 800,
    recommendedBudget: 2500,
    platforms: { meta: 70, google: 15, tiktok: 15 },
    tips: 'Tráfego regional de alta densidade no Instagram com vídeos da atração e anúncios de contagem regressiva por lote.'
  },
  servico_local: {
    id: 'servico_local',
    name: 'Comercial / Negócio Local / Serviço',
    category: 'Vendas Diretas no WhatsApp',
    description: 'Atração de clientes qualificados prontos para fechar orçamentos, consultas e contratos de alto valor.',
    defaultTicket: 800,
    ticketPresets: [150, 350, 800, 1500, 3000],
    baseRoas: 5.8,
    minBudget: 600,
    recommendedBudget: 1800,
    platforms: { meta: 60, google: 40, tiktok: 0 },
    tips: 'Google Ads para captura com alta intenção imediata ("onde contratar") + Meta Ads para autoridade local no raio da empresa.'
  },
  ecommerce: {
    id: 'ecommerce',
    name: 'E-commerce / Loja / Varejo',
    category: 'Venda de Produtos Físicos',
    description: 'Catálogo dinâmico, criativos em carrossel e campanhas de escala de ticket médio com recompra.',
    defaultTicket: 180,
    ticketPresets: [89, 149, 180, 290, 490],
    baseRoas: 5.0,
    minBudget: 1200,
    recommendedBudget: 3500,
    platforms: { meta: 55, google: 35, tiktok: 10 },
    tips: 'Google Shopping + Campanhas Advantage+ no Meta Ads com público frio e catálogo personalizado de remarketing.'
  }
};

export function TrafegoCalculator() {
  const [selectedType, setSelectedType] = useState<string>('curso_infoproduto');
  const activeConfig = BUSINESS_TYPES[selectedType];

  const [ticket, setTicket] = useState<number>(activeConfig.defaultTicket);
  const [adBudget, setAdBudget] = useState<number>(activeConfig.recommendedBudget);
  const [platformMode, setPlatformMode] = useState<'multichannel' | 'meta' | 'google' | 'tiktok'>('multichannel');

  // Gestão fixa da agência
  const GESTAO_AGENCIA = 1500;

  // Handler when business type changes
  const handleTypeChange = (typeKey: string) => {
    setSelectedType(typeKey);
    const cfg = BUSINESS_TYPES[typeKey];
    setTicket(cfg.defaultTicket);
    setAdBudget(cfg.recommendedBudget);
  };

  // Calculations
  const calculations = useMemo(() => {
    // Roas multiplier adjustments based on platform and scale
    let effectiveRoas = activeConfig.baseRoas;
    
    if (platformMode === 'meta') effectiveRoas *= 0.96;
    if (platformMode === 'google') effectiveRoas *= 0.94;
    if (platformMode === 'tiktok') effectiveRoas *= 0.88;

    // Faturamento previsto
    const faturamentoEstimado = adBudget * effectiveRoas;
    
    // Estimativa de vendas
    const vendasEstimadas = Math.round(faturamentoEstimado / Math.max(ticket, 1));
    
    // Custo por Aquisição (CPA)
    const cpaEstimado = vendasEstimadas > 0 ? (adBudget / vendasEstimadas) : 0;

    // Investimento Total = Verba Anúncios + R$ 1.500 gestão
    const investimentoTotal = adBudget + GESTAO_AGENCIA;

    // Lucro Líquido Estimado = Faturamento - Investimento Total
    const lucroLiquidoEstimado = faturamentoEstimado - investimentoTotal;
    
    // Margem Líquida %
    const margemLiquida = faturamentoEstimado > 0 
      ? ((lucroLiquidoEstimado / faturamentoEstimado) * 100) 
      : 0;

    // Distribuição de verba por plataforma
    let metaPercent = activeConfig.platforms.meta;
    let googlePercent = activeConfig.platforms.google;
    let tiktokPercent = activeConfig.platforms.tiktok;

    if (platformMode === 'meta') {
      metaPercent = 100;
      googlePercent = 0;
      tiktokPercent = 0;
    } else if (platformMode === 'google') {
      metaPercent = 0;
      googlePercent = 100;
      tiktokPercent = 0;
    } else if (platformMode === 'tiktok') {
      metaPercent = 0;
      googlePercent = 0;
      tiktokPercent = 100;
    }

    const metaAmount = (adBudget * metaPercent) / 100;
    const googleAmount = (adBudget * googlePercent) / 100;
    const tiktokAmount = (adBudget * tiktokPercent) / 100;

    return {
      effectiveRoas,
      faturamentoEstimado,
      vendasEstimadas,
      cpaEstimado,
      investimentoTotal,
      lucroLiquidoEstimado,
      margemLiquida,
      metaPercent,
      googlePercent,
      tiktokPercent,
      metaAmount,
      googleAmount,
      tiktokAmount
    };
  }, [adBudget, ticket, activeConfig, platformMode]);

  // Build dynamic WhatsApp Link with simulation details
  const whatsappUrl = useMemo(() => {
    const text = `Olá! Fiz uma simulação na Calculadora de Tráfego da Agência Virtual Place:\n` +
      `📌 Tipo: ${activeConfig.name}\n` +
      `🎯 Ticket Médio: R$ ${ticket.toLocaleString('pt-BR')}\n` +
      `💰 Verba de Anúncios: R$ ${adBudget.toLocaleString('pt-BR')}/mês\n` +
      `🌐 Plataformas: ${platformMode === 'multichannel' ? 'Multicanal Recomendado' : platformMode.toUpperCase()}\n` +
      `📈 Previsão: ~${calculations.vendasEstimadas} vendas | Fat. Estimado: R$ ${calculations.faturamentoEstimado.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} | ROAS ${calculations.effectiveRoas.toFixed(1)}x\n` +
      `💼 Quero contratar a Gestão de Tráfego por R$ 1.500/mês!`;
    return `https://wa.me/5549991052315?text=${encodeURIComponent(text)}`;
  }, [activeConfig, ticket, adBudget, platformMode, calculations]);

  return (
    <div id="calculadora-trafego" className="scroll-mt-24 p-6 sm:p-8 md:p-10 rounded-3xl bg-neutral-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            GESTÃO DE TRÁFEGO PAGO • R$ 1.500 / MÊS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            ROI 7,3x COMPROVADO EM 100K DE VENDAS
          </span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
          Calculadora de Retorno & Recomendação de Verba
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
          Nossa gestão é fixa em <strong className="text-white">R$ 1.500/mês</strong> e as redes sociais são <strong className="text-cyan-300">limitadas apenas pela sua verba de anúncio</strong>. Simule abaixo o faturamento, volume de vendas e recomendação ideal de investimento por plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: Interactive Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Tipo de Produto / Serviço / Ingresso */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] flex items-center justify-center font-black">1</span>
              Tipo de Negócio / Produto / Ingresso
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.values(BUSINESS_TYPES).map((bt) => {
                const isSelected = selectedType === bt.id;
                return (
                  <button
                    key={bt.id}
                    type="button"
                    onClick={() => handleTypeChange(bt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-black uppercase tracking-tight ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                          {bt.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                        {bt.category}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {bt.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Ticket Médio (Preço de Venda) */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] flex items-center justify-center font-black">2</span>
                Preço / Ticket Médio do seu Produto ou Ingresso
              </label>
              <div className="text-right">
                <span className="text-base sm:text-xl font-black text-white font-mono">
                  R$ {ticket.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-3">
              {activeConfig.ticketPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setTicket(preset)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    ticket === preset
                      ? 'bg-cyan-400 text-black shadow-md shadow-cyan-400/20'
                      : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30'
                  }`}
                >
                  R$ {preset}
                </button>
              ))}
            </div>

            {/* Custom Range Slider */}
            <input 
              type="range"
              min="20"
              max="5000"
              step="10"
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>R$ 20</span>
              <span>R$ 1.000</span>
              <span>R$ 2.500</span>
              <span>R$ 5.000</span>
            </div>
          </div>

          {/* Step 3: Verba de Anúncios Mensal */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] flex items-center justify-center font-black">3</span>
                  Sua Verba Mensal de Anúncios (Mídia)
                </label>
                <span className="text-[10px] text-neutral-400 block mt-0.5">
                  Valor pago direto às plataformas (Meta/Google/TikTok)
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg sm:text-2xl font-black text-emerald-400 font-mono">
                  R$ {adBudget.toLocaleString('pt-BR')}
                </span>
                <span className="text-[10px] text-neutral-400 block font-mono">/mês</span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-3">
              {[800, 1500, 2500, 4000, 7000, 12000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAdBudget(preset)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    adBudget === preset
                      ? 'bg-emerald-400 text-black shadow-md shadow-emerald-400/20'
                      : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30'
                  }`}
                >
                  R$ {preset.toLocaleString('pt-BR')}
                </button>
              ))}
            </div>

            {/* Range Slider */}
            <input 
              type="range"
              min="500"
              max="25000"
              step="250"
              value={adBudget}
              onChange={(e) => setAdBudget(Number(e.target.value))}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
              <span>R$ 500</span>
              <span>R$ 5.000</span>
              <span>R$ 15.000</span>
              <span>R$ 25.000+</span>
            </div>
          </div>

          {/* Step 4: Escolha de Plataforma ou Multicanal */}
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] flex items-center justify-center font-black">4</span>
              Estratégia de Plataformas (Redes Limitadas Pela Verba)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'multichannel', name: 'Multicanal Ideal', badge: 'Recomendado' },
                { id: 'meta', name: 'Meta Ads (Insta)', badge: 'Público Visual' },
                { id: 'google', name: 'Google Ads', badge: 'Alta Intenção' },
                { id: 'tiktok', name: 'TikTok Ads', badge: 'Viralidade' }
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlatformMode(p.id as any)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    platformMode === p.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{p.name}</div>
                  <div className="text-[9px] text-cyan-300 font-mono mt-0.5">{p.badge}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Dica da Agência */}
          <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-neutral-300 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300">Estratégia Recomendada para {activeConfig.name}:</strong>{' '}
              <span>{activeConfig.tips}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Real-Time Results & Forecast (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1 flex items-center justify-between">
              <span>PREVISÃO DE RESULTADOS</span>
              <span className="text-emerald-400 font-bold">ROAS {calculations.effectiveRoas.toFixed(1)}x</span>
            </div>

            {/* Faturamento Estimado Principal */}
            <div className="my-5 p-5 rounded-2xl bg-black/60 border border-emerald-500/30">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                Faturamento Bruto Estimado
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                R$ {calculations.faturamentoEstimado.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1.5">
                <span>Vendas estimadas:</span>
                <strong className="text-white font-mono text-sm">~{calculations.vendasEstimadas} unidades</strong>
              </div>
            </div>

            {/* Métricas Detalhadas */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Lucro Líquido Est.</span>
                <span className="text-lg font-black text-white font-mono">
                  R$ {Math.max(0, calculations.lucroLiquidoEstimado).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </span>
                <span className="text-[9px] text-emerald-400 block font-mono mt-0.5">
                  Margem: {calculations.margemLiquida.toFixed(0)}%
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">CPA Estimado</span>
                <span className="text-lg font-black text-white font-mono">
                  R$ {calculations.cpaEstimado.toFixed(2)}
                </span>
                <span className="text-[9px] text-neutral-400 block font-mono mt-0.5">
                  Custo p/ Aquisição
                </span>
              </div>
            </div>

            {/* Recomendação de Distribuição de Verba por Plataforma */}
            <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Distribuição de Verba Sugerida</span>
                <span className="text-cyan-400">Total: R$ {adBudget.toLocaleString('pt-BR')}</span>
              </div>

              <div className="space-y-2">
                {calculations.metaAmount > 0 && (
                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono">
                      <span className="text-neutral-300">Meta Ads (Instagram/Facebook)</span>
                      <span className="text-white font-bold">R$ {calculations.metaAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} ({calculations.metaPercent}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${calculations.metaPercent}%` }} />
                    </div>
                  </div>
                )}

                {calculations.googleAmount > 0 && (
                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono">
                      <span className="text-neutral-300">Google Ads (Pesquisa/YouTube)</span>
                      <span className="text-white font-bold">R$ {calculations.googleAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} ({calculations.googlePercent}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${calculations.googlePercent}%` }} />
                    </div>
                  </div>
                )}

                {calculations.tiktokAmount > 0 && (
                  <div>
                    <div className="flex justify-between text-[11px] mb-1 font-mono">
                      <span className="text-neutral-300">TikTok Ads (Vídeos Curtos)</span>
                      <span className="text-white font-bold">R$ {calculations.tiktokAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} ({calculations.tiktokPercent}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 rounded-full" style={{ width: `${calculations.tiktokPercent}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Resumo de Custos do Contrato */}
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs space-y-1.5 font-mono mb-6">
              <div className="flex justify-between text-neutral-300">
                <span>Gestão da Agência (Mensal):</span>
                <span className="text-white font-bold">R$ 1.500,00</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Verba de Anúncios (Sua escolha):</span>
                <span className="text-white font-bold">R$ {adBudget.toLocaleString('pt-BR')},00</span>
              </div>
              <div className="border-t border-cyan-500/20 pt-1.5 flex justify-between text-cyan-300 font-bold">
                <span>Investimento Total no Mês:</span>
                <span>R$ {calculations.investimentoTotal.toLocaleString('pt-BR')},00</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 hover:from-cyan-300 hover:to-emerald-300 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer text-center"
            >
              <span>Contratar Gestão por R$ 1.500</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-center mt-3">
              <span className="text-[10px] text-neutral-400 font-mono">
                Redes sociais limitadas apenas pela sua verba • Atendimento humanizado
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
