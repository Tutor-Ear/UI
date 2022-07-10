import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import * as React from "react";

import { FlexProps } from "./Flex.types";

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const { align = "center", justify = "start", ...rest } = props;

    const rootClassName = clsx("flex", `item-${align}`, `justify-${justify}`);

    return <div ref={ref} className={rootClassName} {...rest} />;
  }
);

if (__DEV__) {
  Flex.displayName = "Flex";
}
