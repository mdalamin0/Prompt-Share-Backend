import { Prisma } from "../../../generated/prisma/client";
import { IQuery } from "../../interfaces";

export interface CreatePromptPayload {
  title: string;
  description: string;
  template: string;
  category: "code" | "text" | "image";
  tags?: string[];
  isPublic?: boolean;
}

export type IPromptQuery = IQuery & Prisma.PromptWhereInput;
