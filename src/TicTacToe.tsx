import clsx from "clsx";
import { Board } from "./Board";
import { Button } from "./Button";
import { useTicTacToe } from "./use-tic-tac-toe";
import { Winner } from "./Winner";

export const TicTacToe = () => {
  const { board, setBoardCellStatus, winner, reset, isGameOver } =
    useTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <Winner winner={winner} isGameOver={isGameOver} />
      <Board
        board={board}
        setBoardCellStatus={setBoardCellStatus}
        disabled={isGameOver}
      />
      <Button className={clsx({ "opacity-0": !isGameOver })} onClick={reset}>
        Replay
      </Button>
    </div>
  );
};
