import { Router } from "express";
import { promptControllers } from "./prompt.controller";
import {
  createPromptValidationSchema,
  updatePromptValidationSchema,
} from "./prompt.validation";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { optionalAuth } from "../../middlewares/optionalAuth";

const router = Router();

router.get("/", optionalAuth(), promptControllers.getAllPublicPrompts);

router.get("/my-prompts", auth(Role.USER), promptControllers.getMyPrompts);

router.get(
  "/dashboard-stats",
  auth(Role.USER),
  promptControllers.getDashboardStats,
);

router.get("/:promptId", auth(Role.USER), promptControllers.getPromptById);

router.post(
  "/create",
  auth(Role.USER),
  validateRequest(createPromptValidationSchema),
  promptControllers.createPrompt,
);

router.post(
  "/clone-prompt-to-my-collection/:promptId",
  auth(Role.USER),
  promptControllers.clonePromptToMyCollection,
);

router.patch(
  "/toggle-prompt-privacy/:promptId", 
  auth(Role.USER),
  promptControllers.togglePromptPrivacy,
);

router.patch(
  "/:promptId", 
  auth(Role.USER),
  validateRequest(updatePromptValidationSchema),
  promptControllers.updatePrompt,
);

router.delete("/:promptId", auth(Role.USER), promptControllers.deletePrompt);

export const promptRoutes = router;
