export * from "./auth";
import { Application } from "express";
import { tokenAuth } from "../middleware";
import { login, logout, refresh } from "./auth";

export function setup(app: Application) {
  app.post("/api/login", login);
  app.post("/api/refresh", tokenAuth, refresh);
  app.post("/api/logout", tokenAuth, logout);
}
