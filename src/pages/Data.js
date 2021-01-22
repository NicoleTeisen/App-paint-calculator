import React, { Component } from "react";
import WallMeasure from "../components/WallMeasure";
import GlobalContext from '../Providers/GlobalContext';
import PropTypes from "prop-types";

class Data extends Component {
  constructor(props) {
    super(props);

    this.submitTotalArea = this.submitTotalArea.bind(this); 
  }

  async submitTotalArea() {
    const { countWalls, totalPaintCans } = this.context;
    const { history } = this.props;
    if (countWalls === 4){
      await totalPaintCans();
      history.push({ pathname: "/result" });      
    } 
  }

  render() {
    const index = [1, 2, 3, 4];    
    return (
      <div className="container">
        <h1 className="title">CALCULADORA DE TINTA</h1>
        <p className="explaining">
          Com a calculadora de tinta você consegue estimar quanto vai precisar
          para a pintura de uma área. Você precisa ter em mãos as medidas das
          quatro paredes e o número de portas e janelas por parede. Preencha os
          campos indicados e clique no botão calcular.
        </p>
        <div className="container-walls">
          {index.map((number) => (
            <div key={number}>
              <h3 className="wall-title">Parede {number}: </h3>
              <WallMeasure />
            </div>
          ))}
        </div>
        <button onClick={this.submitTotalArea}>CALCULAR</button>
      </div>
    );
  }
}

Data.contextType = GlobalContext;

export default Data;

Data.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
