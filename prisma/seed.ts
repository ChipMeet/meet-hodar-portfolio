import { PrismaClient } from '@prisma/client';
import { blogSeedPosts } from '../lib/seed-data';

const prisma = new PrismaClient();

async function main() {
  // Clear existing records to keep the demo data deterministic.
  await prisma.message.deleteMany();
  await prisma.blog.deleteMany();

  await prisma.blog.createMany({ data: blogSeedPosts });

  console.log(`Seeded ${blogSeedPosts.length} blog posts with demo content.`);
}

main()
  .catch((error) => {
    console.error('Seeding failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

