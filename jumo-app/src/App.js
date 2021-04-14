import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
// import BestMakgeollis from './pages/BestMakgeollis';
import Nav from './pages/header';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <Detail />
    </Router>
  );
};

export default App;
