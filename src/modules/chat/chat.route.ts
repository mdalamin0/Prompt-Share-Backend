import { Router } from "express";
import Groq from "groq-sdk";
import config from "../../config";

const router = Router();

const groq = new Groq({
  apiKey: config.groq_api_key,
});

router.post("/send-message", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res
      .status(400)
      .json({ success: false, error: "Message is required" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    const formattedMessages = (history || []).map((item: any) => ({
      role: item.role === "user" ? "user" : "assistant", 
      content: item.parts?.[0]?.text || item.text || "",
    }));

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
  } catch (error: any) {
    console.error("Groq Error:", error);
    res.write(
      `data: ${JSON.stringify({ error: error?.message || "Internal Server Error" })}\n\n`,
    );
  } finally {
    res.end(); 
  }
});

export const chatRoutes = router;
