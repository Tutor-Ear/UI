import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import * as React from "react";

import style from "./Badge.module.css";
import { BadgeProps } from "./BadgeProps";

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    label,
    size = "xs",
    hasBullet = false,
    rounded = true,
    color = "gray",
    ...rest
  } = props;

  const colorStyle = `bg-${color}-100 text-${color}-800 dark:bg-${color}-700 dark:text-${color}-300`;

  const rootClassName = clsx(
    style.root,
    "inline-block",
    "whitespace-nowrap",
    "align-middle",
    {
      [style.rounded]: rounded === true,
      [style.large]: size === "lg",
    },
    colorStyle
  );

  return (
    <span className={rootClassName} {...rest}>
      {label}
    </span>
  );
};

if (__DEV__) {
  Badge.displayName = "Badge";
}

export default Badge;
