import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, TrendingDown, Store, Smartphone, ShieldCheck, Zap, ExternalLink, MapPin } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparador' | 'nomercado'>('comparador');

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background radial gradient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[900px] sm:h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Corporate Call To Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Pill Header Tag */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-red-500/15 text-red-400 border border-red-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Web App Mobile-First
              </span>
              <span className="text-xs text-slate-500 font-semibold">•</span>
              <span className="text-xs text-slate-300 font-medium">Comparador em Tempo Real</span>
              <span className="text-xs text-slate-500 font-semibold">•</span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" /> Passo Fundo e Região
              </span>
            </div>

            {/* Main Corporate Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Economia real e <br className="hidden sm:inline" />
              compras do mês <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                sem estourar o orçamento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O comparador inteligente de supermercados que cabe no bolso de qualquer família brasileira. Compare preços simultaneamente em Passo Fundo, monte sua cesta ideal e economize até <strong className="text-emerald-400 font-bold">35% em cada compra</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-red-400/40"
              >
                <span>Acessar RanchoJá Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculadora"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base px-6 py-4 rounded-2xl border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <span>Simular Minha Economia</span>
              </a>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Grátis & Sem Download</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <Store className="w-4 h-4 text-red-400 shrink-0" />
                <span>Atacarejos e Feiras Locais</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Economia média de R$ 300 / mês</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mobile Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative backdrop glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-red-500/30 via-rose-500/20 to-emerald-500/20 rounded-[40px] blur-xl opacity-75" />

              {/* Smartphone Frame */}
              <div className="relative bg-[#0d1424] border-[3px] border-slate-700/70 rounded-[36px] shadow-2xl p-4 overflow-hidden">
                
                {/* Top Notch & Status */}
                <div className="flex justify-between items-center px-4 pt-1 pb-3 border-b border-white/5">
                  <span className="text-[11px] font-semibold text-slate-400">9:41</span>
                  <div className="w-20 h-4 bg-slate-900 rounded-full border border-slate-800" />
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="text-[10px] font-mono">5G</span>
                    <div className="w-4 h-2 rounded-sm border border-slate-400 flex items-center p-0.5">
                      <div className="w-full h-full bg-emerald-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Header inside Mockup */}
                <div className="py-3 px-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-black">
                      R
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        RanchoJá Passo Fundo
                      </div>
                      <div className="text-[10px] text-emerald-400 font-medium">● 4 Mercados conectados</div>
                    </div>
                  </div>

                  {/* Switch mockup view */}
                  <div className="flex bg-slate-900 p-0.5 rounded-lg border border-white/10 text-[10px]">
                    <button
                      onClick={() => setActiveTab('comparador')}
                      className={`px-2 py-1 rounded font-semibold transition-all ${
                        activeTab === 'comparador' ? 'bg-red-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      Comparar
                    </button>
                    <button
                      onClick={() => setActiveTab('nomercado')}
                      className={`px-2 py-1 rounded font-semibold transition-all ${
                        activeTab === 'nomercado' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      No Mercado
                    </button>
                  </div>
                </div>

                {/* Content View 1: Real-time Price Comparison */}
                {activeTab === 'comparador' && (
                  <div className="space-y-3 py-1">
                    {/* Live Saving Highlight Badge */}
                    <div className="bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Economia neste carrinho:</span>
                        <span className="text-lg font-black text-emerald-400">R$ 68,40 economizados</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-1 rounded-full border border-emerald-500/40">
                        -32% OFF
                      </span>
                    </div>

                    {/* Product Comparison Cards */}
                    <div className="space-y-2 text-xs">
                      {/* Item 1 */}
                      <div className="bg-slate-900/90 rounded-xl p-2.5 border border-white/5 space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-bold text-slate-100">Arroz Tio João Tipo 1 (5kg)</span>
                            <span className="block text-[10px] text-slate-400">Preço por kg: R$ 4,77/kg</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Melhor no Stock
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 pt-1 text-[11px] font-mono text-center">
                          <div className="bg-emerald-500/15 border border-emerald-500/40 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Stock Center</span>
                            <span className="font-bold text-emerald-300">R$ 23,89</span>
                          </div>
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Atacadão</span>
                            <span className="text-slate-300">R$ 25,49</span>
                          </div>
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Zaffari</span>
                            <span className="text-rose-400">R$ 28,90</span>
                          </div>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="bg-slate-900/90 rounded-xl p-2.5 border border-white/5 space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-bold text-slate-100">Café Melitta 500g</span>
                            <span className="block text-[10px] text-slate-400">Variação de 29%</span>
                          </div>
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                            Melhor no Atacadão
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 pt-1 text-[11px] font-mono text-center">
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Stock Center</span>
                            <span className="text-slate-300">R$ 17,90</span>
                          </div>
                          <div className="bg-emerald-500/15 border border-emerald-500/40 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Atacadão</span>
                            <span className="font-bold text-emerald-300">R$ 16,50</span>
                          </div>
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Zaffari</span>
                            <span className="text-rose-400">R$ 21,90</span>
                          </div>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="bg-slate-900/90 rounded-xl p-2.5 border border-white/5 space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-bold text-slate-100">Leite Integral Piracanjuba 1L</span>
                            <span className="block text-[10px] text-slate-400">Preço por litro</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Melhor no Stock
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 pt-1 text-[11px] font-mono text-center">
                          <div className="bg-emerald-500/15 border border-emerald-500/40 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Stock Center</span>
                            <span className="font-bold text-emerald-300">R$ 4,39</span>
                          </div>
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Atacadão</span>
                            <span className="text-slate-300">R$ 4,49</span>
                          </div>
                          <div className="bg-white/5 rounded p-1">
                            <span className="block text-[9px] text-slate-400 font-sans">Zaffari</span>
                            <span className="text-rose-400">R$ 5,35</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content View 2: Modo No Mercado */}
                {activeTab === 'nomercado' && (
                  <div className="space-y-3 py-1">
                    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">Subtotal no Carrinho:</span>
                        <span className="text-lg font-black text-white font-mono">R$ 145,20</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-red-500 h-full w-[45%]" />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1.5 font-mono">
                        <span>4 de 9 itens marcados</span>
                        <span className="text-emerald-400 font-semibold">R$ 154,80 sobram no teto</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2.5 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="line-through text-slate-400 flex-1">Arroz Tipo 1 5kg (R$ 23,89)</span>
                        <span className="text-[10px] text-emerald-400 font-bold">No carrinho</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="line-through text-slate-400 flex-1">Óleo de Soja 900ml (R$ 6,29)</span>
                        <span className="text-[10px] text-emerald-400 font-bold">No carrinho</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 bg-white/5 border border-white/10 rounded-lg text-slate-200">
                        <div className="w-4 h-4 rounded-full border border-slate-500 shrink-0" />
                        <span className="flex-1 font-medium">Feijão Preto 1kg</span>
                        <span className="text-[10px] font-mono text-amber-300 font-semibold">R$ 6,89</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 bg-white/5 border border-white/10 rounded-lg text-slate-200">
                        <div className="w-4 h-4 rounded-full border border-slate-500 shrink-0" />
                        <span className="flex-1 font-medium">Café Tradicional 500g</span>
                        <span className="text-[10px] font-mono text-amber-300 font-semibold">R$ 16,90</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Action inside Mockup */}
                <div className="pt-3 border-t border-white/5 mt-2">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-600/30"
                  >
                    <span>Abrir Web App Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Floating badges on mockup sides */}
              <div className="hidden sm:flex absolute -bottom-5 -left-8 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  %
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Economia Média</span>
                  <span className="text-sm font-black text-white">R$ 300 / mês</span>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-6 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Sem Instalação</span>
                  <span className="text-sm font-black text-white">Direto no Navegador</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
