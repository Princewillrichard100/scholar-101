import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const tools = [{ googleSearch: {} }];

const config = {
  thinkingConfig: { thinkingBudget: +1 },
  tools,
};

const model = 'gemini-2.5-flash';

const courseOutline = {
  // sendMessage takes a string prompt, streams AI response, returns an object compatible with route.js
  sendMessage: async (prompt) => {
    const contents = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];

    // Stream response from Gemini
    const responseStream = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of responseStream) {
      fullText += chunk.text;
    }

    // Mimic the shape your route expects: aiResp.response.text()
    return {
      response: {
        text: () => fullText,
      },
    };
  },
};

export default courseOutline;
