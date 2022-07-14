type AvatarSize = "xs" | "sm" | "md" | "xl";

export interface AvatarProps {
  /**
   * 만약 이미지를 정상적으로 불러올 수 없을 때 해당 값을 대신 사용합니다.
   */
  altLabel: string;
  /**
   * 상태 표시를 하고 싶을 때 설정
   */
  hasDotIndicator?: boolean;
  /**
   * 상태 표시에 Ping 효과를 추가할 지 여부
   */
  pingEffect?: boolean;
  /**
   * 유저가 온라인 상태일 때 설정할 수 있습니다. `hasDotIndicator`가 `true`로 설정되어 있어야 합니다.
   */
  isOnline?: boolean;
  /**
   * 테두리를 표시할 지 여부
   */
  hasBorder?: boolean;
  /**
   * 컴포넌트 사이즈
   */
  size?: AvatarSize;
  /**
   * 이미지 경로. 로컬 파일 주소나 url을 입력하세요.
   */
  imgSrc?: string;
  className?: string;
}

export interface AvatarStackProps {
  hasMore?: number;
}

export const AvatarSizeValue: Record<AvatarSize, number> = {
  xs: 8,
  sm: 10,
  md: 14,
  xl: 20,
};
