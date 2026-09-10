import { X, Printer, Download, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocumentModal({ isOpen, onClose }: DocumentModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0f0f1c] rounded-3xl border border-[#ff2d78]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(255,45,120,0.25)] p-6 sm:p-9 text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1b1b33] text-slate-400 hover:text-white border border-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Border Container */}
        <div className="border-2 border-slate-700/60 rounded-2xl p-5 sm:p-7 bg-[#121224] relative overflow-hidden">
          
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none text-7xl font-bold font-space text-white">
            LA HAYA 1961
          </div>

          {/* Certificate Header */}
          <div className="text-center border-b border-white/10 pb-5 mb-5">
            <div className="text-[10px] font-space tracking-widest text-[#00ffcc] uppercase font-bold">
              CONVENTION DE LA HAYE DU 5 OCTOBRE 1961
            </div>
            <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-white tracking-widest mt-1">
              APOSTILLE
            </h2>
            <div className="text-xs text-slate-400 mt-0.5">
              (Convenio de La Haya del 5 de octubre de 1961 · Apostilla Electrónica)
            </div>
          </div>

          {/* 10 Standard Hague Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
            <div>
              <span className="text-slate-400 font-medium">1. País / Country:</span>
              <div className="font-bold text-white font-space mt-0.5">COLOMBIA 🇨🇴</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">2. Firmado por / Signed by:</span>
              <div className="font-bold text-white mt-0.5">DRA. CLAUDIA MEJÍA H.</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">3. En calidad de / Acting capacity:</span>
              <div className="font-semibold text-slate-200 mt-0.5">NOTARIA / REGISTRADORA OFICIAL</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">4. Sello de / Bearing seal of:</span>
              <div className="font-semibold text-slate-200 mt-0.5">REGISTRADURÍA NACIONAL DEL ESTADO CIVIL</div>
            </div>

            <div className="sm:col-span-2 border-t border-white/5 pt-2">
              <span className="text-[#ffe04a] font-space font-bold uppercase text-[11px]">
                CERTIFICADO / CERTIFIED:
              </span>
            </div>

            <div>
              <span className="text-slate-400 font-medium">5. En / At:</span>
              <div className="font-semibold text-white mt-0.5">BOGOTÁ D.C.</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">6. El día / The:</span>
              <div className="font-semibold text-white font-space mt-0.5">10 DE SEPTIEMBRE DE 2026</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">7. Por / By:</span>
              <div className="font-semibold text-white mt-0.5">MINISTERIO DE RELACIONES EXTERIORES</div>
            </div>

            <div>
              <span className="text-slate-400 font-medium">8. Bajo el número / Under No:</span>
              <div className="font-bold text-[#ff2d78] font-space text-sm mt-0.5">
                APOST-GT-2026-98402
              </div>
            </div>
          </div>

          {/* Titular & Document Details Highlight Box */}
          <div className="mt-5 p-3.5 rounded-xl bg-[#0a0a14] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-space text-slate-400">TITULAR DEL DOCUMENTO</span>
              <div className="font-sora font-bold text-sm text-white">SANTIAGO ROJAS M.</div>
              <div className="text-xs text-slate-300">Documento: Partida de Nacimiento + Título Académico</div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff2d78]/20 text-[#ff2d78] border border-[#ff2d78]/50 shadow-[0_0_12px_rgba(255,45,120,0.3)]">
                100% VÁLIDO & VIGENTE
              </span>
            </div>
          </div>

          {/* Sello / QR validation Section */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                  <path d="M2 2h7v7H2V2zm2 2v3h3V4H4zm5 0h2v2H9V4zm2 2h2v2h-2V6zm-2 2h2v2H9V8zm6-6h7v7h-7V2zm2 2v3h3V4h-3zm-2 5h2v2h-2V9zm4 0h2v4h-2v-2h-2v-2h2zm2 4h1v2h-3v-2h2zm-8 2h2v2h-2v-2zm-6 0h7v7H2v-7zm2 2v3h3v-3H4zm7 3h2v2h-2v-2zm4-3h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                </svg>
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00ffcc]" />
                  <span>Firma Electrónica Avanzada (SHA-256)</span>
                </div>
                <div className="font-mono text-[10px] text-slate-500">
                  Hash: 8f4b29c1e920d3f8a04b68ef5d89
                </div>
                <div className="text-emerald-400 font-semibold">
                  ✓ Validado ante Cancillería y Convenio de La Haya
                </div>
              </div>
            </div>

            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#ffe04a]/70 flex flex-col items-center justify-center text-center text-[9px] font-bold text-[#ffe04a] rotate-[-8deg] shrink-0">
              <span>★ CANCILLERÍA ★</span>
              <span className="text-[10px]">SELLO</span>
              <span>OFICIAL</span>
            </div>
          </div>

        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#18182f] text-slate-200 hover:text-white border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#00ffcc]" />
            <span>Imprimir Certificado</span>
          </button>

          <button
            onClick={() => alert('Descarga de certificado oficial en PDF cifrado completada.')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-[#00ffcc] hover:bg-[#20fce2] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,204,0.3)]"
          >
            <Download className="w-4 h-4" />
            <span>Descargar PDF Oficial</span>
          </button>
        </div>

      </div>
    </div>
  );
}
