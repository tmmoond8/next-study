import { Area } from "@/domains/test/Area";
import { Suspense } from "react";
import Loading from "./loading";

export default function TestPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Area />
      </Suspense>
    </div>
  );
}
