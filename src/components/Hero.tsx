import { useState } from 'react';
import { Sparkles, FolderUp, MessageCircle, CheckCircle2, ShieldCheck, Zap, RefreshCw, QrCode, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
  onViewDocument: () => void;
}

export function Hero({ onScrollToSection, onOpenWhatsApp, onViewDocument }: HeroProps) {
  const [stampCount, setStampCount] = useState(1);
  const [isStamping, setIsStamping] = useState(false);

  const handleReStamp = () => {
    setIsStamping(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.45, x: 0.75 },
      colors: ['#ff2d78', '#00ffcc', '#ffe04a']
    });
    setTimeout(() => {
      setStampCount((prev) => prev + 1);
      setIsStamping(false);
    }, 450);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2d78]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1a1226] text-[#ff80ab] border border-[#ff2d78]/40 shadow-[0_0_12px_rgba(255,45,120,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#ff2d78] animate-ping" />
              <span>100% online y sin hacer colas infumables ✌️</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] leading-[1.18] tracking-tight text-white">
              Tu papeleo consular{' '}
              <span className="text-[#ff2d78] glow-pink-text">sin estrés</span>{' '}
              <span className="text-[#00ffcc] glow-cyan-text">ni filas</span> ✈️ ✨{' '}
              <span className="block mt-1 font-bold text-2xl sm:text-3xl md:text-4xl text-slate-100">
                Hacemos tus apostillas y citas al toque mientras tú te relajas 😎
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Apostillamos documentos de <strong className="text-white font-medium">Colombia 🇨🇴</strong>, <strong className="text-white font-medium">Venezuela 🇻🇪</strong> y el mundo 🌍. Rápido, 100% online y con asesoría gratis de panas para panas ✌️. Cero burocracia, puro trámite seguro.
            </p>

            {/* Action buttons row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-hero-free-advice"
                onClick={() => onScrollToSection('formulario')}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] hover:from-[#ff4088] hover:to-[#e62870] shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pedir asesoría gratis 🦄</span>
              </button>

              <button
                id="btn-hero-upload"
                onClick={() => onScrollToSection('formulario')}
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#17172b] text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-[#20203a] transition-all flex items-center gap-2 cursor-pointer"
              >
                <FolderUp className="w-4 h-4 text-[#ffe04a]" />
                <span>Subir documentos 📂</span>
              </button>

              <button
                id="btn-hero-whatsapp"
                onClick={onOpenWhatsApp}
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#101924] text-[#00ffcc] border border-[#00ffcc]/50 hover:border-[#00ffcc] hover:bg-[#00ffcc]/10 shadow-[0_0_14px_rgba(0,255,204,0.2)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbenos al WhatsApp 💬</span>
              </button>
            </div>

            {/* Value Props Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#111122]/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#ffe04a]/10 border border-[#ffe04a]/30 flex items-center justify-center text-[#ffe04a] text-sm shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Sin ir al consulado</div>
                  <div className="text-[11px] text-slate-400">Desde tu sofá</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#111122]/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#00ffcc]/10 border border-[#00ffcc]/30 flex items-center justify-center text-[#00ffcc] text-sm shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Legal & Seguro</div>
                  <div className="text-[11px] text-slate-400">Ley 1581 Habeas Data</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#111122]/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#ff2d78]/10 border border-[#ff2d78]/30 flex items-center justify-center text-[#ff2d78] text-sm shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Al toque</div>
                  <div className="text-[11px] text-slate-400">Respuesta en minutos</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Official Credential Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0e0e1a] rounded-2xl p-5 border border-white/10 glow-card relative group hover:border-[#ff2d78]/40 transition-all">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]" />
                  <span className="text-[11px] font-space font-semibold tracking-wider text-slate-300 uppercase">
                    DOCUMENTO OFICIAL · CONVENIO LA HAYA
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#ff2d78]/20 text-[#ff2d78] border border-[#ff2d78]/50 shadow-[0_0_10px_rgba(255,45,120,0.3)]">
                  100% VÁLIDO
                </span>
              </div>

              {/* Main Document Box */}
              <div className="bg-[#151528] rounded-xl p-4 border border-white/5 space-y-4 relative overflow-hidden">
                
                {/* Simulated Watermark Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none text-6xl font-bold font-space text-white">
                  APOSTILLE
                </div>

                {/* Titular */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-space tracking-widest text-slate-400 uppercase">
                      TITULAR DEL TRÁMITE
                    </div>
                    <div className="font-sora font-bold text-sm sm:text-base text-white flex items-center gap-1.5 mt-0.5">
                      <span>SANTIAGO ROJAS M.</span>
                      <span className="text-xs px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-normal">co</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#23233e] border border-slate-700 flex items-center justify-center text-sm shadow-inner">
                    👨‍💼
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="bg-[#0e0e1a]/80 p-2.5 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400">Tipo de papel 📜</div>
                    <div className="font-semibold text-slate-100 mt-0.5">Partida + Título 📜</div>
                  </div>
                  <div className="bg-[#0e0e1a]/80 p-2.5 rounded-lg border border-white/5">
                    <div className="text-[10px] text-slate-400">Estado</div>
                    <div className="font-bold text-[#00ffcc] mt-0.5 flex items-center gap-1 drop-shadow-[0_0_6px_rgba(0,255,204,0.5)]">
                      <span>LISTO PARA VIAJAR</span>
                      <span>✈️</span>
                    </div>
                  </div>
                </div>

                {/* Approved Banner */}
                <div 
                  onClick={onViewDocument}
                  className={`p-3 rounded-xl bg-[#231224] border border-[#ff2d78] text-center shadow-[0_0_18px_rgba(255,45,120,0.3)] transition-all cursor-pointer hover:bg-[#2e1530] ${
                    isStamping ? 'scale-95 border-[#00ffcc] shadow-[0_0_20px_#00ffcc]' : ''
                  }`}
                >
                  <div className="font-sora font-extrabold text-xs sm:text-sm tracking-wide text-[#ff4088] glow-pink-text flex items-center justify-center gap-1.5">
                    <span>★</span>
                    <span>APROBADO & APOSTILLADO ✓</span>
                    <span>★</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-center gap-1">
                    <span>Código QR Cancillería validado con firma electrónica</span>
                  </div>
                </div>

                {/* Interactive QR code & Seal */}
                <div className="flex items-center justify-between pt-1 gap-2">
                  <div 
                    onClick={onViewDocument}
                    className="flex items-center gap-2.5 cursor-pointer group/qr hover:opacity-90"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                      {/* High precision SVG QR representation */}
                      <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                        <path d="M2 2h7v7H2V2zm2 2v3h3V4H4zm5 0h2v2H9V4zm2 2h2v2h-2V6zm-2 2h2v2H9V8zm6-6h7v7h-7V2zm2 2v3h3V4h-3zm-2 5h2v2h-2V9zm4 0h2v4h-2v-2h-2v-2h2zm2 4h1v2h-3v-2h2zm-8 2h2v2h-2v-2zm-6 0h7v7H2v-7zm2 2v3h3v-3H4zm7 3h2v2h-2v-2zm4-3h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-space">ID HAYA #{stampCount}98402</div>
                      <div className="text-xs font-semibold text-slate-200 flex items-center gap-1 group-hover/qr:text-[#00ffcc]">
                        <span>Ver certificado</span>
                        <ExternalLink className="w-3 h-3 text-[#00ffcc]" />
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Firma OK</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom Footer inside Document Card */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <button
                  id="btn-re-stamp"
                  onClick={handleReStamp}
                  className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer group/stamp"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#ffe04a] ${isStamping ? 'animate-spin' : 'group-hover/stamp:rotate-180'} transition-transform`} />
                  <span>👉 Clic aquí para volver a sellar</span>
                </button>

                <button
                  id="btn-doc-express"
                  onClick={onViewDocument}
                  className="text-[#00ffcc] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Trámite express ⚡</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
