import React, { Component } from 'react';
import { Wall1, Wall2, Wall3, Wall4 } from '../components';

class Data extends Component {
  render() {
    return (
      <div>
          <h1 data-testid="settings-title">CALCULADORA DE TINTA</h1>             
          <Wall1 />
          <Wall2 />
          <Wall3 />
          <Wall4 />
      </div>
    );
  }
}

export default Data;