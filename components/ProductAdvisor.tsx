
import React, { useState, useRef, useEffect } from 'react';
import { getProductRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ProductAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! I am your AquaMetric Technical Assistant. How can I help you find the right equipment today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const recommendation = await getProductRecommendation(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: recommendation }]);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px] border border-slate-800">
      <style>{`
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes data-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes text-flicker {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <div className="p-6 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold leading-tight">AI Technical Advisor</h3>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              Online & Ready
            </span>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow p-6 space-y-4 overflow-y-auto scrollbar-hide"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-slate-800 text-slate-200 rounded-bl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-1 rounded-2xl rounded-bl-none overflow-hidden relative">
              <div className="px-5 py-4 space-y-3 min-w-[240px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 items-end h-3">
                      <div className="w-1 bg-blue-500 rounded-full animate-[data-pulse_0.6s_infinite]"></div>
                      <div className="w-1 bg-blue-400 rounded-full animate-[data-pulse_0.6s_infinite_0.1s]"></div>
                      <div className="w-1 bg-blue-300 rounded-full animate-[data-pulse_0.6s_infinite_0.2s]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest animate-[text-flicker_2s_infinite]">Consulting Database</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-500">v4.0.2</div>
                </div>

                <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden relative border border-slate-700">
                   <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[scan-horizontal_2s_linear_infinite]"></div>
                   <div className="h-full w-full bg-blue-600/10"></div>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="animate-pulse">●</span>
                    <span>CROSS-REF INDUSTRIAL CATALOG...</span>
                  </div>
                  <span className="text-blue-500/50">89% COMPLETED</span>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-2xl"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about pH sensors, orp, or conductivity..."
            className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-2 text-center uppercase tracking-widest font-semibold">
          Powered by AquaMetric GenAI
        </p>
      </div>
    </div>
  );
};
