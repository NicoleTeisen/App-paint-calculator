import React, { useContext } from "react";
import WallsContext from '../Providers/WallsContext';

export default function Buttons() {
    const { saveWall, disableSave, editWall, disableEdit } = useContext(WallsContext);
  return (
    <div className="buttons-wall">
      <button onClick={saveWall} disabled={disableSave}>
        SALVAR
      </button>
      <button onClick={editWall} disabled={disableEdit}>
        EDITAR
      </button>
    </div>
  );
}
