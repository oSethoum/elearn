import { Handler } from "express";
import { verify } from "jsonwebtoken";

export const tokenAuth: Handler = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const payload = verify(token, "secret");
    // @ts-ignore
    req.payload = payload;
    return next();
  } catch {
    return res.sendStatus(403).json({ message: "Invalid token" });
  }
};
