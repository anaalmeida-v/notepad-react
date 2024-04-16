import React from "react";
import notas from "../notas.json";

function NotaIndividual() {
  return (
    <div>
      {notas.map((nota) => (
        <div>
          <h1>{nota.title}</h1>
          <p>{nota.content}</p>
          <p>{nota.category}</p>
        </div>
      ))}
    </div>
  );
}

export default NotaIndividual;
