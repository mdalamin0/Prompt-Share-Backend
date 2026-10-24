import AppError from "../../errors/AppError";
import { prisma } from "../../lib/prisma";
import httpStatus from "http-status";
import { CreatePromptPayload, IPromptQuery, UpdatePromptPayload } from "./prompt.interface";
import { Prisma, PromptCategory } from "../../../generated/prisma/client";

const createPrompt = async (userId: string, payload: CreatePromptPayload) => {
  const { title } = payload;
  console.log(payload)
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }

    if (user.status === "SUSPENDED") {
      throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
    }

    if (user.status === "DELETED") {
      throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
    }

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
  currentUserId?: string,
) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: Prisma.PromptWhereInput[] = [
    {
      isPublic: true,
    },
    {
      NOT: {
        title: {
          endsWith: "(Copied)",
        },
      },
    },
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

  const promptsWithForkStatus = await Promise.all(
    prompts.map(async (prompt) => {
      let isForkedByCurrentUser = false;

      if (currentUserId) {
        const hasForked = await prisma.prompt.findFirst({
          where: {
            userId: currentUserId,
            OR: [
              { id: prompt.id },
              { template: prompt.template }, 
            ],
          },
        });
        isForkedByCurrentUser = !!hasForked;
      }

      return {
        ...prompt,
        isForkedByCurrentUser,
      };
    }),
  );

  return {
    data: promptsWithForkStatus,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};


export const getPromptById = async (
  promptId: string,
  userId: string,
) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }

    if (user.status === "SUSPENDED") {
      throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
    }

    if (user.status === "DELETED") {
      throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
    }

  const prompt = await prisma.prompt.findUnique({
    where: {
      id: promptId,
    },
  });

  if (!prompt) {
    throw new AppError(httpStatus.NOT_FOUND, "Prompt not found");
  }

  if (prompt.userId !== userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "You do not have permission to access this prompt",
    );
  }

  return prompt;
};


const getMyPrompts = async (userId: string, query: IPromptQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const andConditions: Prisma.PromptWhereInput[] = [
    {
      userId,
    },
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

const clonePromptToMyCollection = async (userId: string, promptId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const originalPrompt = await prisma.prompt.findUnique({
    where: { id: promptId },
  });

  if (!originalPrompt) {
    throw new AppError(httpStatus.NOT_FOUND, "Original prompt not found!");
  }

  if (!originalPrompt.isPublic) {
    throw new AppError(httpStatus.FORBIDDEN, "Private prompts cannot be cloned!");
  }

  if (originalPrompt.userId === userId) {
    throw new AppError(httpStatus.BAD_REQUEST, "You cannot clone your own prompt!");
  }

  const isAlreadyCloned = await prisma.prompt.findFirst({
    where: {
      userId,
      OR: [
        { title: `${originalPrompt.title} (Copied)` },
        { template: originalPrompt.template }
      ]
    },
  });

  if (isAlreadyCloned) {
    throw new AppError(httpStatus.CONFLICT, "You have already cloned this prompt to your collection!");
  }

  const result = await prisma.$transaction(async (tx) => {
    await tx.prompt.update({
      where: { id: promptId },
      data: { forkCount: { increment: 1 } },
    });

    const clonedPrompt = await tx.prompt.create({
      data: {
        title: `${originalPrompt.title} (Copied)`,
        description: originalPrompt.description,
        template: originalPrompt.template,
        category: originalPrompt.category,
        tags: originalPrompt.tags,
        isPublic: true,
        userId,
      },
    });

    return clonedPrompt;
  });

  return result;
};

const updatePrompt = async (
  userId: string,
  promptId: string,
  payload: UpdatePromptPayload,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId },
  });

  if (!prompt) {
    throw new AppError(httpStatus.NOT_FOUND, "Prompt not found!");
  }

  if (prompt.userId !== userId) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to update this prompt!",
    );
  }

  const result = await prisma.prompt.update({
    where: { id: promptId },
    data: payload,
  });

  return result;
};

const togglePromptPrivacy = async (userId: string, promptId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId },
  });

  if (!prompt) {
    throw new AppError(httpStatus.NOT_FOUND, "Prompt not found!");
  }

  if (prompt.userId !== userId) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to change privacy for this prompt!",
    );
  }

  const result = await prisma.prompt.update({
    where: { id: promptId },
    data: {
      isPublic: !prompt.isPublic,
    },
  });

  return result;
};


const deletePrompt = async (userId: string, promptId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId },
  });

  if (!prompt) {
    throw new AppError(httpStatus.NOT_FOUND, "Prompt not found!");
  }

  if (prompt.userId !== userId) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "You are not authorized to delete this prompt!",
    );
  }

  await prisma.prompt.delete({
    where: { id: promptId },
  });

  return null;
};

const getDashboardStats = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "SUSPENDED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is suspended.");
  }

  if (user.status === "DELETED") {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted.");
  }

  const totalPrompts = await prisma.prompt.count({
    where: { userId },
  });

  const publicPrompts = await prisma.prompt.count({
    where: { userId, isPublic: true },
  });

  const privatePrompts = await prisma.prompt.count({
    where: { userId, isPublic: false },
  });

  const forkStats = await prisma.prompt.aggregate({
    where: { userId },
    _sum: {
      forkCount: true,
    },
  });

  return {
    totalPrompts,
    publicPrompts,
    privatePrompts,
    totalForksReceived: forkStats._sum.forkCount || 0,
  };
};

export const promptServices = {
  createPrompt,
  getAllPublicPrompts,
  getPromptById,
  getMyPrompts,
  clonePromptToMyCollection,
  updatePrompt,
  togglePromptPrivacy,
  deletePrompt,
  getDashboardStats
};
