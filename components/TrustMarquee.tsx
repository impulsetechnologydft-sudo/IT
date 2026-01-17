
import React from 'react';

const LOGOS = ['SIEMENS', 'NESTLÉ', 'PFEIZER', 'BASF', 'SHELL', 'TOTAL', 'COCA-COLA', 'INTEL'];

export const TrustMarquee: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
          Trusted by 500+ Global Enterprises
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-16">
          {LOGOS.concat(LOGOS).map((logo, i) => (
            <span key={i} className="text-2xl font-black text-slate-300 hover:text-blue-200 transition-colors cursor-default tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
