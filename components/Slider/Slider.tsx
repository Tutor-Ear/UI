import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import type { FC } from "react";

import style from "./Slider.module.css";
import { SliderProps } from "./SliderProps";

const Slider: FC<SliderProps> = ({
  disabled = false,
  size = "md",
  min = 0,
  max = 100,
  ...rest
}) => {
  const rootClassName = clsx(style.root, { [style.small]: size === "sm" });

  return (
    <input
      disabled={disabled}
      type="range"
      min={min}
      max={max}
      {...rest}
      className={rootClassName}
    />
  );
};

if (__DEV__) {
  Slider.displayName = "Slider";
}

export default Slider;
