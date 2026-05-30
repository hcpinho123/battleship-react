import Ship from "../interfaces/Ship.interface";
import { OrientationType } from "../types/OrientationType.enum";

export function ShipPlacementPanel(props: {
  ships: Ship[];
  setOrientation: React.Dispatch<React.SetStateAction<OrientationType>>;
  setSelectedShipIndex: React.Dispatch<React.SetStateAction<number | null>>;
  selectedShipIndex: number | null;
}) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "calc(50vw + 300px)",
        }}
      >
        <p>Ships</p>
        {props.ships.map((ship, index) => (
          <div key={`outer-${ship.type}-${index}`}>
            {ship.placed == false && (
              <div
                onClick={() => {
                  if (props.selectedShipIndex === index) {
                    props.setSelectedShipIndex(null);
                  } else {
                    props.setSelectedShipIndex(index);
                  }
                }}
                style={{
                  display: "flex",
                  gap: "5px",
                  height: "20px",
                  width: "fit-content",
                  backgroundColor:
                    props.selectedShipIndex === index ? "gray" : "white",
                  border: "1px solid red",
                  alignItems: "center",
                  padding: "2px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              >
                {Array.from({ length: ship.spaces }).map((_, spaceIndex) => {
                  return (
                    <div
                      key={`${ship.type}-${spaceIndex}`}
                      style={{
                        height: "15px",
                        width: "15px",
                        borderRadius: "50%",
                        backgroundColor: "orange",
                      }}
                    ></div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
        <p
          style={{
            marginBottom: "2px",
          }}
        >
          Orientation
        </p>
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            const value = event.target.value;
            if (value === "horizontal") {
              props.setOrientation(OrientationType.HORIZONTAL);
            } else if (value === "vertical") {
              props.setOrientation(OrientationType.VERTICAL);
            }
          }}
        >
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
      </div>
    </>
  );
}
