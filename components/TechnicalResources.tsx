
import React from 'react';

const RESOURCES = [
  { title: 'Digital pH Protocol 3.0', type: 'Technical Manual', size: '4.2 MB' },
  { title: 'Wastewater ROI Whitepaper', type: 'Industry Report', size: '1.8 MB' },
  { title: 'Optical DO Calibration Guide', type: 'Safety Sheet', size: '2.5 MB' },
  { title: 'Analyzer Modbus Integration', type: 'Data Sheet', size: '0.9 MB' }
];

export const TechnicalResources: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Library</h2>
            <p className="text-slate-600 max-w-xl">
              Access our comprehensive collection of technical documentation, safety data, and integration guides.
            </p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 group">
            View All Resources
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 mb-4 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{resource.title}</h4>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{resource.type}</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-mono">{resource.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
