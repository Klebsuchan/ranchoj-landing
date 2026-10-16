import React from 'react';
import { ChevronRight, ArrowRight, Store, ShoppingBag, Carrot, Sparkles, Building2 } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const ProductsGrid: React.FC = () => {
  const categories = [
    {
      id: 'atacarejos',
      title: 'ATACAREJOS & GRANDES REDES',
      desc: 'Stock Center, Atacadão, Zaffari e Bourbon com preços agressivos de volume.',
      icon: Building2,
      tag: 'Mais Barato no Volume',
      badgeBg: 'from-amber-600 to-amber-700',
      emoji: '🏢',
      priceHighlight: 'Arroz 5kg R$ 23,89',
    },
    {
      id: 'bairro',
      title: 'MERCADOS DE BAIRRO',
      desc: 'Mercearias e lojas locais de proximidade em São Cristóvão e Petrópolis.',
      icon: Store,
      tag: 'Proximidade & Rapidez',
      badgeBg: 'from-red-600 to-red-700',
      emoji: '🏪',
      priceHighlight: 'Ovos 30un R$ 18,90',
    },
    {
      id: 'rancho',
      title: 'RANCHO DO MÊS EM 1 TOQUE',
      desc: 'Cálculo inteligente de cesta básica completo respeitando o seu teto mensal.',
      icon: ShoppingBag,
      tag: 'Algoritmo Exclusivo',
      badgeBg: 'from-emerald-600 to-emerald-700',
      emoji: '🧺',
      priceHighlight: 'Até 35% de economia',
    },
    {
      id: 'feiras',
      title: 'FEIRAS & HORTIFRÚTI',
      desc: 'Feira do Produtor na Tamandaré e feirantes independentes da região.',
      icon: Carrot,
      tag: 'Direto do Produtor',
      badgeBg: 'from-lime-600 to-lime-700',
      emoji: '🥕',
      priceHighlight: 'Tomate kg R$ 5,99',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row matching "Kitchen Essentials / Packed With Care" */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#c81c25] block">
              COBERTURA COMPLETA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight font-serif">
              Itens Essenciais Empacotados <br className="hidden sm:inline" />
              <span className="text-[#688628]">Com Economia</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
              Uma ampla variedade de supermercados, atacarejos e mercearias locais em Passo Fundo para trazer a melhor relação custo-benefício para a despensa da sua casa.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#708c2a] hover:bg-[#5e7722] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>VER TODAS AS OFERTAS</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

        </div>

        {/* 4 Photo/Category Cards matching the 4 rounded cards in image.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col justify-between bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Rounded Graphic Container simulating the product photos */}
                <div className="relative h-44 bg-gradient-to-br from-stone-100 to-stone-200 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/90 text-stone-700 shadow-xs">
                      {cat.tag}
                    </span>
                    <span className="text-2xl">{cat.emoji}</span>
                  </div>

                  <div className="text-center py-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {cat.emoji}
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] font-mono font-bold text-[#c81c25] bg-white/80 px-2.5 py-0.5 rounded-full shadow-xs">
                      {cat.priceHighlight}
                    </span>
                  </div>
                </div>

                {/* Card Title & Desc */}
                <div className="p-5">
                  <h3 className="text-xs sm:text-sm font-black tracking-wider uppercase text-stone-900 group-hover:text-[#c81c25] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Round Olive Green Arrow Button matching the image */}
              <div className="p-5 pt-0 flex justify-start">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#708c2a] hover:bg-[#5e7722] text-white flex items-center justify-center shadow-xs group-hover:translate-x-1 transition-transform"
                  aria-label={`Ver ofertas de ${cat.title}`}
                >
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
