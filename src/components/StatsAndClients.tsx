import React from 'react';
import { Instagram, Award, Car, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function StatsAndClients() {
  const stats = [
    {
      value: '+70',
      label: 'Projetos Executados',
      sublabel: 'Com excelência e entrega ponta a ponta',
      icon: Award,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      value: '+23',
      label: 'Lançamentos de Infos',
      sublabel: 'Infoprodutos e coprodução escalada',
      icon: Rocket,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-100'
    },
    {
      value: '+400',
      label: 'Veículos Vendidos',
      sublabel: 'Campanhas para lojas automotivas locais',
      icon: Car,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
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
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Autoridade Comprovada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mt-3">
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
                  className={`p-6 rounded-3xl ${s.bg} border ${s.border} flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase text-gray-400">Verificado</span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-gray-900 font-mono tracking-tight mb-1">
                      {s.value}
                    </div>
                    <div className="text-sm font-bold text-gray-800 uppercase tracking-tight mb-1">
                      {s.label}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {s.sublabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Empresas @ que Trabalhei */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              <Instagram className="w-4 h-4 text-rose-500" />
              <span>Portfólio de Contas e Perfis Gerenciados</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
              Empresas & Especialistas que Confiaram no Nosso Trabalho
            </h3>
          </div>

          {/* Instagram Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
            {instagramClients.map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2.5 rounded-2xl bg-white border border-gray-200 hover:border-gray-900 text-gray-800 text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-[9px]">
                  <Instagram className="w-3 h-3 text-white" />
                </div>
                <span>{client.handle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            ))}
          </div>

          {/* Partner Brands Cloud */}
          <div className="pt-6 border-t border-gray-200/60 text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-4">
              Mais de 70 Marcas, Negócios Locais e Profissionais Atendidos:
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {partnerBrands.map((brand, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium shadow-xs"
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
