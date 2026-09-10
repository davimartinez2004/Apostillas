import { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onDirectChat?: () => void;
}

export function FloatingWhatsApp({ onDirectChat }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendCustomMessage = () => {
    const text = message.trim() || '¡Hola GLOBAL TOP! 👋 Necesito información sobre apostillas y trámites consulares.';
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#0e0e1a] rounded-2xl border border-[#00ffcc]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,204,0.2)] overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#141426] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25d366]/20 border border-[#25d366] flex items-center justify-center text-[#25d366]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00ffcc] ring-2 ring-[#0e0e1a]" />
              </div>
              <div>
                <div className="font-sora font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>Asesor Consular Online</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 font-normal">Activo</span>
                </div>
                <div className="text-[10px] text-slate-400">GLOBAL TOP · Trámites sin rollos</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 bg-[#0a0a12]/80 max-h-60 overflow-y-auto text-xs">
            <div className="bg-[#17172e] p-3 rounded-2xl rounded-tl-sm border border-white/5 text-slate-200 space-y-1">
              <p className="font-semibold text-[#00ffcc]">¡Qué más, pana! 👋</p>
              <p>¿Qué documento necesitas apostillar o qué cita requieres hoy? Cuéntanos y te damos precio y tiempos exactos en menos de 10 minutos.</p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 justify-end">
              <span>Respuesta promedio: 3 min ⚡</span>
            </div>
          </div>

          {/* Input & Send */}
          <div className="p-3 bg-[#121222] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendCustomMessage()}
              placeholder="Escribe tu consulta aquí..."
              className="flex-1 bg-[#18182f] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#00ffcc]"
            />
            <button
              onClick={sendCustomMessage}
              className="p-2.5 rounded-xl bg-[#25d366] text-slate-950 hover:bg-[#20ba59] transition-all font-bold shrink-0 shadow-[0_0_10px_rgba(37,211,102,0.4)]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Button matching the screenshot */}
      <button
        id="btn-floating-whatsapp"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-[#00ffcc] hover:bg-[#20fce2] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,204,0.5)] cursor-pointer hover:scale-105 active:scale-95 select-none"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp Consular</span>
      </button>
    </div>
  );
}
