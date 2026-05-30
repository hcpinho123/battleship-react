import GameBoard from "../interfaces/GameBoard.interface";
import Tile from "../interfaces/Tile.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import { Grid } from "./Grid";
import { OrientationType } from "../types/OrientationType.enum";
import updateTile from "../lib/updateTile.lib";
import { TileType } from "../types/TileType.enum";
import attemptToHitShip from "../lib/attemptToHitShip.lib";
import getOtherPlayer from "../lib/getOtherPlayer.lib";
import getTile from "../lib/getTile.lib";

export function AttackGrid(props: {
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
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player>>;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  finishedTurn: boolean;
  setFinishedTurn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Grid
        setBoard={props.setBoard}
        setBoardSelectedPosition={props.setBoardSelectedPosition}
        boardSelectedPosition={props.boardSelectedPosition}
        gameGrid={props.board[props.currentPlayer].attack}
        selectedShipIndex={props.selectedShipIndex}
        setSelectedShipIndex={props.setSelectedShipIndex}
        orientation={props.orientation}
        board={props.board}
        currentPlayer={props.currentPlayer}
        disabled={props.disabled}
        setDisabled={props.setDisabled}
        onMouseOver={(rowIndex: number, colIndex: number) => {
          if (!props.finishedTurn) {
            props.setBoard((prevBoard: GameBoard) => {
              const tile = getTile(prevBoard, props.currentPlayer, "attack", {
                x: rowIndex,
                y: colIndex,
              });
              if (tile.type === TileType.EMPTY) {
                let newBoard = structuredClone(prevBoard);
                newBoard = updateTile(
                  newBoard,
                  props.currentPlayer,
                  "attack",
                  { x: rowIndex, y: colIndex },
                  TileType.TARGETING
                );
                return newBoard;
              } else {
                return prevBoard;
              }
            });
          }
        }}
        onMouseLeave={(rowIndex: number, colIndex: number) => {
          if (!props.finishedTurn) {
            props.setBoard((prevBoard: GameBoard) => {
              const tile = getTile(prevBoard, props.currentPlayer, "attack", {
                x: rowIndex,
                y: colIndex,
              });
              if (tile.type === TileType.TARGETING) {
                let newBoard = structuredClone(prevBoard);
                newBoard = updateTile(
                  newBoard,
                  props.currentPlayer,
                  "attack",
                  { x: rowIndex, y: colIndex },
                  TileType.EMPTY
                );
                return newBoard;
              } else {
                return prevBoard;
              }
            });
          }
        }}
        onClick={(rowIndex: number, colIndex: number) => {
          if (!props.finishedTurn) {
            props.setBoard((prevBoard: GameBoard) => {
              let newBoard = structuredClone(prevBoard);
              newBoard = updateTile(
                newBoard,
                props.currentPlayer,
                "attack",
                { x: rowIndex, y: colIndex },
                TileType.TARGETING
              );
              props.setFinishedTurn(true);
              return newBoard;
            });

            props.setBoard((prevBoard: GameBoard) => {
              let newBoard = structuredClone(prevBoard);
              newBoard = attemptToHitShip(
                newBoard,
                getOtherPlayer(props.currentPlayer),
                {
                  x: rowIndex,
                  y: colIndex,
                }
              );
              return newBoard;
            });
          }
        }}
      />
    </>
  );
}
