import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: 'test@test.com',
  //     name: 'john',
  //     password: '1234',
  //   },
  // });
  const newUser = await prisma.hobby.create({
    data: {
      name: 'test',
      postedById: 1,
    },
  });
  const allUsers = await prisma.hobby.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
