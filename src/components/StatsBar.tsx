import React from 'react';
import { Award, Package, Store, Users, Globe, Percent, PiggyBank, Sparkles } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Percent,
      number: '35%+',
      label: 'Redução no Custo do Mês',
    },
    {
      icon: Package,
      number: '500+',
      label: 'Produtos com Menor Preço',
    },
    {
      icon: Store,
      number: '10+',
      label: 'Mercados & Feiras Mapeados',
    },
    {
      icon: PiggyBank,
      number: 'R$ 300+',
      label: 'Economia Média por Família',
    },
    {
      icon: Sparkles,
      number: '100%',
      label: 'Gratuito & Direto no Celular',
    },
  ];

  return (
    <section className="bg-[#c81c25] text-white py-8 sm:py-10 border-y border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-red-400/40">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-3.5 px-3 py-3 md:py-0 text-center md:text-left"
              >
                <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-mono tracking-tight leading-none text-white">
                    {st.number}
                  </div>
                  <div className="text-[11px] sm:text-xs text-red-100 font-medium leading-tight mt-1">
                    {st.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
