import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import type {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import * as React from "react";

import style from "./Input.module.css";
import { InputAddonProps } from "./InputAddon";
import InputLabel from "./InputLabel";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  label?: string;
  disabled?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
  helperText?: string | ReactNode;
  id: string;
  icon?: JSX.Element;
  children?: ReactElement<InputAddonProps>;
  // eslint-disable-next-line no-unused-vars
  vaildationFn?(value?: string | number | readonly string[]): boolean;
  vaildationPassed?: boolean;
  ref?: React.LegacyRef<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    label = undefined,
    className,
    id,
    disabled = false,
    helperText,
    icon = undefined,
    vaildationFn,
    vaildationPassed = undefined,
    type = "text",
    children,
    style: CssStyle,

    ...rest
  } = props;
  // const [result, setResult] = React.useState(value);
  const [validationResult, setValidationResult] = React.useState(false);

  const validationStyle = clsx({
    [style.success]: (validationResult && value !== "") || vaildationPassed,
    [style.error]:
      (!validationResult && value !== "") || vaildationPassed === false,
  });

  const rootClassName = clsx(
    style.root,
    {
      [style.disabled]: disabled === true,
      [style.hasIcon]: icon !== undefined,
    },
    className,
    (vaildationFn || vaildationPassed !== undefined) && validationStyle
  );

  const hasAddon = children !== undefined;

  React.useEffect(() => {
    if (vaildationFn !== undefined) {
      if (vaildationFn(value) && value !== "") {
        setValidationResult(true);
      } else {
        setValidationResult(false);
      }
    }
    console.log(value);
  }, [value, vaildationFn]);

  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <div className={hasAddon ? "flex" : "relative"}>
        {icon && !hasAddon && (
          <div className={clsx(style.iconWrapper)}>{icon}</div>
        )}
        {hasAddon && children}
        <input
          value={value}
          ref={ref}
          style={CssStyle}
          type={type}
          disabled={disabled}
          id={id}
          className={rootClassName}
          {...rest}
        />
      </div>
      {helperText && <p className={clsx(style.helperText)}>{helperText}</p>}
    </div>
  );
});

if (__DEV__) {
  Input.displayName = "Input";
}

export default Input;
