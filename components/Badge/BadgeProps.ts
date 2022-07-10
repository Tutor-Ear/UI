import { ColorProps } from "@tutor-ear/ui/system";

export interface BadgeProps {
  /**
   * Text value to display on badge label.
   */
  label: string;
  /**
   * Badge Size Value
   */
  size?: "xs" | "lg";
  /**
   * If `true`, mark the Bullet on the Badge.
   */
  hasBullet?: boolean;
  /**
   * If `true`, round the edge of the badge.
   */
  rounded: boolean;
  /**
   * Values for Badge color.
   */
  color?: ColorProps["default"];
}
