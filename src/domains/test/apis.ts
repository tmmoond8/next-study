import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

const token =
  "dcdcdc27978f0b5a0c49aa79c087097583afd20172d1a1bcc121eb5ec75c8632c50353f09387ef61ab16acc711318ad4f71e0ece65a3eaea5753a079ae84d4a920ff5d2c3fb3f25446cf11b28838c71166e52cded853da0295a60658dd734d4dc93d7270a43795a7cedc51964d8eca640c403015d72d0c2c8157ecb781be4a93";

export function getPlaceQueryOptions(id?: string) {
  return queryOptions({
    queryKey: ["place", id],
    queryFn: async () => {
      const response = await fetch(`https://api.picknic.kr/api/places/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
    enabled: id !== undefined,
  });
}

export function useGetPlaceQuery(id?: string) {
  return useSuspenseQuery(getPlaceQueryOptions(id));
}

export function getPlaceListQueryOptions() {
  return queryOptions({
    queryKey: ["places"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.picknic.kr/api/places?pagination[pageSize]=15&pagination[page]=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    },
  });
}

export function useGetPlaceListQuery() {
  return useSuspenseQuery(getPlaceListQueryOptions());
}

export function getTest2QueryOptions() {
  const api = "https://api.picknic.kr/api/areas/10";
  return queryOptions({
    queryKey: ["area", "B"],
    queryFn: async () => {
      const response = await fetch(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.json();
    },
  });
}
