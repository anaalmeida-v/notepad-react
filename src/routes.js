import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Inicio';
import NotaComponent from './NotaComponent';
import

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nota" component={NotaComponent} />
      </Switch>
    </Router>
  );
}

export default App;
