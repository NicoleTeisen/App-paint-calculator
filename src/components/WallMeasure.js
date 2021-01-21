import React from "react";
import Form from "./Form";
import WallsProvider from "../Providers/WallsProvider";

export default function WallMeasure() {
  return (
    <div>        
      <WallsProvider>
        <Form />        
      </WallsProvider>     
    </div>
  );
}