
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { SensorSimulation } from './components/SensorSimulation';
import { IndustryGrid } from './components/IndustryGrid';
import { VisionObjective } from './components/VisionObjective';
import { ROICalculator } from './components/ROICalculator';
import { TechnicalResources } from './components/TechnicalResources';
import { DemoModal } from './components/DemoModal';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Layout>
      <Hero onRequestDemo={() => setIsDemoModalOpen(true)} />
      
      <IndustryGrid />

      <VisionObjective />

      {/* Diagnostic Preview Section */}
      <section className="py-24 bg-slate-50" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
                Live Tech Demo
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Real-Time Processing Performance</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Experience the raw speed of AquaMetric's digital signal processing. Our sensors don't just measure; they analyze and adapt to process fluctuations in real-time.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">100ms Reaction Time</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Eliminate lag in chemical dosing with our high-speed polling architecture.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Adaptive Drift Control</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Neural-pathway algorithms compensate for sensor aging automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SensorSimulation />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Feature */}
      <ROICalculator />

      {/* Product Catalog */}
      <section className="py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Industrial Grade Hardware</h2>
              <p className="text-slate-500 max-w-xl">
                Precision-engineered sensors and analyzers designed to withstand the harshest chemical environments in Indian industry.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20">All Catalog</button>
              <button className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors">Digital Sensors</button>
              <button className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors">Multi-Analyzers</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Resources Feature */}
      <TechnicalResources />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none transition-transform duration-[10s] linear infinite group-hover:scale-110">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-cta)" />
                </svg>
             </div>
             <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">Empowering Indian Industry Through Precision</h2>
                <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                   Our local expert engineers provide on-ground support and consultation for your specific process requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <button 
                     onClick={() => setIsDemoModalOpen(true)}
                     className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
                   >
                     Request Demo
                   </button>
                   <button className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all border border-blue-500/30 hover:-translate-y-1">
                     Schedule Site Visit
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </Layout>
  );
};

export default App;
