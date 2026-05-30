import GameBoard from "../interfaces/GameBoard.interface";
import Tile from "../interfaces/Tile.interface";
import { OrientationType } from "../types/OrientationType.enum";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import { TileBox } from "./TileBox";

export function Grid(props: {
  gameGrid: Tile[][];
  boardSelectedPosition: PositionType | null;
  setBoardSelectedPosition: React.Dispatch<
    React.SetStateAction<PositionType | null>
  >;
  selectedShipIndex: number | null;
  setSelectedShipIndex: React.Dispatch<React.SetStateAction<number | null>>;
  orientation: OrientationType;
  board: GameBoard;
  setBoard: React.Dispatch<React.SetStateAction<GameBoard>>;
  currentPlayer: Player;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: (rowIndex: number, colIndex: number) => void;
  onMouseOver: (rowIndex: number, colIndex: number) => void;
  onMouseLeave: (rowIndex: number, colIndex: number) => void;
}) {
  return (
    <>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        {props.gameGrid.map((row, colIndex) => (
          <div
            key={colIndex}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {row.map((tile, rowIndex) => (
              <div
                style={{
                  cursor: props.disabled != true ? "pointer" : "not-allowed",
                }}
                key={rowIndex}
                onMouseOver={() => props.onMouseOver(rowIndex, colIndex)}
                onMouseLeave={() => {
                  props.onMouseLeave(rowIndex, colIndex);
                }}
                onClick={() => props.onClick(rowIndex, colIndex)}
              >
                <TileBox tile={tile.type} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
