import React from 'react';
import styled, { css } from 'styled-components';

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
    <StyledNav>
      <Button>
        <Img src={remoteMypage} alt="mypage" dd />
      </Button>

      <Button>
        <Img src={remoteLogout} alt="logout" dd />
      </Button>

      <Button>
        <Img src={remoteIntro} alt="intro" dd />
      </Button>

      <Button>
        <Img src={remoteMak} alt="mak" dd />
      </Button>

      <Button>
        <Img src={remoteBrew} alt="brew" dd />
      </Button>
    </StyledNav>
  );
}

export default Nav;
