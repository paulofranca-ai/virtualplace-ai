import React from 'react';
import { PlayCircle, Star, ChevronRight } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES } from './data/services';
import { BeatPlaceSection } from './components/BeatPlaceSection';
import { StatsAndClients } from './components/StatsAndClients';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-emerald-400 selection:text-white relative overflow-x-hidden">
      
      {/* Header com Logo Centralizada Pequena (Sem Menu Fixo) */}
      <header className="pt-6 sm:pt-8 pb-2 text-center">
        <a href="/" className="inline-flex items-center justify-center">
          <img 
            src="/logo-black.png" 
            alt="Virtual Place Logo" 
            className="h-10 sm:h-12 w-auto max-w-[180px] sm:max-w-[210px] object-contain mx-auto" 
            loading="eager"
            decoding="async"
          />
        </a>
      </header>

      {/* Main Content */}
      <main className="pt-2 pb-16 md:pb-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-5 text-black leading-tight uppercase font-sans tracking-tight max-w-4xl mx-auto">
          A internet é um lugar virtual. Nossa missão nela, é criar marcas e dar vida a elas, impulsionadas por tecnologia e criatividade humana
        </h1>

        {/* Vídeo de Apresentação */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="p-1 rounded-2xl bg-gray-200 shadow-sm">
            <div className="rounded-xl overflow-hidden aspect-video relative bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SSwGhh99DOc?autoplay=0&rel=0"
                title="Apresentação"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-green-600" /> Assista ao vídeo de apresentação e qualidade das nossas produções
          </p>
        </div>

        {/* CTA Planos */}
        <div className="mb-14 sm:mb-16">
          <a 
            href="#planos"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 text-base sm:text-lg font-black uppercase text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors"
          >
            Conhecer Nossos Planos & Serviços <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Nossos Planos & Serviços */}
        <div id="planos" className="scroll-mt-4 pt-4 mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Soluções Completas
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight mt-3">
              Nossos Planos & Serviços
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Produção audiovisual, criativos e estratégias de tráfego com atendimento exclusivo e alta conversão.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* BEAT PLACE - Agência de Festas e DJs */}
        <div className="mb-20">
          <BeatPlaceSection />
        </div>

        {/* Estatísticas e Empresas Trabalhadas */}
        <div className="mb-20">
          <StatsAndClients />
        </div>

        {/* Depoimento Léo & Vídeo de Resultados */}
        <div className="max-w-3xl mx-auto mb-20 text-left">
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm relative">
            <div className="absolute -top-5 left-10">
              <div className="flex gap-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 text-lg sm:text-xl font-medium italic mt-4 mb-8 leading-relaxed">
              "Eu recomendo o trabalho do Paulo, gestor de tráfego, tivemos retorno de 3x 4x nas campanhas de cursos e livros."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xl border-2 border-white shadow-sm">
                L
              </div>
              <div>
                <h4 className="font-black text-black text-lg uppercase tracking-tight">Léo</h4>
                <p className="text-sm text-gray-500">Cliente Especialista & Infoprodutor</p>
              </div>
            </div>
          </div>

          {/* Vídeo embedado diretamente abaixo do depoimento do Léo */}
          <div className="mt-6 rounded-3xl overflow-hidden bg-black shadow-lg border border-gray-200 aspect-video relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/QW9InbF3eZE?autoplay=0&rel=0"
              title="Depoimento e Resultados de Lançamento"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xs text-gray-500 mt-2.5 text-center flex items-center justify-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-blue-600" /> Assista aos bastidores e depoimento em vídeo
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 text-center text-gray-500 text-xs bg-white font-mono relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <img 
            src="/logo-black.png" 
            alt="Virtual Place Logo" 
            className="h-7 w-auto object-contain opacity-60 mx-auto" 
            loading="lazy"
            decoding="async"
          />
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
