import React from 'react';
import styled, { css } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Mypage from './Mypage';
// eslint-disable-next-line import/no-cycle
import Intro from './Intro';
import Makgeollis from './Makgeollis';

import RemoteMypage from '../images/remote-mypage1.png';
import RemoteLogout from '../images/remote-logout1.png';
import RemoteIntro from '../images/remote-intro1.png';
import RemoteMak from '../images/remote-mak1.png';
import RemoteBrew from '../images/remote-brew1.png';

function Nav() {
  const remoteMypage = RemoteMypage;
  const remoteLogout = RemoteLogout;
  const remoteIntro = RemoteIntro;
  const remoteMak = RemoteMak;
  const remoteBrew = RemoteBrew;

  const StyledNav = styled.div`
    // 데스크탑 외
    width: 50px;
    height: 100vh;
    background-color: #faf0e1;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    position: fixed;
    margin: 0 0 0 0;
    z-index: 100;
    @media screen and (max-width: 480px) {
      // 모바일
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      margin: 0 0 0 0px;
      position: fixed;
      top: 90%;
      padding: 1px 25px;
      width: 100vw;
      height: 10vh;
      background-color: #e3daf5;
    }
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      margin: 0 0 0 0px;
      position: fixed;
      top: 90%;
      padding: 1px 30px;
      width: 100vw;
      height: 10vh;
      background-color: #cbecf7;
    }
  `;
  const Button = styled.button`
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: none;
    /* border : 1px solid red; */
    background-color: white;
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
    }
  `;

  const Img = styled.img`
    display: flex;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    flex-shrink: 1;
    &:hover {
      ${props =>
        css`
          width: 2.2rem;
          height: 2.2rem;
          filter: brightness(0) invert(1);
        `}
    }
    @media screen and (max-width: 480px) {
      display: flex;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  return (
    <Router>
      <Switch>
        <StyledNav>
          <Link to="/mypage">
            <Button>
              <Route exact path="/mypage" component={() => <Mypage />} />
              <Img src={remoteMypage} alt="mypage" dd />
            </Button>
          </Link>

          <Link to="/">
            <Button>
              {/* <Route exact path = "/mypage" component = {  } /> 
                // 로그아웃 누르면 홈으로? or 보고있던 페이지로? 보던 페이지가 로그인을 해야만 하는 페이지였다면? */}
              <Img src={remoteLogout} alt="logout" dd />
            </Button>
          </Link>

          <Link to="/intro">
            <Button>
              <Route exact path="/intro" component={() => <Intro />} />
              <Img src={remoteIntro} alt="intro" dd />
            </Button>
          </Link>

          <Link to="/makgeollis">
            <Route exact path="/makgeollis" component={() => <Makgeollis />} />
            <Button>
              <Img src={remoteMak} alt="mak" dd />
            </Button>
          </Link>

          <Link to="/brewery">
            {/* <Route exact path = "/brewery" component = {() => <Brewery />} /> */}
            <Button>
              <Img src={remoteBrew} alt="brew" dd />
            </Button>
          </Link>
        </StyledNav>
      </Switch>
    </Router>
  );
}

export default withRouter(Nav);
