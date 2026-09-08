import { useState, useEffect } from 'react';
import { Zap, Menu, X, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBookingModal: () => void;
}

export const Navbar = ({ activeSection, setActiveSection, onOpenBookingModal }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'fleet', label: 'FLEET' },
    { id: 'routes', label: 'ROUTES' },
    { id: 'safety', label: 'SAFETY' },
    { id: 'experience', label: 'EXPERIENCE' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-2xl shadow-black/50' : 'bg-slate-950/60 backdrop-blur-sm py-5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                APEX<span className="text-amber-500">RIDERS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase -mt-1">
                Superbike & Adventure Rentals
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>RESERVE NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-slate-950/95 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-6 space-y-4 shadow-2xl transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookingModal(); }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
            >
              <span>RESERVE YOUR BIKE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>24/7 Concierge Hotline: +60 12-345 6789</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
