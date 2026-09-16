import { Video, Radio, Smartphone, Palette, Target, Rocket, Cpu } from 'lucide-react';
import { ServiceItem } from '../components/ServiceCard';

export const SERVICES: ServiceItem[] = [
  {
    id: 'videomaker',
    title: 'Gravação: Stories + Brutos + 1 min Aftermovie Cinemático',
    subtitle: 'Por Hora de Gravação',
    description: 'Captação presencial completa por hora: inclui postagem de stories no local em tempo real, entrega de todos os arquivos brutos e 1 minuto de aftermovie cinemático editado e colorizado para cada hora gravada.',
    link: 'https://pay.kiwify.com.br/cG8n7jh',
    linkText: 'Contratar Gravação',
    category: 'Audiovisual Completo',
    accentColor: 'text-blue-600',
    bgGradient: 'bg-gradient-to-br from-blue-100/70 via-indigo-50 to-blue-200/50',
    icon: Video,
    badge: 'Mais Popular',
    initialLikes: 218,
    features: [
      'Stories gravados e postados na hora',
      'Todos os arquivos brutos entregues',
      '1 min de Aftermovie Cinemático por hora de gravação'
    ]
  },
  {
    id: 'live-stream',
    title: 'Transmissão ao Vivo (Live)',
    subtitle: 'Serviço Separado',
    description: 'Transmissão ao vivo profissional para TikTok, Instagram, YouTube e/ou Twitch. Estrutura completa de streaming para eventos, podcasts, sets e lançamentos. Serviço contratado separadamente.',
    link: 'https://pay.kiwify.com.br/elj3ZQY',
    linkText: 'Contratar Transmissão',
    category: 'Live Streaming Separado',
    accentColor: 'text-rose-600',
    bgGradient: 'bg-gradient-to-br from-rose-100/70 via-pink-50 to-rose-200/50',
    icon: Radio,
    badge: 'Ao Vivo Separado',
    initialLikes: 124,
    features: [
      'Live separada sob demanda por hora',
      'Transmissão TikTok, YouTube, Instagram e/ou Twitch',
      'Mixer de áudio, multicâmera e gravação inclusa'
    ]
  },
  {
    id: 'arte-divulgacao',
    title: 'Arte de Divulgação de Alta Conversão',
    subtitle: 'Design Gráfico Estratégico',
    description: 'Design profissional focado em conversão de anúncios, banners para feed/stories, outdoors e criativos com psicologia de consumo.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20a%20Arte%20de%20Divulga%C3%A7%C3%A3o.',
    linkText: 'Solicitar Arte de Divulgação',
    category: 'Design & Criativos',
    accentColor: 'text-amber-600',
    bgGradient: 'bg-gradient-to-br from-amber-100/70 via-orange-50 to-amber-200/50',
    icon: Palette,
    initialLikes: 87,
    features: [
      'Formato 1:1, 4:5 e 9:16 adaptados',
      'Copy persuasiva e visual impactante',
      'Entrega em formatos PNG e PDF'
    ]
  },
  {
    id: 'assessoria-trafego',
    title: 'Assessoria de Tráfego Pago',
    subtitle: 'Escala em Meta & Google Ads',
    description: 'Estratégias avançadas de anúncios patrocinados para atrair clientes prontos para comprar, com otimização diária de ROI e ROAS.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Assessoria%20de%20Tr%C3%A1fego.',
    linkText: 'Consultar no WhatsApp',
    category: 'Tráfego Pago & Performance',
    accentColor: 'text-emerald-600',
    bgGradient: 'bg-gradient-to-br from-emerald-100/70 via-teal-50 to-emerald-200/50',
    icon: Target,
    badge: 'Alta Performance',
    initialLikes: 246,
    features: [
      'Campanhas Meta Ads, Google Ads e TikTok',
      'Públicos personalizados e Lookalike',
      'Relatórios transparentes de conversão'
    ]
  },
  {
    id: 'coproducao-info',
    title: 'Coprodução de Infoprodutos',
    subtitle: 'Parceria de Escala',
    description: 'Lançamentos de infoprodutos com foco em performance total: tráfego, página de vendas, automação de checkout e esteira de produtos.',
    link: 'https://wa.me/5549991052315?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20Coprodu%C3%A7%C3%A3o.',
    linkText: 'Consultar no WhatsApp',
    category: 'Infoprodutos & Lançamentos',
    accentColor: 'text-indigo-600',
    bgGradient: 'bg-gradient-to-br from-indigo-100/70 via-blue-50 to-indigo-200/50',
    icon: Rocket,
    initialLikes: 173,
    features: [
      'Estratégia de lançamento semente e perpétuo',
      'Gestão de tráfego e copy de alta conversão',
      'Estrutura de membros e automações'
    ]
  },
  {
    id: 'jarvis-ia',
    title: 'Cérebro Jarvis IA',
    subtitle: 'Inteligência Artificial Autônoma',
    description: 'Esquadrão inteligente com 30+ agentes autônomos treinados para marketing, vendas, atendimento ao cliente 24/7 e operações. Acesso vitalício.',
    link: 'https://pay.kiwify.com.br/2yfNvHR',
    linkText: 'Acessar via Kiwify',
    category: 'IA & Automação 24/7',
    accentColor: 'text-violet-600',
    bgGradient: 'bg-gradient-to-br from-violet-100/70 via-purple-50 to-violet-200/50',
    icon: Cpu,
    badge: 'Inovação IA',
    initialLikes: 389,
    features: [
      '30+ agentes de IA prontos para uso',
      'Atendimento e qualificação instantânea',
      'Acesso vitalício sem mensalidade'
    ]
  }
];
