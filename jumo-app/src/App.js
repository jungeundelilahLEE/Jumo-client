import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
import Makgeollis from './pages/Makgeollis';
import Brewerys from './pages/Brewerys';
import Nav from './pages/Nav';
import Header from './pages/header';

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/makgeolli/info">
            <Makgeollis />
          </Route>
          <Route exact path="/makgeolli/list/:makId">
            <Detail />
          </Route>
          <Route exact path="/brewery/info">
            <Brewerys />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
