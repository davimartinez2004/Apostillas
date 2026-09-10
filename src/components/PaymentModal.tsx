import { useState, FormEvent } from 'react';
import { X, CreditCard, CheckCircle2, ShieldCheck, Lock, ArrowRight, Building2, Smartphone, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [method, setMethod] = useState<'pse' | 'card' | 'nequi' | 'zelle' | 'paypal'>('pse');
  const [currency, setCurrency] = useState<'COP' | 'USD' | 'EUR'>('COP');
  const [amount, setAmount] = useState('85000');
  const [clientName, setClientName] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [receipt, setReceipt] = useState<{
    reference: string;
    authCode: string;
    date: string;
    total: string;
  } | null>(null);

  if (!isOpen) return null;

  const handlePay = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedRef = `PAY-GT-${Math.floor(100000 + Math.random() * 900000)}`;
      const auth = `AUT-${Math.floor(1000 + Math.random() * 9000)}`;
      const formattedTotal = `${currency === 'COP' ? '$' : currency === 'USD' ? '$' : '€'}${Number(amount).toLocaleString()} ${currency}`;

      setReceipt({
        reference: generatedRef,
        authCode: auth,
        date: new Date().toLocaleString(),
        total: formattedTotal
      });

      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#00ffcc', '#ffe04a', '#ff2d78']
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0e0e1a] rounded-3xl border border-[#00ffcc]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,204,0.2)] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
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
            <Lock className="w-3.5 h-3.5" />
            <span>PORTAL SEGURO DE PAGO</span>
          </div>
          <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-white">
            Pagar trámite consular 💳
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Sin recargos sorpresa. Factura legal y comprobante inmediato.
          </p>
        </div>

        {receipt ? (
          /* Payment Receipt */
          <div className="p-6 rounded-2xl bg-[#141426] border border-[#00ffcc]/40 space-y-4 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] font-space tracking-wider uppercase text-emerald-400">
                TRANSACCIÓN APROBADA EXITOSAMENTE
              </span>
              <h4 className="font-sora font-bold text-xl text-white mt-0.5">
                ¡Pago Confirmado! 🎉
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Comprobante oficial de radicación consular.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0a0a14] border border-white/5 text-left text-xs space-y-2.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Referencia:</span>
                <span className="font-space font-bold text-[#ffe04a]">{receipt.reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Código de Autorización:</span>
                <span className="text-slate-200 font-mono">{receipt.authCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fecha y Hora:</span>
                <span className="text-slate-200">{receipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Método:</span>
                <span className="text-white uppercase font-semibold">{method}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 font-bold text-sm">
                <span className="text-white">Total Pagado:</span>
                <span className="text-[#00ffcc]">{receipt.total}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-full text-xs font-bold text-slate-950 bg-[#00ffcc] hover:bg-[#20fce2] transition-all shadow-[0_0_15px_rgba(0,255,204,0.3)]"
            >
              Listo, cerrar comprobante
            </button>
          </div>
        ) : (
          /* Payment Form */
          <form onSubmit={handlePay} className="space-y-4">
            
            {/* Method selection tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-2">
                Selecciona método de pago:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {[
                  { id: 'pse', label: 'PSE', icon: '🏛️' },
                  { id: 'card', label: 'Tarjeta', icon: '💳' },
                  { id: 'nequi', label: 'Nequi', icon: '📱' },
                  { id: 'zelle', label: 'Zelle', icon: '🇺🇸' },
                  { id: 'paypal', label: 'PayPal', icon: '🌐' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setMethod(m.id as any);
                      if (m.id === 'zelle' || m.id === 'paypal') {
                        setCurrency('USD');
                        setAmount('35');
                      } else {
                        setCurrency('COP');
                        setAmount('85000');
                      }
                    }}
                    className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      method === m.id
                        ? 'bg-[#1e1c38] border-[#00ffcc] text-white shadow-[0_0_12px_rgba(0,255,204,0.25)]'
                        : 'bg-[#141426] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-base mb-0.5">{m.icon}</div>
                    <div className="font-semibold text-[11px]">{m.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Currency & Amount */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Moneda
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[#141426] border border-white/10 text-white text-xs focus:border-[#00ffcc]"
                >
                  <option value="COP">COP ($ Pesos)</option>
                  <option value="USD">USD ($ Dólares)</option>
                  <option value="EUR">EUR (€ Euros)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Monto a pagar
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#141426] border border-white/10 text-white text-xs font-mono focus:border-[#00ffcc]"
                  required
                />
              </div>
            </div>

            {/* Client Info */}
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Nombre del titular
              </label>
              <input
                type="text"
                placeholder="Nombre completo"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141426] border border-white/10 text-white text-xs focus:border-[#00ffcc]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Correo para factura electrónica
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141426] border border-white/10 text-white text-xs focus:border-[#00ffcc]"
                required
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-[#00ffcc] hover:bg-[#20fce2] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,204,0.4)] cursor-pointer disabled:opacity-60"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {isProcessing
                    ? 'Procesando pago seguro...'
                    : `Pagar ${currency === 'COP' ? '$' : currency === 'USD' ? '$' : '€'}${Number(amount).toLocaleString()} ${currency}`}
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ffcc]" />
              <span>Conexión cifrada bancaria de extremo a extremo</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
