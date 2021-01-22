import React, { useContext } from "react";
import WallsContext from "../Providers/WallsContext";

export default function InputWidth() {
  const { updateDataWidth, alertWidth } = useContext(WallsContext);
  return (
    <label>
      Largura
      <input
        className="input-text"
        placeholder="0"
        type="number"
        step={0.1}
        min={1}
        max={15}
        onChange={(e) => updateDataWidth(e.target.value)}
        required
      />
      metros
      <p className="alert">{alertWidth}</p>
    </label>
  );
}
