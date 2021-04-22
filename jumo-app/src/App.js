import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useSearchItem from './atoms/useSearchItem';
import GlobalStyles from './styles/GlobalStyles';

import Detail from './pages/Detail';
import Makgeollis from './pages/Makgeollis';
import Brewerys from './pages/Brewerys';
import Nav from './pages/Nav';
import Header from './pages/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Mypage from './pages/Mypage';
import Rending from './pages/Rendings';
import Intro from './pages/Intro';

const App = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(0);
  const { isLoading, error, pick, hasMore } = useSearchItem(query, pageNum);
  // const { isLoading, error, pick, hasMore } = useListItem(pageNum);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const observer = useRef();
  const lastItemElementRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  const handleChange = e => {
    setQuery(e.target.value);
    setPageNum(1);
  };

  const openHendler = () => {
    setOpenSignIn(true);
  };
  const closeHandler = () => {
    setOpenSignIn(false);
    setOpenSignUp(false);
  };
  const signupModalHandler = () => {
    setOpenSignIn(false);
    setOpenSignUp(true);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header handleChange={handleChange} />
      <Nav openHendler={openHendler} />
      <SignIn
        open={openSignIn}
        closeHandler={closeHandler}
        signupModalHandler={signupModalHandler}
      />
      <SignUp
        close={openSignUp}
        openHendler={openHendler}
        closeHandler={closeHandler}
      />
      <Switch>
        <Route path="/user/info">
          <Mypage />
        </Route>

        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/makgeolli/info">
          <Makgeollis
            lastItemElementRef={lastItemElementRef}
            pick={pick}
            isLoading={isLoading}
            error={error}
          />
        </Route>
        <Route path="/makgeolli/list/:makId">
          <Detail />
        </Route>
        <Route path="/brewery/info">
          <Brewerys />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
