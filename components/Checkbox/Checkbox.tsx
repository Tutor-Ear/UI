import { ColorProps } from "@tutor-ear/ui/system";
import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";
import * as React from "react";

import style from "./Checkbox.module.css";

export type CheckboxHTMLAttributes<T> = Omit<InputHTMLAttributes<T>, "type">;

export interface CheckboxProps
  extends CheckboxHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  color?: ColorProps["default"];
  className?: string;
  disabled?: boolean;
  label?: string | ReactNode;
  helperText?: string | ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  value,
  checked,
  color = undefined,
  className,
  disabled,
  label,
  helperText,
  ...rest
}) => {
  const rootClassName = clsx(style.root, {
    [style.disabled]: disabled === true,
  });

  return (
    <div className="flex items-center">
      <input
        disabled={disabled}
        className={rootClassName}
        type="checkbox"
        checked={checked}
        {...rest}
      />

      <div className="ml-2 align-middle">
        {label && (
          <label
            className={clsx(style.label, {
              [style["label-disabled"]]: disabled === true,
            })}
          >
            {label}
          </label>
        )}
        {helperText && <p className={clsx(style.helperText)}>{helperText}</p>}
      </div>
    </div>
  );
};

if (__DEV__) {
  Checkbox.displayName = "Checkbox";
}

export default Checkbox;
