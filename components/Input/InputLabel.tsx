import * as React from "react";
import clsx from "clsx";
import style from "./InputLabel.module.css";

import { LabelHTMLAttributes } from "react";

export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  className,
  children,
  ...rest
}) => {
  const rootClassName = clsx(style.root, className);
  return (
    <label className={rootClassName} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
