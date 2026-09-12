import { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, Phone, ExternalLink, HardHat, Radio, Cpu, Wrench } from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'safety';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export const LegalModal = ({ isOpen, activeTab, onClose, onTabChange }: LegalModalProps) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              {activeTab === 'privacy' && <Lock className="w-5 h-5" />}
              {activeTab === 'terms' && <FileText className="w-5 h-5" />}
              {activeTab === 'safety' && <ShieldCheck className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                {activeTab === 'privacy' && 'Privacy Policy'}
                {activeTab === 'terms' && 'Terms of Service'}
                {activeTab === 'safety' && 'Safety & Precision Standards'}
              </h2>
              <p className="text-xs text-slate-400">Apex Riders Motorcycle Rentals & Governance</p>
            </div>
          </div>

          <button
            id="close-legal-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-3 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            id="tab-privacy-policy-btn"
            onClick={() => onTabChange('privacy')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            id="tab-terms-of-service-btn"
            onClick={() => onTabChange('terms')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>

          <button
            id="tab-safety-standards-btn"
            onClick={() => onTabChange('safety')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'safety'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Safety Standards</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
                <Lock className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-1">Rider Data Privacy Guarantee</strong>
                  Your personal identity data, passport documentation, and trip telemetry are encrypted using 256-bit AES protocol. We never sell or share rider records with third-party advertising networks.
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  1. Information We Collect
                </h3>
                <p>
                  To complete superbike rental reservations and fulfill local transport regulations, Apex Riders collects:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                  <li>Full legal name, email address, phone number, and emergency contact details.</li>
                  <li>Government-issued motorcycle driver's license details and passport verification scan.</li>
                  <li>Payment telemetry processed via PCI-DSS compliant payment gateways.</li>
                  <li>Real-time vehicle GPS telemetry for security and roadside accident dispatch.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  2. Telemetry & Location Monitoring
                </h3>
                <p>
                  Every bike in our fleet is equipped with satellite crash detection and location beacons. Telemetry data is monitored strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                  <li>Automated SOS emergency trigger in case of sudden deceleration or tip-over events.</li>
                  <li>Geofence security protection against unauthorized cross-border border crossings.</li>
                  <li>Preventative maintenance tracking based on odometer mileage and engine RPM load.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  3. Cookies & Security Compliance
                </h3>
                <p>
                  Our web application uses essential session tokens to preserve reservation drafts and preference settings. We adhere strictly to standard Web Content Security Policies (CSP) and zero third-party tracker scripts.
                </p>
              </section>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Last Updated: March 2026</span>
                <span>Version 2.4 — Apex Compliance</span>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
                <FileText className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-1">Rental Agreement Summary</strong>
                  By completing a booking with Apex Riders, you confirm that you possess a valid unrestricted motorcycle license and agree to adhere to speed and safety guidelines.
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  1. Rider Requirements & Eligibility
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-white">MINIMUM AGE</div>
                    <div className="text-xs text-slate-400 mt-1">21 years old for standard fleet; 25 years old for Panigale V4 S & Supercharged Z H2.</div>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-white">LICENSE TYPE</div>
                    <div className="text-xs text-slate-400 mt-1">Valid Class A / Unrestricted motorcycle license with at least 2 years riding experience.</div>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  2. Security Deposit & Insurance Tiers
                </h3>
                <p>
                  A refundable security authorization deposit is held on your credit card upon key delivery:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                  <li><strong>Standard Tier:</strong> $1,000 hold (Comprehensive cover, $1,500 damage deductible).</li>
                  <li><strong>Apex VIP Cover:</strong> Optional $25/day add-on reduces total collision deductible to $250 with complimentary tire puncture insurance.</li>
                  <li>Deposits are released automatically within 3 business days post-rental inspection.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  3. Fuel, Mileage & Track Prohibitions
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                  <li><strong>Fuel Protocol:</strong> All motorcycles are provided with a full tank of 98 Octane Premium fuel and must be returned full.</li>
                  <li><strong>Mileage Limit:</strong> Unlimited daily mileage on curated scenic routes.</li>
                  <li><strong>Prohibited Use:</strong> Racetrack usage, illegal stunt riding, or off-road operation of non-adventure models is strictly prohibited and voids insurance coverage.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  4. Flexible Cancellation Policy
                </h3>
                <p className="text-xs text-slate-400">
                  Cancel up to 48 hours prior to reservation time for 100% full refund with zero cancellation fees. Cancellations within 24-48 hours receive 100% store credit voucher valid for 12 months.
                </p>
              </section>
            </div>
          )}

          {/* TAB 3: SAFETY STANDARDS */}
          {activeTab === 'safety' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold mb-1">Apex Safety Commitment</strong>
                  We combine master-mechanic inspections, ECE 22.06 certified protection gear, and 24/7 mobile roadside assistance to keep your ride safe and thrilling.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Wrench className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-white text-sm">45-Point Master Inspection</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Brake fluid telemetry, chain tension, suspension damping calibration, and tire tread depth (&gt;3.5mm minimum) verified before every rental.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <HardHat className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-white text-sm">ECE 22.06 Helmets & Gear</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Complimentary sanitized AGV K6 / Shoei NXR2 helmets, Dainese leather jackets, and Kevlar reinforced gloves included with every rental.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Radio className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-white text-sm">Cardo Mesh Communications</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    DMC mesh inter-bike intercom system pre-paired to your phone with JBL speaker drivers for seamless group navigation & rider calls.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Cpu className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-white text-sm">Satellite SOS Telemetry</h4>
                  </div>
                  <p className="text-xs text-slate-400">
                    Automatic crash sensors alert our central dispatch team instantly with exact GPS coordinates for rapid emergency response.
                  </p>
                </div>
              </div>

              <section className="p-5 bg-slate-950 rounded-2xl border border-amber-500/30 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  90-MINUTE MOBILE BREAKDOWN DISPATCH
                </h4>
                <p className="text-xs text-slate-300">
                  If you experience tire damage or mechanical issues on coastal roads or alpine switchbacks, our mobile support truck dispatches a replacement superbike to your location within 90 minutes.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer Contact Hotline Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold">24/7 Concierge & Safety Hotline</div>
              <div className="text-slate-500">+60 11-3071 9502 (WhatsApp Direct)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/601130719502"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold tracking-wider inline-flex items-center gap-1.5 transition-colors border border-amber-500/30"
            >
              <span>WHATSAPP SUPPORT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold tracking-wider transition-colors cursor-pointer"
            >
              GOT IT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
