import React, { Component } from "react";
import PropTypes from "prop-types";
import GlobalContext from "./GlobalContext";

class GlobalProvider extends Component {
  constructor(props) {
    super(props);

    this.sumTotalArea = this.sumTotalArea.bind(this);
    this.decreaseTotalArea = this.decreaseTotalArea.bind(this);
    this.totalPaintCans = this.totalPaintCans.bind(this);
    this.arrayState = this.arrayState.bind(this);

    this.state = {
      totalArea: 0,
      countWalls: 0,
      canPaint05: { count: 0, liters: 0.5 },
      canPaint25: { count: 0, liters: 2.5 },
      canPaint36: { count: 0, liters: 3.6 },
      canPaint180: { count: 0, liters: 18 },
      canArray: [],
    };
  }

  sumTotalArea(usefulArea) {
    const { totalArea, countWalls } = this.state;
    const roundUsefulArea = parseFloat(usefulArea.toFixed(2));
    this.setState({
      totalArea: totalArea + roundUsefulArea,
      countWalls: countWalls + 1,
    });
  }

  decreaseTotalArea(usefulArea) {
    const { totalArea, countWalls } = this.state;
    const roundUsefulArea = parseFloat(usefulArea.toFixed(2));
    this.setState({
      totalArea: totalArea - roundUsefulArea,
      countWalls: countWalls - 1,
    });
  }

  arrayState() {
    const { canPaint05, canPaint25, canPaint36, canPaint180 } = this.state;
    const stateArray = [canPaint180, canPaint36, canPaint25, canPaint05];
    const greaterThan0 = stateArray.filter((can) => can.count > 0);
    this.setState({
      canArray: greaterThan0,
    });
  }

  totalPaintCans() {
    const {
      totalArea,
      canPaint05,
      canPaint25,
      canPaint36,
      canPaint180,
    } = this.state;
    let can180 = 0;
    let can36 = 0;
    let can25 = 0;
    let can05 = 0;
    let litersPaint = totalArea / 5;

    while (litersPaint > 0) {
      if (litersPaint >= canPaint180.liters) {
        litersPaint = parseFloat((litersPaint - canPaint180.liters).toFixed(2));
        can180 = can180 + 1;
      } else if (litersPaint >= canPaint36.liters) {
        litersPaint = parseFloat((litersPaint - canPaint36.liters).toFixed(2));
        can36 = can36 + 1;
      } else if (litersPaint >= canPaint25.liters || litersPaint === 2.5) {
        litersPaint = parseFloat((litersPaint - canPaint25.liters).toFixed(2));
        can25 = can25 + 1;
      } else {
        litersPaint = parseFloat((litersPaint - canPaint05.liters).toFixed(2));
        can05 = can05 + 1;
      }
    }
    this.setState(
      {
        canPaint180: { ...canPaint180, count: can180 },
        canPaint36: { ...canPaint36, count: can36 },
        canPaint25: { ...canPaint25, count: can25 },
        canPaint05: { ...canPaint05, count: can05 },
      },
      this.arrayState
    );
  }

  render() {
    const context = {
      ...this.state,
      sumTotalArea: this.sumTotalArea,
      decreaseTotalArea: this.decreaseTotalArea,
      totalPaintCans: this.totalPaintCans,
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
