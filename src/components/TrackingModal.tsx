import { useState, FormEvent } from 'react';
import { DEMO_TRACKING } from '../data/content';
import { TrackingRecord } from '../types';
import { X, Search, CheckCircle2, Clock, QrCode, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDocument: () => void;
}

export function TrackingModal({ isOpen, onClose, onViewDocument }: TrackingModalProps) {
  const [searchCode, setSearchCode] = useState('GT-2026-SR');
  const [currentRecord, setCurrentRecord] = useState<TrackingRecord | null>(DEMO_TRACKING['GT-2026-SR']);
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchCode.trim().toUpperCase();
    const found = DEMO_TRACKING[query] || Object.values(DEMO_TRACKING).find(r => r.code.includes(query) || r.clientName.toUpperCase().includes(query));
    setCurrentRecord(found || null);
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0e0e1a] rounded-3xl border border-[#00ffcc]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,204,0.2)] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#18182f] text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00ffcc]/15 text-[#00ffcc] border border-[#00ffcc]/40 shadow-[0_0_12px_rgba(0,255,204,0.2)] mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>RASTREADOR EN TIEMPO REAL</span>
          </div>
          <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-white">
            ¿Cómo va tu trámite consular? ⚡
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Digita tu código de radicado para ver el estado del sello en Cancillería.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Ej: GT-2026-SR o GT-VEN-4102"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141426] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm font-space focus:outline-none focus:border-[#00ffcc]"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00ffcc] text-slate-950 hover:bg-[#20fce2] transition-all shrink-0 cursor-pointer"
          >
            Consultar
          </button>
        </form>

        {/* Quick Demo Badges */}
        <div className="flex items-center gap-2 mb-6 text-[11px] text-slate-400 flex-wrap">
          <span>Probar radicados de ejemplo:</span>
          <button
            type="button"
            onClick={() => {
              setSearchCode('GT-2026-SR');
              setCurrentRecord(DEMO_TRACKING['GT-2026-SR']);
            }}
            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-[#00ffcc] font-space cursor-pointer"
          >
            GT-2026-SR (Listo)
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchCode('GT-VEN-4102');
              setCurrentRecord(DEMO_TRACKING['GT-VEN-4102']);
            }}
            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-[#ffe04a] font-space cursor-pointer"
          >
            GT-VEN-4102 (En proceso)
          </button>
        </div>

        {/* Result Card */}
        {currentRecord ? (
          <div className="space-y-5 bg-[#141426] rounded-2xl p-5 border border-white/10">
            
            {/* Record Summary */}
            <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] font-space text-slate-400 uppercase tracking-widest">
                  RADICADO {currentRecord.code}
                </span>
                <h4 className="font-sora font-bold text-base text-white mt-0.5">
                  {currentRecord.clientName}
                </h4>
                <div className="text-xs text-slate-300 mt-0.5">
                  {currentRecord.documentType} ({currentRecord.country})
                </div>
              </div>

              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                currentRecord.status === 'apostillado'
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
              }`}>
                {currentRecord.statusText}
              </span>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3.5">
              {currentRecord.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs ${
                    step.completed
                      ? 'bg-[#00ffcc]/20 text-[#00ffcc] border border-[#00ffcc]'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {step.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${step.completed ? 'text-white' : 'text-slate-400'}`}>
                        {step.title}
                      </span>
                      {step.date && <span className="text-[10px] text-slate-400 font-space">{step.date}</span>}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificate Action */}
            {currentRecord.status === 'apostillado' && (
              <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sello de La Haya verificado con código QR</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onViewDocument();
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#00ffcc] text-slate-950 hover:bg-[#20fce2] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Documento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>
        ) : (
          searched && (
            <div className="text-center p-8 bg-[#141426] rounded-2xl border border-white/5 text-slate-400 text-xs">
              <p className="text-white font-medium text-sm mb-1">No encontramos ese radicado</p>
              <p>Revisa el código o consúltanos por WhatsApp con tu número de documento.</p>
            </div>
          )
        )}

      </div>
    </div>
  );
}
