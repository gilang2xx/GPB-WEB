import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to avoid immediate errors, though we handle missing keys in the UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getTacticalAdvice = async (userQuery: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. Please configure the environment.");
  }

  try {
    const model = ai.models.generateContent;
    
    // Using gemini-3-flash-preview for fast, responsive textual advice
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are the "GPB Tactical Prime", an elite, high-performance badminton tactician and coach. 
        Your tone is intense, professional, and encouraging, similar to a Formula 1 race engineer or a top-tier sports analyst. 
        Keep responses concise, sharp, and actionable. Focus on speed, angles, footwork, and mental dominance.
        Do not use markdown formatting like **bold** or *italic*, just plain text for raw speed feel.
        Limit responses to a maximum of 3-4 sentences.`,
        temperature: 0.7,
      }
    });

    return response.text || "Systems offline. Unable to calculate strategy.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Connection to Tactical Mainframe failed.");
  }
};