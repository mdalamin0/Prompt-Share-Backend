import AppError from "../../errors/AppError";
import { prisma } from "../../lib/prisma";
import httpStatus from "http-status";
import { CreatePromptPayload, IPromptQuery } from "./prompt.interface";
import { Prisma, PromptCategory } from "../../../generated/prisma/client";

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

const getAllPublicPrompts = async (
  query: IPromptQuery,
) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";


  const andConditions: Prisma.PromptWhereInput[] = [
    {
      isPublic: true,
    }
  ];

  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
        {
          tags: {
            has: query.searchTerm,
          },
        },
      ],
    });
  }

   if (query.category) {
     andConditions.push({
       category: {
         equals: query.category as PromptCategory,
       },
     });
   }

  const prompts = await prisma.prompt.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          role: true,
          status: true,
        },
      },
    },
  });

  const total = await prisma.prompt.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: prompts,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};


export const promptServices = {
  createPrompt,
  getAllPublicPrompts,
};
