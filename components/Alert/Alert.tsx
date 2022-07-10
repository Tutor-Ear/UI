import { __DEV__ } from "@tutor-ear/ui/utils";
import clsx from "clsx";
import React, { FC } from "react";

import style from "./Alert.module.css";

export type AlertVariant = "info" | "danger" | "success" | "warning" | "dark";

export interface AlertProps {
  status: AlertVariant;
  title: string;
  message: string;
}

const Alert: FC<AlertProps> = ({ status, title, message }) => {
  const rootClassName = clsx(style.root, {
    [style.info]: status === "info",
    [style.danger]: status === "danger",
    [style.success]: status === "success",
    [style.warning]: status === "warning",
    [style.darkStyle]: status === "dark",
  });

  return (
    <div role="alert" className={rootClassName}>
      <span className="font-bold">{title}</span> {message}
    </div>
  );
};

if (__DEV__) {
  Alert.displayName = "Alert";
}

export default Alert;
