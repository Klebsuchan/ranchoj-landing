import React from 'react';
import { Smartphone, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Smartphone,
      title: 'Abra no Navegador',
      description: 'Sem downloads pesados. Acesse ranchoja.vercel.app direto pelo Chrome, Safari ou qualquer navegador do seu celular ou PC.',
      badge: 'Leva 5 segundos',
    },
    {
      step: '02',
      icon: Sliders,
      title: 'Monte seu Rancho ou Orçamento',
      description: 'Defina quanto quer gastar no mês ou adicione os produtos da sua lista. O sistema compara simultaneamente todos os mercados de Passo Fundo.',
      badge: 'Cálculo Automático',
    },
    {
      step: '03',
      icon: CheckCircle2,
      title: 'Compre no Lugar Certo',
      description: 'Vá ao supermercado com a rota otimizada, use o checklist do modo "No Mercado" para marcar as compras e não estoure seu orçamento.',
      badge: 'Até 35% de Economia',
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            Passo a Passo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Como o RanchoJá funciona <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              na sua rotina real
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Economizar não precisa ser complicado. Criamos a experiência mais rápida e direta para o seu celular.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-red-500/30 rounded-3xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-red-500/60 group-hover:text-red-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/30 hover:scale-105 transition-all"
          >
            <span>Experimentar o RanchoJá no seu celular</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
