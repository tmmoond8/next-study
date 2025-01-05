"use client";

import { useQuery } from "@tanstack/react-query";
import { getAreaQueryOptions } from "./apis";
import React from "react";
import Loading from "@/app/no-prefetch/loading";

export function Area() {
  const { data, isLoading, error } = useQuery(getAreaQueryOptions());
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
