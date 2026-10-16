import React from 'react';
import { Scale, Zap, ShieldCheck, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      title: 'Cálculo Real por Medida',
      subtitle: 'R$/kg, R$/L e R$/unidade',
      desc: 'Comparamos o custo real da embalagem. Nunca mais pague mais caro por reduções disfarçadas de peso.',
    },
    {
      icon: Zap,
      title: 'Rancho do Mês em 1 Toque',
      subtitle: 'Algoritmo Inteligente',
      desc: 'Você define o seu orçamento mensal e o sistema calibra a cesta completa sem você precisar fazer contas.',
    },
    {
      icon: ShieldCheck,
      title: 'Modo "No Mercado" ao Vivo',
      subtitle: 'Controle de Subtotal',
      desc: 'Checklist no celular para marcar o que vai ao carrinho. Zero surpresas e sem passar vergonha no caixa.',
    },
    {
      icon: Users,
      title: 'Confiado por Famílias',
      subtitle: 'Passo Fundo e Região',
      desc: 'Mapeamento real do comércio local que você frequenta: Stock Center, Atacadão, Zaffari e feiras.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fafaf8] relative overflow-hidden border-b border-stone-200">
      
      {/* Decorative leaf on right edge matching image.png */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 opacity-40 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="#688628" className="w-full h-full drop-shadow-md">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.52-11 4.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "WHY CHOOSE ASHVIJA? / Quality You Can Trust, Taste You'll Love." */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#688628] block mb-2">
            POR QUE ESCOLHER O RANCHOJÁ?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight font-serif">
            Qualidade Que Você Confia, <br />
            Economia que <span className="text-[#c81c25]">Você Ama.</span>
          </h2>
        </div>

        {/* 4 Feature Columns with Outline Icons matching the layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Red Outline Icon inside soft container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-red-200 shadow-sm flex items-center justify-center text-[#c81c25] mb-5 group-hover:scale-110 group-hover:border-[#c81c25] transition-all duration-300">
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </div>

                <h3 className="text-sm font-black uppercase tracking-wider text-stone-900 mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold text-[#688628] uppercase tracking-wider block mb-2">
                  {item.subtitle}
                </span>

                <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
