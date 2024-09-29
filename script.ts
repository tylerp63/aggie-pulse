import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newClub = await prisma.club.create({
        data: {
            name: "Society of Asian Scientists and Engineers",
            description: "A club for Asian scientists and engineers",
            events: {
                create: {
                    title: "First Meeting",
                    description: "Our first meeting!",
                    date: new Date(),
                },
            },
        },
        }
)

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
