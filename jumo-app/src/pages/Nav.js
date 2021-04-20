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
              <Div>MYPAGE</Div>
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
              <Div>SIGNOUT</Div>
            </Button>
          </Link>
        ) : (
          ''
        )}

        <Link to="/">
          <Button>
            <Img src={remoteIntro} alt="intro" />
            <Div>INTRO</Div>
          </Button>
        </Link>

        <Link to="/makgeolli/info">
          <Button>
            <Img src={remoteMak} alt="mak" />
            <Div>MAKGEOLLI</Div>
          </Button>
        </Link>

        <Link to="/brewery/info">
          <Button>
            <Img src={remoteBrew} alt="brew" dd />
            <Div>BREWERY</Div>
          </Button>
        </Link>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  margin: 0 0 0 0px;
  position: fixed;
  top: 88%;
  padding: 1px 10px;
  width: 100vw;
  height: 10vh;
  background: #e7d1bf;
  z-index: 100;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    margin: 0 0 0 0px;
    position: fixed;
    top: 90%;
    padding: 1px 15px;
    width: 100vw;
    height: 10vh;
  }
  @media ${props => props.theme.desktop} {
    width: 73px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    padding: 5px 5px;
    z-index: 100;
    top: 15%;
    height: 100vh;
    margin: 0 0 0 0px;
    position: fixed;
    background: none;
    /* border: 1px solid black; */
    /* background: white; */
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background: none;
  border-style: none;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 70px;
    height: 70px;
    justify-content: space-around;
    align-items: center;
  }
  @media ${props => props.theme.desktop} {
    :before {
      content: 'MAKGEOLLI';
      color: white;
      font-size: 1.4em;
      font-weight: bolder;
      display: block;
      /* align-items: center; */
      /* text-align: center; */
      justify-content: flex-end;
      padding-top: 1.2em;
      padding-left: 3em;
      padding-right: 0;
      /* align-items: center; */
      width: 220%;
      height: 55%;
      background: #c29b86;
      position: absolute;
      top: 0%;
      left: -600%;
      transition: all 0.3s;
      box-shadow: 3px 3px 3px #8c8b88;
      text-shadow: 2px 2px 2px #8c8b88;
      border-radius: 1.8em 0 0 0;
    }
    display: inline;
    position: relative;
    /* overflow: hidden; */
    &:hover:before {
      left: 0;
    }
  }
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  z-index: 5;
  &:hover {
    ${props =>
      css`
        width: 2.2rem;
        height: 2.2rem;
        filter: brightness(0) invert(1);
      `}
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    flex-shrink: 1;
    &:hover {
      ${props =>
        css`
          width: 2.2rem;
          height: 2.2rem;
          filter: brightness(0) invert(1);
        `}
    }
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    flex-shrink: 1;
    top: 15%;
    &:hover {
      ${props =>
        css`
          width: 3.2rem;
          height: 3.2rem;
          top: 15%;
          justify-content: flex-start;
          filter: brightness(0) invert(1);
        `}
    }
  }
`;

const Div = styled.div`
  color: #293848;
  font-size: 1em;
  letter-spacing: -0.6px;
  @media ${props => props.theme.tablet} {
    font-size: 1.4em;
    font-weight: bolder;
    letter-spacing: -0.9px;
  }
  @media ${props => props.theme.desktop} {
    font-size: 0;
    // 없어도 될듯
    /* &:hover {
      ${props =>
      css`
        width: 3.2rem;
        height: 3.2rem;
        filter: brightness(0) invert(1);
      `}
    } */
  }
`;

export default withRouter(Nav);
