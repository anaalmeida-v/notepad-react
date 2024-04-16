import FirstComponent from "./FirstComponent"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Navbar(){
  return(

    <nav className="navbar navbar-nav">
          <div className="menu row">
            <div className="col-3">
              <a class="navbar-brand" href={FirstComponent}>
                <img
                  src="https://icones.pro/wp-content/uploads/2021/04/icone-android-jaune.png"
                  width="60"
                  height="60"
                  className="logo"
                />
              </a>
            </div>
            <div className="col-9"></div>
          </div>
        </nav>
  )
}

export default Navbar