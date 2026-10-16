import React, { useState } from 'react';
import { Menu, X, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { APP_URL } from '../data/marketsData';
import { RanchoJaLogo } from './RanchoJaLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O Problema', href: '#problema' },
    { label: 'A Solução', href: '#solucao' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Supermercados', href: '#cobertura' },
    { label: 'Simulador ROI', href: '#calculadora' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0b0f19]/90 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Official Web App Logo */}
          <a href="#" className="flex items-center group py-1" aria-label="RanchoJá Início">
            <RanchoJaLogo size="md" variant="dark" subtitle="Mercados & Preços • Passo Fundo" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea1d2c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#calculadora"
              className="text-xs font-semibold px-3 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              Simular Economia
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all border border-red-400/30"
            >
              <span>Acessar Plataforma</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-[#ea1d2c] text-white font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-lg shadow-md shadow-red-600/30"
            >
              Acessar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1424] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-3">
            <div className="pb-2 border-b border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-2">
                Navegação Rápida
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/10 hover:text-red-400 text-sm uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-600/30 text-sm uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Acessar Web App Grátis</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
