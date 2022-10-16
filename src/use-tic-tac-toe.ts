import { useEffect, useState } from "react";
import { checkWinner, initialBoard, Player } from "./utils";

export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | undefined>(undefined);

  const setBoardCellStatus = (index: number) => {
    const nextBoard = [...board];
    nextBoard[index] = player;

    setBoard(nextBoard);
    setPlayer(player === "X" ? "O" : "X");
    setWinner(checkWinner(nextBoard));
  };

  return { winner, board, setBoardCellStatus };
};
