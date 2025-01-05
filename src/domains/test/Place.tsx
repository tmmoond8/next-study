"use client";
import { useRouter } from "next/navigation";
import { useGetPlaceQuery } from "./apis";

export function Place({ id }: { id: string }) {
  const { data } = useGetPlaceQuery(id);
  const router = useRouter();
  if (!data) {
    return null;
  }
  return (
    <div>
      <div
        onClick={() => {
          router.back();
        }}
      >
        back
      </div>
      <h1>{data.data.attributes.name}</h1>
      <h3>{data.data.attributes.category}</h3>
      {data.data.attributes.photos[0] && (
        <img src={data.data.attributes.photos[0]} />
      )}
    </div>
  );
}
