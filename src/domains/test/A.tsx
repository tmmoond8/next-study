"use client";

import { useGetPlaceQuery } from "./apis";

export function A() {
  const { data } = useGetPlaceQuery();
  const place = data?.data.attributes;

  if (!place) {
    return null;
  }

  return (
    <div>
      <h2>{place.title}</h2>
      <p>{place.address}</p>
      <p>{place.category}</p>
      {place.photos[0] && <img src={place.photos[0]} />}
    </div>
  );
}
