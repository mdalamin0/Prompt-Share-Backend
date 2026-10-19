import { Router } from "express";
import { promptControllers } from "./prompt.controller";
import { createPromptValidationSchema, updatePromptValidationSchema } from "./prompt.validation";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.get(
  "/",
  promptControllers.getAllPublicPrompts,
);

router.get(
  "/my-prompts",
  auth(Role.USER),
  promptControllers.getMyPrompts,
);

router.post(
  "/create",
  auth( Role.USER),
  validateRequest(createPromptValidationSchema),
  promptControllers.createPrompt,
);

router.post(
  "/clone-prompt-to-my-collection/:promptId",
  auth(Role.USER),
  promptControllers.clonePromptToMyCollection,
);

router.patch(
  "/:promptId",
  auth(Role.USER),
  validateRequest(updatePromptValidationSchema),
  promptControllers.updatePrompt,
);

router.patch(
  "/toggle-prompt-privacy/:promptId",
  auth(Role.USER),
  promptControllers.togglePromptPrivacy,
);

router.delete("/:promptId", auth(Role.USER), promptControllers.deletePrompt);


router.get(
  "/dashboard-stats",
  auth(Role.USER),
  promptControllers.getDashboardStats,
);

export const promptRoutes = router;