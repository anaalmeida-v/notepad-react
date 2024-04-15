// Nota.js
import React from "react";

function Nota(props) {
  return (
    <div className="nota">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Nota;
