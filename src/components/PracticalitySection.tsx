import React from 'react';
import { FileText, Share2, Navigation, ShieldCheck, Check, Download, MessageCircle, Smartphone } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const PracticalitySection: React.FC = () => {
  const practicalFeatures = [
    {
      icon: FileText,
      tag: 'Offline & Impressão',
      title: 'Exportação em PDF Formatado',
      description:
        'Lista pronta para imprimir ou consultar offline no mercado, mesmo que o sinal de 4G/5G fique instável dentro do galpão de compras.',
      actionPreview: 'Gerar PDF Organizado por Corredores',
      accentColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    },
    {
      icon: MessageCircle,
      tag: 'Divisão Fácil em Família',
      title: 'Compartilhamento Instantâneo',
      description:
        'Monte o rancho e envie para cônjuge ou amigos via WhatsApp ou link curto. A compra pode ser assumida por qualquer pessoa da família sem confusão.',
      actionPreview: 'Enviar para o WhatsApp com 1 Toque',
      accentColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      icon: Navigation,
      tag: 'Economia de Combustível',
      title: 'Geolocalização Inteligente',
      description:
        'Mostra a distância real em quilômetros até cada mercado de Passo Fundo e indica a rota mais rápida para otimizar seu tempo e combustível.',
      actionPreview: 'Distâncias reais em km em Passo Fundo',
      accentColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    },
    {
      icon: ShieldCheck,
      tag: 'Dados Blindados',
      title: 'Acesso Seguro e Sincronizado',
      description:
        'Login integrado com Conta Google e sincronização em tempo real entre dispositivos — comece no computador de casa e continue no celular.',
      actionPreview: 'Sincronia na nuvem em tempo real',
      accentColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            <Smartphone className="w-3.5 h-3.5" />
            Praticidade
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Feito para a vida real: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              compartilhe, exporte e vá às compras
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Nada de planilhas complexas ou aplicativos confusos. O RanchoJá foi projetado para a rotina dinâmica e real das famílias.
          </p>
        </div>

        {/* 4 Cards Grid from Slide 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {practicalFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 hover:bg-slate-900 border border-white/10 hover:border-white/20 rounded-3xl p-7 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.accentColor}`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    {item.actionPreview}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live interaction snippet / WhatsApp simulator */}
        <div className="mt-12 bg-gradient-to-r from-[#0d1424] via-slate-900 to-[#0d1424] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-8 h-8 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                "Amor, já montei o rancho no menor preço. Pode passar no Stock Center?"
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Compartilhe o link direto com os itens já organizados por corredor para quem for ao mercado.
              </p>
            </div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all"
          >
            Testar Compartilhamento
          </a>
        </div>

      </div>
    </section>
  );
};
