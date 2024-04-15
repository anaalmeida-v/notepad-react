import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Nota from "./NotaComponent";
import notas from "../notas.json";

function Inicio() {
  const notasExibidas = notas.slice(0, 3); // Limitando a exibição a no máximo 3 notas

  return (
    <div className="inicio">
      <Router>
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
                {notasExibidas.map(nota => (
                  <Link to={`/nota/${nota.id}`} key={nota.id}>
                    <Nota title={nota.title} content={nota.content} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 conjunto d-flex justify-content-between">
              <div className="notas">
                {notas.map(nota => (
                    <Link to={`/nota/${nota.id}`} key={nota.id}>
                      <Nota title={nota.title} content={nota.content} />
                    </Link>
                ))}
            </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Inicio;
