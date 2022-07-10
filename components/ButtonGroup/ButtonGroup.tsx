import clsx from "clsx";
import React, { FC, ReactNode } from "react";

import style from "./ButtonGroup.module.css";

export interface ButtonGroupProps {
  children: ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  const rootClassName = clsx(style.root);
  /*
  const clones = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        className: "border-t-2 ml-3",
      });
    }

    return child;
  });
  */

  return (
    <div role="group" className={rootClassName}>
      {children}
    </div>
  );
};

export default ButtonGroup;
