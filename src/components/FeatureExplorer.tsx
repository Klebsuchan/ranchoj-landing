import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, BarChart3, Bell, CheckSquare, ShoppingCart, Check, ArrowRight, Zap, Calculator } from 'lucide-react';
import { SAMPLE_COMPARISON_ITEMS, APP_URL } from '../data/marketsData';

export const FeatureExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparador' | 'rancho' | 'nomercado' | 'alertas'>('comparador');

  // Interactive state for "Modo No Mercado" demo
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    '1': true,
    '3': true,
  });

  // Interactive budget for "Rancho em 1 toque" demo
  const [sliderBudget, setSliderBudget] = useState(800);
  const [familyMembers, setFamilyMembers] = useState(3);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checklistDemoItems = [
    { id: '1', name: 'Arroz Branco 5kg (Stock Center)', price: 23.89, category: 'Grãos' },
    { id: '2', name: 'Feijão Preto 1kg (Atacadão)', price: 6.89, category: 'Grãos' },
    { id: '3', name: 'Leite Integral 6x 1L (Stock Center)', price: 26.34, category: 'Laticínios' },
    { id: '4', name: 'Café Tradicional 500g (Atacadão)', price: 16.90, category: 'Matinais' },
    { id: '5', name: 'Detergente Líquido 6x (Atacadão)', price: 11.34, category: 'Limpeza' },
    { id: '6', name: 'Óleo de Soja 2x (Stock Center)', price: 12.58, category: 'Despensa' },
  ];

  const currentCheckedTotal = checklistDemoItems
    .filter((item) => checkedItems[item.id])
    .reduce((sum, item) => sum + item.price, 0);

  const totalPossible = checklistDemoItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="recursos" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            <Layers className="w-3.5 h-3.5" />
            Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Recursos que fazem a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              diferença no dia a dia
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Desenvolvido para simplificar cada etapa da sua compra: do planejamento prévio no sofá até a passagem pelo caixa.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-10 bg-slate-900/90 p-2 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('comparador')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'comparador'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>Comparador Multi-Mercados</span>
          </button>

          <button
            onClick={() => setActiveTab('rancho')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'rancho'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Zap className="w-4 h-4 shrink-0" />
            <span>Rancho em 1 Toque</span>
          </button>

          <button
            onClick={() => setActiveTab('nomercado')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'nomercado'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <CheckSquare className="w-4 h-4 shrink-0" />
            <span>Modo "No Mercado"</span>
          </button>

          <button
            onClick={() => setActiveTab('alertas')}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'alertas'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bell className="w-4 h-4 shrink-0" />
            <span>Alertas Automáticos</span>
          </button>
        </div>

        {/* Feature Interactive View */}
        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* TAB 1: COMPARADOR MULTI-MERCADOS */}
          {activeTab === 'comparador' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-red-500/10 text-red-400 mb-2">
                    Recurso 01 de 04
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Comparador Multi-Mercados
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1">
                    Tabela com menor preço e cálculo automático de custo por medida: <strong>R$/kg, R$/L e R$/unidade</strong>.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs bg-slate-900 border border-slate-700/80 px-3.5 py-2 rounded-xl text-slate-300 font-mono">
                    Cidade: <strong className="text-white">Passo Fundo</strong>
                  </div>
                </div>
              </div>

              {/* Real-time Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse min-w-[620px]">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                      <th className="py-3 px-4 font-semibold">Produto & Medida</th>
                      <th className="py-3 px-4 font-semibold text-center">Stock Center</th>
                      <th className="py-3 px-4 font-semibold text-center">Atacadão PF</th>
                      <th className="py-3 px-4 font-semibold text-center">Zaffari</th>
                      <th className="py-3 px-4 font-semibold text-right">Economia Max.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {SAMPLE_COMPARISON_ITEMS.map((item) => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-100 block">{item.name}</span>
                          <span className="text-[11px] text-slate-400">{item.unit}</span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-lg font-mono text-xs font-bold ${
                              item.bestMarket === 'Stock Center'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'text-slate-300'
                            }`}
                          >
                            R$ {item.stockCenter.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-lg font-mono text-xs font-bold ${
                              item.bestMarket === 'Atacadão'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'text-slate-300'
                            }`}
                          >
                            R$ {item.atacadao.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-block px-2.5 py-1 rounded-lg font-mono text-xs text-rose-300/80">
                            R$ {item.zaffari.toFixed(2)}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-flex items-center gap-1 font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded text-xs">
                            -{item.diffPercentage}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-white/5">
                <span>💡 Os valores são atualizados continuamente para você não perder promoções do dia.</span>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  Ver mais de 500 produtos no app →
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: RANCHO DO MÊS EM 1 TOQUE */}
          {activeTab === 'rancho' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-red-500/10 text-red-400 mb-2">
                    Recurso 02 de 04
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Rancho do Mês em 1 Toque
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1">
                    Algoritmo inteligente que monta a cesta completa do mês calibrada exatamente para o valor que você estipulou.
                  </p>
                </div>
              </div>

              {/* Interactive Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-6 bg-slate-900/80 p-6 rounded-2xl border border-white/10">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Defina seu Teto Orçamentário Mensal:
                    </label>
                    <div className="flex items-center justify-between text-2xl font-black text-white font-mono mb-2">
                      <span className="text-red-400">R$ {sliderBudget}</span>
                      <span className="text-xs text-slate-400 font-sans font-normal">Teto máximo</span>
                    </div>
                    <input
                      type="range"
                      min={400}
                      max={2500}
                      step={50}
                      value={sliderBudget}
                      onChange={(e) => setSliderBudget(Number(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>R$ 400</span>
                      <span>R$ 1.500</span>
                      <span>R$ 2.500+</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-2">
                      Composição da Família:
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((n) => (
                        <button
                          key={n}
                          onClick={() => setFamilyMembers(n)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all ${
                            familyMembers === n
                              ? 'bg-red-600 text-white shadow-md'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-slate-300">
                    ✨ O algoritmo equilibra automaticamente: Arroz, feijão, carnes/proteínas, laticínios, hortifrúti e produtos de limpeza até bater exatamente R$ {sliderBudget}.
                  </div>
                </div>

                {/* Simulated Generated Basket */}
                <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-emerald-400" /> Cesta Otimizada ({familyMembers} pessoas)
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Total: R$ {(sliderBudget * 0.98).toFixed(2)} / R$ {sliderBudget}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Grãos & Básicos:</span>
                      <span className="font-bold text-slate-200">Arroz 5kg (x{familyMembers > 2 ? 3 : 2}), Feijão 1kg (x{familyMembers * 2})</span>
                    </div>
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Carnes & Proteínas:</span>
                      <span className="font-bold text-slate-200">Frango kg, Ovos 30un, Carne Moída 2kg</span>
                    </div>
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Laticínios & Matinais:</span>
                      <span className="font-bold text-slate-200">Leite 1L (x{familyMembers * 4}), Café 500g, Açúcar 2kg</span>
                    </div>
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <span className="text-slate-400 block text-[11px]">Limpeza & Higiene:</span>
                      <span className="font-bold text-slate-200">Sabão Pó, Papel Higiênico, Detergente</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold bg-red-600 hover:bg-red-500 text-white px-4 py-2.5 rounded-xl shadow-md"
                    >
                      <span>Gerar Cesta Completa no RanchoJá</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MODO NO MERCADO */}
          {activeTab === 'nomercado' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-red-500/10 text-red-400 mb-2">
                    Recurso 03 de 04
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Modo "No Mercado"
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1">
                    Checklist interativo na palma da mão para marcar itens no carrinho e controlar o subtotal ao vivo.
                  </p>
                </div>
              </div>

              {/* Interactive checklist sandbox */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 space-y-2.5">
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Toque nos itens para simular a compra no corredor:
                  </span>
                  {checklistDemoItems.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-400'
                            : 'bg-slate-900/80 hover:bg-slate-900 border-white/10 text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                              isChecked
                                ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                                : 'border-slate-500 bg-slate-800'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${isChecked ? 'line-through text-slate-400' : ''}`}>
                              {item.name}
                            </span>
                            <span className="text-[10px] text-slate-500 block">{item.category}</span>
                          </div>
                        </div>
                        <span className="font-mono text-sm font-bold text-white">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="md:col-span-5 bg-slate-900 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Subtotal do Carrinho
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">Ao Vivo</span>
                    </div>

                    <div className="text-4xl font-black text-white font-mono">
                      R$ {currentCheckedTotal.toFixed(2)}
                    </div>

                    <div className="space-y-1.5">
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-red-500 to-emerald-400 h-full transition-all duration-300"
                          style={{ width: `${Math.round((currentCheckedTotal / totalPossible) * 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 font-mono">
                        <span>{Object.values(checkedItems).filter(Boolean).length} de {checklistDemoItems.length} no carrinho</span>
                        <span>Total previsto: R$ {totalPossible.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl text-xs text-slate-300 space-y-1">
                      <p className="font-bold text-white">✨ Zero surpresas no caixa</p>
                      <p className="text-slate-400">
                        Você sabe o valor exato da conta antes de chegar na fila de pagamento.
                      </p>
                    </div>
                  </div>

                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <span>Usar Checklist no Mercado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ALERTAS AUTOMÁTICOS */}
          {activeTab === 'alertas' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-red-500/10 text-red-400 mb-2">
                    Recurso 04 de 04
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Alertas de Ofertas Automáticos
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1">
                    O app notifica você quando os produtos favoritos atingem o preço ideal nos mercados da cidade.
                  </p>
                </div>
              </div>

              {/* Notification Cards Simulation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
                      Baixa de Preço
                    </span>
                    <span className="text-[10px] text-slate-400">Há 25 min</span>
                  </div>
                  <h4 className="font-bold text-white text-base">Arroz Tio João 5kg</h4>
                  <p className="text-xs text-slate-300">
                    Caiu de R$ 28,90 para <strong className="text-emerald-400">R$ 23,89</strong> no Stock Center Passo Fundo!
                  </p>
                  <div className="text-[11px] text-slate-400 font-mono">Meta: R$ 25,00 • Economia: R$ 5,01/un</div>
                </div>

                <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded uppercase">
                      Oferta Relâmpago
                    </span>
                    <span className="text-[10px] text-slate-400">Há 1 hora</span>
                  </div>
                  <h4 className="font-bold text-white text-base">Café Melitta 500g</h4>
                  <p className="text-xs text-slate-300">
                    Atingiu sua meta de <strong className="text-amber-400">R$ 16,90</strong> no Atacadão Passo Fundo.
                  </p>
                  <div className="text-[11px] text-slate-400 font-mono">Meta: R$ 17,50 • Economia: 29%</div>
                </div>

                <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase">
                      Quarta do Hortifrúti
                    </span>
                    <span className="text-[10px] text-slate-400">Hoje</span>
                  </div>
                  <h4 className="font-bold text-white text-base">Feira do Produtor</h4>
                  <p className="text-xs text-slate-300">
                    Tomate Gaúcho por <strong className="text-blue-400">R$ 5,99/kg</strong> na Praça Tamandaré.
                  </p>
                  <div className="text-[11px] text-slate-400 font-mono">Economia vs Mercado: 45%</div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg"
                >
                  <span>Ativar Alertas no RanchoJá</span>
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
