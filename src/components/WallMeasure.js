import React, { Component } from "react";
import PropTypes from 'prop-types';

class WallMeasure extends Component {
  constructor(props) {
    super(props);

    this.updateDataWidth = this.updateDataWidth.bind(this);
    this.updateDataHeight = this.updateDataHeight.bind(this);
    this.updateArea = this.updateArea.bind(this);
    this.checkChangeDoor = this.checkChangeDoor.bind(this);    
    this.checkChangeWindows = this.checkChangeWindows.bind(this);
    this.doorArea = this.doorArea.bind(this);
    this.windowsArea = this.windowsArea.bind(this);
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
    };
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

  updateDataWidth(key, value) {
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
            numberWindows: 0
          },
          alert("A largura da parede deve estar entre 1m e 15m"),
          this.frameArea
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
            doorArea: 0,
            numberDoor: 0,
          },
          alert(
            "A altura da parede deve ser de no mínimo 2,20m para que haja portas"
          ),
          this.frameArea
          
        )
      : this.setState(
          {
            [key]: value,
            disableHeight: false,
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
                numberDoor: 0,
              },
          this.frameArea
        );
  }

  doorArea(key, value) {
    const area = 0.8 * 1.9;
    const totalArea = area * value;
    this.setState(
      {
        [key]: totalArea,
        numberDoor: value,
      },
      this.frameArea
    );
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
            numberWindows: 0,
          },
      this.frameArea
    );
  }

  windowsArea(key, value) {
    const area = 2 * 1.2;
    const totalArea = area * value;
    this.setState(
      {
        [key]: totalArea,
        numberWindows: value,
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
      alert(
        "Verifique a quantidade de esquadrias, a sua área não pode ultrapassar 50% da área total da parede"
      );
      this.setState(
        {
          numberDoor: 0,
          numberWindows: 0,
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

  saveWall() {
    const { usefulArea } = this.state;
    if (usefulArea > 0) {
      this.setState({
        disableFieldset: true,
        disableEdit: false,
        disableSave: true,
      });
      const { onSubmit, id } = this.props; 
      console.log(usefulArea);     
      onSubmit(`area${id}`,usefulArea);
    }
  }

  editWall() {
    this.setState({
      disableFieldset: false,
      disableEdit: true,
      disableSave: false,
    });

    const { edit, id } = this.props;
      edit(`area${id}`);
  }

  render() {
    const {
      disableHeight,
      disableDoor,
      height,
      checkDoor,
      disableWindows,
      checkWindows,
      disableFieldset,
      disableEdit,
      disableSave,  
      numberDoor,
      numberWindows,    
    } = this.state;

    return (
      <div>        
        <fieldset className="wall" disabled={disableFieldset}>
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
              id="input-height"
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
              value={numberDoor}
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
              value={numberWindows}
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
        </fieldset>

        <div className="buttons-wall">
          <button onClick={this.saveWall} disabled={disableSave}>
            SALVAR
          </button>
          <button onClick={this.editWall} disabled={disableEdit}>
            EDITAR
          </button>
        </div>

      </div>
    );
  }
}

export default WallMeasure;

WallMeasure.propTypes = {  
  onSubmit: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
