import { CreditCard, MessageCircle, HelpCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenPayment: () => void;
  onOpenWhatsApp: () => void;
}

export function CtaBanner({ onOpenPayment, onOpenWhatsApp }: CtaBannerProps) {
  return (
    <section className="py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#170e1c] via-[#0d1624] to-[#0e1b24] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-[#ff2d78]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex items-center gap-4 text-center sm:text-left relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#ff2d78]/20 border border-[#ff2d78]/40 flex items-center justify-center text-[#ff2d78] text-xl shrink-0 shadow-[0_0_15px_rgba(255,45,120,0.3)]">
              📑
            </div>
            <div>
              <h3 className="font-sora font-extrabold text-base sm:text-lg text-white">
                ¿Tienes afán o dudas sobre algún papel?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Escríbenos ahorita mismo y te atendemos sin tanta vuelta.
              </p>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto justify-center">
            <button
              id="btn-banner-whatsapp"
              onClick={onOpenWhatsApp}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111122] text-[#00ffcc] border border-[#00ffcc]/50 hover:bg-[#00ffcc]/10 shadow-[0_0_12px_rgba(0,255,204,0.2)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Escribir ahora</span>
            </button>

            <button
              id="btn-banner-pay"
              onClick={onOpenPayment}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0e2730] border border-[#00ffcc]/70 hover:bg-[#00ffcc] hover:text-slate-950 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,204,0.3)]"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pagar trámite 💳</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
