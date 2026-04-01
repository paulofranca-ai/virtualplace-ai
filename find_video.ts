import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findVideo() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Qual o vídeo do YouTube mais bem produzido em português-br sobre OpenClaw IA? Forneça apenas o ID do vídeo.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}

findVideo();
