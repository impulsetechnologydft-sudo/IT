
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProductRecommendation = async (userQuery: string) => {
  const productContext = PRODUCTS.map(p => `${p.name} (${p.category}): ${p.description}. Specs: ${JSON.stringify(p.specs)}`).join('\n');
  
  const prompt = `You are a technical advisor for AquaMetric Industrial Solutions.
  Current Product Catalog:
  ${productContext}
  
  User Question: ${userQuery}
  
  Recommend the best product or explain the technology. Keep it professional, concise, and helpful.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Recommendation Error:", error);
    return "I'm sorry, I'm having trouble accessing the technical database. Please try again or contact our human support team.";
  }
};
