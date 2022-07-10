import { useKeyPress } from "@tutor-ear/ui/hooks";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import React, { FC, ReactNode, useEffect, useRef } from "react";

import style from "./Modal.module.css";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose: () => void;
  onEnter?: () => void | null;
}

const XIcon = (any: any) => (
  <svg
    {...any}
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { callbacks } = useKeyPress(() => onClose(), ["Escape"], true);

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      callbacks.on();
    }
    return () => {
      clearAllBodyScrollLocks();
      callbacks.off();
    };
  });

  return (
    <div className={style.root}>
      <div className={style.modal} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close modal"
          className={style.close}
        >
          <XIcon className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
