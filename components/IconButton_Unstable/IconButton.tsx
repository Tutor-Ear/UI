import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import React from "react";

import iconButtonStyle from "./IconButton.module.css";
import { IconButtonProps } from "./IconButtonProps";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      customColor,
      size = "md",
      Component = "button",
      variant = "sharp",
      ghost = false,
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    const rootClassName = clsx(
      className,
      iconButtonStyle.root,
      !customColor ? "bg-accent-9" : customColor,

      {
        [iconButtonStyle.rounded]: variant === "rounded",
        [iconButtonStyle.circle]: variant === "circle",
      },
      {
        [iconButtonStyle.ghost]: ghost === true,
        [iconButtonStyle.xs]: size === "xs",
        [iconButtonStyle.sm]: size === "sm",
      },
      {
        [iconButtonStyle.disabled]: disabled === true,
      }
    );

    return (
      <Component
        disabled={disabled}
        ref={ref}
        className={rootClassName}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = "IconButton";
}

export default IconButton;
