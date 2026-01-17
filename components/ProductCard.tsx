
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest border border-slate-100">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="space-y-4 pt-4 border-t border-slate-50">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feat, i) => (
              <span key={i} className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2 py-1 rounded">
                {feat}
              </span>
            ))}
          </div>
          <button className="w-full bg-slate-50 text-slate-900 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
            Technical Specs
          </button>
        </div>
      </div>
    </div>
  );
};
