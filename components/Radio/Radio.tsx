import { __DEV__ } from "@tutor-ear/ui/utils";
import type { InputHTMLAttributes } from "react";
import * as React from "react";

export type RadioHTMLAttributes<T> = Omit<InputHTMLAttributes<T>, "type">;

export interface RadioProps extends RadioHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
  groupName: string;
  overrideLabel?: JSX.Element;
}

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  value,
  checked,
  overrideLabel = undefined,
  groupName,
  ...rest
}) => {
  return (
    <div className="flex items-center mb-4 align-text-top borderborder-red-300">
      <input
        {...rest}
        checked={checked}
        id={id}
        type="radio"
        value={value}
        name={groupName}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {overrideLabel ? (
        overrideLabel
      ) : (
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-900 align-text-top dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};

if (__DEV__) {
  Radio.displayName = "Radio";
}

export default Radio;
