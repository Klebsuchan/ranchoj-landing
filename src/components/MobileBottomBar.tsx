import React from 'react';
import { ExternalLink } from 'lucide-react';
import { APP_URL } from '../data/marketsData';
import { RanchoJaIcon } from './RanchoJaLogo';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <RanchoJaIcon size={28} />
          <div>
            <span className="text-[10px] text-stone-500 block font-semibold leading-tight">
              Passo Fundo & Região
            </span>
            <span className="text-xs font-black text-[#ea1d2c] leading-tight">
              Economize até 35%
            </span>
          </div>
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#ea1d2c] hover:bg-[#ba0c19] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-sm active:scale-95 transition-transform"
        >
          <span>Abrir App</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
