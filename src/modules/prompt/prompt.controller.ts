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

    const result = await promptServices.getAllPublicPrompts( query);

    sendResponse(
      res,
      {
        message: "Public prompts fetched successfully.",
        data: result
      },
    );
  },
);

const getMyPrompts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;
    const query = req.query;

    const result = await promptServices.getMyPrompts(userId, query);

    sendResponse(
      res,
      {
        message: "My prompts fetched successfully.",
        data: result
      },
    );
  },
);

export const promptControllers = {
  createPrompt,
  getAllPublicPrompts,
  getMyPrompts,
};
