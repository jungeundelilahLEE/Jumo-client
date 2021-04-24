import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
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
    20% {
      letter-spacing: 60vw;
    }
    80% {
      letter-spacing: -70vw;
    }
    100% {
      letter-spacing: 0px;
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
    animation-duration: 8s;
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
        transform: scale(0.3) translateX(5vw);
      }

      20% {
        transform: translateY(0vh) translateX(25vw) scale(0.5);
      }

      40% {
        transform: translateY(2vh) translateX(45vw) scale(0.6);
      }

      60% {
        transform: translateY(0vh) translateX(65vw) scale(0.6);
      }

      80% {
        transform: translateY(0vh) translateX(85vw) scale(0.6);
      }
      100% {
        transform: translateY(0vh) translateX(105vw) scale(0.6);
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
        transform: scale(0.3) translateX(5vw);
      }

      20% {
        transform: translateY(0vh) translateX(25vw) scale(0.5);
      }

      40% {
        transform: translateY(3vh) translateX(45vw) scale(0.6);
      }

      60% {
        transform: translateY(0vh) translateX(65vw) scale(0.6);
      }

      80% {
        transform: translateY(2vh) translateX(85vw) scale(0.6);
      }
      100% {
        transform: translateY(0vh) translateX(105vw) scale(0.6);
      }
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vmin;
    height: 100vh;
    word-break: break-all;
    @media ${props => props.theme.tablet} {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100vw;
      height: 720px;
      word-break: break-all;
    }
    @media ${props => props.theme.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100vw;
      height: 720px;
      word-break: break-all;
    }
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
    justify-content: center;
    align-items: center;
    animation: ${intro} 2s 3.4s, ${shadow} 1s 6s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    @media ${props => props.theme.tablet} {
      display: flex;
      font-family: 'Quicksand', sans-serif;
      justify-content: center;
      align-items: center;
      animation: ${intro} 2s 3.4s, ${shadow} 1s 6s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
    }
  `;
  const toMak = () => {
    window.scrollTo({ top: 710, left: 0, behavior: 'smooth' });
  };
  const J = styled.div`
    color: white;
    font-size: 13rem;
    animation: ${popUp} 1s 1s, ${slidein} 1s 1s, ${rotate} 1.4s 5.4s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      font-size: 13rem;
      animation: ${popUp} 1s 1s, ${slidein} 1s 1s, ${rotate} 1.4s 5.4s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        color: red;
        font-size: 15rem;
        text-shadow: 0px 0px 0px black;
      }
    }
  `;
  const U = styled.div`
    color: white;
    font-size: 7rem;
    animation: ${popUp} 1s 1.5s, ${slidein} 1s 1.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      font-size: 7rem;
      animation: ${popUp} 1s 1.5s, ${slidein} 1s 1.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        color: blue;
        font-size: 9rem;
        text-shadow: 0px 0px 0px black;
      }
    }
  `;
  const M = styled.div`
    color: white;
    font-size: 7rem;
    animation: ${popUp} 1s 2s, ${slidein} 1s 2s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      font-size: 7rem;
      animation: ${popUp} 1s 2s, ${slidein} 1s 2s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        color: green;
        font-size: 9rem;
        text-shadow: 0px 0px 0px black;
      }
    }
  `;
  const O = styled.div`
    color: white;
    font-size: 7rem;
    animation: ${popUp} 1s 2.5s, ${slidein} 1s 2.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      font-size: 7rem;
      animation: ${popUp} 1s 2.5s, ${slidein} 1s 2.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        color: purple;
        font-size: 9rem;
        text-shadow: 0px 0px 0px black;
      }
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
