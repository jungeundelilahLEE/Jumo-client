import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
// import BestMakgeollis from './pages/BestMakgeollis';
import Nav from './pages/Nav';
import Header from './pages/header';
import Mypage from './pages/Mypage';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      {/* <Header /> */}
      {/* <Nav /> */}
      <Mypage />
      <Detail />
    </Router>
  );
};

export default App;
