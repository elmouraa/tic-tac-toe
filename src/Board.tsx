import { Cell } from "./Cell";
import { CellStatus, Player } from "./utils";

interface BoardProps {
  board: CellStatus[];
  disabled?: boolean;
  setBoardCellStatus: (index: number) => void;
}

export const Board = ({
  board,
  setBoardCellStatus,
  disabled = false,
}: BoardProps) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1">
      {board.map((status, index) => (
        <Cell
          key={index}
          status={status}
          disabled={disabled || !!status}
          onClick={() => {
            setBoardCellStatus(index);
          }}
        />
      ))}
    </div>
  );
};
