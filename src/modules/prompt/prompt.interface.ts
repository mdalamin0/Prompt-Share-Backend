export interface CreatePromptPayload {
  title: string;
  description: string;
  template: string;
  category: "code" | "text" | "image";
  tags?: string[];
  isPublic?: boolean;
}
