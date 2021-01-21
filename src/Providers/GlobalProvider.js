import React, { Component } from "react";
import PropTypes from "prop-types";
import GlobalContext from "./GlobalContext";

class GlobalProvider extends Component {
  constructor(props) {
    super(props);

    this.sumTotalArea = this.sumTotalArea.bind(this);
    this.decreaseTotalArea = this.decreaseTotalArea.bind(this);    
    this.imprimir = this.imprimir.bind(this);

    this.state = {
      totalArea: 0,
      countWalls: 0,
    };
  }

  imprimir() {
    const { totalArea, countWalls } = this.state;
    console.log(totalArea, countWalls);
  }

  sumTotalArea(usefulArea) {
    const { totalArea, countWalls } = this.state;
    console.log(usefulArea);
    this.setState(
      {
        totalArea: totalArea + usefulArea,
        countWalls: countWalls + 1,
      },
      this.imprimir
    );
  }

  decreaseTotalArea(usefulArea) {
    const { totalArea, countWalls } = this.state;
    console.log(usefulArea);
    this.setState(
      {
        totalArea: totalArea - usefulArea,
        countWalls: countWalls - 1,
      },
      this.imprimir
    );
  }
  
  render() {
    const context = {
      ...this.state,
      sumTotalArea: this.sumTotalArea,
      decreaseTotalArea: this.decreaseTotalArea,      
    };
    const { children } = this.props;
    return (
      <GlobalContext.Provider value={context}>
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,  
};
