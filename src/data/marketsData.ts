export interface MarketInfo {
  id: string;
  name: string;
  category: 'atacarejo' | 'bairro' | 'feira' | 'comunitario';
  categoryLabel: string;
  address: string;
  city: string;
  distance: string;
  bestDeal: string;
  popularItems: string[];
  badgeColor: string;
}

export const PASSO_FUNDO_MARKETS: MarketInfo[] = [
  {
    id: 'stock-center',
    name: 'Stock Center Passo Fundo',
    category: 'atacarejo',
    categoryLabel: 'Atacarejo & Volume',
    address: 'Av. Brasil Leste, Petrópolis',
    city: 'Passo Fundo - RS',
    distance: '2.4 km',
    bestDeal: 'Melhor preço em fardos de arroz, óleo e laticínios',
    popularItems: ['Arroz 5kg R$ 23,89', 'Leite Integral 1L R$ 4,39', 'Café 500g R$ 16,90'],
    badgeColor: 'border-red-500/40 text-red-400 bg-red-950/30'
  },
  {
    id: 'atacadao',
    name: 'Atacadão Passo Fundo',
    category: 'atacarejo',
    categoryLabel: 'Atacarejo & Volume',
    address: 'RS-153, Saída para Marau',
    city: 'Passo Fundo - RS',
    distance: '4.8 km',
    bestDeal: 'Economia imbatível em produtos de limpeza e carnes embaladas',
    popularItems: ['Sabão em Pó 1.6kg R$ 14,99', 'Feijão Preto 1kg R$ 6,89', 'Detergente R$ 1,89'],
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/30'
  },
  {
    id: 'zaffari',
    name: 'Supermercado Zaffari',
    category: 'atacarejo',
    categoryLabel: 'Rede Regional',
    address: 'R. Bento Gonçalves / Centro',
    city: 'Passo Fundo - RS',
    distance: '1.1 km',
    bestDeal: 'Melhor seleção de hortifrúti fresco e carnes nobres',
    popularItems: ['Banana Prata kg R$ 5,49', 'Coxão Mole kg R$ 38,90', 'Queijo Mussarela R$ 39,90'],
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30'
  },
  {
    id: 'bourbon',
    name: 'Bourbon Hipermercado Passo Fundo',
    category: 'atacarejo',
    categoryLabel: 'Hipermercado',
    address: 'Passo Fundo Shopping, Av. Pres. Vargas',
    city: 'Passo Fundo - RS',
    distance: '3.1 km',
    bestDeal: 'Variedade premium e descontos no clube de fidelidade',
    popularItems: ['Azeite de Oliva 500ml R$ 34,90', 'Pão de Forma R$ 6,49', 'Iogurte 850g R$ 8,90'],
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/30'
  },
  {
    id: 'bairro-sao-cristovao',
    name: 'Mercado São Cristóvão',
    category: 'bairro',
    categoryLabel: 'Mercado de Bairro',
    address: 'Bairro São Cristóvão',
    city: 'Passo Fundo - RS',
    distance: '850 m',
    bestDeal: 'Proximidade, pão quentinho e promoções rápidas da semana',
    popularItems: ['Ovos c/ 30 R$ 18,90', 'Pão Francês kg R$ 13,50', 'Farinha Trigo 1kg R$ 4,19'],
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/30'
  },
  {
    id: 'feira-produtor',
    name: 'Feira do Produtor & Hortifrúti',
    category: 'feira',
    categoryLabel: 'Feiras & Mercados Únicos',
    address: 'Praça Tamandaré / Centro',
    city: 'Passo Fundo - RS',
    distance: '1.5 km',
    bestDeal: 'Legumes e verduras direto do produtor rural sem intermediários',
    popularItems: ['Tomate kg R$ 5,99', 'Alface Crespa R$ 2,50', 'Manga Palmer kg R$ 6,90'],
    badgeColor: 'border-lime-500/40 text-lime-400 bg-lime-950/30'
  }
];

export interface ComparisonItem {
  id: string;
  name: string;
  unit: string;
  stockCenter: number;
  atacadao: number;
  zaffari: number;
  bestMarket: string;
  diffPercentage: number;
}

export const SAMPLE_COMPARISON_ITEMS: ComparisonItem[] = [
  {
    id: '1',
    name: 'Arroz Branco Tipo 1 5kg',
    unit: 'unidade (R$/kg)',
    stockCenter: 23.89,
    atacadao: 24.50,
    zaffari: 27.90,
    bestMarket: 'Stock Center',
    diffPercentage: 16.8
  },
  {
    id: '2',
    name: 'Feijão Preto Caldo Nobre 1kg',
    unit: 'unidade (R$/kg)',
    stockCenter: 7.20,
    atacadao: 6.89,
    zaffari: 8.45,
    bestMarket: 'Atacadão',
    diffPercentage: 22.6
  },
  {
    id: '3',
    name: 'Leite Integral 1L',
    unit: 'litro (R$/L)',
    stockCenter: 4.39,
    atacadao: 4.49,
    zaffari: 5.29,
    bestMarket: 'Stock Center',
    diffPercentage: 20.5
  },
  {
    id: '4',
    name: 'Café Tradicional Torrado 500g',
    unit: 'unidade (R$/kg)',
    stockCenter: 17.50,
    atacadao: 16.90,
    zaffari: 21.90,
    bestMarket: 'Atacadão',
    diffPercentage: 29.5
  },
  {
    id: '5',
    name: 'Óleo de Soja 900ml',
    unit: 'garrafa (R$/L)',
    stockCenter: 6.29,
    atacadao: 6.35,
    zaffari: 7.49,
    bestMarket: 'Stock Center',
    diffPercentage: 19.1
  },
  {
    id: '6',
    name: 'Detergente Líquido 500ml',
    unit: 'frasco',
    stockCenter: 2.19,
    atacadao: 1.89,
    zaffari: 2.79,
    bestMarket: 'Atacadão',
    diffPercentage: 47.6
  }
];

export const APP_URL = 'https://ranchoja.vercel.app/';
