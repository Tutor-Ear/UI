import { ChangeEventHandler } from "react";

type SliderSize = "sm" | "md";

export interface SliderProps {
  /**
   * 사이즈 값
   */
  size?: SliderSize;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * 기본 값
   */
  defaultValue?: number;
  /**
   * 값
   */
  value?: number;
  /**
   * 범위의 최소값. 기본값은 0 입니다.
   */
  min?: number;
  /**
   * 범위의 최대값. 기본값은 100 입니다.
   */
  max?: number;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
}
