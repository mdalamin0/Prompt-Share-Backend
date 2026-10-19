import AppError from "../../errors/AppError";
import { prisma } from "../../lib/prisma";
import httpStatus from "http-status";
import { CreatePromptPayload } from "./prompt.interface";

const createPrompt = async (userId: string, payload: CreatePromptPayload) => {
  const { title } = payload;

  const isTitleExists = await prisma.prompt.findFirst({
    where: {
      userId,
      title: {
        equals: title,
        mode: "insensitive",
      },
    },
  });

  if (isTitleExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A prompt with this title already exists in your dashboard!",
    );
  }

  const result = await prisma.prompt.create({
    data: {
      ...payload,
      userId,
    },
  });
  return result;
};

export const promptServices = {
  createPrompt,
};
