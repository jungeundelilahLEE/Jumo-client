import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
import Makgeollis from './pages/Makgeollis';
// import BestMakgeollis from './pages/BestMakgeollis';
import Nav from './pages/header';

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route exact path="/makgeolli/info">
            <Makgeollis />
          </Route>
          <Route exact path="/makgeolli/list/:makId">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
