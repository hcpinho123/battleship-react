import getOtherPlayer from "../lib/getOtherPlayer.lib";
import { Player } from "../types/PlayerType.type";

export function ControlPanel(props: {
  currentPlayer: Player;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player>>;
  finishedTurn: boolean;
  setFinishedTurn: React.Dispatch<React.SetStateAction<boolean>>;
  showIntermidiate: boolean;
  setShowIntermidiate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "calc(50vw + 300px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0",
          }}
        >
          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            Control Menu
          </h1>
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              border: "0.5px solid white",
              width: "fit-content",
              padding: "0 2px",
              fontSize: "13px",
            }}
            disabled={!props.finishedTurn}
            onClick={() => {
              props.setCurrentPlayer((prevCurrentPlayer) =>
                getOtherPlayer(prevCurrentPlayer)
              );
              props.setFinishedTurn(false);
              props.setShowIntermidiate(true);
            }}
          >
            End Turn
          </button>
        </div>
      </div>
    </>
  );
}
