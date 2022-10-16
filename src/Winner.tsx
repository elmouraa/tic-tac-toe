import clsx from "clsx";
import { Player } from "./utils";

interface WinnerProps {
  isGameOver: boolean;
  winner: Player | undefined;
}
export const Winner = ({ isGameOver, winner }: WinnerProps) => {
  return (
    <p
      className={clsx("text-white text-xl", {
        "opacity-0": !isGameOver,
      })}
    >
      {winner ? `Player ${winner} wins!` : "It's a draw!"}
    </p>
  );
};
