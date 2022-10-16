import { TicTacToe } from "./TicTacToe";

const App = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center space-y-8">
      <h1 className="text-white/80 text-6xl">Tic Tac Toe</h1>
      <TicTacToe />
    </div>
  );
};

export default App;
