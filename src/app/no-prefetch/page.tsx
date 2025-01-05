import { Area } from "@/domains/test/Area";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Area />
        <Link href="/no-prefetch2">
          <div>no-preferch</div>
        </Link>
      </Suspense>
    </div>
  );
}
