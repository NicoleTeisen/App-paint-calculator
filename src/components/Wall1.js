import React, { Component } from "react";

class Wall1 extends Component {
  constructor() {
    super();
    this.state = {
      disable: true,
    }
  }
  render() {
    const { disable } = this.state;

    return (
      <div>
        <h3>Parede 1:</h3>
        <label>Largura</label>
        <input
          placeholder="1"
          type="number"
          name="wall-width"
          step={0.1}
          min={1}
          max={15}
          // onChange={}
        />
        <label>Altura</label>
        <input
          placeholder="0"
          name="wall-height"
          type="number"
          step={0.1}
          // onChange={}
        />
        <label>
          <input
            type="checkbox"
            name="windows-check"
            // onClick={}
          />
          Essa parede possui janela(s)          
        </label>
        <select name="windows-select" disabled= { disable }>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
          </select>
        <label>
          <input
            type="checkbox"
            name="door-check"
            // onClick={}
          />
          Essa parede possui porta(s)          
        </label>
        <select name="door-select" disabled= { disable }>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
          </select>
      </div>
    );
  }
}

export default Wall1;