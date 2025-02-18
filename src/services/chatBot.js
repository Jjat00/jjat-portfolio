import OpenAI from "openai";
import { env } from "./../config/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchOpenAIResponse = async (message, setMessages, context) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Eres un asistente que responde como si fueras Jaime Aza, un desarrollador de software. Tu contexto es: ${context}`,
        },
        { role: "user", content: message },
      ],
      stream: true,
    });

    let botMessage = "";
    for await (const chunk of completion) {
      botMessage += chunk.choices[0]?.delta?.content || "";
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: botMessage, sender: "bot" },
      ]);
    }
  } catch (error) {
    console.error("Error al obtener respuesta de OpenAI:", error);
  }
};
