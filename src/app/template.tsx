"use client";

import {
  type ReactNode,
  unstable_ViewTransition as ViewTransition,
} from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
