
import React from 'react';

export const VisionObjective: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="vision">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Legacy of Precision
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our Purpose & <span className="text-blue-500">Principles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Founded in 1995, AquaMetric was built on the belief that accurate data is the most powerful tool for global industrial progress and environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Mission */}
          <div className="p-10 rounded-[2.5rem] bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To empower industrial operators with hyper-accurate sensors that eliminate waste, prevent downtime, and ensure 100% regulatory compliance through digital innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 rounded-[2.5rem] bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              Setting the 2030 standard for "Zero-Drift" liquid analysis, where intelligent instrumentation manages itself to protect global water resources.
            </p>
          </div>

          {/* Founding Principles */}
          <div className="p-10 rounded-[2.5rem] bg-blue-600 group hover:bg-blue-700 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-white">Founding Principles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-blue-100 text-sm font-medium">Precision without compromise is our first and final rule.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-blue-100 text-sm font-medium">Environmental impact must be measured to be managed.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-blue-100 text-sm font-medium">Indian manufacturing deserves global-quality instrumentation.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-800 p-2 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700 group">
               <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Team" 
                className="w-full h-[400px] object-cover rounded-[2rem] opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="italic text-slate-300 text-lg">
                  "In 1995, we promised that every sensor we build would be as accurate as the first one we designed by hand."
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-blue-500">The Founders' Pledge</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Future Aspirations</h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-500/30">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Sustainable Recycling</h4>
                  <p className="text-slate-400">Pioneering sensors that enable 100% water recovery in industrial plants by 2028.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-500/30">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI Integration</h4>
                  <p className="text-slate-400">Predictive maintenance algorithms that notify users of cleaning requirements before performance drops.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-blue-500/30">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Accessibility</h4>
                  <p className="text-slate-400">Expanding our specialized Indian service network to reach every Tier-2 industrial town.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
