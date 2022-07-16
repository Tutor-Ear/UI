import clsx from "clsx";
import React, { FC } from "react";

import style from "./Kbd.module.css";

export interface KbdProps {
  label: string | JSX.Element;
  className?: string;
}

const Kbd: FC<KbdProps> = ({ label, className }) => {
  const rootClassName = clsx(style.root, className);

  return <kbd className={rootClassName}>{label}</kbd>;
};

export default Kbd;
