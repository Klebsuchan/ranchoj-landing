import React from 'react';
import { Sparkles, Sliders, Split, Smartphone, MapPin, Check, ArrowRight } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      icon: Sliders,
      tag: 'Orçamento Inteligente',
      title: 'Planejamento Guiado',
      description:
        'Defina o teto do orçamento e a composição familiar antes de gastar. O RanchoJá organiza tudo por você com precisão cirúrgica.',
      highlight: 'Controle de teto financeiro',
      gradient: 'from-rose-500/20 to-red-600/10 border-red-500/30 text-red-400',
    },
    {
      icon: Split,
      tag: 'Economia Imediata',
      title: 'Comparação Simultânea',
      description:
        'Veja na hora onde o seu carrinho total sai mais barato — sem precisar visitar vários mercados fisicamente ou conferir encartes.',
      highlight: 'Carrinho total mais barato',
      gradient: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30 text-emerald-400',
    },
    {
      icon: Smartphone,
      tag: 'Sem Ocupar Memória',
      title: '100% Mobile e Leve',
      description:
        'Funciona direto no celular, sem precisar baixar apps pesados da loja. Abra o navegador e comece a economizar em segundos.',
      highlight: 'PWA instantâneo no navegador',
      gradient: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 text-blue-400',
    },
    {
      icon: MapPin,
      tag: 'Comércio Local',
      title: 'Para Passo Fundo e Região',
      description:
        'Focado no comércio local, com ofertas reais dos mercados que você já conhece e frequenta no seu dia a dia na cidade.',
      highlight: 'Stock Center, Atacadão, Zaffari...',
      gradient: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-400',
    },
  ];

  return (
    <section id="solucao" className="py-16 sm:py-24 bg-gradient-to-b from-[#090d16] via-[#0b1120] to-[#090d16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            A Solução
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            RanchoJá: tudo que você precisa, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              em um só lugar
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Uma plataforma completa e ágil que reúne todas as ofertas da cidade e transforma a forma como sua família faz compras. Simples, rápida e gratuita.
          </p>
        </div>

        {/* 4 Solution Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-white/10 hover:border-white/20 rounded-3xl p-7 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${pillar.gradient}`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-white/5 text-sm font-semibold text-emerald-400">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-8 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-xl font-bold text-white">
              Pronto para colocar o dinheiro de volta no seu bolso?
            </h4>
            <p className="text-sm text-slate-300">
              Acesse agora mesmo pelo celular ou computador. Não requer cadastro inicial para pesquisar.
            </p>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/30 whitespace-nowrap hover:scale-105 transition-all text-sm"
          >
            <span>Experimentar Solução Grátis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
