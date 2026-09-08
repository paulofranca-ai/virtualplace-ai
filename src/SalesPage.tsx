import React from 'react';
import { PlayCircle, Award, Terminal, Star, ExternalLink, ChevronRight } from 'lucide-react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-emerald-400 selection:text-white relative overflow-x-hidden">
      
      {/* Header com Logo */}
      <header className="pt-6 sm:pt-8 pb-3 text-center">
        <a href="/" className="inline-block">
          <img 
            src="https://i.imgur.com/w2iO5CR.png" 
            alt="Virtual Place Logo" 
            className="h-10 sm:h-12 w-auto object-contain brightness-110 mx-auto" 
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer" 
          />
        </a>
      </header>

      {/* Main Content */}
      <main className="pt-2 pb-16 md:pb-20 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-5 text-black leading-tight uppercase font-sans tracking-tight max-w-4xl mx-auto">
          A internet é um lugar virtual. Nossa missão nela, é criar marcas e dar vida a elas, impulsionadas por tecnologia e criatividade humana
        </h1>

        {/* Vídeo */}
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
            Ver Nossos Planos & Valores <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Nossos Planos */}
        <div id="planos" className="scroll-mt-4 pt-4 mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Nossos Planos & Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            
            {/* 1. Videomaker */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Videomaker 1h + Drone + 1min Editado Final</h3>
                <p className="text-black text-sm mb-4 font-medium">Gravação presencial, tomadas aéreas e edição final.</p>
                <div className="text-xl font-black text-black font-mono mb-4">R$ 150</div>
              </div>
              <a href="https://pay.kiwify.com.br/cG8n7jh" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-2 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm text-center leading-tight">
                COMPRAR GRAVAÇÃO E EDIÇÃO DE FILME / VÍDEO
              </a>
            </div>

            {/* 2. Transmissão ao vivo */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Transmissão ao Vivo</h3>
                <p className="text-black text-sm mb-4 font-medium">Estrutura de streaming para seu evento ou podcast.</p>
                <div className="text-xl font-black text-black font-mono mb-4">R$ 150 <span className="text-xs font-bold">/ hora</span></div>
              </div>
              <a href="https://pay.kiwify.com.br/elj3ZQY" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-2 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm text-center leading-tight">
                COMPRAR TRANSMISSÃO AO VIVO
              </a>
            </div>

            {/* 3. Stories tempo real */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Stories Tempo Real</h3>
                <p className="text-black text-sm mb-4 font-medium">Cobertura dinâmica para suas redes sociais.</p>
                <div className="text-xl font-black text-black font-mono mb-4">R$ 150 <span className="text-xs font-bold">/ hora</span></div>
              </div>
              <a href="https://pay.kiwify.com.br/N51MmGe" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-2 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm text-center leading-tight">
                COMPRAR STORIES TEMPO REAL
              </a>
            </div>

            {/* 4. Arte divulgação */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Arte Divulgação</h3>
                <p className="text-black text-sm mb-4 font-medium">Design profissional e criativos de alta conversão.</p>
                <div className="text-xl font-black text-black font-mono mb-4">R$ 100 <span className="text-xs font-bold">/ arte</span></div>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20comprar%20a%20Arte%20de%20Divulga%C3%A7%C3%A3o%20por%20R%24100." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-2 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm text-center leading-tight">
                COMPRAR ARTE DIVULGAÇÃO
              </a>
            </div>

            {/* 5. Assessoria de tráfego */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Assessoria Tráfego</h3>
                <p className="text-black text-sm mb-4 font-medium">Estratégias avançadas de anúncios patrocinados.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Assessoria%20de%20Tr%C3%A1fego." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 6. Co produção info */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Coprodução Info</h3>
                <p className="text-black text-sm mb-4 font-medium">Lançamentos de infoprodutos com foco em performance.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Coprodu%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 7. Cérebro Jarvis */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">Cérebro Jarvis IA</h3>
                <p className="text-black text-sm mb-4 font-medium">Esquadrão com 30+ agentes autônomos. Acesso vitalício.</p>
                <div className="text-xl font-black text-black font-mono mb-4">R$ 197</div>
              </div>
              <a href="/agentes" className="w-full py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-sm mt-4 text-center">
                Comprar Acesso
              </a>
            </div>

          </div>
        </div>


        {/* Depoimento Léo */}
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
        </div>

        {/* Curso de Marketing e Tráfego */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 rounded-3xl bg-gray-900 border border-gray-800 shadow-lg relative overflow-hidden">
            <div className="text-left md:max-w-lg mb-8 md:mb-0 relative z-10">
              <div className="inline-block text-[10px] font-mono font-bold uppercase text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30 mb-4">
                Para quem quer aprender do zero
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3 leading-tight">
                Curso Completo de Marketing & Tráfego
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Aprenda as mesmas estratégias que usamos para faturar alto com anúncios e lançamentos. Tudo que você precisa para dominar o tráfego pago.
              </p>
            </div>

            <div className="shrink-0 relative z-10 w-full md:w-auto">
              <div className="text-center mb-3">
                <span className="text-sm text-gray-400 line-through mr-2">R$ 297,00</span>
                <span className="text-3xl font-black text-green-400">R$ 20</span>
              </div>
              <a 
                href="https://projeto-stark.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-black hover:bg-gray-800 text-white font-black text-sm uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                Acessar o Curso Agora <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 text-center text-gray-500 text-xs bg-white font-mono relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <img 
            src="https://i.imgur.com/w2iO5CR.png" 
            alt="Virtual Place Logo" 
            className="h-8 w-auto object-contain opacity-50 grayscale" 
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer" 
          />
          <p>© {new Date().getFullYear()} Virtual Place. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
