import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Detail from './pages/Detail';
import Makgeollis from './pages/Makgeollis';
// import BestMakgeollis from './pages/BestMakgeollis';
import Nav from './pages/Nav';
import Header from './pages/header';
import Mypage from './pages/Mypage';
import MypageMyReviews from './pages/MypageMyReviews';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      {/* <Header /> */}
      {/* <Nav /> */}
      {/* <MypageMyReviews /> */}
      <Mypage />
      <Makgeollis />
    </Router>
  );
};

export default App;
