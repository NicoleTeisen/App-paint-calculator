import React, { Component } from "react";
import WallMeasure from "../components/WallMeasure";
import PropTypes from "prop-types";

class Data extends Component {
  constructor(props) {
    super(props);

    this.addArea = this.addArea.bind(this);
    this.clearArea = this.addArea.bind(this);
    this.SubmitTotalArea = this.SubmitTotalArea.bind(this);
    this.goToResult = this.goToResult.bind(this);

    this.state = {
      area1: 0,
      area2: 0,
      area3: 0,
      area4: 0,
      totalArea: 0,
    };
  }

  goToResult() {
    const { totalArea } = this.state;
    const { history } = this.props;
    if (totalArea > 0)
      history.push({ pathname: "/result", state: { paint: totalArea } });
  }

  SubmitTotalArea() {
    const { area1, area2, area3, area4 } = this.state;
    if (area1 > 0 && area2 > 0 && area3 > 0 && area4) {
      const total = area1 + area2 + area3 + area4;
      this.setState(
        {
          totalArea: total,
        },
        this.goToResult
      );
    }
  }

  addArea(key, area) {
    this.setState({
      [key]: area,
    });
  }

  clearArea(key) {
    this.setState({
      [key]: 0,
    });
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
              <WallMeasure
                id={number}
                onSubmit={this.addArea}
                edit={this.clearArea}
              />
            </div>
          ))}
        </div>
        <button onClick={this.SubmitTotalArea}>CALCULAR</button>
      </div>
    );
  }
}

export default Data;

Data.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
