import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  JSXElementConstructor,
} from "react";

export type IconButtonSize = "xs" | "sm" | "md";

export type IconButtonVariants = "sharp" | "rounded" | "circle";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  customColor?: string;
  size?: IconButtonSize;
  Component?: string | JSXElementConstructor<any>;
  /**
   * 아이콘 버튼 스타일을 지정할 수 있습니다.
   */
  variant?: IconButtonVariants;
  /**
   * `true`일 경우, 배경이 사라지고 테두리와 아이콘만 남게 됩니다.
   */
  ghost?: boolean;
  disabled?: boolean;
}
