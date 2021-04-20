import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import jumo from '../images/JumoIcon.PNG';

function TitleRending() {
  const slidein = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  `;

  const positionComeIn = keyframes`
    0%{
      transform: translateX(-100px);
    }    
    100%{
      transform: translateX(0px);
    }
  `;
  const positionDown = keyframes`
    0%{
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0px);
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 720px;
  `;
  const SubTitle = styled.h1`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    animation: ${slidein} 4s, ${positionDown} 2s;
    transition-duration: 1s;
    &:hover {
      transform: translateX(10px);
    }
  `;
  const Title = styled.img`
    width: 40vw;
    height: 60vh;
    animation: ${slidein} 3s, ${positionComeIn} 2s;
    transition-duration: 2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  return (
    <Wrapper>
      <Link to="/intro">
        <Title src={jumo} />
      </Link>
      <SubTitle>All about Makgeollis</SubTitle>
    </Wrapper>
  );
}

export default TitleRending;
