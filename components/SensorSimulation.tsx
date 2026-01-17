
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { SensorStatus } from '../types';

export const SensorSimulation: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [currentVal, setCurrentVal] = useState(7.2);
  const [status, setStatus] = useState<SensorStatus>(SensorStatus.OPTIMAL);

  useEffect(() => {
    const interval = setInterval(() => {
      const newVal = parseFloat((6.8 + Math.random() * 0.8).toFixed(2));
      setCurrentVal(newVal);
      
      setData(prev => {
        const newData = [...prev, { time: new Date().toLocaleTimeString(), val: newVal }].slice(-10);
        return newData;
      });

      if (newVal > 7.4) setStatus(SensorStatus.WARNING);
      else if (newVal < 6.9) setStatus(SensorStatus.CRITICAL);
      else setStatus(SensorStatus.OPTIMAL);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case SensorStatus.OPTIMAL: return 'text-emerald-500';
      case SensorStatus.WARNING: return 'text-amber-500';
      case SensorStatus.CRITICAL: return 'text-rose-500';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Live Diagnostics</h3>
          <p className="text-sm text-slate-500">Pro-2000 pH Virtual Node Simulation</p>
        </div>
        <div className={`px-4 py-1.5 rounded-full bg-slate-50 text-xs font-bold ${getStatusColor()} border border-current/20 uppercase tracking-widest`}>
          {status}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-400 font-semibold mb-1">Current pH</div>
          <div className="text-4xl font-black text-blue-600">{currentVal}</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-400 font-semibold mb-1">Temperature</div>
          <div className="text-4xl font-black text-slate-700">24.5<span className="text-lg font-normal">°C</span></div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-400 font-semibold mb-1">Stability</div>
          <div className="text-4xl font-black text-emerald-500">99.2<span className="text-lg font-normal">%</span></div>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="time" hide />
            <YAxis domain={[6, 8]} hide />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="val" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorVal)" 
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-100 transition-colors">
          Download Logs
        </button>
        <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
          Full Dashboard
        </button>
      </div>
    </div>
  );
};
