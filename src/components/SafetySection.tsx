import { ShieldCheck, HardHat, Radio, Cpu, Wrench } from 'lucide-react';

export const SafetySection = () => {
  return (
    <section id="safety" className="py-24 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
              APEX SAFETY PROTOCOL
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
              PRECISION MAINTENANCE & RIDER SHIELD
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every superbike undergoes a mandatory 45-point master mechanic inspection prior to key handoff, ensuring peak tire pressure, brake fluid telemetry, and chain tension calibration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: HardHat,
                  title: 'ECE 22.06 Helmets',
                  desc: 'Complimentary AGV K6 & Shoei helmets fitted with fresh anti-fog Pinlock visors.'
                },
                {
                  icon: Radio,
                  title: 'Cardo Mesh Comms',
                  desc: 'Group inter-bike communication with JBL acoustics pre-paired to your smartphone.'
                },
                {
                  icon: Cpu,
                  title: 'Satellite Telemetry',
                  desc: '24/7 crash detection sensors and GPS location beacons built directly into every frame.'
                },
                {
                  icon: Wrench,
                  title: 'Full Inspection Guarantee',
                  desc: 'Master technicians calibrate suspension sag and tire compound compound per rider weight.'
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <IconComponent className="w-6 h-6 text-amber-500 mb-1" />
                    <h3 className="font-heading text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Callout Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-amber-500/30 space-y-6 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h3 className="font-heading text-2xl font-black text-white uppercase">
                ZERO DOWNTIME GUARANTEE
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                In the rare event of a mechanical malfunction on coastal routes or alpine switchbacks, our mobile chase unit dispatches a replacement bike to your exact coordinates within 90 minutes.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>DISPATCH TIME:</span>
                  <span className="text-amber-400 font-bold">&lt; 90 MINUTES</span>
                </div>
                <div className="flex justify-between">
                  <span>COVERAGE RADIUS:</span>
                  <span className="text-white font-bold">STATEWIDE COAST & ALPS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
