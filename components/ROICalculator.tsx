
import React, { useState } from 'react';

export const ROICalculator: React.FC = () => {
  const [waterVolume, setWaterVolume] = useState(500000); // Liters per day
  const [efficiencyGain, setEfficiencyGain] = useState(5); // % improvement

  // Calculation: Volume * Days * Gain% * Cost per liter (Approx ₹0.15 for industrial treated water)
  const annualSavings = (waterVolume * 365 * (efficiencyGain / 100) * 0.15).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });

  return (
    <section className="py-24 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Industrial <span className="text-blue-400">ROI Calculator (India)</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Estimate the annual operational savings for your Indian facility by optimizing water management with AquaMetric precision sensors.
              </p>
              
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-semibold text-slate-300">Daily Process Water (Liters)</label>
                    <span className="text-blue-400 font-bold">{(waterVolume / 100000).toFixed(1)} Lakh Liters</span>
                  </div>
                  <input 
                    type="range" 
                    min="50000" 
                    max="5000000" 
                    step="50000"
                    value={waterVolume}
                    onChange={(e) => setWaterVolume(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-semibold text-slate-300">Target Efficiency Gain</label>
                    <span className="text-blue-400 font-bold">{efficiencyGain}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="25" 
                    step="0.5"
                    value={efficiencyGain}
                    onChange={(e) => setEfficiencyGain(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl text-center backdrop-blur-sm">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Estimated Annual Savings</div>
              <div className="text-5xl lg:text-6xl font-black text-white mb-8 transition-all duration-300">
                {annualSavings}
              </div>
              <div className="space-y-3 mb-8">
                <p className="text-slate-400 text-sm">
                  Reducing wastage by <span className="text-emerald-400 font-bold">{((waterVolume * 365 * (efficiencyGain / 100)) / 1000).toLocaleString('en-IN')} kL</span> per year
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                Request On-Site Efficiency Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
