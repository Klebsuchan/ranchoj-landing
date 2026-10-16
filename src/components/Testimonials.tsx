import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Mariana & Lucas Silveira',
      neighborhood: 'Bairro Petrópolis, Passo Fundo',
      savings: 'Economia de R$ 340 no mês',
      quote:
        'A gente sempre ia no mercado mais próximo por comodidade, mas quando comparamos a compra do mês no RanchoJá vimos uma diferença absurda no arroz, café e carnes entre o Stock Center e o Zaffari. Pagamos as contas do mês com o dinheiro que sobrou!',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Mendes',
      neighborhood: 'Bairro São Cristóvão, Passo Fundo',
      savings: 'Economia de R$ 265 no mês',
      quote:
        'O modo "No Mercado" com o checklist salvou o nosso orçamento. Minha esposa e eu sempre gastávamos uns R$ 200 a mais por besteiras no corredor. Agora com o celular na mão marcando os itens, a gente não estoura o teto nunca.',
      rating: 5,
    },
    {
      name: 'Juliana Fagundes',
      neighborhood: 'Centro, Passo Fundo',
      savings: 'Economia de R$ 190 por quinzena',
      quote:
        'Melhor coisa é não precisar baixar aplicativo que trava o celular. Eu abro no Safari em dois segundos, monto a lista e mando no WhatsApp pro meu marido passar no Atacadão na volta do trabalho.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#090d16] via-[#0c1322] to-[#090d16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Depoimentos Reais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Famílias de Passo Fundo que já <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-red-400">
              viraram o jogo contra a inflação
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Veja o que diz quem usa o RanchoJá todo mês para fazer o dinheiro render no caixa.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-white/10 rounded-3xl p-7 flex flex-col justify-between shadow-xl relative hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {rev.savings}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <span className="text-xs text-slate-400">{rev.neighborhood}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
