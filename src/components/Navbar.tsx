import { useState } from 'react';
import { Menu, X, CreditCard, FolderUp, Sparkles, Search, MessageSquareCode } from 'lucide-react';

interface NavbarProps {
  onOpenPayment: () => void;
  onOpenTracking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({ onOpenPayment, onOpenTracking, onScrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a12]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => onScrollToSection('hero')}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-lg bg-[#17172b] border border-[#ff2d78]/40 flex items-center justify-center font-bold text-xs tracking-wider text-[#ff2d78] shadow-[0_0_12px_rgba(255,45,120,0.25)] group-hover:border-[#ff2d78] transition-all">
            GT
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-sora font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">
                GLOBAL TOP
              </span>
              <span className="text-xs">✈️</span>
            </div>
            <div className="text-[10px] text-slate-400 tracking-wide font-normal -mt-0.5">
              trámites sin rollos
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            id="nav-link-services"
            onClick={() => onScrollToSection('servicios')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 hover:text-[#00ffcc]"
          >
            Servicios <span>✍️</span>
          </button>
          <button
            id="nav-link-tracking"
            onClick={onOpenTracking}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-[#00ffcc] hover:drop-shadow-[0_0_8px_rgba(0,255,204,0.6)]"
          >
            ¿Cómo va? <span className="text-xs">⚡</span>
          </button>
          <button
            id="nav-link-testimonials"
            onClick={() => onScrollToSection('experiencias')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 hover:text-[#ffe04a]"
          >
            Experiencias <span>🌟</span>
          </button>
          <button
            id="nav-link-faq"
            onClick={() => onScrollToSection('dudas')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 hover:text-white"
          >
            Dudas <span>💬</span>
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            id="btn-nav-pay"
            onClick={onOpenPayment}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#111122] text-[#00ffcc] border border-[#00ffcc]/40 hover:border-[#00ffcc] hover:bg-[#00ffcc]/10 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,255,204,0.15)] cursor-pointer"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pagar trámite 💳</span>
          </button>

          <button
            id="btn-nav-upload"
            onClick={() => onScrollToSection('formulario')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#17172b] text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-[#1f1f38] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FolderUp className="w-3.5 h-3.5 text-[#ffe04a]" />
            <span>Subir archivos 📂</span>
          </button>

          <button
            id="btn-nav-free-advice"
            onClick={() => onScrollToSection('formulario')}
            className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] hover:from-[#ff4088] hover:to-[#e62870] shadow-[0_0_15px_rgba(255,45,120,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Asesoría gratis 🦄</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="btn-mobile-tracking"
            onClick={onOpenTracking}
            className="p-1.5 rounded-lg bg-[#151528] text-[#00ffcc] border border-[#00ffcc]/30 text-xs flex items-center gap-1"
          >
            <Search className="w-3.5 h-3.5" />
            <span>¿Cómo va?</span>
          </button>

          <button
            id="btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141426] text-slate-200 border border-slate-800"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c18] border-b border-white/10 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => { onScrollToSection('servicios'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-lg bg-[#141426] text-left text-slate-200 hover:bg-[#1a1a33] flex items-center gap-2"
            >
              <span>✍️</span> Servicios
            </button>
            <button
              onClick={() => { onOpenTracking(); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-lg bg-[#141426] text-left text-[#00ffcc] hover:bg-[#1a1a33] flex items-center gap-2"
            >
              <span>⚡</span> ¿Cómo va?
            </button>
            <button
              onClick={() => { onScrollToSection('experiencias'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-lg bg-[#141426] text-left text-slate-200 hover:bg-[#1a1a33] flex items-center gap-2"
            >
              <span>🌟</span> Experiencias
            </button>
            <button
              onClick={() => { onScrollToSection('dudas'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-lg bg-[#141426] text-left text-slate-200 hover:bg-[#1a1a33] flex items-center gap-2"
            >
              <span>💬</span> Dudas
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { onOpenPayment(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-full text-xs font-semibold bg-[#111122] text-[#00ffcc] border border-[#00ffcc]/40 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pagar trámite 💳</span>
            </button>
            <button
              onClick={() => { onScrollToSection('formulario'); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] shadow-[0_0_15px_rgba(255,45,120,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Pedir Asesoría Gratis 🦄</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
