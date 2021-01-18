import React, { Component } from "react";

class WallMeasure extends Component {
  constructor(props) {
    super(props);

    this.updateDataWidth = this.updateDataWidth.bind(this);
    this.updateDataHeight = this.updateDataHeight.bind(this);
    this.updateArea = this.updateArea.bind(this);
    this.checkChangeDoor = this.checkChangeDoor.bind(this);
    this.changeValueSelectDoor = this.changeValueSelectDoor.bind(this);
    this.checkChangeWindows = this.checkChangeWindows.bind(this);
    this.doorArea = this.doorArea.bind(this);
    this.windowsArea = this.windowsArea.bind(this);
    this.frameArea = this.frameArea.bind(this);
    this.compareAreas = this.compareAreas.bind(this);

    this.state = {
      width: 0,
      height: 0,
      wallArea: 0,
      usefulArea: 0,
      disableHeight: true,
      disableDoor: true,
      checkDoor: false,
      doorArea: 0,
      disableWindows: true,
      checkWindows: false,
      windowsArea: 0,
      frameArea: 0,
    };
  }

  updateArea() {
    const { width, height } = this.state;
    let area = width * height;
    this.setState({
      wallArea: area,
      usefulArea: area,
    });
  }

  updateDataWidth(key, value) {
    value < 1 || value > 15
      ? this.setState(
          {
            disableHeight: true,
            height: 0,
          },
          alert("A largura da parede deve estar entre 1m e 15m")
        )
      : this.setState(
          {
            [key]: value,
            disableHeight: false,
          },
          this.updateArea
        );
  }

  updateDataHeight(key, value) {
    const { checkDoor } = this.state;
    value < 2.2 && checkDoor === true
      ? this.setState(
          {
            disableDoor: true,
            checkDoor: false,
          },
          alert(
            "A altura da parede deve ser de no mínimo 2,20m para que haja portas"
          )
        )
      : this.setState(
          {
            [key]: value,
            disableHeight: false,
          },
          this.updateArea
        );
  }

  changeValueSelectDoor() {
    const door = document.getElementById("door-select");
    door.value = 0;
    console.log(door.value);
    this.frameArea();
  }

  checkChangeDoor() {
    const { height, checkDoor } = this.state;
    height < 2.2
      ? this.setState(
          {
            checkDoor: false,
          },
          alert(
            "A altura da parede deve ser de no mínimo 2,20m para habilitar este campo"
          )
        )
      : this.setState(
          checkDoor === false
            ? {
                disableDoor: false,
                checkDoor: true,
              }
            : {
                disableDoor: true,
                checkDoor: false,
                doorArea: 0,
              },
          this.changeValueSelectDoor
        );
  }

  doorArea(key, value) {
    const area = 0.8 * 1.9;
    const totalArea = area * value;
    this.setState(
      {
        [key]: totalArea,
      },
      this.frameArea
    );
  }

  changeValueSelectWindows() {
    const windows = document.getElementById("windows-select");
    windows.value = 0;
    console.log(windows.value);
    this.frameArea();
  }

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
          },
      this.changeValueSelectWindows
    );
  }

  windowsArea(key, value) {
    const area = 2 * 1.2;
    const totalArea = area * value;
    this.setState(
      {
        [key]: totalArea,
      },
      this.frameArea
    );
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
      const windows = document.getElementById("windows-select");
      windows.value = 0;
      const door = document.getElementById("door-select");
      door.value = 0;
      alert(
        "Verifique a quantidade de esquadrias, a sua área não pode ultrapassar 50% da área total da parede"
      );
      this.setState(
        {
          windowsArea: 0,
          doorArea: 0,
        },
        this.frameArea
      );
    } else {
      const totalArea = wallArea - frameArea;
      this.setState({
        usefulArea: totalArea,
      });
    }
  }

  render() {
    const {
      disableHeight,
      disableDoor,
      height,
      checkDoor,
      disableWindows,
      checkWindows,
    } = this.state;

    return (
      <div>
        <h3>Parede 1:</h3>
        <form className="wall">
          <label>
            Largura
            <input
              className="input-text"
              placeholder="0"
              type="number"
              step={0.1}
              min={1}
              max={15}
              onChange={(e) => this.updateDataWidth("width", e.target.value)}
              required
            />
            metros
          </label>

          <label>
            Altura
            <input
              className="input-text"
              value={height}
              type="number"
              step={0.1}
              disabled={disableHeight}
              onChange={(e) => this.updateDataHeight("height", e.target.value)}
              required
            />
            metros
          </label>

          <div>
            <label>
              <input
                type="checkbox"
                name="door-check"
                checked={checkDoor}
                onClick={this.checkChangeDoor}
              />
              Essa parede possui porta(s)
            </label>

            <select
              id="door-select"
              className="select"
              disabled={disableDoor}
              onChange={(e) => this.doorArea("doorArea", e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="windows-check"
                checked={checkWindows}
                onClick={this.checkChangeWindows}
              />
              Essa parede possui janela(s)
            </label>

            <select
              id="windows-select"
              className="select"
              disabled={disableWindows}
              onChange={(e) => this.windowsArea("windowsArea", e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default WallMeasure;
