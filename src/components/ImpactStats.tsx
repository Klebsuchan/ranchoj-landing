import React from 'react';
import { TrendingDown, PiggyBank, Percent, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 relative bg-gradient-to-b from-[#090d16] via-[#0d1424] to-[#090d16] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
            <Award className="w-3.5 h-3.5" />
            Impacto Comprovado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Resultados reais para famílias reais
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            O RanchoJá não é só uma ideia — é uma ferramenta que já está mudando a forma como famílias de Passo Fundo fazem suas compras mensais. Os números falam por si.
          </p>
        </div>

        {/* 3 Metric Cards from Slide 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          
          {/* Stat 1: 35% */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-red-500/40 rounded-3xl p-8 transition-all duration-300 shadow-xl overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Percent className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-2 font-mono">
              35<span className="text-red-500">%</span>
            </div>
            <div className="text-lg font-bold text-slate-200 mb-2">
              Redução no Custo
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Redução média no custo total da compra do mês comparado às compras sem planejamento e sem comparação de mercado.
            </p>
          </div>

          {/* Stat 2: R$ 300 */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 rounded-3xl p-8 transition-all duration-300 shadow-xl overflow-hidden text-center md:text-left">
            <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md">
              Mais Impactante
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <PiggyBank className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-2 font-mono text-emerald-400">
              R$ 300
            </div>
            <div className="text-lg font-bold text-slate-200 mb-2">
              Economia por Ciclo
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Famílias relatam economias médias de R$ 150 a R$ 300 por ciclo de compras mensais abastecendo a dispensa.
            </p>
          </div>

          {/* Stat 3: 45% */}
          <div className="relative group bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 shadow-xl overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <TrendingDown className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-2 font-mono text-amber-400">
              45<span className="text-white">%</span>
            </div>
            <div className="text-lg font-bold text-slate-200 mb-2">
              Variação de Preços
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Diferença máxima encontrada no mesmo produto e na mesma marca entre estabelecimentos da mesma cidade.
            </p>
          </div>

        </div>

        {/* Conclusion Banner from Slide 7 */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-lg">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex-1">
            <p className="text-base sm:text-lg font-semibold text-slate-100">
              Com o RanchoJá, mais comida de qualidade na mesa das famílias pelo mesmo orçamento.
            </p>
            <p className="text-sm text-slate-400">
              Fim do desperdício de tempo folheando encartes e das compras por impulso no corredor do supermercado.
            </p>
          </div>
          <a
            href="#calculadora"
            className="shrink-0 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            Ver simulação personalizada →
          </a>
        </div>

      </div>
    </section>
  );
};
