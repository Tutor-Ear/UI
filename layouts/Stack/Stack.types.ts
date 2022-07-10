import type { SystemProps } from "@tutor-ear/ui/system";
import type { ReactNode } from "react";

export type StackDirection = "row" | "column";

export interface StackProps {
  children: ReactNode;
  direction?: StackDirection;
  align?: SystemProps["alignItems"];
  justify?: SystemProps["justifyContent"];
  className?: string;
  spacing?: number;
}
