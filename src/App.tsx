import { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StepsSection } from './components/StepsSection';
import { ExpressForm } from './components/ExpressForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RouletteModal } from './components/RouletteModal';
import { TrackingModal } from './components/TrackingModal';
import { PaymentModal } from './components/PaymentModal';
import { DocumentModal } from './components/DocumentModal';

export default function App() {
  const [rouletteOpen, setRouletteOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('apostilla-colombia');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceId: string, serviceTitle: string) => {
    setPreselectedService(serviceId);
    scrollToSection('formulario');
  };

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
    scrollToSection('formulario');
  };

  const openWhatsApp = (customText?: string) => {
    const message = customText || '¡Hola GLOBAL TOP! 👋 Necesito asesoría express para apostillar mis documentos.';
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] text-slate-100 flex flex-col font-inter relative selection:bg-[#ff2d78] selection:text-white">
      
      {/* 1. Top Ticker Banner */}
      <TopBanner onOpenRoulette={() => setRouletteOpen(true)} />

      {/* 2. Sticky Navbar */}
      <Navbar
        onOpenPayment={() => setPaymentOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Applied Coupon Floating Notification if won in roulette */}
        {appliedCoupon && (
          <div className="bg-[#ff2d78]/15 border-b border-[#ff2d78]/30 py-2 px-4 text-center text-xs font-semibold text-[#ff80ab] flex items-center justify-center gap-2">
            <span>🎉 Cupón activado: <strong className="font-space text-white">{appliedCoupon}</strong> listo para tu asesoría!</span>
            <button
              onClick={() => setAppliedCoupon(null)}
              className="text-slate-400 hover:text-white text-xs underline ml-2"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* 3. Hero Section with Interactive Document Card */}
        <Hero
          onScrollToSection={scrollToSection}
          onOpenWhatsApp={() => openWhatsApp()}
          onViewDocument={() => setDocumentOpen(true)}
        />

        {/* 4. Services Grid Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. 3 Simple Steps Section */}
        <StepsSection />

        {/* 6. Interactive Express Form Section */}
        <ExpressForm
          preselectedServiceId={preselectedService}
          onOpenWhatsAppDirect={(msg) => openWhatsApp(msg)}
        />

        {/* 7. Testimonials Section */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion Section */}
        <FaqSection />

        {/* 9. Bottom CTA Section */}
        <CtaBanner
          onOpenPayment={() => setPaymentOpen(true)}
          onOpenWhatsApp={() => openWhatsApp()}
        />

      </main>

      {/* 10. Footer */}
      <Footer onScrollToSection={scrollToSection} />

      {/* 11. Sticky WhatsApp Consular Button */}
      <FloatingWhatsApp onDirectChat={() => openWhatsApp()} />

      {/* Interactive Modals */}
      <RouletteModal
        isOpen={rouletteOpen}
        onClose={() => setRouletteOpen(false)}
        onApplyCoupon={handleApplyCoupon}
      />

      <TrackingModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
        onViewDocument={() => {
          setTrackingOpen(false);
          setDocumentOpen(true);
        }}
      />

      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
      />

      <DocumentModal
        isOpen={documentOpen}
        onClose={() => setDocumentOpen(false)}
      />

    </div>
  );
}
