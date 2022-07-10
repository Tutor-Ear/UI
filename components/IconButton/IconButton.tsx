import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import React from "react";

import iconButtonStyle from "./IconButton.module.css";
import iconStyle from "./IconButton-icon.module.css";
import { IconButtonProps } from "./IconButtonProps";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      iconOnly = false,
      className,
      iconClassName,
      size = "md",
      Component = "button",
      variant = "sharp",
      ghost = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const rootClassName = clsx(
      iconButtonStyle.root,
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
        [iconButtonStyle.iconOnly]: iconOnly === true,
        [iconButtonStyle.disabled]: disabled === true,
      },
      className
    );

    const iconRootClassName = clsx(
      iconClassName,
      iconStyle.root,
      {
        [iconStyle.ghost]: ghost === true,
        [iconStyle.iconOnly]: iconOnly === true,
      },
      {
        [iconStyle.xs]: size === "xs",
        [iconStyle.sm]: size === "sm",
      }
    );

    return (
      <Component ref={ref} className={rootClassName} {...rest}>
        <Icon className={iconRootClassName} />
      </Component>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = "IconButton";
}

export default IconButton;
