import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { APP_URL } from '../data/marketsData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O RanchoJá é realmente 100% gratuito?',
      a: 'Sim, o RanchoJá é totalmente gratuito para os consumidores. Você pode consultar preços, comparar supermercados, montar listas e exportar em PDF sem pagar nenhuma assinatura ou taxa oculta.',
    },
    {
      q: 'Preciso baixar algum aplicativo pesado na Play Store ou App Store?',
      a: 'Não! O RanchoJá foi desenvolvido como um Web App mobile-first (PWA). Ele roda diretamente no navegador do seu smartphone (Chrome, Safari, Edge, etc.) sem gastar a memória de armazenamento do seu telefone. Você também pode fixá-lo na tela inicial em 1 clique.',
    },
    {
      q: 'Quais supermercados de Passo Fundo e região estão cadastrados?',
      a: 'O RanchoJá abrange os maiores atacarejos e hipermercados (como Stock Center, Atacadão Passo Fundo, Super Zaffari, Bourbon), além de mercados de bairro dos principais distritos (São Cristóvão, Petrópolis, Vera Cruz, Centro) e feiras de produtores locais.',
    },
    {
      q: 'Como funciona o cálculo de "custo por medida" (R$/kg, R$/L)?',
      a: 'Muitas marcas alteram o tamanho da embalagem (por exemplo, reduzindo de 1kg para 850g) sem que você perceba. Nosso comparador calcula automaticamente o preço real por quilo (R$/kg) ou por litro (R$/L), garantindo que você compre o produto que realmente rende mais pelo menor custo.',
    },
    {
      q: 'O que é o recurso "Rancho do Mês em 1 Toque"?',
      a: 'É um algoritmo inteligente criado para famílias. Você define o seu orçamento máximo (ex: R$ 800 ou R$ 1.500) e a quantidade de moradores na casa. O sistema monta uma cesta equilibrada contendo grãos, proteínas, laticínios, hortifrúti e produtos de limpeza ajustada exatamente ao valor definido.',
    },
    {
      q: 'Como o modo "No Mercado" evita que eu gaste mais do que planejado?',
      a: 'No supermercado, você abre o checklist no celular. Conforme coloca os produtos no carrinho, você os marca na tela. O app atualiza o subtotal ao vivo e calcula quanto dinheiro ainda resta para não ultrapassar o teto estipulado.',
    },
    {
      q: 'Posso compartilhar minha lista no WhatsApp com outra pessoa?',
      a: 'Com certeza! Você pode gerar um link instantâneo ou enviar a lista organizada pelo WhatsApp. Quem for ao mercado já recebe tudo pronto e ordenado.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Tudo o que você precisa saber sobre o funcionamento e as vantagens do RanchoJá.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-100 hover:text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
          <p className="text-sm text-slate-400">
            Ainda tem dúvidas?{' '}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-4"
            >
              Abra o RanchoJá agora mesmo e explore sem compromisso
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
