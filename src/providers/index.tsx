"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { getQueryClient } from "./tanstack-query";

export function Providers({ children }: PropsWithChildren<{}>) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div id="modal-root" className="w-0 h-0" />
      {children}
    </QueryClientProvider>
  );
}
