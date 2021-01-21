import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);    
  }

  
  render() {
    return (
      <div className="container">
        <h1 className="title">CALCULADORA DE TINTA</h1>
        <p className="explaining">
          o componente com os resultados vai aqui
        </p>        
      </div>
    );
  }
}

export default Result;
