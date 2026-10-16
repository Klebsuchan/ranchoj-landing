import React from 'react';

export const RanchoJaIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-label="RanchoJá Ícone"
  >
    <defs>
      <linearGradient id="rjBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EA1D2C" />
        <stop offset="100%" stopColor="#BA0C19" />
      </linearGradient>
      <linearGradient id="rjBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <filter id="rjShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#7F1D1D" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#rjBgGrad)" className="transition-transform" />
    <rect x="3" y="3" width="42" height="42" rx="11" fill="none" stroke="#FCA5A5" strokeWidth="1" strokeOpacity="0.4" />
    <g filter="url(#rjShadow)">
      <path
        d="M10 13H14.5L18.2 27.2C18.4 28 19.1 28.6 20 28.6H33.5C34.3 28.6 35.1 28 35.3 27.2L38 17.5H16.5"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 22.5H35.5" stroke="#FECACA" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M27.5 11.5L22 20.5H27L25 28.5L33.5 18H28L30 11.5H27.5Z"
        fill="url(#rjBoltGrad)"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="34" r="2.4" fill="#FFFFFF" />
      <circle cx="33" cy="34" r="2.4" fill="#FFFFFF" />
    </g>
  </svg>
);

interface RanchoJaLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
  subtitle?: string;
}

export const RanchoJaLogo: React.FC<RanchoJaLogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'light',
  className = '',
  subtitle = 'Mercados & Preços',
}) => {
  const iconSizes = {
    xs: 22,
    sm: 28,
    md: 38,
    lg: 48,
    xl: 60,
  };

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const badgeSizes = {
    xs: 'text-[9px] px-1 py-0.2',
    sm: 'text-[10px] px-1.2 py-0.5',
    md: 'text-xs px-2 py-0.5',
    lg: 'text-sm px-2.5 py-1',
    xl: 'text-base px-3 py-1',
  };

  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 whitespace-nowrap overflow-visible ${className}`}>
      <RanchoJaIcon size={iconSizes[size]} className="shrink-0 drop-shadow-sm hover:scale-105 transition-transform" />
      {showText && (
        <div className="flex flex-col justify-center leading-tight py-0.5 shrink-0 whitespace-nowrap overflow-visible">
          <div className="flex items-center tracking-tight shrink-0 whitespace-nowrap overflow-visible">
            <span
              className={`font-black tracking-tight uppercase ${textSizes[size]} ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              rancho
            </span>
            <span
              className={`inline-flex items-center justify-center font-black italic ml-1.5 rounded-md bg-[#ea1d2c] text-white shadow-xs shrink-0 ${badgeSizes[size]}`}
            >
              já
            </span>
          </div>
          {(size === 'md' || size === 'lg' || size === 'xl') && (
            <span
              className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 shrink-0 ${
                isDark ? 'text-red-300' : 'text-[#ea1d2c]'
              }`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
