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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Route Image Banner */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-amber-500/90 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                    {pkg.stage}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{pkg.days}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-amber-500" />
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic">
                    "{pkg.highlight}"
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-300 uppercase block mb-2">Included Gear:</span>
                    <ul className="space-y-1">
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
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">PACKAGE RATE</span>
                  <div className="font-heading text-2xl font-extrabold text-white">RM {pkg.price}</div>
                </div>

                <button
                  onClick={() => onBookRoute(pkg)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>BOOK ROUTE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
