import type { RoutePackage } from '../types';
import { Calendar, Compass, ArrowRight, Check } from 'lucide-react';

interface RoutesSectionProps {
  packages: RoutePackage[];
  onBookRoute: (route: RoutePackage) => void;
}

export const RoutesSection = ({ packages, onBookRoute }: RoutesSectionProps) => {
  return (
    <section id="routes" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
            CURATED ADVENTURE EXPEDITIONS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            SIGNATURE ROUTES & PACKAGES
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            All route packages include pre-mapped GPS waypoints, boutique lodging reservations, companion gear, and 24/7 chase vehicle backup.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group h-full"
            >
              <div className="flex flex-col flex-1">
                {/* Route Image Banner */}
                <div className="relative h-56 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-md text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg tracking-wider">
                    {pkg.stage}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {pkg.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.days}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{pkg.distance}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      "{pkg.highlight}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/40">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-2">Included Gear:</span>
                    <ul className="space-y-1.5">
                      {pkg.includedGear.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Package Footer */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">PACKAGE RATE</span>
                  <div className="font-heading text-2xl font-black text-white tracking-tight">RM {pkg.price}</div>
                </div>

                <button
                  id={`book-route-btn-${pkg.id}`}
                  onClick={() => onBookRoute(pkg)}
                  className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>BOOK ROUTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
