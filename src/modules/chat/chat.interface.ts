export interface IChatMessagePart {
  text: string;
}

export interface IFrontendChatMessage {
  role: "user" | "model";
  parts?: IChatMessagePart[];
  text?: string;
}

export interface IGroqMessagePayload {
  role: "user" | "assistant";
  content: string;
}

