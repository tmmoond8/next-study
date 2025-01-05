import { A } from "@/domains/test/A";
import { getPlaceListQueryOptions } from "@/domains/test/apis";
import { PlaceList } from "@/domains/test/PlaceList";
import { getQueryClient } from "@/providers/tanstack-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function TestPage() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(getPlaceListQueryOptions());

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <>
          <PlaceList />
        </>
      </HydrationBoundary>
    </div>
  );
}
