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

// import React, { useEffect, useState } from "react";

// const Result = (props) => {
//   const [area, setTextInfo] = useState("");

//   useEffect(() => {    
//     const { location } = this.props;
//     setTextInfo(location.state.paint);
//   }, []);

//   return <p>Texto enviado: {area}</p>;
// };

// export default Result;