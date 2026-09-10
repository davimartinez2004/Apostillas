import { useState, useRef } from 'react';
import { PRIZES_DATA } from '../data/content';
import { PrizeItem } from '../types';
import { X, Sparkles, Copy, Check, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RouletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyCoupon: (code: string) => void;
}

export function RouletteModal({ isOpen, onClose, onApplyCoupon }: RouletteModalProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<PrizeItem | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalSegments = PRIZES_DATA.length;
  const segmentAngle = 360 / totalSegments;

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonPrize(null);
    setCopied(false);

    // Pick random index
    const winningIndex = Math.floor(Math.random() * totalSegments);
    const selectedPrize = PRIZES_DATA[winningIndex];

    // Calculate rotation: at least 5 full rotations (1800 deg) + index target
    // Note: 0 deg points up or right. Let's calculate offset to land under top pointer
    const baseSpins = 360 * 5;
    const targetAngle = baseSpins + (360 - (winningIndex * segmentAngle + segmentAngle / 2));
    
    // Add current rotation
    const finalRotation = rotation + targetAngle;
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);

      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ff2d78', '#00ffcc', '#ffe04a', '#ffffff']
      });
    }, 3800);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0e0e1a] rounded-3xl border border-[#ff2d78]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,45,120,0.3)] p-6 sm:p-8 text-center overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#18182f] text-slate-400 hover:text-white border border-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff2d78]/20 text-[#ff80ab] border border-[#ff2d78]/50 shadow-[0_0_12px_rgba(255,45,120,0.3)] mb-2">
            <Gift className="w-3.5 h-3.5" />
            <span>RULETA DE PREMIOS VIP</span>
          </div>
          <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-white">
            ¡Gira y gana descuentos al toque! 🎰
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Cada giro tiene premio asegurado para tus apostillas y trámites.
          </p>
        </div>

        {/* Wheel Container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto my-6 flex items-center justify-center">
          
          {/* Outer glowing border ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#ff2d78]/40 shadow-[0_0_25px_rgba(255,45,120,0.35)] pointer-events-none" />

          {/* Pointer indicator on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-[#00ffcc] drop-shadow-[0_0_8px_#00ffcc]" />

          {/* Rotating Wheel Disk */}
          <div
            className="w-full h-full rounded-full relative overflow-hidden transition-transform ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionDuration: isSpinning ? '3.8s' : '0s',
              transitionTimingFunction: 'cubic-bezier(0.15, 0.9, 0.25, 1)'
            }}
          >
            {/* SVG Wheel segments */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {PRIZES_DATA.map((prize, idx) => {
                const angle = 360 / totalSegments;
                const startAngle = idx * angle;
                const endAngle = (idx + 1) * angle;

                const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                const d = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;

                return (
                  <g key={prize.id}>
                    <path d={d} fill={prize.color} stroke="#0a0a12" strokeWidth="1" />
                  </g>
                );
              })}
            </svg>

            {/* Segment labels */}
            {PRIZES_DATA.map((prize, idx) => {
              const rot = idx * segmentAngle + segmentAngle / 2;
              return (
                <div
                  key={prize.id}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
                  style={{
                    transform: `rotate(${rot}deg)`
                  }}
                >
                  <span
                    className="text-[10px] sm:text-xs font-sora font-extrabold uppercase tracking-tight -translate-y-20 sm:-translate-y-24"
                    style={{ color: prize.textColor }}
                  >
                    {prize.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Wheel Center Hub Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="absolute z-10 w-16 h-16 rounded-full bg-[#0e0e1a] border-2 border-[#00ffcc] text-[#00ffcc] font-sora font-black text-xs flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-80"
          >
            <Sparkles className="w-4 h-4 text-[#ffe04a]" />
            <span>{isSpinning ? '...' : 'GIRAR'}</span>
          </button>
        </div>

        {/* Won Prize Popup / Summary */}
        {wonPrize ? (
          <div className="p-4 rounded-2xl bg-[#141428] border border-[#00ffcc]/50 space-y-3 animate-fadeIn">
            <div className="text-xs font-space text-[#00ffcc] uppercase tracking-wider">
              ¡PREMIO DESBLOQUEADO!
            </div>
            <div className="font-sora font-extrabold text-lg text-white">
              {wonPrize.message}
            </div>

            <div className="flex items-center justify-center gap-2 max-w-xs mx-auto bg-[#0a0a12] p-2.5 rounded-xl border border-white/10">
              <span className="font-space font-bold text-sm text-[#ffe04a] tracking-wider">
                {wonPrize.discountCode}
              </span>
              <button
                onClick={() => copyCode(wonPrize.discountCode)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00ffcc]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                onApplyCoupon(wonPrize.discountCode);
                onClose();
              }}
              className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] shadow-[0_0_15px_rgba(255,45,120,0.4)]"
            >
              Aplicar cupón en mi trámite ✨
            </button>
          </div>
        ) : (
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] shadow-[0_0_20px_rgba(255,45,120,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSpinning ? 'La suerte está rodando...' : '¡Girar la Ruleta Ahora! 🎁'}</span>
          </button>
        )}

      </div>
    </div>
  );
}
