import { Board } from "./Board";
import { useTicTacToe } from "./use-tic-tac-toe";

export const TicTacToe = () => {
  const { board, setBoardCellStatus, winner } = useTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white">{winner}</p>
      <Board
        board={board}
        setBoardCellStatus={setBoardCellStatus}
        disabled={!!winner}
      />
      ;
    </div>
  );
};
