import React, { Component } from "react";
import WallMeasure from "../components/WallMeasure";

class Data extends Component {
  render() {
    return (
      <div className="container">
        <h1 data-testid="settings-title">CALCULADORA DE TINTA</h1>
        <WallMeasure />
        
      </div>
    );
  }
}

export default Data;
