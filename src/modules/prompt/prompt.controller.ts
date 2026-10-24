import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { promptServices } from "./prompt.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createPrompt = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const payload = req.body;

    const result = await promptServices.createPrompt(userId, payload);

    sendResponse(
      res,
      {
        message: "Prompt created successfully.",
        data: result,
      },
      httpStatus.CREATED,
    );
  },
);

const getAllPublicPrompts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const currentUserId = req.user?.id;
    const result = await promptServices.getAllPublicPrompts(
      query,
      currentUserId as string,
    );

    sendResponse(res, {
      message: "Public prompts fetched successfully.",
      data: result,
    });
  },
);

const getPromptById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const { promptId } = req.params;

    const result = await promptServices.getPromptById(
      promptId as string,
      userId,
    );

    sendResponse(res, {
      message: "Prompt fetched successfully.",
      data: result,
    });
  },
);

const getMyPrompts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const query = req.query;

    const result = await promptServices.getMyPrompts(userId, query);

    sendResponse(res, {
      message: "My prompts fetched successfully.",
      data: result,
    });
  },
);

const clonePromptToMyCollection = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const { promptId } = req.params;

    const result = await promptServices.clonePromptToMyCollection(
      userId,
      promptId as string,
    );

    sendResponse(res, {
      message: "Prompt successfully cloned to your collection.",
      data: result,
    });
  },
);

const updatePrompt = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const { promptId } = req.params;
    const payload = req.body;

    const result = await promptServices.updatePrompt(
      userId,
      promptId as string,
      payload,
    );

    sendResponse(res, {
      message: "Prompt updated successfully.",
      data: result,
    });
  },
);

const togglePromptPrivacy = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const { promptId } = req.params;

    const result = await promptServices.togglePromptPrivacy(
      userId,
      promptId as string,
    );

    sendResponse(res, {
      message: `Prompt visibility changed to ${result.isPublic ? "Public" : "Private"} successfully.`,
      data: result,
    });
  },
);

const deletePrompt = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const { promptId } = req.params;

    await promptServices.deletePrompt(userId, promptId as string);

    sendResponse(res, {
      message: "Prompt deleted successfully.",
      data: null,
    });
  },
);

const getDashboardStats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;

    const result = await promptServices.getDashboardStats(userId);

    sendResponse(res, {
      message: "Dashboard analytics stats fetched successfully.",
      data: result,
    });
  },
);

export const promptControllers = {
  createPrompt,
  getAllPublicPrompts,
  getPromptById,
  getMyPrompts,
  clonePromptToMyCollection,
  updatePrompt,
  togglePromptPrivacy,
  deletePrompt,
  getDashboardStats,
};
