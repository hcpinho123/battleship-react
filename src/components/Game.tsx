import { useEffect, useState } from "react";
import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { ShipPlacementPanel } from "./ShipPlacementPanel";
import { OrientationType } from "../types/OrientationType.enum";
import { PositionType } from "../types/PositionType.type";
import { ControlPanel } from "./ControlPanel";
import { TurnType } from "../types/TurnType";
import { Intermidiate } from "./Intermidiate";
import { DefenseGrid } from "./DefenseGrid";
import { AttackGrid } from "./AttackGrid";
export function Game(props: {
  board: GameBoard;
  setBoard: React.Dispatch<React.SetStateAction<GameBoard>>;
}) {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("player1");
  const [orientation, setOrientation] = useState<OrientationType>(
    OrientationType.HORIZONTAL
  );
  const [selectedShipIndex, setSelectedShipIndex] = useState<number | null>(
    null
  );
  const [boardSelectedPosition, setBoardSelectedPosition] =
    useState<PositionType | null>(null);

  const [finishedTurn, setFinishedTurn] = useState<boolean>(true);

  const [turn, setTurn] = useState<TurnType>("p1 placeships");
  const [showIntermidiate, setShowIntermidiate] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (turn === "p2 placeships") {
      setFinishedTurn(true);
      setOrientation(OrientationType.HORIZONTAL);
    }
    if (turn === "p1 turn" || turn === "p2 turn") {
      setDisabled(true);
    }
  }, [turn]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            margin: "0",
          }}
        >
          Battleship!
        </h1>

        <p
          style={{
            margin: "0",
            marginBottom: "20px",
          }}
        >
          {currentPlayer === "player1" ? "Player 1" : "Player 2"}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
          {showIntermidiate && (
            <Intermidiate
              currentPlayer={currentPlayer}
              turn={turn}
              setTurn={setTurn}
              showIntermidiate={showIntermidiate}
              setShowIntermidiate={setShowIntermidiate}
            />
          )}

          {(turn === "p1 turn" || turn === "p2 turn") && !showIntermidiate && (
            <AttackGrid
              setBoard={props.setBoard}
              setBoardSelectedPosition={setBoardSelectedPosition}
              boardSelectedPosition={boardSelectedPosition}
              gameGrid={props.board[currentPlayer].attack}
              selectedShipIndex={selectedShipIndex}
              setSelectedShipIndex={setSelectedShipIndex}
              orientation={orientation}
              board={props.board}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              disabled={finishedTurn}
              setDisabled={setDisabled}
              finishedTurn={finishedTurn}
              setFinishedTurn={setFinishedTurn}
            />
          )}
          {!showIntermidiate && (
            <DefenseGrid
              setBoard={props.setBoard}
              setBoardSelectedPosition={setBoardSelectedPosition}
              boardSelectedPosition={boardSelectedPosition}
              gameGrid={props.board[currentPlayer].defense}
              selectedShipIndex={selectedShipIndex}
              setSelectedShipIndex={setSelectedShipIndex}
              orientation={orientation}
              board={props.board}
              currentPlayer={currentPlayer}
              disabled={disabled}
              setDisabled={setDisabled}
            />
          )}
        </div>
        {!showIntermidiate && !props.board[currentPlayer].placedShips && (
          <ShipPlacementPanel
            ships={props.board[currentPlayer].ships}
            setOrientation={setOrientation}
            selectedShipIndex={selectedShipIndex}
            setSelectedShipIndex={setSelectedShipIndex}
          />
        )}
        {!showIntermidiate && props.board[currentPlayer].placedShips && (
          <ControlPanel
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            finishedTurn={finishedTurn}
            setFinishedTurn={setFinishedTurn}
            showIntermidiate={showIntermidiate}
            setShowIntermidiate={setShowIntermidiate}
          />
        )}
      </div>
    </>
  );
}
