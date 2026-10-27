import { Request, NextFunction } from "express";
import { chatServices } from "./chat.service";
import { IFlushableResponse } from "./chat.interface";
import { catchAsync } from "../../utils/catchAsync";

const sendMessage = catchAsync(
  async (req: Request, res: IFlushableResponse, next: NextFunction) => {
    const { message, history } = req.body;

    if (!message) {
      return res
        .status(400)
        .json({ success: false, error: "Message is required" });
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader(
      "Cache-Control",
      "no-cache, no-transform, private, must-revalidate",
    );
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");

    await chatServices.sendMessageStream(message, history, res);
  },
);

export const chatControllers = {
  sendMessage,
};
