import { useState } from 'react';
import type { Motorcycle } from '../types';
import { X, Calendar, CheckCircle2, Lock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBike: Motorcycle | null;
  allBikes: Motorcycle[];
}

export const BookingModal = ({
  isOpen,
  onClose,
  selectedBike,
  allBikes,
}: BookingModalProps) => {
  const [currentBike, setCurrentBike] = useState<Motorcycle | null>(selectedBike || allBikes[0]);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [days, setDays] = useState<number>(3);
  const [insurance, setInsurance] = useState<'basic' | 'premium' | 'ultimate'>('premium');
  const [helmetIncluded] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const bikeToBook = currentBike || selectedBike || allBikes[0];
  const insurancePrice = insurance === 'basic' ? 0 : insurance === 'premium' ? 80 : 150;
  const helmetPrice = helmetIncluded ? 35 : 0;
  const subtotal = (bikeToBook.pricePerDay + insurancePrice) * days + helmetPrice;
  const securityDeposit = 1500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const message = `*APEX RIDERS MOTORCYCLE RESERVATION*\n` +
      `----------------------------------\n` +
      `*Customer Name:* ${formData.name || 'Rider'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n\n` +
      `*Machine:* ${bikeToBook.brand} ${bikeToBook.name} (${bikeToBook.engineCc} cc)\n` +
      `*Pickup Date:* ${startDate}\n` +
      `*Duration:* ${days} Day(s)\n` +
      `*Insurance Shield:* ${insurance.toUpperCase()}\n\n` +
      `*Total Payment:* RM ${subtotal} MYR\n` +
      `----------------------------------\n` +
      `Please confirm my reservation & pickup instructions!`;

    const whatsappUrl = `https://wa.me/601130719502?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto">
        
        {/* Sticky Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            <h2 id="booking-modal-title" className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              {isSuccess ? 'RESERVATION CONFIRMED' : 'SUPERBIKE RESERVATION'}
            </h2>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer outline-none focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body with Smooth Vertical Scrolling */}
        <div className="overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="p-6 sm:p-12 text-center flex flex-col items-center justify-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">RESERVATION CONFIRMED!</h2>
                <p className="text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed">
                  Your <span className="text-amber-400 font-bold">{bikeToBook.brand} {bikeToBook.name}</span> reservation is ready. We have dispatched your booking receipt and pickup instructions to <span className="text-slate-200 font-semibold">{formData.email || 'your email'}</span>.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left w-full max-w-md space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Duration:</span>
                  <span className="text-white font-semibold">{days} Days (Starts {startDate})</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Coverage Tier:</span>
                  <span className="text-amber-400 font-semibold uppercase">{insurance} Shield</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Total Payment:</span>
                  <span className="text-white font-bold">RM {subtotal} MYR</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/601130719502?text=${encodeURIComponent(
                    `*APEX RIDERS MOTORCYCLES*\n------------------\n*Customer:* ${formData.name || 'Rider'}\n*Bike:* ${bikeToBook.brand} ${bikeToBook.name}\n*Date:* ${startDate} (${days} Days)\n*Total:* RM ${subtotal} MYR`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs tracking-wider transition-colors border border-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>OPEN WHATSAPP AGAIN</span>
                </a>

                <button
                  onClick={() => { setIsSuccess(false); onClose(); }}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-amber-500 text-slate-950 font-bold text-xs tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  DONE & RETURN TO HOMEPAGE
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Bike Preview Column */}
              <div className="md:col-span-2 bg-slate-950 p-5 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
                <div>
                  <label htmlFor="select-booking-machine" className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                    Selected Machine
                  </label>
                  
                  <select
                    id="select-booking-machine"
                    name="machine"
                    autoComplete="off"
                    value={bikeToBook.id}
                    onChange={(e) => {
                      const found = allBikes.find(b => b.id === e.target.value);
                      if (found) setCurrentBike(found);
                    }}
                    className="w-full mb-4 bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  >
                    {allBikes.map(b => (
                      <option key={b.id} value={b.id}>
                        {b.brand} {b.name} (RM {b.pricePerDay}/day)
                      </option>
                    ))}
                  </select>

                  <div className="relative rounded-2xl overflow-hidden mb-4 border border-slate-800">
                    <img
                      src={bikeToBook.image}
                      alt={bikeToBook.name}
                      className="w-full h-36 sm:h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Power:</span>
                      <span className="text-slate-200 font-semibold">{bikeToBook.hp} HP</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Engine:</span>
                      <span className="text-slate-200 font-semibold">{bikeToBook.engineCc} cc</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Top Speed:</span>
                      <span className="text-amber-400 font-semibold">{bikeToBook.topSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Rental Rate ({days}d):</span>
                    <span>RM {bikeToBook.pricePerDay * days}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Insurance Tier ({insurance}):</span>
                    <span>RM {insurancePrice * days}</span>
                  </div>
                  {helmetIncluded && (
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>AGV Helmet Kit:</span>
                      <span>RM 35</span>
                    </div>
                  )}

                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-800 font-heading">
                    <span className="text-xs font-bold text-white uppercase">Total Amount:</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-500">RM {subtotal}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 text-center pt-1">
                    *Hold authorization of RM {securityDeposit} deposit at pickup.
                  </p>
                </div>
              </div>

              {/* Right Booking Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 p-5 sm:p-6 space-y-4">
                <h3 className="font-heading text-sm sm:text-base font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Rental Dates & Package</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="startDate" className="block text-xs font-semibold text-slate-400 mb-1">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      autoComplete="off"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="days" className="block text-xs font-semibold text-slate-400 mb-1">
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      id="days"
                      name="days"
                      autoComplete="off"
                      min="1"
                      max="30"
                      value={days}
                      onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-slate-400 mb-1">
                    Protection & Insurance Package
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'basic', label: 'Basic', price: '+RM 0' },
                      { id: 'premium', label: 'Full Damage', price: '+RM 80/d' },
                      { id: 'ultimate', label: 'Zero Excess', price: '+RM 150/d' },
                    ].map((pkg) => (
                      <button
                        type="button"
                        key={pkg.id}
                        onClick={() => setInsurance(pkg.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          insurance === pkg.id
                            ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold">{pkg.label}</div>
                        <div className="text-[10px] text-slate-500">{pkg.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-heading text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Renter Details
                  </h4>

                  <div>
                    <label htmlFor="renterName" className="block text-[11px] font-medium text-slate-400 mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      id="renterName"
                      name="name"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="renterEmail" className="block text-[11px] font-medium text-slate-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="renterEmail"
                        name="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 truncate"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="renterPhone" className="block text-[11px] font-medium text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="renterPhone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+60 12-345 6789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  id="confirm-booking-submit-btn"
                  className="w-full py-3.5 mt-4 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Lock className="w-4 h-4" />
                  <span>CONFIRM & BOOK (RM {subtotal})</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
