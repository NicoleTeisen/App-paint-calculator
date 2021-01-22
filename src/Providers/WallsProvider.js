import React, { Component } from "react";
import PropTypes from "prop-types";
import WallsContext from "./WallsContext";
import GlobalContext from "./GlobalContext";

class WallsProvider extends Component {
  constructor(props) {
    super(props);

    this.updateDataWidth = this.updateDataWidth.bind(this);
    this.updateDataHeight = this.updateDataHeight.bind(this);
    this.updateArea = this.updateArea.bind(this);
    this.checkChangeDoor = this.checkChangeDoor.bind(this);
    this.checkChangeWindows = this.checkChangeWindows.bind(this);
    this.calculatingFramesArea = this.calculatingFramesArea.bind(this);
    this.frameArea = this.frameArea.bind(this);
    this.compareAreas = this.compareAreas.bind(this);
    this.saveWall = this.saveWall.bind(this);
    this.editWall = this.editWall.bind(this);

    this.state = {
      width: 0,
      height: 0,
      wallArea: 0,
      usefulArea: 0,
      disableHeight: true,
      disableDoor: true,
      checkDoor: false,
      numberDoor: 0,
      doorArea: 0,
      disableWindows: true,
      checkWindows: false,
      numberWindows: 0,
      windowsArea: 0,
      frameArea: 0,
      disableFieldset: false,
      disableSave: false,
      disableEdit: true,
      alertWidth: "",
      alertHeight: "",
      alertFrames: "",
    };
  }

  frameArea() {
    const { doorArea, windowsArea } = this.state;
    console.log(windowsArea, doorArea);
    const sum = doorArea + windowsArea;
    console.log(sum);
    this.setState(
      {
        frameArea: sum,
      },
      this.compareAreas
    );
  }

  compareAreas() {
    const { wallArea, frameArea } = this.state;
    const halfArea = wallArea / 2;
    console.log(wallArea, frameArea, halfArea);
    if (frameArea > halfArea) {
      this.setState({
        alertFrames:
          "*A área das esquadrias não pode ultrapassar 50% da área da parede",
      });
    } else {
      const totalArea = wallArea - frameArea;
      this.setState({
        usefulArea: totalArea,
        alertFrames: "",
      });
    }
  }

  updateArea() {
    const { width, height, frameArea } = this.state;
    let area = width * height;
    frameArea === 0
      ? this.setState({
          wallArea: area,
          usefulArea: area,
        })
      : this.setState(
          {
            wallArea: area,
          },
          this.compareAreas
        );
  }

  updateDataWidth(value) {
    value < 1 || value > 15
      ? this.setState(
          {
            disableHeight: true,
            height: 0,
            disableDoor: true,
            disableWindows: true,
            checkDoor: false,
            checkWindows: false,
            wallArea: 0,
            numberDoor: 0,
            numberWindows: 0,
            alertWidth: "*A largura da parede deve estar entre 1m e 15m",
          },
          this.frameArea
        )
      : this.setState(
          {
            width: value,
            disableHeight: false,
            alertWidth: "",
          },
          this.updateArea
        );
  }

  updateDataHeight(value) {
    const { checkDoor } = this.state;
    value < 2.2 && checkDoor === true
      ? this.setState(
          {
            disableDoor: true,
            checkDoor: false,
            doorArea: 0,
            numberDoor: 0,
            alertHeight: "*A altura da parede deve ser de no mínimo 2,20m"
          },          
          this.frameArea
        )
      : this.setState(
          {
            height: value,
            disableHeight: false,
            alertHeight: "",
          },
          this.updateArea
        );
  }

  checkChangeDoor() {
    const { height, checkDoor } = this.state;
    height < 2.2
      ? this.setState(
          {
            checkDoor: false,
            alertHeight: "*A altura da parede deve ser de no mínimo 2,20m para habilitar este campo"
          }         
        )
      : this.setState(
          checkDoor === false
            ? {
                disableDoor: false,
                checkDoor: true,
                alertHeight: "",
              }
            : {
                disableDoor: true,
                checkDoor: false,
                doorArea: 0,
                numberDoor: 0,
                alertHeight: "",
              },
          this.frameArea
        );
  }

  calculatingFramesArea = (key, value) => {
    const doorArea = 0.8 * 1.9;
    const windowsArea = 2 * 1.2;
    if (key === "doorArea") {
      const totalArea = doorArea * value;
      this.setState(
        {
          [key]: totalArea,
          numberDoor: value,
        },
        this.frameArea
      );
    } else {
      const totalArea = windowsArea * value;
      this.setState(
        {
          [key]: totalArea,
          numberWindows: value,
        },
        this.frameArea
      );
    }
  };

  checkChangeWindows() {
    const { checkWindows } = this.state;
    this.setState(
      checkWindows === false
        ? {
            disableWindows: false,
            checkWindows: true,
          }
        : {
            disableWindows: true,
            checkWindows: false,
            windowsArea: 0,
            numberWindows: 0,
          },
      this.frameArea
    );
  }

  saveWall() {
    const { usefulArea, alertFrames } = this.state;
    const { sumTotalArea } = this.context;
    if (usefulArea > 0 && alertFrames === "") {
      this.setState(
        {
          disableFieldset: true,
          disableEdit: false,
          disableSave: true,
        },
        this.teste
      );
      sumTotalArea(usefulArea);
    }
  }

  editWall() {
    const { usefulArea } = this.state;
    const { decreaseTotalArea } = this.context;
    this.setState({
      disableFieldset: false,
      disableEdit: true,
      disableSave: false,
    });
    decreaseTotalArea(usefulArea);
  }

  render() {
    const context = {
      ...this.state,
      updateDataWidth: this.updateDataWidth,
      updateDataHeight: this.updateDataHeight,
      updateArea: this.updateArea,
      checkChangeDoor: this.checkChangeDoor,
      checkChangeWindows: this.checkChangeWindows,
      calculatingFramesArea: this.calculatingFramesArea,
      frameArea: this.frameArea,
      compareAreas: this.compareAreas,
      saveWall: this.saveWall,
      editWall: this.editWall,
    };
    const { children } = this.props;
    return (
      <WallsContext.Provider value={context}>{children}</WallsContext.Provider>
    );
  }
}

WallsProvider.contextType = GlobalContext;

export default WallsProvider;

WallsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
