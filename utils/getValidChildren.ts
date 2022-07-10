import React from "react";
import type { ReactNode, ReactElement } from "react";

export function getVaildChildren(children: ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as ReactElement[];
}
