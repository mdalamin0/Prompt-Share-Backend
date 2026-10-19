import { Prisma, PromptCategory } from "../../../generated/prisma/client";
import { IQuery } from "../../interfaces";

export interface CreatePromptPayload {
  title: string;
  description: string;
  template: string;
  category: PromptCategory;
  tags?: string[];
  isPublic?: boolean;
}

export interface UpdatePromptPayload {
  title?: string;
  description?: string;
  template?: string;
  category?: PromptCategory;
  tags?: string[];
  isPublic?: boolean;
}

export type IPromptQuery = IQuery & Prisma.PromptWhereInput;
