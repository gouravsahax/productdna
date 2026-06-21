import { prisma } from '../lib/prisma';
import { writeFile } from 'fs/promises';

async function main() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      description: true,
    },
  });

  await writeFile(
    'products.json',
    JSON.stringify(products, null, 2)
  );

  console.log(`Saved ${products.length} products`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });