import { getQueryClient } from "@/providers/tanstack-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  const queryClient = getQueryClient();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <>
          <Link href="/prefetch">
            <div>prefetch test</div>
          </Link>
          <Link href="/no-prefetch">
            <div>no prefetch test</div>
          </Link>
          <div>12313</div>
        </>
      </HydrationBoundary>
    </div>
  );
}
