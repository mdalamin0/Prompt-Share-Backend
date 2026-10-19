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

export const promptControllers = {
  createPrompt,
};
