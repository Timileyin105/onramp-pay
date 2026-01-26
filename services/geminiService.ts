
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const geminiService = {
  suggestDescription: async (topic: string): Promise<string> => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a short, professional, and clear payment description for: "${topic}". Max 50 characters. Return only the description text.`,
        config: {
          temperature: 0.7,
        },
      });
      return response.text.trim();
    } catch (error) {
      console.error("Gemini suggestion failed:", error);
      return topic;
    }
  }
};
