"use client";

import AxeCore from "@/components/axe-core";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AxeCore />
      {children}
    </>
  );
}
