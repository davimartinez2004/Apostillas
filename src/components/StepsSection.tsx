import { STEPS_DATA } from '../data/content';

export function StepsSection() {
  return (
    <section className="py-16 sm:py-20 relative bg-[#080811]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#22101e] text-[#ff80ab] border border-[#ff2d78]/40 shadow-[0_0_12px_rgba(255,45,120,0.2)] mb-3">
            <span>FÁCIL, SIN LETRAS CHICAS ⚡</span>
          </div>
          <h2 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            En 3 simples pasos estás listo ⚡
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Olvídate de madrugar o entender códigos de leyes aburridos.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS_DATA.map((step) => (
            <div
              key={step.number}
              className="bg-[#0e0e1a] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00ffcc]/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Header inside Step card */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border ${step.badgeColor}`}>
                  {step.number}
                </div>
                <div className="text-xl sm:text-2xl p-2 rounded-xl bg-[#17172b] border border-white/5">
                  {step.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-sora font-bold text-base sm:text-lg text-white mb-2 group-hover:text-[#00ffcc] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative track bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]" />
                <span>Paso {step.number} de 3 100% digital</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
