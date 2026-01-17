
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SensorStatus {
  OPTIMAL = 'Optimal',
  WARNING = 'Warning',
  CRITICAL = 'Critical'
}
