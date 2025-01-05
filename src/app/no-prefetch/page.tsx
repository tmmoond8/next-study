import { B } from "@/domains/test/B";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <B />
        <Link href="/no-prefetch2">
          <div>no-preferch2</div>
        </Link>
      </Suspense>
    </div>
  );
}
