import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { IntroScreen } from "./components/IntroScreen";
import GameBoard from "./interfaces/GameBoard.interface";
import generateShips from "./lib/generateShips.lib";
import generateTiles from "./lib/generateTiles.lib";

function createBoard(): GameBoard {
  return {
    player1: {
      placedShips: false,
      defense: generateTiles(),
      attack: generateTiles(),
      ships: generateShips(),
    },
    player2: {
      placedShips: false,
      defense: generateTiles(),
      attack: generateTiles(),
      ships: generateShips(),
    },
  };
}

function App() {
  const [started, setStarted] = useState(false);
  const [board, setBoard] = useState<GameBoard>(createBoard);

  if (!started) {
    return <IntroScreen onStart={() => setStarted(true)} />;
  }

  return (
    <>
      <Game setBoard={setBoard} board={board} />
    </>
  );
}

export default App;
