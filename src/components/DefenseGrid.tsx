import GameBoard from "../interfaces/GameBoard.interface";
import Tile from "../interfaces/Tile.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import { Grid } from "./Grid";
import { OrientationType } from "../types/OrientationType.enum";
import getPositionsForShip from "../lib/getPositionsForShip.lib";
import placeShip from "../lib/placeShip.lib";
import updateTile from "../lib/updateTile.lib";
import { TileType } from "../types/TileType.enum";

export function DefenseGrid(props: {
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
}) {
  return (
    <>
      <Grid
        setBoard={props.setBoard}
        setBoardSelectedPosition={props.setBoardSelectedPosition}
        boardSelectedPosition={props.boardSelectedPosition}
        gameGrid={props.board[props.currentPlayer].defense}
        selectedShipIndex={props.selectedShipIndex}
        setSelectedShipIndex={props.setSelectedShipIndex}
        orientation={props.orientation}
        board={props.board}
        currentPlayer={props.currentPlayer}
        disabled={props.disabled}
        setDisabled={props.setDisabled}
        onMouseOver={(rowIndex: number, colIndex: number) => {
          props.setBoard((prevBoard: GameBoard) => {
            if (!props.disabled) {
              if (props.selectedShipIndex !== null) {
                try {
                  const positions = getPositionsForShip(
                    prevBoard,
                    props.currentPlayer,
                    props.selectedShipIndex,
                    { x: rowIndex, y: colIndex },
                    props.orientation
                  );
                  let newBoard = structuredClone(prevBoard);
                  for (const position of positions) {
                    newBoard = updateTile(
                      newBoard,
                      props.currentPlayer,
                      "defense",
                      position,
                      TileType.PLACING
                    );
                  }
                  return newBoard;
                } catch (error) {
                  console.log(error);
                  return prevBoard;
                }
              }
            }
            return prevBoard;
          });
        }}
        onMouseLeave={(rowIndex: number, colIndex: number) => {
          if (!props.disabled) {
            props.setBoard((prevBoard: GameBoard) => {
              if (props.selectedShipIndex !== null) {
                try {
                  const positions = getPositionsForShip(
                    prevBoard,
                    props.currentPlayer,
                    props.selectedShipIndex,
                    { x: rowIndex, y: colIndex },
                    props.orientation
                  );
                  let newBoard = structuredClone(prevBoard);
                  for (const position of positions) {
                    newBoard = updateTile(
                      newBoard,
                      props.currentPlayer,
                      "defense",
                      position,
                      TileType.EMPTY
                    );
                  }
                  return newBoard;
                } catch (error) {
                  console.log(error);
                  return prevBoard;
                }
              }
              return prevBoard;
            });
          }
        }}
        onClick={(rowIndex: number, colIndex: number) => {
          if (!props.disabled) {
            props.setBoard((prevBoard: GameBoard) => {
              if (props.selectedShipIndex !== null) {
                try {
                  let newBoard = structuredClone(prevBoard);
                  const positions = getPositionsForShip(
                    newBoard,
                    props.currentPlayer,
                    props.selectedShipIndex,
                    { x: rowIndex, y: colIndex },
                    props.orientation
                  );

                  newBoard = placeShip(
                    newBoard,
                    props.currentPlayer,
                    props.selectedShipIndex,
                    positions
                  );
                  props.setSelectedShipIndex(null);
                  return newBoard;
                } catch (error) {
                  console.log(error);
                  return prevBoard;
                }
              }
              return prevBoard;
            });
          }
        }}
      />
    </>
  );
}
