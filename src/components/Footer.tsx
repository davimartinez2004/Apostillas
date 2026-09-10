import { ShieldCheck, Lock, Globe } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#080811] py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left branding */}
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center">
          <span className="font-sora font-extrabold text-slate-100 flex items-center gap-1">
            <span>GLOBAL TOP</span>
            <span>✈️</span>
          </span>
          <span className="text-slate-600">·</span>
          <span>Trámites sin enredos para panas de todo el mundo</span>
        </div>

        {/* Right compliance & links */}
        <div className="flex items-center gap-4 flex-wrap justify-center text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ffcc]" />
            <span>Ley 1581 Habeas Data</span>
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-[#ffe04a]" />
            <span>Portal Seguro SSL 256-bit</span>
          </span>
          <span className="text-slate-600">·</span>
          <button 
            onClick={() => onScrollToSection('dudas')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Términos & Condiciones
          </button>
        </div>

      </div>
    </footer>
  );
}
