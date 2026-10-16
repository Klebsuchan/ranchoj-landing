import React from 'react';
import { AlertTriangle, TrendingUp, Clock, ShoppingCart, DollarSign } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: 'Inflação nos Alimentos',
      description:
        'O poder de compra das famílias brasileiras encolhe a cada mês. O mesmo carrinho básico custa cada vez mais caro.',
      badge: 'Poder de Compra',
      accent: 'text-red-400 bg-red-500/10 border-red-500/20',
    },
    {
      icon: DollarSign,
      title: 'Dispersão de Preços',
      description:
        'O mesmo produto pode variar mais de 45% entre estabelecimentos da mesma cidade — e ninguém avisa você antes de sair de casa.',
      badge: 'Até +45% de Variação',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Clock,
      title: 'Dilema do Tempo',
      description:
        'Ninguém tem horas livres para ir de mercado em mercado anotando folhetos e tabloides de ofertas impressos que já venceram.',
      badge: 'Perda de Horas',
      accent: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: ShoppingCart,
      title: 'Compras por Impulso',
      description:
        'Listas de papel ineficientes e idas sem planejamento levam a decisões ruins no corredor e a sustos desnecessários no caixa.',
      badge: 'Estouro de Orçamento',
      accent: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
  ];

  return (
    <section id="problema" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            <AlertTriangle className="w-3.5 h-3.5" />
            O Problema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            A inflação está corroendo o <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              orçamento da sua família
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Comprar supermercado virou uma batalha. Os preços sobem, o tempo falta e a sensação é de que o dinheiro some antes de chegar ao caixa.
          </p>
        </div>

        {/* 4 Cards Grid from Slide 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 hover:bg-slate-900 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.accent}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-slate-400 font-medium">
                  <span>Impacto direto na renda familiar</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box connecting Problem to Solution */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-slate-400">
            Você não precisa aceitar pagar mais caro. <span className="text-white font-semibold">Existe uma forma inteligente de contornar tudo isso:</span>
          </p>
        </div>

      </div>
    </section>
  );
};
