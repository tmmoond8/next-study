"use client";

import { useQuery } from "@tanstack/react-query";
import { getTest2QueryOptions } from "./apis";
import React from "react";
import Loading from "@/app/no-prefetch/loading";

export function B() {
  const { data, isLoading, error } = useQuery(getTest2QueryOptions());
  console.log("data", data);
  const area = data?.data.attributes;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <div>
      <h3>{area.title}</h3>
      <p>
        lat: {area.lat}, lng: {area.lng}
      </p>
    </div>
  );
}
