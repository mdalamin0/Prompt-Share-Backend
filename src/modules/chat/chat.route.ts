import { Router } from "express";
import Groq from "groq-sdk";
import config from "../../config";
import { chatControllers } from "./chat.controller";

const router = Router();

const groq = new Groq({
  apiKey: config.groq_api_key,
});

router.post("/send-message", chatControllers.sendMessage);

export const chatRoutes = router;
