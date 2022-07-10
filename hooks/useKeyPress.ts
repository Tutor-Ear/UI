// useKeyPress.ts
//
// Author: Yong In Kim <https://github.com/limitkr>
// Created At: 2022-04-14

import * as React from "react";

type UseKeyPressCallbacks = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

type UseKeyPressCallbackReturnType = {
  readonly isActive: boolean;
  readonly callbacks: UseKeyPressCallbacks;
};

export function useKeyPress(
  callback: (event: KeyboardEvent) => void,
  keyCodes: string[],
  initialState = true
): UseKeyPressCallbackReturnType {
  const [isActive, setIsActive] = React.useState(initialState);

  const callbacks = React.useMemo(
    () => ({
      on: () => setIsActive(true),
      off: () => setIsActive(false),
      toggle: () => setIsActive((prevState) => !prevState),
    }),
    []
  );

  const handler = React.useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      if (keyCodes.includes(event.code)) {
        callback(event);
      }
    },
    [callback, keyCodes]
  );

  React.useEffect(() => {
    if (isActive) document.addEventListener("keyup", handler);
    return () => {
      document.removeEventListener("keyup", handler);
    };
  }, [isActive, handler]);

  return { isActive, callbacks } as const;
}
