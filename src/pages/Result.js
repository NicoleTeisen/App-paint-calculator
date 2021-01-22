import React, { useContext } from "react";
import GlobalContext from "../Providers/GlobalContext";

export default function Result() {
  const { totalArea, canArray } = useContext(GlobalContext);

  return (
    <div className="container">
      <h1 className="title">CALCULADORA DE TINTA</h1>
      <p className="explaining">A sua área útil é de : {totalArea}m2.</p>
      <p className="explaining">Você precisará de:</p>
      {canArray.map((element, index) => (
        <li className="list" key={index}>
          {element.count} latas de tinta de {element.liters}L
        </li>
      ))}
    </div>
  );
}
