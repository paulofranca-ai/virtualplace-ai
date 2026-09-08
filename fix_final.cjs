const fs = require('fs');

let content = fs.readFileSync('temp_SalesPage.txt', 'utf8');

// 1. Fix Youtube URL
content = content.replace(
  'https://www.youtube.com/embed/ZtC7aKaTD5w?autoplay=0&rel=0',
  'https://www.youtube.com/embed/SSwGhh99DOc?autoplay=0&rel=0'
);

// 2. Fix the CTA Button
content = content.replace(
  'href="/precos"',
  'href="#planos"'
);

// 3. Prepare the Plans JSX
const plansJSX = `

        {/* Nossos Planos */}
        <div id="planos" className="pt-4 mb-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            
            {/* 1. Videomaker */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Videomaker 1h + Drone + 1min Editado Final</h3>
                <p className="text-gray-600 text-xs mb-4">Gravação presencial, tomadas aéreas e edição final.</p>
                <div className="text-xl font-black text-gray-900 font-mono mb-4">R$ 150</div>
              </div>
              <a href="https://pay.kiwify.com.br/cG8n7jh" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm">
                Comprar Plano
              </a>
            </div>

            {/* 2. Transmissão ao vivo */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Transmissão ao Vivo</h3>
                <p className="text-gray-600 text-xs mb-4">Estrutura de streaming para seu evento ou podcast.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Transmiss%C3%A3o%20ao%20Vivo." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 3. Stories tempo real */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Stories Tempo Real</h3>
                <p className="text-gray-600 text-xs mb-4">Cobertura dinâmica para suas redes sociais.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Stories%20Tempo%20Real." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 4. Arte divulgação */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Arte Divulgação</h3>
                <p className="text-gray-600 text-xs mb-4">Design profissional e criativos de alta conversão.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Arte%20Divulga%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 5. Assessoria de tráfego */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Assessoria Tráfego</h3>
                <p className="text-gray-600 text-xs mb-4">Estratégias avançadas de anúncios patrocinados.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Assessoria%20de%20Tr%C3%A1fego." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 6. Co produção info */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Coprodução Info</h3>
                <p className="text-gray-600 text-xs mb-4">Lançamentos de infoprodutos com foco em performance.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Coprodu%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Consultar Whats
              </a>
            </div>

            {/* 7. Cérebro Jarvis */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Cérebro Jarvis IA</h3>
                <p className="text-gray-600 text-xs mb-4">Esquadrão com 30+ agentes autônomos. Acesso vitalício.</p>
                <div className="text-xl font-black text-gray-900 font-mono mb-4">R$ 197</div>
              </div>
              <a href="https://pay.kiwify.com.br/KmwA0O0" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm mt-4">
                Comprar Acesso
              </a>
            </div>

          </div>
        </div>
`;

// Insert the plansJSX right after the CTA section
const ctaPattern = `Ver Nossos Planos & Valores <ChevronRight className="w-5 h-5" />
          </a>
        </div>`;

const insertIndex = content.indexOf(ctaPattern) + ctaPattern.length;

let finalContent = content.substring(0, insertIndex) + plansJSX + content.substring(insertIndex);

// Save to src/SalesPage.tsx
fs.writeFileSync('src/SalesPage.tsx', finalContent);
console.log("Done");
