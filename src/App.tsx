import { useState, useEffect, useRef } from 'react';
import { JOURNEY_STAGES, MOTORCYCLES, ROUTE_PACKAGES } from './data';
import type { JourneyStage, Motorcycle, RoutePackage } from './types';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { RouteLineAnimation } from './components/RouteLineAnimation';
import { FleetCard } from './components/FleetCard';
import { RoutesSection } from './components/RoutesSection';
import { SafetySection } from './components/SafetySection';
import { BookingModal } from './components/BookingModal';
import { LegalModal, type LegalTab } from './components/LegalModal';
import { Zap, ChevronRight, Star } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window === 'undefined') return 'fleet';
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    return ['fleet', 'routes', 'safety', 'experience'].includes(rawHash) ? rawHash : 'fleet';
  });

  const isManualScrollRef = useRef<boolean>(false);
  const scrollLockTimeoutRef = useRef<number | null>(null);

  const handleSectionSelect = (id: string) => {
    setActiveSection(id);
    isManualScrollRef.current = true;
    if (scrollLockTimeoutRef.current) {
      clearTimeout(scrollLockTimeoutRef.current);
    }
    scrollLockTimeoutRef.current = window.setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);
  };

  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedBike, setSelectedBike] = useState<Motorcycle | null>(null);

  // Derive initial legal state from URL hash slug if present on load
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    return ['privacy', 'privacy-policy', 'terms', 'terms-of-service', 'safety-standards', 'safety-protocol'].includes(rawHash);
  });

  const [legalTab, setLegalTab] = useState<LegalTab>(() => {
    if (typeof window === 'undefined') return 'privacy';
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    if (['terms', 'terms-of-service'].includes(rawHash)) return 'terms';
    if (['safety-standards', 'safety-protocol'].includes(rawHash)) return 'safety';
    return 'privacy';
  });

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
    const slug = tab === 'safety' ? 'safety-standards' : tab;
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  const handleCloseLegal = () => {
    setIsLegalOpen(false);
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const handleLegalTabChange = (tab: LegalTab) => {
    setLegalTab(tab);
    const slug = tab === 'safety' ? 'safety-standards' : tab;
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  const categories = ['All', 'Superbike', 'Adventure', 'Cruiser', 'Naked'];
  const currentStage: JourneyStage = JOURNEY_STAGES[currentStageIndex];
  
  const recommendedBike = MOTORCYCLES.find(b => b.id === currentStage.recommendedBikeId) || MOTORCYCLES[0];

  const filteredBikes = selectedCategory === 'All'
    ? MOTORCYCLES
    : MOTORCYCLES.filter(b => b.category === selectedCategory);

  // Direct Hash Section Scrolling Handler on Mount
  useEffect(() => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    if (['fleet', 'routes', 'safety', 'experience'].includes(rawHash)) {
      const timer = setTimeout(() => {
        const element = document.getElementById(rawHash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // ScrollSpy observer to automatically update activeSection in Navbar as user scrolls
  useEffect(() => {
    const sectionIds = ['fleet', 'routes', 'safety', 'experience'];
    const handleScroll = () => {
      if (isManualScrollRef.current) return;
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRentClick = (bike: Motorcycle) => {
    setSelectedBike(bike);
    setIsBookingOpen(true);
  };

  const handleBookRoute = (_route: RoutePackage) => {
    setSelectedBike(recommendedBike);
    setIsBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setSelectedBike(MOTORCYCLES[0]);
    setIsBookingOpen(true);
  };

  const handleNextStage = () => {
    setCurrentStageIndex((prev) => (prev + 1) % JOURNEY_STAGES.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* 1. Header Navigation Bar (navbar-adjustment standards) */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleSectionSelect}
        onOpenBookingModal={handleOpenBooking}
      />

      {/* 2. Fullscreen Cinematic Hero Section (JUST RIDE. concept) */}
      <CinematicHero
        currentStage={currentStage}
        recommendedBike={recommendedBike}
        onBookBike={handleRentClick}
        onNextStage={handleNextStage}
      />

      {/* 3. Interactive Route Line Motion Animation Stepper */}
      <RouteLineAnimation
        stages={JOURNEY_STAGES}
        currentStageIndex={currentStageIndex}
        onSelectStageIndex={setCurrentStageIndex}
      />

      {/* 4. Motorcycles Fleet Section */}
      <section id="fleet" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">CINEMATIC FLEET</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              THE SUPERBIKE & TOURING LINEUP
            </h2>
          </div>

          {/* Category Filter Pills - Flex-wrap to prevent overflow */}
          <div className="flex flex-wrap items-center gap-2 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`category-filter-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <FleetCard key={bike.id} bike={bike} onSelectBike={handleRentClick} />
          ))}
        </div>
      </section>

      {/* 5. Routes & Packages Section */}
      <RoutesSection
        packages={ROUTE_PACKAGES}
        onBookRoute={handleBookRoute}
      />

      {/* 6. Safety & Precision Protocol Section */}
      <SafetySection />

      {/* 7. Rider Experience & Testimonials */}
      <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">AUTHENTIC TESTIMONIALS</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              THE APEX RIDER EXPERIENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Renting the Ducati Panigale V4 S for the Pacific Coast Highway run was pure adrenaline. The helmet comms and pre-loaded route GPS made navigation effortless.",
                name: "Marcus Vance",
                location: "San Francisco, CA",
                bike: "Ducati Panigale V4 S"
              },
              {
                quote: "The BMW R1250 GS carried us through 1,200km of alpine switchbacks with aluminum panniers and zero fatigue. Outstanding service!",
                name: "Elena Rostova",
                location: "Munich, Germany",
                bike: "BMW R 1250 GS"
              },
              {
                quote: "Supercharged Z H2 delivery to our hotel within 60 minutes. Clean Dainese jacket and pristine mechanics. Apex is the gold standard.",
                name: "David Sterling",
                location: "London, UK",
                bike: "Kawasaki Z H2"
              }
            ].map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.location}</div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                    {t.bike}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Fullscreen Call to Action CTA Section */}
      <section className="py-24 bg-linear-to-br from-amber-600 via-amber-500 to-orange-600 text-slate-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest bg-slate-950 text-amber-400 px-4 py-1.5 rounded-full inline-block">
            READY TO RIDE?
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-slate-950">
            CLAIM YOUR ENGINE & DISCOVER THE OPEN ROAD
          </h2>

          <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto text-slate-900 leading-relaxed">
            Reserve in under 2 minutes. Instant confirmation, free cancellation up to 48 hours, and white-glove delivery available.
          </p>

          <div className="pt-4">
            <button
              onClick={handleOpenBooking}
              className="px-10 py-5 rounded-full bg-slate-950 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-slate-900 shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <span>RESERVE MOTORCYCLE NOW</span>
              <ChevronRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="font-heading font-extrabold text-white tracking-wider">APEX RIDERS — JUST RIDE.</span>
          </div>
          <div>
            © {new Date().getFullYear()} APEX RIDERS MOTORCYCLES. CLOUDFLARE PAGES READY.
          </div>
          <div className="flex gap-6 text-slate-400">
            <button 
              id="privacy-policy-footer-link"
              onClick={() => handleOpenLegal('privacy')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              id="terms-of-service-footer-link"
              onClick={() => handleOpenLegal('terms')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              id="safety-standards-footer-link"
              onClick={() => handleOpenLegal('safety')} 
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Safety Standards
            </button>
          </div>
        </div>
      </footer>

      {/* Booking Interactive Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedBike={selectedBike}
        allBikes={MOTORCYCLES}
      />

      {/* Legal & Safety Information Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        activeTab={legalTab}
        onClose={handleCloseLegal}
        onTabChange={handleLegalTabChange}
      />
    </div>
  );
}

export default App;
