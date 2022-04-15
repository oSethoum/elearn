import { Handler } from "express";
import { sign, verify } from "jsonwebtoken";
import { getConnection } from "../db";

export const register: Handler = (req, res) => {
  const prisma = getConnection();

  prisma.student.create({
    data: {
      ...req.body,
    },
  });
};

export const login: Handler = async (req, res) => {
  const prisma = getConnection();

  const user = await prisma.user.findFirst({
    where: {
      AND: [
        {
          email: {
            equals: req.body.email,
          },
        },
        {
          password: {
            equals: req.body.password,
          },
        },
      ],
    },
  });

  if (!user) {
    return res.status(404).json({
      message: "Invalid credentials",
    });
  }

  const token = sign({ userId: user?.id }, "secret", { expiresIn: "16h" });

  res.cookie("access_token", token, {
    httpOnly: true,
    secure: true,
    expires: req.body.rememberMe
      ? new Date(Date.now() + 60 * 60 * 24 * 7)
      : undefined,
  });

  const { password, ...payload } = user;
  return res.status(200).json({
    ...payload,
  });
};

export const refresh: Handler = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const prisma = getConnection();

  const { userId } = verify(token, "secret") as { userId: number };

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      message: "Invalid credentials",
    });
  }

  const { password, ...payload } = user;
  return res.status(200).json({
    ...payload,
  });
};

export const logout: Handler = (_, res) => {
  res.clearCookie("access_token").status(200).end();
};
