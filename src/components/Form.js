import React, { useContext } from "react";
import WallsContext from "../Providers/WallsContext";
import InputWidth from "./InputWidth";
import InputHeight from "./InputHeight";
import SelectDoor from "./SelectDoor";
import SelectWindows from "./SelectWindows";
import Buttons from "./Buttons";

export default function Form() {
  const { disableFieldset } = useContext(WallsContext);
  return (
    <div>
      <fieldset className="wall" disabled={disableFieldset}>
        <InputWidth />
        <InputHeight />
        <SelectDoor />
        <SelectWindows />
      </fieldset>
      <Buttons />
    </div>
  );
}
