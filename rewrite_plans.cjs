const fs = require('fs');

let content = fs.readFileSync('src/SalesPage.tsx', 'utf8');

// The goal is to replace everything from "const services: ServiceItem[] = [" up to right before "return (" with just the faqs.
// Also remove the "activeCategory" state, but keep "openFaq" state.
// Also we'll replace the JSX where the plans are rendered.

const newImports = `import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Video, 
  Sparkles, 
  Check, 
  Camera, 
  ChevronDown, 
  Zap, 
  Palette,
  Scissors,
  Clapperboard,
  Mic,
  Type,
  TrendingUp,
  Terminal,
  Layers,
  Phone,
  MessageSquare,
  Users,
  Database,
  GraduationCap,
  PlayCircle, 
  ChevronRight,
  ExternalLink,
  Award,
  Star
} from 'lucide-react';
import NeonBackground3D from './components/NeonBackground3D';

export default function SalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a Assessoria de Tráfego?',
      answer: 'Iniciamos com um alinhamento direto pelo WhatsApp ou chamada de vídeo. Diagnosticamos as rotinas da sua empresa e definimos as melhores estratégias.'
    },
    {
      question: 'Como solicito um orçamento para Produção de Vídeos e Artes?',
      answer: 'Basta clicar no botão de WhatsApp do serviço desejado e nos contar o que precisa. Enviamos uma proposta personalizada em poucos minutos.'
    },
    {
      question: 'Quem é o responsável pela gestão de Marketing e Lançamentos?',
      answer: 'Nossa equipe é liderada por Coprodutor 6 em 7, com mais de 23 lançamentos executados no mercado digital.'
    },
    {
      question: 'Qual é o valor do Cérebro de IA (Squad Jarvis 30+ Agentes)?',
      answer: 'O Cérebro de IA possui valor fixo transparente: R$ 197,00 em pagamento único para acesso vitalício via Kiwify.'
    }
  ];
`;

// Now let's replace the top part of the file up to `return (`
const returnIndex = content.indexOf('return (');
if(returnIndex === -1) {
    console.error("Could not find 'return ('");
    process.exit(1);
}

let afterReturn = content.substring(returnIndex);

// We want to replace everything from the first '<div id="planos"' to the end of the plans grid.
// Wait, the page structure is:
// <div id="planos" className="pt-10"></div>
// <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3"> ... (category filter pills)
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left"> ... (services map)
// Then there is the "PACOTES AUDIOVISUAIS PROMOCIONAIS" block (which now has 'OFERTAS EXCLUSIVAS DE AUDIOVISUAL & DESIGN')
// Then there is the JARVIS block (Agentes Autônomos)
// Then there is FAQ, and FOOTER.
// We should replace everything from '<div id="planos"' up to the FAQ section start.

const planosIndex = afterReturn.indexOf('<div id="planos"');
const faqIndex = afterReturn.indexOf('{/* 7. PERGUNTAS FREQUENTES */}');

if (planosIndex === -1 || faqIndex === -1) {
    console.error("Could not find sections to replace");
    process.exit(1);
}

const newPlansJSX = `
        {/* Nossos Planos & Serviços */}
        <div id="planos" className="pt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* 1. Videomaker */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Videomaker 1h + Drone + 1min Editado Final</h3>
                <p className="text-gray-600 text-sm mb-4">Pacote audiovisual completo com gravação profissional, tomadas aéreas e edição de alto impacto.</p>
                <div className="text-2xl font-black text-gray-900 font-mono mb-4">R$ 150</div>
              </div>
              <a href="https://pay.kiwify.com.br/cG8n7jh" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Comprar Plano
              </a>
            </div>

            {/* 2. Transmissão ao vivo */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Transmissão ao Vivo</h3>
                <p className="text-gray-600 text-sm mb-4">Estrutura completa de streaming para o seu evento, podcast ou lançamento.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Transmiss%C3%A3o%20ao%20Vivo." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Consultar no WhatsApp
              </a>
            </div>

            {/* 3. Stories tempo real */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Stories Tempo Real</h3>
                <p className="text-gray-600 text-sm mb-4">Cobertura dinâmica e imediata para suas redes sociais durante eventos e ações.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Stories%20Tempo%20Real." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Consultar no WhatsApp
              </a>
            </div>

            {/* 4. Arte divulgação */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Arte Divulgação</h3>
                <p className="text-gray-600 text-sm mb-4">Design profissional e criativos de alta conversão para suas campanhas e posts.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Arte%20Divulga%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Consultar no WhatsApp
              </a>
            </div>

            {/* 5. Assessoria de tráfego */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Assessoria de Tráfego</h3>
                <p className="text-gray-600 text-sm mb-4">Estratégias avançadas de tráfego pago (Meta/Google Ads) para escalar seus resultados.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Assessoria%20de%20Tr%C3%A1fego." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Consultar no WhatsApp
              </a>
            </div>

            {/* 6. Co produção info */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Coprodução Info</h3>
                <p className="text-gray-600 text-sm mb-4">Lançamentos de infoprodutos e perpetuos com foco em performance e escala.</p>
              </div>
              <a href="https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Coprodu%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Consultar no WhatsApp
              </a>
            </div>

            {/* 7. Cérebro Jarvis */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Cérebro IA Jarvis</h3>
                <p className="text-gray-600 text-sm mb-4">Esquadrão com mais de 30 agentes autônomos para automatizar seu negócio. Acesso vitalício.</p>
                <div className="text-2xl font-black text-gray-900 font-mono mb-4">R$ 197</div>
              </div>
              <a href="https://pay.kiwify.com.br/KmwA0O0" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Comprar Acesso
              </a>
            </div>

            {/* 8. Curso projeto Stark */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center mb-5 text-gray-900">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Curso Projeto Stark</h3>
                <p className="text-gray-600 text-sm mb-4">Aprenda as mesmas estratégias que usamos para dominar o tráfego pago e escalar.</p>
                <div className="text-2xl font-black text-gray-900 font-mono mb-4">R$ 20</div>
              </div>
              <a href="https://projeto-stark.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-4">
                Acessar Curso
              </a>
            </div>

          </div>
        </div>

        `;

const finalFileContent = newImports + "\n" + afterReturn.substring(0, planosIndex) + newPlansJSX + afterReturn.substring(faqIndex);

fs.writeFileSync('src/SalesPage.tsx', finalFileContent);
console.log("Rewrite complete.");

