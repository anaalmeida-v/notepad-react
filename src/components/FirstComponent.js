import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from "./NavbarComponent";
import Nota from "./NotaComponent";
import notas from "../notas.json";

function Inicio() {
  const [searchText, setSearchText] = useState("");

  const filteredNotas = notas.filter(nota =>
    nota.title.toLowerCase().includes(searchText.toLowerCase()) ||
    nota.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="inicio">
      <Router>
        <Navbar />
        <h1 className="titulo">Notas</h1>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-12 col-md-3 principal">
              <div className="d-flex inputDiv">
                <input
                  type="search"
                  placeholder="Pesquisar..."
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <span className="inputText">pesquisar</span>
              </div>
              <div className="recentNotes notas">
                {filteredNotas.slice(0, 3).map(nota => (
                  <Link to={`/nota/${nota.id}`} key={nota.id}>
                    <Nota
                      title={nota.title}
                      content={nota.content}
                      category={nota.category}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="notas notasAll">
                {filteredNotas.map(nota => (
                  <Link to={`/nota/${nota.id}`} key={nota.id}>
                    <Nota
                      title={nota.title}
                      content={nota.content}
                      category={nota.category}
                    />
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