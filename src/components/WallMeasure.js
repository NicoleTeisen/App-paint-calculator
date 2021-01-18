import React, { Component } from "react";

class Wall1 extends Component {
  constructor(props) {
    super(props);

    this.updateDataWidth = this.updateDataWidth.bind(this);    
    this.updateArea = this.updateArea.bind(this);
    this.updateDataHeight = this.updateDataHeight.bind(this);

    this.state = {
      width: 0,
      height: 0,
      wallArea: 0,
      disableHeight: true,
      disableDoor: true,
      checkDoor: false,      
      usefulArea: 0,
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
  

  render() {
    const {           
      height,
      disableHeight, 
      checkDoor,      
    } = this.state;

    return (
      <div>
        <h3>Parede 1:</h3>
        <form>
          <label>
            Largura
            <input
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
              value={height}
              type="number"
              step={0.1}
              disabled={disableHeight}
              onChange={(e) => this.updateDataHeight("height", e.target.value)}
              required
            />
            metros
          </label>

          <label>
            <input
              type="checkbox"
              name="door-check"  
              checked={checkDoor}            
            />
            Essa parede possui porta(s)
          </label>

          <select
            id="door-select"            
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label>
            <input
              type="checkbox"
              name="windows-check"              
            />
            Essa parede possui janela(s)
          </label>

          <select
            id="windows-select"            
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Wall1;
