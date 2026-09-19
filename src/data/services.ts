import { Video, Palette, Target, Rocket, Cpu, Camera } from 'lucide-react';
import { ServiceItem } from '../components/ServiceCard';

export const SERVICES: ServiceItem[] = [
  {
    id: 'fotografia-eventos',
    title: 'Fotografia em Volume',
    subtitle: 'Milhares de Fotos por Evento',
    description: 'Fotografia em volume com milhares de fotos por evento em altíssima resolução. Cobertura completa para Comercial, Institucional e Eventos em geral (convenções, feiras, eventos corporativos, atos públicos, formaturas e festas). Equipamento profissional de ponta e galeria digital para entrega imediata.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Fotografia%20em%20Volume%20%28Milhares%20de%20Fotos%20por%20Evento%20-%20Comercial%2C%20Institucional%20e%20Eventos%29.',
    linkText: 'Solicitar Fotografia em Volume',
    category: 'Fotografia & Eventos',
    accentColor: 'text-amber-600',
    bgGradient: 'bg-gradient-to-br from-amber-100/70 via-yellow-50 to-orange-100/50',
    icon: Camera,
    badge: 'Milhares de Fotos por Evento',
    initialLikes: 342,
    features: [
      'Milhares de fotos registradas por evento',
      'Comercial, Institucional e Eventos em geral',
      'Equipamentos profissionais e tratamento de cor refinado',
      'Galeria privativa online para download imediato em alta resolução'
    ]
  },
  {
    id: 'videomaker',
    title: '4K + Post em Alta Qualidade',
    subtitle: 'Stories na Hora + Brutos + Aftermovie 4K',
    description: 'Captação presencial completa em 4K + post em alta qualidade no local: inclui postagem de stories em tempo real, entrega de 100% dos arquivos brutos sem compressão e Aftermovie Cinemático masterizado em 4K HDR com edição e color grading de cinema.',
    link: 'https://pay.kiwify.com.br/cG8n7jh',
    linkText: 'Contratar Produção 4K',
    category: 'Audiovisual Completo 4K',
    accentColor: 'text-blue-600',
    bgGradient: 'bg-gradient-to-br from-blue-100/70 via-indigo-50 to-blue-200/50',
    icon: Video,
    badge: '4K + Post em Alta Qualidade',
    initialLikes: 298,
    features: [
      'Captação 4K 60fps com post em alta qualidade no local',
      'Stories gravados e publicados na hora durante o evento',
      '100% dos arquivos brutos entregues para seu acervo',
      'Aftermovie Cinemático 4K masterizado com color grading profissional'
    ]
  },
  {
    id: 'arte-divulgacao',
    title: 'Artes Gráficas: R$ 100',
    subtitle: 'Design de Alta Conversão por Arte',
    description: 'Artes e criativos profissionais de alta conversão para Instagram (feed, stories, carrosséis), anúncios de tráfego pago, lançamentos e banners promocionais por apenas R$ 100 cada. Design estratégico com psicologia de consumo.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20Artes%20Gr%C3%A1ficas%20%28R%24%20100%20cada%29.',
    linkText: 'Solicitar Arte (R$ 100)',
    category: 'Design & Criativos',
    accentColor: 'text-amber-600',
    bgGradient: 'bg-gradient-to-br from-amber-100/70 via-orange-50 to-amber-200/50',
    icon: Palette,
    badge: 'R$ 100 por Arte',
    initialLikes: 148,
    features: [
      'Apenas R$ 100 por arte / criativo',
      'Formatos 1:1, 4:5 e 9:16 adaptados para redes',
      'Copy persuasiva e visual focado em cliques e vendas',
      'Entrega em alta resolução PNG e PDF vetorial'
    ]
  },
  {
    id: 'assessoria-trafego',
    title: 'Assessoria de Tráfego Pago: R$ 1.500',
    subtitle: 'Redes Limitadas Apenas Pela Verba',
    description: 'Gestão de tráfego pago com ROI de 7,3x comprovado em mais de 100k de vendas de cursos com alta lucratividade, margem e escala. Campanhas em Meta Ads (Instagram/Facebook), Google Ads e TikTok Ads — redes sociais limitadas apenas pela verba do cliente.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20a%20Assessoria%20de%20Tr%C3%A1fego%20Pago%20de%20R%24%201.500%20%28ROI%207%2C3x%20comprovado%29.',
    linkText: 'Contratar Tráfego (R$ 1.500)',
    category: 'Tráfego Pago & Performance',
    accentColor: 'text-emerald-600',
    bgGradient: 'bg-gradient-to-br from-emerald-100/70 via-teal-50 to-emerald-200/50',
    icon: Target,
    badge: 'ROI 7,3x Comprovado • R$ 1.500',
    initialLikes: 412,
    features: [
      'Valor fixo de gestão: R$ 1.500 / mês',
      'Redes sociais limitadas apenas pela verba do cliente',
      'ROI 7,3x comprovado em 100k de vendas com alta lucratividade',
      'Otimização diária de CPA, ROAS e relatórios transparentes'
    ]
  },
  {
    id: 'jarvis-ia',
    title: 'Squads de IA: Troque Funcionários por Robôs',
    subtitle: 'Posts, Vídeos, Artes e Tráfego com IA',
    description: 'Troque funcionários por robôs: faça posts, vídeos, artes, estratégias de marketing e análises de anúncios patrocinados usando inteligência artificial 24 horas por dia, 7 dias por semana com máxima produtividade e sem encargos.',
    link: 'https://pay.kiwify.com.br/2yfNvHR',
    linkText: 'Acessar Squads de IA',
    category: 'IA & Automação 24/7',
    accentColor: 'text-violet-600',
    bgGradient: 'bg-gradient-to-br from-violet-100/70 via-purple-50 to-violet-200/50',
    icon: Cpu,
    badge: 'Troque Funcionários por Robôs',
    initialLikes: 489,
    features: [
      'Troque funcionários por robôs autônomos 24/7',
      'Geração de posts, vídeos, artes e estratégias completas de marketing',
      'Análise preditiva de anúncios patrocinados via IA',
      'Atendimento e fechamento de vendas no WhatsApp instantâneo'
    ]
  },
  {
    id: 'coproducao-info',
    title: 'Coprodução de Infoprodutos & Lançamentos',
    subtitle: 'Parceria de Escala e Alta Margem',
    description: 'Lançamentos de infoprodutos e cursos com foco em performance total e alta lucratividade: estratégia validada, tráfego com ROI 7,3x, páginas de alta conversão e esteira de produtos escalável.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20Coprodu%C3%A7%C3%A3o%20de%20Infoprodutos.',
    linkText: 'Consultar no WhatsApp',
    category: 'Infoprodutos & Lançamentos',
    accentColor: 'text-indigo-600',
    bgGradient: 'bg-gradient-to-br from-indigo-100/70 via-blue-50 to-indigo-200/50',
    icon: Rocket,
    initialLikes: 215,
    features: [
      'Estratégia de lançamento validada em +23 cases',
      'Gestão de tráfego com alta margem e escala',
      'Estrutura completa de checkout e esteira de vendas'
    ]
  }
];
