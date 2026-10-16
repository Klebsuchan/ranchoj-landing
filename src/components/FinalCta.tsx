import React from 'react';
import { ArrowRight, ShoppingCart, PiggyBank, Zap, Sparkles, ExternalLink } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#090d16] via-[#120a14] to-[#090d16] border-t border-white/10">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box */}
        <div className="bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-[#0b1220] border border-red-500/30 rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          
          {/* Subtle watermarked badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Conclusão
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            O futuro das compras de supermercado <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              começa agora.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Rancho inteligente, economia garantida e mais tempo para o que realmente importa — sua família, seus momentos, sua vida.
          </p>

          {/* 3 Pillars from Slide 8 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 text-left">
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                <ShoppingCart className="w-5 h-5 shrink-0" />
                <span>Rancho Inteligente</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Planeje, compare e compre com confiança usando dados reais dos mercados da sua cidade.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <PiggyBank className="w-5 h-5 shrink-0" />
                <span>Economia Garantida</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reduza até 35% no custo mensal e coloque mais qualidade na mesa da sua família.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                <Zap className="w-5 h-5 shrink-0" />
                <span>Experimente Agora</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acesse pelo celular, sem download. Faça seu rancho render mais em poucos minutos.
              </p>
            </div>
          </div>

          {/* Dual Action CTAs from Slide 8 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-base sm:text-lg px-8 py-4.5 rounded-2xl shadow-xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-red-400/40"
            >
              <span>Experimente o RanchoJá Agora</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <a
              href="#calculadora"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-base px-7 py-4.5 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all"
            >
              <span>Saiba Mais (Simulação)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6 font-medium">
            🔒 Gratuito para sempre para a população • Passo Fundo e Região
          </p>

        </div>

      </div>
    </section>
  );
};
