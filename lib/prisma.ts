import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

export const prisma =
  (globalThis as any).prisma ||
  new PrismaClient({
    adapter: new PrismaPg(new Pool({ connectionString: process.env.DATABASE_URL })),
});

if (process.env.NODE_ENV !== "production") (globalThis as any).prisma = prisma;