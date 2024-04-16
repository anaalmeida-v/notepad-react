// routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";
import NotaIndividual from "./NotaIndividualComponent";
import notas from "./notas.json";

function Routes() {
  return (
    <Switch>
      {notas.map((nota) => (
        <Route key={nota.id} path={`/nota/${nota.id}`}>
          <NotaIndividual nota={nota} />
        </Route>
      ))}
      <Route path="/">
        <FirstComponent />
      </Route>
    </Switch>
  );
}

export default Routes;
