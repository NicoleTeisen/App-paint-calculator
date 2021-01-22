import React, { useContext } from "react";
import WallsContext from '../Providers/WallsContext';

export default function SelectWindows() {
  const {
    checkWindows,
    checkChangeWindows,
    numberWindows,
    disableWindows,
    calculatingFramesArea,
    alertFrames
  } = useContext(WallsContext);
  const index = [0, 1, 2, 3, 4, 5];
  return(    
    <div>
      <label>
        <input
          type="checkbox"
          name="windows-check"
          checked={checkWindows}
          onClick={checkChangeWindows}
        />
        Essa parede possui janela(s)
      </label>
  
      <select
        id="windows-select"
        className="select"
        value={numberWindows}
        disabled={disableWindows}
        onChange={(e) => calculatingFramesArea("windowsArea", e.target.value)}
      >
        {index.map((number) => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
      <p className="alert">{alertFrames}</p>
    </div>
  )
}
