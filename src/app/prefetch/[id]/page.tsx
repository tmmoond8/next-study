import type { Metadata, ResolvingMetadata } from "next";
import { getPlaceQueryOptions } from "@/domains/test/apis";
import { Place } from "@/domains/test/Place";
import { getQueryClient } from "@/providers/tanstack-query";

export default async function PlacePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(getPlaceQueryOptions(id)));
  return <Place id={id} />;
}

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(getPlaceQueryOptions(id)));
  // fetch data
  // const product = queryClient.getQueryData(getPlaceQueryOptions(id).queryKey);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const place = queryClient.getQueryData(getPlaceQueryOptions(id).queryKey));
  console.log("id", id);
  console.log("place", place);
  console.log("queryClient caches", queryClient.getQueryCache().getAll());

  return {
    title: place.data.attributes.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}