const fs = require('fs');

let pricesContent = fs.readFileSync('src/PricesPage.tsx', 'utf8');

const heroReplacement = `
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight uppercase font-sans tracking-tight max-w-4xl mx-auto mt-8">
          A internet é um lugar virtual. Nossa missão nela, é criar marcas e dar vida a elas, impulsionadas por tecnologia e criatividade humana
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Seja você um <strong>comércio local</strong> que deseja lotar a agenda, uma <strong>empresa</strong> buscando estruturar processos, ou um <strong>infoprodutor</strong> escalando faturamentos: entregamos soluções completas.
        </p>

        {/* Vídeo */}
        <div className="mt-8 max-w-4xl mx-auto mb-12">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shadow-sm">
            <div className="rounded-xl overflow-hidden aspect-video relative bg-white">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SSwGhh99DOc?autoplay=0&rel=0"
                title="Apresentação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
            <PlayCircle className="w-4 h-4 text-green-600" /> Assista ao vídeo de apresentação e qualidade das nossas produções
          </p>
        </div>

        {/* CTA Planos */}
        <div className="mb-20">
          <a 
            href="#planos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-black uppercase text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ver Nossos Planos & Valores <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        
        {/* Category Filter Pills (Now we have an anchor so the CTA can scroll here) */}
        <div id="planos" className="pt-10"></div>
`;

// In pricesContent, replace the hero section
const startPattern = `<div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 font-mono text-[10px] sm:text-xs text-green-600 uppercase tracking-wider">`;
const endPattern = `{/* Category Filter Pills */}`;

const startIndex = pricesContent.indexOf(startPattern);
const endIndex = pricesContent.indexOf(endPattern);

if(startIndex !== -1 && endIndex !== -1) {
    const before = pricesContent.substring(0, startIndex);
    const after = pricesContent.substring(endIndex + endPattern.length);
    let finalContent = before + heroReplacement + after;
    
    // Also, we need to change "PricesPage" to "SalesPage" so it matches the file we are saving to.
    finalContent = finalContent.replace("export default function PricesPage", "export default function SalesPage");
    
    fs.writeFileSync('src/SalesPage.tsx', finalContent);
    console.log("Successfully created SalesPage.tsx from PricesPage.tsx");
} else {
    console.error("Patterns not found!");
}
