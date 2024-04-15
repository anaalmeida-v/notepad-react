import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'; // Importe Link em vez de useHistory
import Nota from "./NotaComponent";
import notas from "../notas.json";

function Inicio() {
  return (
    <div className="inicio">
      <h1 className="titulo">Notas</h1>
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="col-12 col-md-4">
            <div className="d-flex inputDiv">
              <input
                type="search"
                placeholder="Pesquisar..."
              />
              <span className="inputText">
                pesquisar
              </span>
            </div>
            <div className="recentNotes notas">
              {notas.map(nota => (
                <Link to="/nota" key={nota.id}>
                  <Nota title={nota.title} context={nota.context} />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8 notas">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
