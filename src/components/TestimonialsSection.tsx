import { TESTIMONIALS_DATA } from '../data/content';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="experiencias" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#211d10] text-[#ffe04a] border border-[#ffe04a]/40 shadow-[0_0_12px_rgba(255,224,74,0.2)] mb-3">
            <span>TESTIMONIOS REALES 🌟</span>
          </div>
          <h2 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Gente real viajando por el mundo gracias a nosotros 🌟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Cero dramas, cero filas. Mira cómo resolvieron sus papeles desde cualquier país.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#0e0e1a] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#ffe04a]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#ffe04a]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffe04a] text-[#ffe04a]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  {t.text}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-sora font-bold text-xs sm:text-sm text-white">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.location}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
