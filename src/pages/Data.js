import React, { Component } from "react";
import WallMeasure from "../components/WallMeasure";

class Data extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">CALCULADORA DE TINTA</h1>
        <p className="explaining">
          Com a calculadora de tinta você consegue estimar quanto vai precisar
          para a pintura de uma área. Você precisa ter em mãos as medidas das quatro paredes e o número de portas e janelas por parede. Preencha os campos indicados e clique no
          botão calcular.
        </p>
        <WallMeasure />
      </div>
    );
  }
}

export default Data;
