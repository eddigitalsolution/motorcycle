import type { Motorcycle } from '../types';
import { Gauge, Flame, ArrowRight } from 'lucide-react';

interface FleetCardProps {
  bike: Motorcycle;
  onSelectBike: (bike: Motorcycle) => void;
}

export const FleetCard = ({ bike, onSelectBike }: FleetCardProps) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group relative border border-slate-800">
      {bike.badge && (
        <div className="absolute top-4 left-4 z-10 bg-amber-500/90 backdrop-blur-md text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
          {bike.badge}
        </div>
      )}

      <div className="absolute top-4 right-4 z-10 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-slate-300 text-[11px] font-medium uppercase px-3 py-1 rounded-full">
        {bike.category}
      </div>

      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={bike.image}
          alt={`${bike.brand} ${bike.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">{bike.brand}</span>
            <span className="text-xs text-slate-400 font-mono">{bike.engineCc} cc</span>
          </div>

          <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
            {bike.name}
          </h3>

          <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Flame className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{bike.hp} HP</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Gauge className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{bike.topSpeed}</span>
            </div>
          </div>

          <ul className="space-y-1.5 mb-6">
            {bike.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">DAILY RATE</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white font-heading tracking-tight">RM {bike.pricePerDay}</span>
              <span className="text-xs text-slate-500 font-medium">/ day</span>
            </div>
          </div>

          <button
            id={`rent-bike-btn-${bike.id}`}
            onClick={() => onSelectBike(bike)}
            className="whitespace-nowrap px-4 py-2.5 rounded-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 group/btn border border-slate-700 hover:border-amber-500 shadow-md cursor-pointer"
          >
            <span>RENT BIKE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
