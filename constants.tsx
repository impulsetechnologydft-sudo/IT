
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'ph-pro-2000',
    name: 'Pro-2000 pH Sensor',
    category: 'Sensors',
    description: 'Industrial-grade digital pH electrode for harsh chemical environments.',
    features: ['Auto-calibration', 'Digital Signal Transmission', 'PTFE Junction'],
    specs: { range: '0-14 pH', temperature: '-5°C to 110°C', pressure: 'Up to 6 Bar' },
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aqua-multi-x',
    name: 'AquaMulti-X Analyzer',
    category: 'Analyzers',
    description: 'Multi-parameter controller for pH, ORP, and Conductivity measurement.',
    features: ['Dual-channel', 'Cloud connectivity', 'Touch interface'],
    specs: { power: '100-240 VAC', output: '4-20mA, RS485', enclosure: 'IP67' },
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'do-probe-z',
    name: 'Z-Series Dissolved Oxygen',
    category: 'Sensors',
    description: 'Optical DO sensor for wastewater treatment and aquaculture.',
    features: ['Minimal maintenance', 'Rapid response', 'Long-term stability'],
    specs: { range: '0-20 mg/L', accuracy: '±0.1 mg/L', technology: 'Fluorescence' },
    imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'turb-lite',
    name: 'TurbidityLite 500',
    category: 'Analyzers',
    description: 'High-precision turbidity meter for drinking water quality monitoring.',
    features: ['ISO 7027 compliant', 'Color compensation', 'Bubble rejection'],
    specs: { range: '0-1000 NTU', resolution: '0.001 NTU', lightSource: 'Infrared LED' },
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800'
  }
];

export const NAVIGATION = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'Vision', href: '#vision' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Support', href: '#support' }
];
