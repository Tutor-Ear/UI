import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import React, {
  CSSProperties,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LegacyRef,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

import style from "./Input.module.css";
import { InputAddonProps } from "./InputAddon";
import InputLabel from "./InputLabel";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * React 기본 style CSS 프로퍼티
   */
  style?: CSSProperties;
  /**
   * 레이블을 별도로 표기하고자 한다면 값을 설정
   */
  label?: string;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
  className?: string;
  /**
   * Input types
   */
  type?: HTMLInputTypeAttribute;
  /**
   * Input에 필요한 도움 텍스트가 필요하다면 설정
   */
  helperText?: string | ReactNode;
  id: string;
  icon?: JSX.Element;
  children?: ReactElement<InputAddonProps>;
  // eslint-disable-next-line no-unused-vars
  vaildationFn?(value?: string | number | readonly string[]): boolean;
  /**
   * Input 값의 검증 통과 여부. 이 여부에 따라서 스타일이 지정됩니다.
   */
  vaildationPassed?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
  const [validationResult, setValidationResult] = useState(false);

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

  useEffect(() => {
    if (vaildationFn !== undefined) {
      if (vaildationFn(value) && value !== "") {
        setValidationResult(true);
      } else {
        setValidationResult(false);
      }
    }
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
