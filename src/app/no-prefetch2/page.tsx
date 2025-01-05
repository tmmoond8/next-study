import { B } from "@/domains/test/B";
import { Suspense } from "react";
import Loading from "./loading";

export default function TestPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <B />
      </Suspense>
    </div>
  );
}
