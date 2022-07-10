type AvatarSize = "xs" | "sm" | "md" | "xl";

export interface AvatarProps {
  altLabel: string;
  hasDotIndicator?: boolean;
  pingEffect?: boolean;
  isOnline?: boolean;
  hasBorder?: boolean;
  size?: AvatarSize;
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
