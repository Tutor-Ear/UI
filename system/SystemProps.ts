export type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";
export type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export interface SystemProps {
  alignItems: AlignItems;
  justifyContent: JustifyContent;
}
