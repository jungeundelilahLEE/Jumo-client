/* eslint-disable no-use-before-define */
/* eslint-disable dot-notation */
/* eslint-disable no-shadow */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import server from './apis/server';
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
  const [channel, setChannel] = useState('');
  const [navHeader, setNavHeader] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

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

  const onSilentRefresh = async () => {
    await server
      .post('/user/refreshToken', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(res => onLoginSuccess(res))
      .catch(err => {
        throw new Error(`${err}`);
      });
  };

  const onLoginSuccess = response => {
    const JWT_EXPIRY_TIME = 12 * 3600 * 1000;
    const { accessToken } = response.data;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };

  const changeHandler = e => {
    setQuery(e.target.value);
    setPageNum(0);
  };

  const channelHandler = name => {
    setChannel(name);
  };

  const openHandler = () => {
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

  useEffect(() => {
    if (accessToken) {
      onSilentRefresh();
    }
  }, []);

  return (
    <Router>
      <GlobalStyles />
      {navHeader && (
        <>
          <Header changeHandler={changeHandler} channel={channel} />
          <Nav openHandler={openHandler} />
        </>
      )}
      {/* <Header changeHandler={changeHandler} channel={channel} />
      <Nav openHandler={openHandler} /> */}
      <SignIn
        open={openSignIn}
        closeHandler={closeHandler}
        signupModalHandler={signupModalHandler}
        navHeader={navHeader}
        setNavHeader={setNavHeader}
      />
      <SignUp
        close={openSignUp}
        openHandler={openHandler}
        closeHandler={closeHandler}
        navHeader={navHeader}
        setNavHeader={setNavHeader}
      />
      <Switch>
        <Route exact path="/">
          <Rending navHeader={navHeader} setNavHeader={setNavHeader} />
        </Route>

        <Route path="/user/info">
          <Mypage
            channelHandler={channelHandler}
            navHeader={navHeader}
            setNavHeader={setNavHeader}
          />
        </Route>

        <Route path="/intro">
          <Intro
            channelHandler={channelHandler}
            navHeader={navHeader}
            setNavHeader={setNavHeader}
          />
        </Route>
        <Route path="/makgeolli/info">
          <Makgeollis
            lastItemElementRef={lastItemElementRef}
            pick={pick}
            isLoading={isLoading}
            error={error}
            channelHandler={channelHandler}
            navHeader={navHeader}
            setNavHeader={setNavHeader}
          />
        </Route>
        <Route path="/makgeolli/list/:name">
          <Detail
            channelHandler={channelHandler}
            navHeader={navHeader}
            setNavHeader={setNavHeader}
          />
        </Route>
        <Route path="/brewery/info">
          <Brewerys
            navHeader={navHeader}
            channelHandler={channelHandler}
            setNavHeader={setNavHeader}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
