import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function mapVideos() {
  const titles = [
    "PANFEST 2026",
    "BEM VINDO A CURITIBANOS",
    "VINDIMA",
    "AULA MAGNA",
    "PARQUE SAKURA",
    "CAVALGADA",
    "BPOSTS DA REGIAO_AMURC"
  ];
  const ids = [
    "iAqXK7PMaWo",
    "nnI4p7e8-yc",
    "0PlxH5p4kQM",
    "boIHn_4Oplc",
    "Sq1pGH0imOY",
    "g-o083FkYEI",
    "08VMdyod86Q"
  ];

  const prompt = `Aqui está uma lista de títulos de vídeos do YouTube relacionados à região de Curitibanos e AMURC:
\${titles.join(", ")}

E aqui está uma lista de IDs de vídeos do YouTube:
\${ids.join(", ")}

Por favor, mapeie cada título para o seu respectivo ID. Se um título não corresponder a nenhum ID, indique. Se um ID não corresponder a nenhum título, indique.
Use ferramentas de busca se necessário para verificar os títulos dos IDs.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-exp",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}

mapVideos();
