
import React from 'react';

const INDUSTRIES = [
  {
    id: 'water',
    title: 'Water Treatment',
    subtitle: 'Municipal & Industrial Excellence',
    description: 'Our sensors lead the way in municipal wastewater recycling and industrial effluent management. We ensure compliant discharge and high-efficiency water reuse cycles through real-time turbidity and chemical monitoring.',
    details: ['Wastewater Recycling', 'Drinking Water Quality', 'Effluent Management'],
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
    color: 'border-blue-500',
    bg: 'bg-blue-50',
    animationType: 'water'
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals',
    subtitle: 'Ultra-Pure Process Control',
    description: 'High-purity water is the backbone of pharma manufacturing. Our sanitization-ready pH and conductivity sensors withstand frequent CIP/SIP cycles while maintaining precision to 0.01 units.',
    details: ['CIP/SIP Ready', 'WFI Monitoring', 'Sterile Environments'],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800',
    color: 'border-purple-500',
    bg: 'bg-purple-50',
    animationType: 'pharma'
  },
  {
    id: 'power',
    title: 'Power Generation',
    subtitle: 'Corrosion Prevention Experts',
    description: 'Critical monitoring for cooling towers and high-pressure boilers. We provide ultra-sensitive dissolved oxygen and ORP detection to prevent catastrophic corrosion and downtime in energy facilities.',
    details: ['Boiler Feed Water', 'Cooling Towers', 'Steam Cycle Control'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    color: 'border-amber-500',
    bg: 'bg-amber-50',
    animationType: 'power'
  },
  {
    id: 'food',
    title: 'Food & Beverage',
    subtitle: 'Sanitary Quality Assurance',
    description: 'From brewery fermentation to beverage carbonation, our food-grade sensors ensure consistent product flavor and safety. Our equipment meets the highest sanitary standards for non-intrusive monitoring.',
    details: ['Fermentation Monitoring', 'Beverage Quality', 'Sanitary CIP Cycles'],
    image: 'https://images.unsplash.com/photo-1567531310133-c1f016551b8c?auto=format&fit=crop&q=80&w=800',
    color: 'border-emerald-500',
    bg: 'bg-emerald-50',
    animationType: 'food'
  }
];

export const IndustryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="industries">
      <style>{`
        @keyframes scan-pharma {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes bubble-rise {
          0% { transform: translateY(100%) scale(0.5); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        .pharma-scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          box-shadow: 0 0 15px #a855f7;
          animation: scan-pharma 4s linear infinite;
        }
        .bubble {
          position: absolute;
          bottom: 0;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          animation: bubble-rise linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Industrial Sector Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Specialized instrumentation tailored for the unique challenges of India's core manufacturing sectors.
          </p>
        </div>
        
        <div className="space-y-32">
          {INDUSTRIES.map((industry, i) => (
            <div 
              key={industry.id} 
              className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} transition-all duration-1000 group`}
            >
              <div className="flex-1 space-y-8">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${industry.bg} border-2 ${industry.color} text-slate-900 text-sm font-bold uppercase tracking-widest`}>
                  {industry.title}
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                  {industry.subtitle}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {industry.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${industry.color.replace('border', 'bg')}`}></div>
                      <span className="text-slate-800 font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className={`mt-8 px-8 py-3 rounded-xl border-2 ${industry.color} font-bold hover:bg-slate-50 transition-all flex items-center gap-2 group-hover:scale-105 duration-300`}>
                  Technical Application Guide
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 relative">
                <div className={`absolute -inset-6 ${industry.bg} rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`}></div>
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-2xl border-4 border-white">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  
                  {/* Sector Specific Animations */}
                  {industry.animationType === 'pharma' && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="pharma-scan-line"></div>
                      <div className="absolute inset-0 bg-purple-500/5 mix-blend-overlay"></div>
                    </div>
                  )}

                  {industry.animationType === 'food' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(12)].map((_, idx) => (
                        <div 
                          key={idx} 
                          className="bubble" 
                          style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 12 + 4}px`,
                            height: `${Math.random() * 12 + 4}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.4
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {industry.animationType === 'water' && (
                    <div className="absolute inset-0 pointer-events-none">
                       <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0 80 Q 25 75 50 80 T 100 80 V 100 H 0 Z" fill="#3b82f6">
                            <animate attributeName="d" values="M0 80 Q 25 75 50 80 T 100 80 V 100 H 0 Z; M0 80 Q 25 85 50 80 T 100 80 V 100 H 0 Z; M0 80 Q 25 75 50 80 T 100 80 V 100 H 0 Z" dur="5s" repeatCount="indefinite" />
                          </path>
                       </svg>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
