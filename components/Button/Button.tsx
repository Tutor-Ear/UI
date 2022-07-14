import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import React, { forwardRef } from "react";

import style from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      disabled = false,
      type = "button",
      variant = "flat",
      Component = "button",
      rounded = false,
      className,
      bgColorScheme,
      textColorScheme,
      ...rest
    },
    ref
  ) => {
    const rootClassName = clsx(
      style.root,
      !bgColorScheme ? "bg-accent-9" : bgColorScheme,
      !textColorScheme ? "text-accent-0" : textColorScheme,
      {
        [style.rounded]: rounded === true,
        [style.ghost]: variant === "ghost",
        [style.slim]: variant === "slim",
      },
      {
        [style.disabled]: disabled === true,
      },
      className
    );

    return (
      <Component type={type} ref={ref} className={rootClassName} {...rest}>
        {label}
      </Component>
    );
  }
);

if (__DEV__) {
  Button.displayName = "Button";
}

export default Button;
