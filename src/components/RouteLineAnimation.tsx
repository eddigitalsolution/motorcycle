import type { JourneyStage } from '../types';
import { ChevronRight, ChevronLeft, Gauge } from 'lucide-react';

interface RouteLineAnimationProps {
  stages: JourneyStage[];
  currentStageIndex: number;
  onSelectStageIndex: (index: number) => void;
}

export const RouteLineAnimation = ({
  stages,
  currentStageIndex,
  onSelectStageIndex,
}: RouteLineAnimationProps) => {
  const currentStage = stages[currentStageIndex];

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-xl border-y border-white/10 py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Stage Name & Specs Display */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-sm">
            0{currentStageIndex + 1}
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">CURRENT STAGE</div>
            <div className="font-heading text-xl font-extrabold text-white tracking-wider">
              {currentStage.name} — <span className="text-slate-400 font-medium text-sm">{currentStage.subtitle}</span>
            </div>
          </div>
        </div>

        {/* Route Stepper & Animated Line */}
        <div className="w-full md:w-1/2 flex flex-col space-y-3">
          <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            {/* Animated Speed Progress Bar */}
            <div
              className="absolute top-0 left-0 h-full bg-linear-to-r from-amber-500 via-amber-400 to-orange-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              style={{ width: `${((currentStageIndex + 1) / stages.length) * 100}%` }}
            />
            {/* Motion Glint */}
            <div className="absolute inset-0 bg-white/20 animate-speed-line" />
          </div>

          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono overflow-x-auto scrollbar-none gap-1">
            {stages.map((st, idx) => (
              <button
                key={st.id}
                id={`stage-step-btn-${st.id}`}
                onClick={() => onSelectStageIndex(idx)}
                className={`transition-all duration-300 font-extrabold px-1.5 sm:px-2 py-1 rounded-md cursor-pointer whitespace-nowrap ${
                  idx === currentStageIndex
                    ? 'text-amber-400 scale-105 sm:scale-110 bg-amber-500/20 border border-amber-500/40 shadow-sm'
                    : idx < currentStageIndex
                    ? 'text-slate-300'
                    : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                {st.name}
              </button>
            ))}
          </div>
        </div>

        {/* Controls & Speed Metadata */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 text-xs text-slate-400">
          <div className="hidden lg:flex items-center gap-2 font-mono">
            <Gauge className="w-4 h-4 text-amber-500" />
            <span>{currentStage.speed}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="stage-prev-btn"
              onClick={() => onSelectStageIndex(Math.max(0, currentStageIndex - 1))}
              disabled={currentStageIndex === 0}
              aria-label="Previous Stage"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="stage-next-btn"
              onClick={() => onSelectStageIndex(Math.min(stages.length - 1, currentStageIndex + 1))}
              disabled={currentStageIndex === stages.length - 1}
              aria-label="Next Stage"
              className="p-2 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 disabled:opacity-30 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
