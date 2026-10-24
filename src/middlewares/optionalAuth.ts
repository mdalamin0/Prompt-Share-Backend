import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { jwtUtils } from "../utils/jwt";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export const optionalAuth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken
      ? req.cookies.accessToken
      : req.headers.authorization?.startsWith("Bearer")
        ? req.headers.authorization.split(" ")[1]
        : req.headers.authorization;

    if (!token) {
      return next();
    }

    const verifiedToken = jwtUtils.verifyToken(token, config.jwt_access_secret);

    if (!verifiedToken.success) {
      return next();
    }

    const { id, email } = verifiedToken.data as JwtPayload;

    const user = await prisma.user.findUnique({
      where: {
        id,
        email,
      },
    });

    if (!user || user.status === "SUSPENDED") {
      return next();
    }

    req.user = user;

    next();
  });
};
