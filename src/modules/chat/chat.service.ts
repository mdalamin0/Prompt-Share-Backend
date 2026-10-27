import { Response } from "express";
import Groq from "groq-sdk";
import config from "../../config";
import { IFrontendChatMessage, IGroqMessagePayload } from "./chat.interface";

const groq = new Groq({
  apiKey: config.groq_api_key,
});

const sendMessageStream = async (
  message: string,
  history: IFrontendChatMessage[] | undefined,
  res: Response,
): Promise<void> => {
  try {
    const formattedMessages: IGroqMessagePayload[] = (history || []).map(
      (item: IFrontendChatMessage) => {
        const textContent = item.parts?.[0]?.text || item.text || "";
        return {
          role: item.role === "user" ? "user" : "assistant",
          content: textContent,
        };
      },
    );

    formattedMessages.push({
      role: "user",
      content: message,
    });

    const chatCompletionStream = await groq.chat.completions.create({
      messages: formattedMessages,
      model: config.ai_model_id,
      stream: true,
    });

    for await (const chunk of chatCompletionStream) {
      const text = chunk.choices[0]?.delta?.content || "";
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);

        if ((res as any).flush) {
          (res as any).flush();
        }
      }
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    console.error("Groq Service Error:", error);
    res.write(`data: ${JSON.stringify({ error: errorMessage })}\n\n`);
  } finally {
    res.end();
  }
};

export const chatServices = {
  sendMessageStream,
};
