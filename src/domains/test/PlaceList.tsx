"use client";

import Link from "next/link";
import { useGetPlaceListQuery } from "./apis";
import { usePathname, useSearchParams } from "next/navigation";

export function PlaceList() {
  const { data } = useGetPlaceListQuery();
  const pathname = usePathname();

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Place List</h1>
      <ol>
        {data.data.map((place: any) => (
          <Link href={`${pathname}/${place.id}`}>
            <li key={place.id} className="cursor-pointer">
              <h4>{place.attributes.name}</h4>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}
