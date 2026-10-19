import z from "zod";

export const createPromptValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  description: z.string().min(10, "Description must be at least 10 characters"),
  template: z.string(),
  category: z.enum(["code", "text", "image"]),
  tags: z.array(z.string()).optional(),
  isPublic: z.boolean().optional(),
});
