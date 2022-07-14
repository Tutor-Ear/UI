import { ColorProps } from "@tutor-ear/ui/system";

export interface BadgeProps {
  /**
   * Badge 레이블에 표기할 텍스트 값
   */
  label: string;
  /**
   * Badge 사이즈
   */
  size?: "xs" | "lg";
  /**
   * Bullet 을 Badge 에 표기할 지 결정
   */
  hasBullet?: boolean;
  /**
   * Badge 모서리를 둥글게 만들지 결정
   */
  rounded?: boolean;
  /**
   * Badge 색상
   */
  color?: ColorProps["default"];
}
