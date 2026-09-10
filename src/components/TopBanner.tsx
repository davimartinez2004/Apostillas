interface TopBannerProps {
  onOpenRoulette: () => void;
}

export function TopBanner({ onOpenRoulette }: TopBannerProps) {
  return (
    <div className="bg-[#120f24] border-b border-[#ff2d78]/30 text-xs sm:text-sm py-2 px-4 text-center font-medium text-slate-200 relative z-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2d78]/10 to-transparent pointer-events-none animate-pulse" />
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>
          🎰 ¡Califica tu atención y gira la <strong className="text-[#ffe04a] font-semibold">Ruleta de Premios</strong> para ganar descuentos y trámites gratis! 🎁✨
        </span>
        <button
          id="btn-open-roulette"
          onClick={onOpenRoulette}
          className="inline-flex items-center gap-1 font-semibold text-[#00ffcc] hover:text-white transition-colors underline underline-offset-4 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]"
        >
          Girar ahora &rarr;
        </button>
      </div>
    </div>
  );
}
