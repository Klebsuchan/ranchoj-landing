import React, { useState } from 'react';
import { Store, Building2, Apple, Users, MapPin, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PASSO_FUNDO_MARKETS, APP_URL, MarketInfo } from '../data/marketsData';

export const CoverageSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'atacarejo' | 'bairro' | 'feira'>('all');

  const filteredMarkets = selectedFilter === 'all'
    ? PASSO_FUNDO_MARKETS
    : PASSO_FUNDO_MARKETS.filter((m) => m.category === selectedFilter);

  const coverageCards = [
    {
      icon: Store,
      title: 'Mercados de Bairro',
      subtitle: 'Mercearias e proximidade',
      description:
        'Mercearias e mercados locais de proximidade. Valorizando o comércio de bairro com ofertas reais e atendimento personalizado.',
      badge: 'Bairro a Bairro',
    },
    {
      icon: Building2,
      title: 'Atacarejos e Grandes Redes',
      subtitle: 'Stock Center, Atacadão, Zaffari, Bourbon',
      description:
        'Compras de volume com preços agressivos: Stock Center, Atacadão, Zaffari, Bourbon e outras redes renomadas da região.',
      badge: 'Preço no Volume',
    },
    {
      icon: Apple,
      title: 'Mercados Únicos e Feiras',
      subtitle: 'Hortifrúti e feiras do produtor',
      description:
        'Estabelecimentos independentes com promoções especiais que você só encontra pesquisando pessoalmente — agora no app.',
      badge: 'Frescor & Direto do Campo',
    },
    {
      icon: Users,
      title: 'Cadastro Comunitário',
      subtitle: 'Colaborativo e sempre atual',
      description:
        'Qualquer usuário ou comerciante pode cadastrar seu mercado e ofertas em segundos, mantendo a base sempre atualizada para todos.',
      badge: 'Rede Colaborativa',
    },
  ];

  return (
    <section id="cobertura" className="py-16 sm:py-24 bg-gradient-to-b from-[#090d16] via-[#0d1424] to-[#090d16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            <Store className="w-3.5 h-3.5" />
            Cobertura Total
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Do mercadinho da esquina ao atacarejo: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
              todos os estabelecimentos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            O RanchoJá valoriza o comércio local e conecta você a todas as opções de compra da região — sem deixar nenhuma oferta de fora.
          </p>
        </div>

        {/* 4 Pillars from Slide 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <span className="text-xs font-medium text-red-400/90 block mb-3">
                    {card.subtitle}
                  </span>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Local Market Directory for Passo Fundo */}
        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Supermercados Conectados em Passo Fundo
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Filtre por tipo de estabelecimento e veja os destaques de preços reais mapeados.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                Todos ({PASSO_FUNDO_MARKETS.length})
              </button>
              <button
                onClick={() => setSelectedFilter('atacarejo')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedFilter === 'atacarejo'
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                Atacarejos & Redes
              </button>
              <button
                onClick={() => setSelectedFilter('bairro')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedFilter === 'bairro'
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                Mercados de Bairro
              </button>
              <button
                onClick={() => setSelectedFilter('feira')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedFilter === 'feira'
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                Feiras & Produtores
              </button>
            </div>
          </div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {filteredMarkets.map((market) => (
              <div
                key={market.id}
                className="bg-slate-900/90 border border-white/5 hover:border-red-500/30 rounded-2xl p-5 space-y-3 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base leading-snug">
                      {market.name}
                    </h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-red-400" /> {market.address}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ~{market.distance}
                  </span>
                </div>

                <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-xl text-xs text-slate-300">
                  <span className="font-semibold text-amber-300 block text-[11px]">Destaque:</span>
                  {market.bestDeal}
                </div>

                <div className="pt-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Preços Mapeados:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {market.popularItems.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono bg-white/5 text-slate-200 px-2 py-0.5 rounded border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community market register CTA */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-red-950/20 p-4 rounded-2xl border border-red-500/20">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              <strong className="text-white block font-bold text-sm">É dono de um mercado ou feirante em Passo Fundo?</strong>
              Cadastre suas ofertas no RanchoJá gratuitamente e atraia milhares de famílias locais buscando economizar.
            </div>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl border border-white/20 flex items-center gap-1.5"
            >
              <span>Cadastrar Estabelecimento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
