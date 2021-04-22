import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
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
  const rotate = keyframes`
    0%{
      transform: rotate3d(0)
    }
    40%{
      transform: rotate3d(1, 1.0, 3.0, -70deg)
    }
    100%{
      transform: rotate3d(0)
    }
  `;
  const popUp = keyframes`
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-25px);
    }
    100% {
      transform: translateY(0px);
    }
  `;
  const shadow = keyframes`
    0% {
      text-shadow: 0px 0px 0px black;
    }
    50% {
      text-shadow: 14px 14px 0px black;
    }
    100% {
      text-shadow: 8px 8px 0px black;
    }
  `;
  const intro = keyframes`
    0% {
      letter-spacing: 0px;
    } 
    30% {
      letter-spacing: 200rem;
    }
    78% {
      letter-spacing: -200rem;
    }
    100% {
      letter-spacing: 0px;
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

  const BirdContainer = styled.div`
    position: absolute;
    top: 20%;
    left: -10%;
    transform: scale(0) translateX(-10vw);
    will-change: transform;
    animation-name: fly-right-one;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 15s;
    animation-delay: 0;
    @keyframes fly-cycle {
      100% {
        background-position: -900px 0;
      }
    }
  `;
  const BirdContainer2 = styled.div`
    position: absolute;
    top: 10%;
    left: -10%;
    transform: scale(0) translateX(-10vw);
    will-change: transform;
    animation-name: fly-right-two;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 15s;
    animation-delay: 0;
    @keyframes fly-cycle {
      100% {
        background-position: -900px 0;
      }
    }
  `;
  const Bird = styled.div`
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg');
    background-size: auto 100%;
    width: 88px;
    height: 125px;
    will-change: background-position;
    animation-name: fly-cycle;
    animation-timing-function: steps(10);
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-delay: -0.5s;
    @keyframes fly-right-one {
      0% {
        transform: scale(0.3) translateX(-10vw);
      }

      10% {
        transform: translateY(2vh) translateX(10vw) scale(0.4);
      }

      20% {
        transform: translateY(0vh) translateX(30vw) scale(0.5);
      }

      30% {
        transform: translateY(4vh) translateX(50vw) scale(0.6);
      }

      40% {
        transform: translateY(2vh) translateX(70vw) scale(0.6);
      }

      50% {
        transform: translateY(0vh) translateX(90vw) scale(0.6);
      }

      60% {
        transform: translateY(0vh) translateX(110vw) scale(0.6);
      }
      100% {
        transform: translateY(0vh) translateX(130vw) scale(0.6);
      }
    }
  `;
  const Bird2 = styled.div`
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg');
    background-size: auto 100%;
    width: 88px;
    height: 125px;
    will-change: background-position;
    animation-name: fly-cycle;
    animation-timing-function: steps(10);
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-delay: -1s;
    @keyframes fly-right-two {
      0% {
        transform: scale(0.3) translateX(-10vw);
      }

      10% {
        transform: translateY(2vh) translateX(5vw) scale(0.4);
      }

      20% {
        transform: translateY(0vh) translateX(15vw) scale(0.5);
      }

      30% {
        transform: translateY(4vh) translateX(35vw) scale(0.6);
      }

      40% {
        transform: translateY(2vh) translateX(55vw) scale(0.6);
      }

      50% {
        transform: translateY(0vh) translateX(75vw) scale(0.6);
      }

      60% {
        transform: translateY(0vh) translateX(90vw) scale(0.6);
      }
      100% {
        transform: translateY(0vh) translateX(130vw) scale(0.6);
      }
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
    position: relative;
    top: 80px;
    text-align: center;
    animation: ${slidein} 4s, ${positionDown} 2s;
    transition-duration: 1s;
    &:hover {
      transform: translateY(10px);
    }
  `;
  const Title = styled.div`
    display: flex;
    font-family: 'Quicksand', sans-serif;
    font-size: 4rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: ${intro} 2s 2.4s, ${shadow} 1s 6s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  `;
  const toMak = () => {
    window.scrollTo({ top: 710, left: 0, behavior: 'smooth' });
  };
  const J = styled.div`
    color: white;
    font-size: 15rem;
    animation: ${popUp} 1s, ${slidein} 1s, ${rotate} 1.4s 4.4s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      color: red;
      font-size: 17rem;
      text-shadow: 0px 0px 0px black;
    }
  `;
  const U = styled.div`
    color: white;
    font-size: 10rem;
    animation: ${popUp} 1s 0.5s, ${slidein} 1s 0.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      color: blue;
      font-size: 12rem;
      text-shadow: 0px 0px 0px black;
    }
  `;
  const M = styled.div`
    color: white;
    font-size: 10rem;
    animation: ${popUp} 1s 1s, ${slidein} 1s 1s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      color: green;
      font-size: 12rem;
      text-shadow: 0px 0px 0px black;
    }
  `;
  const O = styled.div`
    color: white;
    font-size: 10rem;
    animation: ${popUp} 1s 1.5s, ${slidein} 1s 1.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      color: purple;
      font-size: 12rem;
      text-shadow: 0px 0px 0px black;
    }
  `;
  return (
    <Wrapper>
      <BirdContainer>
        <Bird />
      </BirdContainer>
      <BirdContainer2>
        <Bird2 />
      </BirdContainer2>
      <Link to="/intro">
        <Title>
          <J>J</J>
          <U>u</U>
          <M>m</M>
          <O>o</O>
        </Title>
      </Link>
      <SubTitle onClick={toMak}>
        <FiArrowDown />
      </SubTitle>
    </Wrapper>
  );
}

export default TitleRending;
