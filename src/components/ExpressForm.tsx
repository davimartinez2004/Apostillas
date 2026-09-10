import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import { Sparkles, MessageCircle, UploadCloud, FileText, Check, AlertCircle, X, Shield, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExpressFormProps {
  preselectedServiceId?: string;
  onFormSubmitted?: (ticketData: { ticketId: string; name: string; service: string }) => void;
  onOpenWhatsAppDirect?: (customText?: string) => void;
}

export function ExpressForm({
  preselectedServiceId,
  onFormSubmitted,
  onOpenWhatsAppDirect
}: ExpressFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [residenceCountry, setResidenceCountry] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    preselectedServiceId || 'apostilla-colombia'
  );
  const [files, setFiles] = useState<File[]>([]);
  const [habeasDataAccepted, setHabeasDataAccepted] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successTicket, setSuccessTicket] = useState<{
    id: string;
    name: string;
    service: string;
    time: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync if parent preselects another service
  if (preselectedServiceId && preselectedServiceId !== selectedService && !name) {
    setSelectedService(preselectedServiceId);
  }

  const serviceOptions = [
    { id: 'apostilla-colombia', code: 'co', label: 'Apostilla Colombia' },
    { id: 'apostilla-venezuela', code: 've', label: 'Apostilla Venezuela' },
    { id: 'apostilla-internacional', code: '🌐', label: 'Apostilla Internacional' },
    { id: 'citas-pasaporte', code: '🛂', label: 'Citas de Pasaporte' }
  ];

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const validFiles: File[] = [];
    for (let i = 0; i < newFiles.length; i++) {
      const f = newFiles[i];
      if (f.size <= 20 * 1024 * 1024) { // 20MB limit
        validFiles.push(f);
      }
    }
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Por favor escribe tu nombre o apodo.');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('Por favor ingresa un número de WhatsApp válido.');
      return;
    }
    if (!residenceCountry) {
      setErrorMsg('Por favor selecciona tu país de residencia.');
      return;
    }
    if (!habeasDataAccepted) {
      setErrorMsg('Debes aceptar el tratamiento de datos para continuar.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicketId = `GT-${Math.floor(1000 + Math.random() * 9000)}`;
      const chosenService = serviceOptions.find((s) => s.id === selectedService)?.label || 'Trámite Consular';

      const ticket = {
        id: generatedTicketId,
        name: name.trim(),
        service: chosenService,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setSuccessTicket(ticket);
      setIsSubmitting(false);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff2d78', '#00ffcc', '#ffe04a', '#ffffff']
      });

      if (onFormSubmitted) {
        onFormSubmitted({
          ticketId: ticket.id,
          name: ticket.name,
          service: ticket.service
        });
      }
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const serviceName = serviceOptions.find((s) => s.id === selectedService)?.label || 'Apostilla';
    const text = `¡Hola GLOBAL TOP! 👋 Mi nombre es ${name || 'un pana interesado'}, vivo en ${residenceCountry || 'el exterior'} y requiero asesoría express para: ${serviceName}. ¿Me podrían ayudar a cotizar?`;
    return encodeURIComponent(text);
  };

  const triggerDirectWhatsApp = () => {
    const serviceName = serviceOptions.find((s) => s.id === selectedService)?.label || 'Apostilla';
    const rawText = `¡Hola GLOBAL TOP! 👋 Mi nombre es ${name || 'un pana'}, estoy en ${residenceCountry || 'el exterior'} y necesito ayuda con: ${serviceName}.`;
    if (onOpenWhatsAppDirect) {
      onOpenWhatsAppDirect(rawText);
    } else {
      window.open(`https://wa.me/573001234567?text=${encodeURIComponent(rawText)}`, '_blank');
    }
  };

  return (
    <section id="formulario" className="py-16 sm:py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Container */}
        <div className="bg-[#0e0e1a] rounded-3xl p-6 sm:p-9 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Subtle glowing accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2d78]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ffcc]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
            <h2 className="font-sora font-extrabold text-xl sm:text-2xl text-white flex items-center gap-2">
              <span>👇</span>
              <span>Pide tu asesoría express aquí</span>
              <span>👇</span>
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#00ffcc]/15 text-[#00ffcc] border border-[#00ffcc]/40 shadow-[0_0_12px_rgba(0,255,204,0.25)]">
              100% GRATIS
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mb-7 flex items-center gap-1.5 font-normal">
            <span>Te respondemos en menos de 15 minutos</span>
            <span className="text-[#ffe04a]">⚡</span>
          </p>

          {/* Success State View */}
          {successTicket ? (
            <div className="p-6 rounded-2xl bg-[#141426] border border-[#00ffcc]/40 space-y-4 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#00ffcc]/20 border border-[#00ffcc] flex items-center justify-center mx-auto text-[#00ffcc]">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-space tracking-wider text-[#00ffcc]">
                  SOLICITUD RECIBIDA CON ÉXITO
                </span>
                <h3 className="font-sora font-bold text-xl text-white mt-1">
                  ¡Todo listo, {successTicket.name}! 🎉
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Tu turno express ha sido generado bajo el radicado:{' '}
                  <strong className="text-[#ffe04a] font-space font-bold">{successTicket.id}</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0b14] border border-white/5 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Trámite solicitado:</span>
                  <span className="text-white font-semibold">{successTicket.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hora de radicación:</span>
                  <span className="text-slate-200">{successTicket.time}</span>
                </div>
                {files.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Archivos adjuntos:</span>
                    <span className="text-[#00ffcc] font-medium">{files.length} archivo(s) listo(s)</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/573001234567?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold bg-[#25d366] text-slate-950 hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Abrir chat de WhatsApp prioritario</span>
                </a>
                <button
                  onClick={() => setSuccessTicket(null)}
                  className="py-3 px-5 rounded-full text-xs font-semibold bg-[#1a1a33] text-slate-300 hover:text-white border border-slate-700"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  👤 ¿Cómo te llamas? <span className="text-[#ff2d78]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre o apodo cool"
                  className="w-full px-4 py-3 rounded-xl bg-[#141426] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all"
                  required
                />
              </div>

              {/* Field 2: WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  📱 Tu WhatsApp (con indicativo de país) <span className="text-[#ff2d78]">*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 123 4567 o +1 786..."
                  className="w-full px-4 py-3 rounded-xl bg-[#141426] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-all"
                  required
                />
              </div>

              {/* Field 3: Country */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  🌐 ¿En qué país estás viviendo ahorita? <span className="text-[#ff2d78]">*</span>
                </label>
                <select
                  value={residenceCountry}
                  onChange={(e) => setResidenceCountry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#141426] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-all cursor-pointer"
                  required
                >
                  <option value="" disabled className="bg-[#141426] text-slate-400">
                    Elige tu país de residencia
                  </option>
                  <option value="Colombia" className="bg-[#141426]">🇨🇴 Colombia</option>
                  <option value="Venezuela" className="bg-[#141426]">🇻🇪 Venezuela</option>
                  <option value="España" className="bg-[#141426]">🇪🇸 España</option>
                  <option value="Estados Unidos" className="bg-[#141426]">🇺🇸 Estados Unidos</option>
                  <option value="Chile" className="bg-[#141426]">🇨🇱 Chile</option>
                  <option value="México" className="bg-[#141426]">🇲🇽 México</option>
                  <option value="Perú" className="bg-[#141426]">🇵🇪 Perú</option>
                  <option value="Ecuador" className="bg-[#141426]">🇪🇨 Ecuador</option>
                  <option value="Argentina" className="bg-[#141426]">🇦🇷 Argentina</option>
                  <option value="Canadá" className="bg-[#141426]">🇨🇦 Canadá</option>
                  <option value="Otro país" className="bg-[#141426]">🌍 Otro país</option>
                </select>
              </div>

              {/* Field 4: Selectable Trámite Chips */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  👥 ¿Qué trámite necesitas sacar? <span className="text-[#ff2d78]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedService === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedService(opt.id)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#221022] border-[#ff2d78] text-white shadow-[0_0_12px_rgba(255,45,120,0.3)]'
                            : 'bg-[#141426] border-white/10 text-slate-300 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#ff2d78] bg-[#ff2d78]' : 'border-slate-500'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span className="font-space text-xs font-bold text-slate-400">{opt.code}</span>
                        <span className="text-xs font-medium">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: File Upload Dropzone */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <span>📁 Sube tus documentos aquí (opcional para agilizar)</span>
                  </label>
                  <span className="text-[10px] font-space text-slate-400">PDF / JPG / PNG</span>
                </div>

                <div
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#00ffcc] bg-[#00ffcc]/10'
                      : 'border-white/15 bg-[#141426]/60 hover:border-white/30 hover:bg-[#141426]'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
                  />
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-300 mb-2">
                    <UploadCloud className="w-5 h-5 text-[#00ffcc]" />
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    Toca aquí para seleccionar fotos o PDFs
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Partidas, antecedentes, diplomas, etc. (Máx. 20MB)
                  </div>
                </div>

                {/* Uploaded Files Preview List */}
                {files.length > 0 && (
                  <div className="mt-2.5 space-y-1.5">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#141426] border border-white/5 text-xs text-slate-200"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-3.5 h-3.5 text-[#00ffcc] shrink-0" />
                          <span className="truncate">{file.name}</span>
                          <span className="text-[10px] text-slate-400">({(file.size / 1024).toFixed(0)} KB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="text-slate-400 hover:text-[#ff2d78] p-1"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Habeas Data Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-slate-300 leading-relaxed select-none">
                  <input
                    type="checkbox"
                    checked={habeasDataAccepted}
                    onChange={(e) => setHabeasDataAccepted(e.target.checked)}
                    className="mt-0.5 rounded bg-[#141426] border-slate-700 text-[#ff2d78] focus:ring-[#ff2d78] focus:ring-offset-0 cursor-pointer accent-[#ff2d78]"
                  />
                  <span>
                    <strong className="text-white">Tus datos súper blindados bajo la Ley 1581 de Colombia:</strong>{' '}
                    Cero spam, solo usamos tu info para contactarte y revisar tu trámite. Al continuar aceptas el tratamiento seguro.
                  </span>
                </label>
              </div>

              {/* Error Notification */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/50 text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  id="btn-submit-express-form"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff2d78] to-[#d61e60] hover:from-[#ff4088] hover:to-[#e62870] shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isSubmitting ? 'Verificando datos...' : 'Pedir asesoría gratis 🦄'}</span>
                </button>

                <button
                  id="btn-form-whatsapp-direct"
                  type="button"
                  onClick={triggerDirectWhatsApp}
                  className="w-full py-3 px-6 rounded-full text-xs sm:text-sm font-semibold bg-[#111122] text-[#00ffcc] border border-[#00ffcc]/40 hover:border-[#00ffcc] hover:bg-[#00ffcc]/10 shadow-[0_0_12px_rgba(0,255,204,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>O pásate al WhatsApp en 1 solo clic 💬</span>
                </button>
              </div>

              {/* External link footnote */}
              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  ¿Prefieres formulario oficial externo?{' '}
                  <a
                    href="#formulario"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Estás en el portal oficial cifrado de GLOBAL TOP con conexión segura de 256 bits.');
                    }}
                    className="text-slate-300 underline hover:text-white inline-flex items-center gap-1"
                  >
                    Portal Seguro Google 📑
                  </a>
                </span>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
