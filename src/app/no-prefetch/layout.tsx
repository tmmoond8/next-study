import { PropsWithChildren, Suspense } from "react";
import Loading from "./loading";

export default function ComponentsPageLayout({
  children,
}: PropsWithChildren<{}>) {
  return <>{children}</>;
}
