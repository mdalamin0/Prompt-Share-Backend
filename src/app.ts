import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { notFound } from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { authRoutes } from "./modules/auth/auth.route";
import "./config/passport";
import { userRoutes } from "./modules/user/user.route";
import { promptRoutes } from "./modules/prompt/prompt.route";
import { chatRoutes } from "./modules/chat/chat.route";

const app: Application = express();

app.use(
  cors({
    origin: config.frontend_url,
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "prompt share server is running successfully!",
  });
});

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/prompt", promptRoutes)
app.use("/api/v1/chat", chatRoutes)


app.use(notFound)
app.use(globalErrorHandler)

export default app;
