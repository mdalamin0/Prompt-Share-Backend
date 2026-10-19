import { Router } from "express";
import { promptControllers } from "./prompt.controller";
import { createPromptValidationSchema } from "./prompt.validation";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.get(
  "/",
  promptControllers.getAllPublicPrompts,
);

router.post(
  "/create",
  auth( Role.USER),
  validateRequest(createPromptValidationSchema),
  promptControllers.createPrompt,
);



export const promptRoutes = router;