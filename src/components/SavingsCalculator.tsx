import React, { useState } from 'react';
import { Calculator, ArrowRight, PiggyBank, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const SavingsCalculator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(1200);
  const [familyMembers, setFamilyMembers] = useState<number>(3);

  // Calculate savings using real slide metrics (25% to 35% reduction average)
  const savingsRate = familyMembers >= 4 ? 0.32 : familyMembers >= 2 ? 0.28 : 0.25;
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const yearlySavings = monthlySavings * 12;

  // Comparison items this money buys
  const buyEquivalents = [
    yearlySavings >= 4000 ? 'Uma viagem completa de férias em família' : 'IPVA + Seguro do carro quitados',
    `Mais de ${(monthlySavings / 24).toFixed(0)} fardos de arroz de 5kg extras`,
    'Reserva de emergência garantida sem aperto no final do mês',
  ];

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-gradient-to-b from-[#090d16] via-[#0d1424] to-[#090d16] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Economia Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Descubra quanto você pode <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              economizar todo mês
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Faça uma simulação personalizada com base nos hábitos de compra da sua família e nos preços reais de Passo Fundo.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Spend Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200">
                    Quanto sua família gasta em supermercado por mês?
                  </label>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    R$ {monthlySpend.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-slate-400">gasto mensal estimado</span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={3500}
                  step={50}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer h-2.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>R$ 400</span>
                  <span>R$ 1.800</span>
                  <span>R$ 3.500+</span>
                </div>
              </div>

              {/* Family Size */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-200 block">
                  Quantas pessoas moram na sua casa?
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      onClick={() => setFamilyMembers(count)}
                      className={`py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        familyMembers === count
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-400/40'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {count === 5 ? '5+' : count} {count === 1 ? 'Pessoa' : 'Pessoas'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Baseado na dispersão de preços média de 45% apurada em Passo Fundo.</span>
              </div>
            </div>

            {/* Projected Result Box */}
            <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-[#0b1220] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  Sua Economia Estimada
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                    R$ {monthlySavings.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">/ todo mês</span>
                </div>
                <div className="mt-2 text-xs text-slate-300 font-mono flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    R$ {yearlySavings.toLocaleString('pt-BR')} de economia no ano!
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  O que esse dinheiro guardado representa:
                </span>
                {buyEquivalents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
                >
                  <span>Começar a Economizar R$ {monthlySavings} Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="block text-center text-[11px] text-slate-400 mt-2">
                  100% Gratuito • Sem necessidade de cartão de crédito
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
