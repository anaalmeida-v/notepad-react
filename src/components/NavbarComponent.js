import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-nav">
      <div className="menu row">
        <div className="col-3">
          <img
            src={
              "https://icones.pro/wp-content/uploads/2021/04/icone-android-jaune.png"
            }
            width="60"
            height="60"
            className="logo"
          />
        </div>
        <div className="col-9">
          <div className="menuUl">
            <ul>
              <li><p>Sobre nós</p></li>
              <li><p>Contato</p></li>
              <li><p>Blog</p></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
