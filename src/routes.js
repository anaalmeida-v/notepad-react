import { BrowserRouter as Router, Route } from 'react-router-dom';

import NotaComponent from './NotaComponent';

function App() {
  return (
    <Router>
      <Route path="/nota" component={NotaComponent} />
    </Router>
  );
}

export default App;
