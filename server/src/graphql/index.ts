import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { Application } from "express";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql";
import path from "path";
import { FileResolver } from "./resolvers";

interface Context {
  prisma: PrismaClient;
}

export async function setup(app: Application) {
  const schema = await buildSchema({
    resolvers: [...resolvers, FileResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient();
  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });

  await server.start();
  server.applyMiddleware({ app });
}
