import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-400",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      Replay
    </button>
  );
};
