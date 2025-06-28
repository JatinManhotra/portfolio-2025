import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function generateAiResponse(history) {

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: history,
  });
  return response.text
}