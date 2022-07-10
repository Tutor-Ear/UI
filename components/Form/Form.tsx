import * as React from "react";
import type { HTMLAttributes, FormEventHandler } from "react";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, ...rest }) => {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
};

export default Form;
