type DefaultColorPalette =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "pink"
  | "purple"
  | "indigo"
  | "gray";

export interface ColorProps {
  default: DefaultColorPalette;
}
