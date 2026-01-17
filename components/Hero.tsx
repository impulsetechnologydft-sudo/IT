
import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate multi-layered particles for parallax effect
  const particles = useRef([...Array(30)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    // Higher speed = closer to viewer (parallax depth)
    speed: i % 3 === 0 ? 40 : i % 3 === 1 ? 25 : 12,
    opacity: Math.random() * 0.4 + 0.1,
  }))).current;

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Spotlight */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.08] transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #2563eb, transparent)`
          }}
        />

        <svg className="absolute w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" fill="#2563eb">
            <animate attributeName="d" 
              values="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z;
                      M0 50 Q 25 60 50 50 T 100 50 V 100 H 0 Z;
                      M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z" 
              dur="12s" repeatCount="indefinite" />
          </path>
        </svg>
        
        {/* Interactive Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:48px_48px] transition-transform duration-500 ease-out"
          style={{ transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)` }}
        ></div>

        {/* Parallax Particles */}
        {particles.map((p, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400 mix-blend-multiply transition-transform duration-1000 ease-out"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.y}%`,
              left: `${p.x}%`,
              opacity: p.opacity,
              transform: `translate(${(mousePosition.x - 0.5) * p.speed}px, ${(mousePosition.y - 0.5) * p.speed}px)`,
            }}
          />
        ))}

        {/* Atmospheric Floating Blobs */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-600 opacity-[0.04] blur-[120px] animate-pulse"
            style={{
              width: `${500 + i * 100}px`,
              height: `${500 + i * 100}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDuration: `${8 + i * 2}s`,
              transform: `translate(${(mousePosition.x - 0.5) * (30 + i * 10)}px, ${(mousePosition.y - 0.5) * (30 + i * 10)}px)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              India's Industrial Standard
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Engineering <span className="text-gradient">Precision</span> <br />For Future India
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              From the Ganges to the leading pharmaceutical hubs of Hyderabad, our sensors provide the critical data that powers India's industrial transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                500+ Products Catalog
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={onRequestDemo}
                className="bg-white text-blue-600 border border-blue-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95"
              >
                Request Demo
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/10 transition-colors duration-500"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-2 opacity-5 group-hover:rotate-1 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Engineering" 
                  className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
                <div 
                  className="absolute -bottom-8 -left-8 glass-morphism p-6 rounded-2xl shadow-xl max-w-xs border border-white/40 backdrop-blur-md transition-transform duration-300"
                  style={{ transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-800">Live Analysis</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Microsecond latency feedback for mission-critical Indian manufacturing processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
