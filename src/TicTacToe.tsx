import clsx from "clsx";
import { Board } from "./Board";
import { useTicTacToe } from "./use-tic-tac-toe";

export const TicTacToe = () => {
  const { board, setBoardCellStatus, winner, reset, isRunning } =
    useTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <p
        className={clsx("text-white text-xl", {
          "opacity-0": isRunning,
        })}
      >
        {winner ? `Player ${winner} wins!` : "It's a draw!"}
      </p>
      <Board
        board={board}
        setBoardCellStatus={setBoardCellStatus}
        disabled={!isRunning}
      />
      <button
        className={clsx(
          "bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-400",
          {
            "opacity-0": isRunning,
          }
        )}
        onClick={reset}
      >
        Replay
      </button>
    </div>
  );
};
