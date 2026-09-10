import { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="dudas" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0f232b] text-[#00ffcc] border border-[#00ffcc]/40 shadow-[0_0_12px_rgba(0,255,204,0.2)] mb-3">
            <span>RESPUESTAS CLARAS 💬</span>
          </div>
          <h2 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Preguntas que todos nos hacen 🤔
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0e0e1a] rounded-2xl border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  id={`btn-faq-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-sora font-semibold text-xs sm:text-sm text-slate-100 flex items-center gap-2">
                    <span className="text-[#ff2d78]">❓</span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#18182e] text-slate-300 shrink-0 transition-transform ${isOpen ? 'text-[#00ffcc] rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-[#121224]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
