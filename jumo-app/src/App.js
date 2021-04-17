import React from 'react';
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
