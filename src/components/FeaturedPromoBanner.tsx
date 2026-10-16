import React from 'react';
import { Check, ChevronRight, FileText, Smartphone, Share2, CheckCircle2 } from 'lucide-react';
import { APP_URL } from '../data/marketsData';
import { RanchoJaLogo } from './RanchoJaLogo';

export const FeaturedPromoBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#eef3f7] relative overflow-hidden border-b border-stone-200">
      
      {/* Decorative leaf on right edge matching the image */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-32 h-32 opacity-70 pointer-events-none rotate-45">
        <svg viewBox="0 0 24 24" fill="#688628" className="w-full h-full drop-shadow-md">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.52-11 4.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Mockup / Box Presentation (matching the OJAS Box & Gloves in image.png) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              
              {/* Product box simulation */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-300 relative overflow-hidden">
                <div className="flex justify-between items-start border-b border-stone-100 pb-3 mb-4">
                  <div>
                    <div className="mb-1">
                      <RanchoJaLogo size="sm" showText={true} />
                    </div>
                    <h4 className="text-xl font-black text-stone-900 font-serif">
                      Cesta Inteligente
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      Exportação em PDF formatado + Checklist interativo
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-white bg-[#708c2a] px-2.5 py-1 rounded-full">
                    100% GRÁTIS
                  </span>
                </div>

                {/* Simulated list checklist */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-stone-700">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Arroz Tipo 1 5kg (Stock Center)
                    </span>
                    <span className="font-mono font-bold text-emerald-800">R$ 23,89</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-stone-700">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Feijão Preto 1kg (Atacadão)
                    </span>
                    <span className="font-mono font-bold text-emerald-800">R$ 6,89</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-600">
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-stone-400" />
                      Café Tradicional 500g
                    </span>
                    <span className="font-mono font-bold text-stone-700">R$ 16,90</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-500">Subtotal Marcado:</span>
                  <span className="text-base font-black text-[#c81c25] font-mono">R$ 30,78</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Copy & Bullets (matching the OJAS Gloves text) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#c81c25] block">
              PRATICIDADE PARA A VIDA REAL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight font-serif">
              Lista Inteligente Para <br />
              <span className="text-[#c81c25]">Máximo Controle</span> Do Seu Bolso
            </h2>

            {/* 4 Checkmark Bullets in 2x2 Grid with green checks matching the image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                <div className="w-4 h-4 rounded-full bg-[#708c2a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Checklist Interativo</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                <div className="w-4 h-4 rounded-full bg-[#708c2a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Controle de Subtotal ao Vivo</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                <div className="w-4 h-4 rounded-full bg-[#708c2a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Exportação em PDF Formatado</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-700">
                <div className="w-4 h-4 rounded-full bg-[#708c2a] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Envio Rápido para WhatsApp</span>
              </div>
            </div>

            {/* Red Pill Button matching "EXPLORE OJAS GLOVES >" */}
            <div className="pt-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c81c25] hover:bg-[#a5151e] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>EXPERIMENTAR NO CELULAR</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
