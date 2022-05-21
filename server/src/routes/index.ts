export * from "./auth";
import { Application } from "express";
import { tokenAuth } from "../middleware";
import { login, logout, refresh, register, updateUser } from "./auth";

export function setup(app: Application) {
  app.post("/api/login", login);
  app.post("/api/register", register);
  app.post("/api/refresh", refresh);
  app.post("/api/update-user", updateUser);
  app.post("/api/logout", tokenAuth, logout);
}
