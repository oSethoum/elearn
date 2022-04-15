import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.departement.create({
    data: {
      name: "Computer science",
      topics: {
        create: [
          {
            name: "Algorithm",
            grades: 5,
          },
          {
            name: "Data structure",
            grades: 5,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
