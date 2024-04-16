import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Nota(props) {
  return (
      <div className="nota">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button className="border-0 rounded">{props.category}</button>
      </div>
  );
}

export default Nota;
