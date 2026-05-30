import { OrientationType } from "../types/OrientationType.enum";
import { PositionType } from "../types/PositionType.type";
import { ShipType } from "../types/ShipType.enum";

/**
 * Represents a ship in the Battleship game, including its type, orientation, placement status,
 * and the positions it occupies on the grid. It also tracks the status of hits to the ship.
 *
 * @interface Ship
 * @property {ShipType} type - The type of the ship (e.g., CARRIER, BATTLESHIP).
 * @property {OrientationType} orientation - The orientation of the ship (HORIZONTAL or VERTICAL).
 * @property {boolean} placed - Indicates if the ship has been placed on the board.
 * @property {number} spaces - The number of spaces the ship occupies on the board.
 * @property {PositionType[]} positions - An array of `PositionType` representing the positions of the ship.
 * @property {boolean[]} hits - An array of booleans indicating which positions of the ship have been hit.
 */
export default interface Ship {
  type: ShipType;
  orientation: OrientationType;
  placed: boolean;
  spaces: number;
  positions: PositionType[];
  hits: boolean[];
}
