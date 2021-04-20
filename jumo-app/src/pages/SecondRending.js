import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import { Spring } from 'react-spring';
import SecondImage from '../images/korean-food-2489206_1920.jpg';

function SecondRending() {
  const slidein = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  `;
  const SecondChapter = styled.div`
    display: flex;
    background-image: url(${SecondImage});
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `;
  const Brewerys = styled.h1`
    padding: 20px;
    font-size: 10rem;
  `;
  const More = styled.button`
    width: 100px;
    height: 20px;
  `;
  return (
    <SecondChapter>
      <Brewerys>Brewerys</Brewerys>
      <Link to="/brewery/info">
        <h2>
          원하는 막걸리를 찾으신 후 직접 구매, 방문을 해보세요! 전국에 있는 모든
          양조장!
        </h2>
        <More>더 알아보기</More>
      </Link>
    </SecondChapter>
  );
}

export default SecondRending;
