import { Handler } from "express";
import { sign, verify } from "jsonwebtoken";
import { getConnection } from "../db";

export const login: Handler = async (req, res) => {
  console.log("body:", req.body);

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
    secure: process.env.NODE_ENV === "production",
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
