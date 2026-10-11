import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconDimensions = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const textScale = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg';
  const subScale = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Metallic Golden-Orange Circular Emblem with Indigo Weave Core */}
      <div className={`relative ${iconDimensions} rounded-full p-0.5 bg-gradient-to-tr from-[#D96A16] via-[#F5A623] to-[#FFD36A] shadow-md shadow-[#D96A16]/20 flex items-center justify-center shrink-0`}>
        <div className="w-full h-full rounded-full bg-[#071426] border border-[#F5A623]/40 flex items-center justify-center relative overflow-hidden">
          {/* Subtle Twill Loom Diagonal lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path d="M-10 10 L30 -30 M-10 20 L40 -30 M-10 30 L50 -30 M-10 40 L60 -30 M0 50 L70 -20 M10 60 L80 -10" stroke="#FFD36A" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
          
          {/* Stylized Weaver's Shuttle & Loom Geometry Monogram */}
          <svg
            className="w-3/5 h-3/5 relative z-10 drop-shadow-[0_1px_2px_rgba(245,166,35,0.6)]"
            viewBox="0 0 24 24"
            fill="none"
          >
            {/* Diamond shuttle frame */}
            <path
              d="M12 2L20 12L12 22L4 12L12 2Z"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Warp threads passing through reed */}
            <path d="M9 7L15 17M15 7L9 17" stroke="#FFD36A" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.6" fill="#F5A623" />
            <defs>
              <linearGradient id="goldGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD36A" />
                <stop offset="0.5" stopColor="#F5A623" />
                <stop offset="1" stopColor="#D96A16" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-brand font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFD36A] via-[#F5A623] to-[#FFD36A] ${textScale}`}>
            AADITEX
          </span>
          <span className={`font-brand font-light tracking-widest text-slate-100 ${textScale}`}>
            FABRICS
          </span>
        </div>
        {showTagline && (
          <span className={`tracking-[0.2em] font-medium text-[#A9B6C7] uppercase mt-1 ${subScale}`}>
            Weaving a Stronger Tomorrow
          </span>
        )}
      </div>
    </div>
  );
};
