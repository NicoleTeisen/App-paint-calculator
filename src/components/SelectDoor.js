import React, { useContext } from "react";
import WallsContext from '../Providers/WallsContext';

export default function SelectDoor() {
  const {
    checkDoor,
    checkChangeDoor,
    numberDoor,
    disableDoor,
    calculatingFramesArea,
  } = useContext(WallsContext);
  const index = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="door-check"
          checked={checkDoor}
          onClick={checkChangeDoor}
        />
        Essa parede possui porta(s)
      </label>

      <select
        id="door-select"
        className="select"
        value={numberDoor}
        disabled={disableDoor}
        onChange={(e) => calculatingFramesArea("doorArea", e.target.value)}
      >
        {index.map((number) => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
    </div>
  );
}
