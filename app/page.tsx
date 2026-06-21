import { Suspense } from "react";
import ProductList from "./components/ProductList";
import CardSuspense from "./components/CardSuspense";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  return (
    <div className="min-h-screen w-full bg-neutral-950 flex flex-col items-center px-6 py-20">
      <form className="flex flex-col items-center gap-6 w-full max-w-[480px]">
        <h1 className="text-3xl font-medium text-white tracking-tight text-center">
          explain your problem
        </h1>

        <div className="flex w-full gap-2">
          <input
            name="query"
            type="text"
            defaultValue={query}
            placeholder="e.g. waterproof hiking boots, size 10"
            className="flex-1 h-11 px-4 rounded-sm bg-neutral-900 border border-white/10 text-white text-sm placeholder:text-neutral-600 outline-none focus:border-[#AAFF00]/60 transition-colors"
          />
          <button
            type="submit"
            className="h-11 px-5 rounded-sm bg-[#AAFF00] text-black text-sm font-medium hover:bg-[#bfff33] transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-14 flex flex-wrap justify-center gap-4 max-w-5xl">
        <Suspense key={query} fallback={<Skeleton />}>
          <ProductList query={query} />
        </Suspense>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <CardSuspense key={i} />
      ))}
    </>
  );
}