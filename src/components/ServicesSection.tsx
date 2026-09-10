import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string, serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getBadgeStyle = (type: ServiceItem['badgeType']) => {
    switch (type) {
      case 'cancilleria':
        return 'bg-[#ff2d78]/15 text-[#ff2d78] border-[#ff2d78]/40';
      case 'saren':
        return 'bg-[#00ffcc]/15 text-[#00ffcc] border-[#00ffcc]/40';
      case 'lahaya':
        return 'bg-[#ffe04a]/15 text-[#ffe04a] border-[#ffe04a]/40';
      case 'vip':
        return 'bg-[#d946ef]/15 text-[#d946ef] border-[#d946ef]/40';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <section id="servicios" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0d2229] text-[#00ffcc] border border-[#00ffcc]/40 shadow-[0_0_12px_rgba(0,255,204,0.2)] mb-3">
            <span>CERO VUELTAS, TE AYUDAMOS CON TODO ESTO ✍️</span>
          </div>
          <h2 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Elige tu trámite y nosotros hacemos el resto 🚀
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Toca el que necesitas para cotizarlo al instante sin compromiso alguno.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`card-service-${service.id}`}
              className="bg-[#0e0e1a] rounded-2xl p-6 border border-white/10 hover:border-[#ff2d78]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,45,120,0.15)] relative overflow-hidden"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff2d78]/30 to-transparent group-hover:via-[#ff2d78] transition-all" />

              <div>
                {/* Header row with Code and Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-space font-bold text-lg text-slate-100 flex items-center gap-1">
                    <span>{service.code}</span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${getBadgeStyle(service.badgeType)}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <h3 className="font-sora font-bold text-base sm:text-lg text-white group-hover:text-[#00ffcc] transition-colors">
                  {service.title} <span className="text-xs font-normal text-slate-400">{service.countryFlag}</span>
                </h3>
                <div className="text-xs text-slate-400 mt-0.5 font-normal mb-5">
                  {service.subtitle}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ffe04a] text-xs mt-0.5 shrink-0">🔸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                id={`btn-cotizar-${service.id}`}
                onClick={() => onSelectService(service.id, service.title)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-100 bg-[#16162a] border border-white/10 group-hover:border-[#ff2d78] group-hover:bg-[#ff2d78] group-hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-[0_0_15px_rgba(255,45,120,0.4)]"
              >
                <span>Cotizar al toque</span>
                <span className="text-xs">⚡</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
