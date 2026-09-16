import React from 'react';
import { Instagram, Award, Car, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function StatsAndClients() {
  const stats = [
    {
      value: '+70',
      label: 'Projetos Executados',
      sublabel: 'Com excelência e entrega ponta a ponta',
      icon: Award,
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/20',
      border: 'border-cyan-500/20'
    },
    {
      value: '+23',
      label: 'Lançamentos de Infos',
      sublabel: 'Infoprodutos e coprodução escalada',
      icon: Rocket,
      color: 'text-purple-400',
      bg: 'bg-purple-950/20',
      border: 'border-purple-500/20'
    },
    {
      value: '+400',
      label: 'Veículos Vendidos',
      sublabel: 'Campanhas para lojas automotivas locais',
      icon: Car,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/20',
      border: 'border-emerald-500/20'
    }
  ];

  const instagramClients = [
    { handle: '@gramatica_na_veia', url: 'https://www.instagram.com/gramatica_na_veia', niche: 'Educação / Concursos' },
    { handle: '@portuguesplay', url: 'https://www.instagram.com/portuguesplay', niche: 'Infoproduto / Aulas' },
    { handle: '@andreluis.vsw', url: 'https://www.instagram.com/andreluis.vsw', niche: 'Produtor & Especialista' },
    { handle: '@luizoliveiraoficiall', url: 'https://www.instagram.com/luizoliveiraoficiall', niche: 'Palestrante & Mentor' },
    { handle: '@z4.veiculos_', url: 'https://www.instagram.com/z4.veiculos_', niche: 'Concessionária & Vendas' },
    { handle: '@fio.automoveis', url: 'https://www.instagram.com/fio.automoveis', niche: 'Revenda Automotiva' },
    { handle: '@regiao_amurc', url: 'https://www.instagram.com/regiao_amurc', niche: 'Instituição Regional' },
    { handle: '@culturaturismoamurc', url: 'https://www.instagram.com/culturaturismoamurc', niche: 'Turismo & Cultura' }
  ];

  const partnerBrands = [
    "Vendedor Imbatível", "Escolinha Lucrativa", "Curso Mike Bravo", "Avenida Pneus", 
    "Associação dos Tropeiros", "NZ Motos", "THCElétrica", "Niles Mat Construção", 
    "Lucas Sebbem Advogado", "CM Reparos Automotivos", "Souz Place", "Plantão do Gole", 
    "Fava Cruz Produções", "Hotel Pinotti", "Lia Tattoer", "Vintage Barber Shop"
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
              Autoridade Comprovada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-4">
              Resultados Reais & Métricas Conquistadas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-7 rounded-3xl ${s.bg} border ${s.border} backdrop-blur-md flex flex-col justify-between shadow-xl hover:border-white/30 transition-all group`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${s.color}`} />
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verificado
                    </span>
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight mb-2">
                      {s.value}
                    </div>
                    <div className="text-sm font-black text-neutral-200 uppercase tracking-tight mb-1">
                      {s.label}
                    </div>
                    <div className="text-xs text-neutral-400 leading-relaxed">
                      {s.sublabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Empresas @ que Trabalhei */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pink-400 uppercase tracking-wider mb-2">
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Portfólio de Contas e Perfis Gerenciados</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Empresas & Especialistas que Confiaram no Nosso Trabalho
            </h3>
          </div>

          {/* Instagram Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
            {instagramClients.map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/60 text-neutral-200 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-lg flex items-center gap-2.5 backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-[10px]">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
                <span>{client.handle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-pink-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Partner Brands Cloud */}
          <div className="pt-8 border-t border-neutral-800 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-4">
              Mais de 70 Marcas, Negócios Locais e Profissionais Atendidos:
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {partnerBrands.map((brand, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-neutral-300 text-xs font-mono font-medium hover:border-white/20 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
