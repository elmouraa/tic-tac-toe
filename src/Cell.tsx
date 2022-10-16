import { MouseEventHandler } from "react";
import { CellStatus } from "./utils";

interface CellProps {
  status: CellStatus;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Cell = ({ status, onClick, disabled = false }: CellProps) => {
  return (
    <button
      className="border border-white/20 h-32 w-32 rounded bg-gray-800 hover:bg-gray-700 text-white/80 text-6xl active:scale-90 disabled:hover:bg-gray-800 disabled:active:scale-100 transition-all delay-[50]"
      onClick={onClick}
      disabled={disabled}
    >
      {status}
    </button>
  );
};
