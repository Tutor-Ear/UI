import type { ButtonHTMLAttributes, JSXElementConstructor } from "react";

export type ButtonVariants = "flat" | "slim" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColorScheme?: string;
  textColorScheme?: string;
  disabled?: boolean;
  variant?: ButtonVariants;
  type?: "button" | "submit" | "reset";
  Component?: string | JSXElementConstructor<any>;
  rounded?: boolean;
  className?: string;
  active?: boolean;
}
