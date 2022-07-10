import * as React from "react";
import clsx from "clsx";
import style from "./InputAddon.module.css";

export interface InputAddonProps {
  addon: string;
}

export const InputAddon: React.FC<InputAddonProps> = ({ addon }) => {
  return <span className={clsx(style.root)}>{addon}</span>;
};
