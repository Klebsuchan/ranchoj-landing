import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { APP_URL } from '../data/marketsData';
import { RanchoJaLogo } from './RanchoJaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a12] text-slate-400 border-t border-white/10 pt-16 pb-24 sm:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block group" aria-label="RanchoJá Início">
              <RanchoJaLogo size="lg" variant="dark" subtitle="Economia Real Para Sua Família" />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              O RanchoJá é a plataforma comparadora de supermercados líder em Passo Fundo e região, entregando transparência de preços, economia real e previsibilidade financeira para o orçamento das famílias.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <MapPin className="w-4 h-4 text-[#ea1d2c]" />
              <span>Passo Fundo e Região, Rio Grande do Sul, Brasil</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white border-b border-white/10 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#problema" className="hover:text-white transition-colors">O Problema</a></li>
              <li><a href="#solucao" className="hover:text-white transition-colors">A Solução</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Simulador ROI</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Markets & Networks */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white border-b border-white/10 pb-2">
              Supermercados Mapeados
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Stock Center Passo Fundo</li>
              <li>Atacadão Passo Fundo</li>
              <li>Supermercado Zaffari</li>
              <li>Bourbon Hipermercado</li>
              <li>Mercados de Bairro & Mercearias</li>
              <li>Feira do Produtor & Feiras Livres</li>
            </ul>
          </div>

          {/* Col 4: App Link */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white border-b border-white/10 pb-2">
              Acesse a Plataforma
            </h4>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/30 transition-all"
            >
              <span>Abrir App Grátis</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} RanchoJá. Todos os direitos reservados. Economia real para as famílias brasileiras.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Passo Fundo e Região • RS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
