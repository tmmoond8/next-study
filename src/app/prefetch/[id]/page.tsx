import type { Metadata, ResolvingMetadata } from "next";
import { getPlaceQueryOptions } from "@/domains/test/apis";
import { Place } from "@/domains/test/Place";
import { getQueryClient } from "@/providers/tanstack-query";

export default async function PlacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(getPlaceQueryOptions(id)));
  return <Place id={id} />;
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(getPlaceQueryOptions(id)));
  const previousImages = (await parent).openGraph?.images || [];
  const place = queryClient.getQueryData(getPlaceQueryOptions(id).queryKey);
  const image = place.attributes.photos[0];

  return {
    title: place.data.attributes.name,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}
