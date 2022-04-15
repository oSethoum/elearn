import { Application } from "express";
import { getConnection } from "../db";

export const publicRoutes = (app: Application) => {
  const prisma = getConnection();

  app.get("/api/topics", (req, res) => {
    prisma.topic
      .findMany({
        include: {
          departmenet: {
            select: {
              name: true,
            },
          },
        },
      })
      .then((topics) => {
        res.json(topics);
      });
  });

  app.get("/api/topics/:id", (req, res) => {
    const id = req.params.id;
    prisma.topic
      .findUnique({
        where: {
          id: Number(id),
        },
        include: {
          departmenet: {
            select: {
              name: true,
            },
          },
        },
      })
      .then((topic) => {
        res.json(topic);
      });
  });
};
