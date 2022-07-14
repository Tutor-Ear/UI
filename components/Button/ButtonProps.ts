import type { ButtonHTMLAttributes, JSXElementConstructor } from "react";

export type ButtonVariants = "flat" | "slim" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼에 표기할 레이블 값
   */
  label: string;
  /**
   * @deprecated - Don't use!
   * 버튼 배경 색상
   */
  bgColorScheme?: string;
  /**
   * @deprecated - Don't use!
   * 버튼 레이블 색상
   */
  textColorScheme?: string;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 버튼 스타일
   * @defaultValue 'flat'
   */
  variant?: ButtonVariants;
  type?: "button" | "submit" | "reset";
  Component?: string | JSXElementConstructor<any>;
  /**
   * 버튼 모서리를 둥글게 표시할 것인지 여부
   */
  rounded?: boolean;
  className?: string;
  active?: boolean;
}
