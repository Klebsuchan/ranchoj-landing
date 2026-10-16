import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, DollarSign, Clock, ShoppingCart, Check, Calculator, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { SAMPLE_COMPARISON_ITEMS, APP_URL } from '../data/marketsData';

export const InteractiveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparador' | 'calculadora'>('comparador');
  const [monthlySpend, setMonthlySpend] = useState(1200);
  const [familyMembers, setFamilyMembers] = useState(3);

  const monthlySavings = Math.round(monthlySpend * (familyMembers >= 4 ? 0.32 : 0.28));
  const yearlySavings = monthlySavings * 12;

  const problems = [
    {
      icon: TrendingUp,
      title: 'Inflação nos Alimentos',
      desc: 'O poder de compra encolhe todo mês. O mesmo carrinho custa cada vez mais caro.',
      tag: 'Poder de Compra',
    },
    {
      icon: DollarSign,
      title: 'Dispersão de Preços (45%)',
      desc: 'O mesmo produto varia até 45% entre estabelecimentos da mesma cidade sem você saber.',
      tag: 'Variação Real',
    },
    {
      icon: Clock,
      title: 'Dilema do Tempo',
      desc: 'Ninguém tem horas livres para ir de mercado em mercado anotando folhetos e tabloides.',
      tag: 'Tempo Perdido',
    },
    {
      icon: ShoppingCart,
      title: 'Compras por Impulso',
      desc: 'Listas de papel levam a decisões ruins nos corredores e a gastos desnecessários no caixa.',
      tag: 'Estouro de Gastos',
    },
  ];

  return (
    <section id="problema" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Problem vs Solution */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#c81c25] block mb-2">
            O PROBLEMA & A SOLUÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight font-serif">
            A Inflação Corrói o Orçamento. <br />
            O <span className="text-[#688628]">RanchoJá</span> Devolve Seu Dinheiro.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Uma plataforma completa e ágil que reúne todas as ofertas da cidade e transforma a forma como sua família faz compras. Simples, rápida e 100% gratuita.
          </p>
        </div>

        {/* 4 Problem Cards from Slide 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-[#c81c25] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-600 uppercase bg-white px-2 py-0.5 rounded border border-stone-200">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 mb-1.5">{p.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Comparison & Calculator Sandbox */}
        <div id="calculadora" className="bg-[#fbf9f5] border border-stone-300 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#688628]">
                FERRAMENTA INTERATIVA
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
                Experimente a Economia na Prática
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('comparador')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'comparador'
                    ? 'bg-[#c81c25] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Comparar Preços
              </button>
              <button
                onClick={() => setActiveTab('calculadora')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'calculadora'
                    ? 'bg-[#c81c25] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Calcular Economia
              </button>
            </div>
          </div>

          {/* Tab 1: Live Comparison Table */}
          {activeTab === 'comparador' && (
            <div className="pt-6 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px]">
                  <thead>
                    <tr className="border-b border-stone-300 text-stone-500 text-[11px] uppercase tracking-wider">
                      <th className="py-2.5 px-3 font-bold">Produto & Medida</th>
                      <th className="py-2.5 px-3 font-bold text-center">Stock Center</th>
                      <th className="py-2.5 px-3 font-bold text-center">Atacadão</th>
                      <th className="py-2.5 px-3 font-bold text-center">Zaffari</th>
                      <th className="py-2.5 px-3 font-bold text-right">Menor Preço</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {SAMPLE_COMPARISON_ITEMS.map((item) => (
                      <tr key={item.id} className="hover:bg-white/80 transition-colors">
                        <td className="py-3 px-3">
                          <span className="font-bold text-stone-900 block">{item.name}</span>
                          <span className="text-[10px] text-stone-500">{item.unit}</span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded font-mono text-xs font-bold ${
                              item.bestMarket === 'Stock Center'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'text-stone-700'
                            }`}
                          >
                            R$ {item.stockCenter.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded font-mono text-xs font-bold ${
                              item.bestMarket === 'Atacadão'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'text-stone-700'
                            }`}
                          >
                            R$ {item.atacadao.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="text-stone-500 font-mono text-xs">
                            R$ {item.zaffari.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <span className="font-bold font-mono text-[#c81c25] bg-red-50 border border-red-200 px-2 py-0.5 rounded text-xs">
                            {item.bestMarket} (-{item.diffPercentage}%)
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-stone-500">
                <span>💡 Preços monitorados em Passo Fundo com atualização frequente.</span>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#c81c25] hover:underline"
                >
                  Abrir tabela completa no app →
                </a>
              </div>
            </div>
          )}

          {/* Tab 2: Savings Calculator */}
          {activeTab === 'calculadora' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
                    Quanto sua família gasta em mercado por mês?
                  </label>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-3xl font-black text-stone-900 font-mono">
                      R$ {monthlySpend.toLocaleString('pt-BR')}
                    </span>
                    <span className="text-xs text-stone-500">gasto mensal</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={3000}
                    step={50}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full accent-[#c81c25] cursor-pointer h-2 bg-stone-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                    <span>R$ 500</span>
                    <span>R$ 1.750</span>
                    <span>R$ 3.000</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
                    Composição da Família:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((n) => (
                      <button
                        key={n}
                        onClick={() => setFamilyMembers(n)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all ${
                          familyMembers === n
                            ? 'bg-[#c81c25] text-white shadow-sm'
                            : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                        }`}
                      >
                        {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 text-center space-y-4 shadow-sm">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#688628] block">
                  Economia Estimada no Bolso
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#c81c25] font-mono">
                  R$ {monthlySavings.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-stone-600">
                  São mais de <strong className="text-stone-900 font-mono">R$ {yearlySavings.toLocaleString('pt-BR')}</strong> economizados ao longo do ano para sua família investir no que realmente importa!
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#708c2a] hover:bg-[#5e7722] text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Começar a Economizar no RanchoJá</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
