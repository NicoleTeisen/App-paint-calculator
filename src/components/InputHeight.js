import React, { useContext } from "react";
import WallsContext from '../Providers/WallsContext';

export default function InputHeight() {
  const { height, disableHeight, updateDataHeight } = useContext(WallsContext);
    return(
        <label>
        Altura
        <input
          id="input-height"
          className="input-text"
          value={height}
          type="number"
          step={0.1}
          disabled={disableHeight}
          onChange={(e) => updateDataHeight(e.target.value)}
          required
        />
        metros
      </label>

    )
}