"use client";

import type { ReactNode } from "react";
import { ViewTransition } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
