import { useState } from "react";
import { checkWinner, initialBoard, Player } from "./utils";

export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | undefined>(undefined);
  const [isRunning, setIsRunning] = useState(true);

  const setBoardCellStatus = (index: number) => {
    const nextBoard = [...board];
    nextBoard[index] = player;

    const winner = checkWinner(nextBoard);

    setBoard(nextBoard);
    setPlayer(player === "X" ? "O" : "X");
    setWinner(winner);

    if (
      winner ||
      nextBoard.filter((cellStatus) => cellStatus !== undefined).length >= 9
    ) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setBoard(initialBoard);
    setPlayer("X");
    setWinner(undefined);
    setIsRunning(true);
  };

  return { winner, player, isRunning, board, setBoardCellStatus, reset };
};
