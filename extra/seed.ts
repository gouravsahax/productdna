import {index} from '@/lib/pinecone'
import products from "./products.json" with { type: "json" };

async function main() {
  const records = products.map((product) => (
    {
      _id: product.id,
      text: product.description
    }
  ));

  const batchSize = 90;
  for (let i = 0; i < records.length; i += batchSize) {
    const chunk = records.slice(i, i + batchSize);
    await index.namespace('data').upsertRecords({ records: chunk });
    console.log(`Upserted batch ${Math.floor(i / batchSize) + 1} (${chunk.length} records)...`);
  }
  console.log("Upserted all products to Pinecone successfully.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
