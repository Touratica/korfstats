import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// const teams: Prisma.SomethingCreateInput[] = [];

async function main() {
  console.log(`Start seeding ...`);
  // for (const t of teams) {
  //   const team = await prisma.team.create({
  //     data: t,
  //   });
  //   console.log(`Created team: ${team.clubInitials} ${team.designation}`);
  // }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
