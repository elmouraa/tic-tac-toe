export type Player = "X" | "O";

export type CellStatus = "X" | "O" | undefined;

export const initialBoard: CellStatus[] = Array(9).fill(undefined);

export const checkWinner = (board: CellStatus[]): Player | undefined => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log("checking winner...");

  for (let i = 0; i < lines.length; i++) {
    if (
      board[lines[i][0]] &&
      board[lines[i][0]] === board[lines[i][1]] &&
      board[lines[i][1]] === board[lines[i][2]]
    ) {
      return board[lines[i][0]];
    }
  }

  return undefined;
};
