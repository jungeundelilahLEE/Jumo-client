/* eslint-disable import/no-cycle */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory,
} from 'react-router-dom';
import { signOut } from '../actions';
import server from '../apis/server';

import Mypage from './Mypage';
import SignIn from './SignIn';
import Makgeollis from './Makgeollis';

import remoteMypage from '../images/remote-mypage1.png';
import remoteLogout from '../images/remote-logout1.png';
import remoteIntro from '../images/remote-intro1.png';
import remoteMak from '../images/remote-mak1.png';
import remoteBrew from '../images/remote-brew1.png';

function Nav() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const isLogin = localStorage.getItem('isLogin');
  const history = useHistory();

  const handleClickLogout = async () => {
    try {
      await server({
        method: 'post',
        url: '/user/logout',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      localStorage.clear();

      dispatch(signOut());
      localStorage.setItem('isLogin', JSON.stringify(false));
      history.push('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StyledNav>
        {isLogin === 'true' ? (
          <Link to="/user/info">
            <Button>
              <Img src={remoteMypage} alt="mypage" />
            </Button>
          </Link>
        ) : (
          <Link to="/signin">
            <Button>
              <Img src={remoteMypage} alt="SignIn" />
            </Button>
          </Link>
        )}

        {isLogin === 'true' ? (
          <Link to="/">
            <Button onClick={handleClickLogout}>
              <Img src={remoteLogout} alt="logout" />
            </Button>
          </Link>
        ) : (
          ''
        )}

        <Link to="/intro">
          <Button>
            <Img src={remoteIntro} alt="intro" />
          </Button>
        </Link>

        <Link to="/makgeolli/info">
          <Button>
            <Img src={remoteMak} alt="mak" />
          </Button>
        </Link>

        <Link to="/brewery/info">
          <Button>
            <Img src={remoteBrew} alt="brew" dd />
          </Button>
        </Link>
      </StyledNav>
    </>
  );
}

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

export default withRouter(Nav);
