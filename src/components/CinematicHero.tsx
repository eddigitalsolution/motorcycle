import type { JourneyStage, Motorcycle } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Gauge, Zap, Flame, Compass } from 'lucide-react';

interface CinematicHeroProps {
  currentStage: JourneyStage;
  recommendedBike: Motorcycle;
  onBookBike: (bike: Motorcycle) => void;
  onNextStage: () => void;
}

export const CinematicHero = ({
  currentStage,
  recommendedBike,
  onBookBike,
  onNextStage,
}: CinematicHeroProps) => {
  return (
    <div className="relative w-full min-h-[85vh] lg:h-[90vh] lg:min-h-160 max-h-240 overflow-hidden bg-slate-950 flex flex-col justify-between py-6 lg:py-0">
      
      {/* 1. Fullscreen Cinematic Scene Background matching the recommended bike product */}
      <AnimatePresence mode="wait">
        <motion.div
          key={recommendedBike.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={recommendedBike.image}
            alt={`${recommendedBike.brand} ${recommendedBike.name}`}
            className="w-full h-full object-cover filter brightness-[0.42] contrast-[1.25]"
          />
          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-slate-950/80" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/40 to-slate-950/80" />
          {/* Speed FX Overlay */}
          <div className="absolute inset-0 speed-overlay opacity-30 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Top Header Brand Tag */}
      <div className="relative z-10 pt-4 sm:pt-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-slate-950" />
          <span>CINEMATIC MOTORCYCLE JOURNEY</span>
        </div>
      </div>

      {/* 3. Central Cinematic Typography & Motorcycle Overlay */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6 sm:py-0">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
          <motion.div
            key={`text-${currentStage.id}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="text-[10px] sm:text-xs font-extrabold text-amber-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 sm:w-8 h-0.5 bg-amber-500" />
              <span>{currentStage.subtitle}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] drop-shadow-2xl">
              JUST <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-orange-500">RIDE.</span>
            </h1>

            <p className="text-sm sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed drop-shadow">
              {currentStage.tagline}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <button
              id="hero-rent-engine-btn"
              onClick={() => onBookBike(recommendedBike)}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>RENT THIS ENGINE (RM {recommendedBike.pricePerDay}/DAY)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-next-stage-btn"
              onClick={onNextStage}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>NEXT JOURNEY STAGE</span>
            </button>
          </div>
        </div>

        {/* Right Recommended Superbike Spotlight Card */}
        <div className="lg:col-span-5 hidden lg:block">
          <motion.div
            key={`bike-${recommendedBike.id}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1.0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 rounded-3xl border border-amber-500/30 shadow-2xl space-y-4 relative overflow-hidden group"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-amber-400 uppercase tracking-wider">STAGE RECOMMENDED RIDE</span>
              <span className="font-mono text-slate-400">{recommendedBike.hp} HP</span>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={recommendedBike.image}
                alt={recommendedBike.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-70" />
            </div>

            <div>
              <span className="text-xs text-amber-500 font-bold uppercase">{recommendedBike.brand}</span>
              <h3 className="font-heading text-xl font-bold text-white">{recommendedBike.name}</h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">Top Speed: {recommendedBike.topSpeed}</p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-mono">TERRAIN MATCH: <strong className="text-white">{currentStage.terrain}</strong></span>
              <span className="text-amber-400 font-bold">RM {recommendedBike.pricePerDay} / DAY</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* 4. Bottom Speed Stats Bar */}
      <div className="relative z-10 bg-slate-950/90 border-t border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-amber-500" />
            <span>AVG SPEED: <strong className="text-white">{currentStage.speed}</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-500" />
            <span>ROUTE DISTANCE: <strong className="text-white">{currentStage.distance}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>ENGINE TONE: <strong className="text-white">{currentStage.audioTone}</strong></span>
          </div>
        </div>
      </div>

    </div>
  );
};
