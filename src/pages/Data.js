import React, { Component } from "react";
import WallMeasure from "../components/WallMeasure";

class Data extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">CALCULADORA DE TINTA</h1>
        <p className="explaining">
        Com a calculadora de tintas você consegue estimar quanto vai precisar para a pintura de uma área. Você precisa ter em mãos as medidas do ambiente, a altura e largura das áreas que não receberão pintura (portas e janelas). Preencha todos os campos indicados e clique no botão calcular.
        </p>
        <WallMeasure />
        
      </div>
    );
  }
}

export default Data;
