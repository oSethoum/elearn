import { PrismaClient } from "@prisma/client";

let client: any;

export function getConnection() {
  if (!client) {
    client = new PrismaClient();
    client.$connect();
  }

  return client as PrismaClient;
}
