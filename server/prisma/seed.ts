import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  await prisma.student.create({
    data: {
      grade: 1,
      user: {
        create: {
          firstName: "oussama",
          lastName: "benhaddou",
          password: "123456",
          pictureLink: "empty",
          username: "osethoum",
          role: "student",
          disabled: false,
          email: "o.sethoum@gmail.com",
          phone: "+21655555555",
        },
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
