import { UIComponent } from "@tutor-ear/ui/system";
import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import * as React from "react";

import style from "./Avatar.module.css";
import { AvatarProps, AvatarSizeValue, AvatarStackProps } from "./AvatarProps";

export const AvatarStack: UIComponent<"div", AvatarStackProps> = (props) => {
  const { hasMore } = props;

  return (
    <div className="flex mb-5 -space-x-4">
      {props.children}
      {hasMore && <p className={clsx(style.hasMore)}>{`+${hasMore}`}</p>}
    </div>
  );
};

/**
 * s
 * @param param0
 * @returns
 */
const Avatar: React.FC<AvatarProps> = ({
  size = "sm",
  hasBorder = false,
  pingEffect = false,
  imgSrc,
  altLabel,
  className,
  hasDotIndicator = false,
  isOnline = false,
  ...rest
}) => {
  const length = AvatarSizeValue[size];
  const avatarSize = `w-${length} h-${length}`;

  const rootClassName = clsx(
    imgSrc ? style.root : style.label,
    {
      [style.border]: hasBorder === true,
    },
    avatarSize,
    className
  );

  const child = imgSrc ? (
    <img className={rootClassName} src={imgSrc} {...rest} />
  ) : (
    <p className={rootClassName} {...rest}>
      {altLabel}
    </p>
  );

  const dotIndicator = hasDotIndicator ? (
    <>
      {pingEffect && (
        <span
          className={clsx(
            style.dot,
            isOnline ? "bg-green-500" : "bg-red-500",
            style.ping
          )}
        />
      )}
      <span
        className={clsx(style.dot, isOnline ? "bg-green-500" : "bg-red-500")}
      />
    </>
  ) : null;

  return hasDotIndicator ? (
    <div className="relative">
      {child}
      {dotIndicator}
    </div>
  ) : (
    child
  );
};

if (__DEV__) {
  Avatar.displayName = "Avatar";
  AvatarStack.displayName = "AvatarStack";
}

export default Avatar;
