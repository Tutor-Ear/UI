import { __DEV__, getVaildChildren } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import * as React from "react";

import { StackProps } from "./Stack.types";

export const StackItem: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="inline-block flex-initial min-w-0" {...props} />;
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const {
      children,
      direction = "row",
      spacing = 4,
      align = "center",
      justify = "start",
      className,
      ...rest
    } = props;

    const stackDirection = direction === "row" ? "flex-row" : "flex-col";
    const stackSpacing =
      direction === "row" ? `space-x-${spacing}` : `space-y-${spacing}`;

    const rootClassName = clsx(
      "flex",
      `item-${align}`,
      `justify-${justify}`,
      stackDirection,
      stackSpacing,
      className
    );

    const vaildChildren = getVaildChildren(children);

    const clones = vaildChildren.map((child, idx) => {
      return <StackItem key={idx}>{child}</StackItem>;
    });

    return (
      <div ref={ref} className={rootClassName} {...rest}>
        {clones}
      </div>
    );
  }
);

export const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    return <Stack {...props} direction="row" ref={ref} />;
  }
);

export const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    return <Stack {...props} direction="column" ref={ref} />;
  }
);

if (__DEV__) {
  Stack.displayName = "Stack";
  HStack.displayName = "HStack";
  VStack.displayName = "VStack";
}
