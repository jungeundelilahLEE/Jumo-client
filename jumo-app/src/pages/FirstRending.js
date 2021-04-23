import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import firstImage from '../images/RenderFirst.jpg';

function FirstRending() {
  const positionComeIn = keyframes`
    0%{
      transform: translateX(100rem);
    }
    70% {
      transform: translateX(-1rem);
    }    
    100%{
      transform: translateX(0px);
    }
  `;
  const FirstChapter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `;
  const FirstTitle = styled.div`
    color: white;
    font-size: 5rem;
    font-family: 'Sansation';
    text-transform: uppercase;
    z-index: 2;
    animation: ${positionComeIn} 2s 1.5s;
    animation-fill-mode: backwards;
    transition-duration: 2s;
    @media ${props => props.theme.tablet} {
      color: white;
      width: 90vw;
      font-size: 8rem;
      font-family: 'Sansation';
      text-transform: uppercase;
      z-index: 2;
      animation: ${positionComeIn} 2s 1.5s;
      animation-fill-mode: backwards;
      transition-duration: 2s;
      &:hover {
        width: 80vw;
        border-bottom: 3px solid white;
      }
    }
  `;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const photoUp = keyframes`
    from {
      transform: translateY(100rem)
    }
    to{
      transform: translateY(0px)
    }
  `;
  const Top = styled.div`
    color: white;
    position: relative;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    top: 60px;
    transition-duration: 1s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const Photo = styled.div`
    display: flex;
    width: 72vw;
    height: 50vh;
    color: white;
    position: absolute;
    margin-top: 10px;
    font-family: 'Sansation';
    top: 75%;
    left: 15%;
    z-index: 1;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: rgba(255, 100, 100, 0.7);
    transition-duration: 0.5s;
    animation: ${photoUp} 2s;
    @media ${props => props.theme.tablet} {
      display: flex;
      width: 60vw;
      height: 60vh;
      color: white;
      position: absolute;
      top: 75%;
      left: 20%;
      z-index: 1;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      border-radius: 30px;
      background-color: black;
      transition-duration: 0.5s;
      animation: ${photoUp} 2s;
      &:hover {
        transform: rotateX(30deg);
        background-color: rgba(255, 100, 100, 0.7);
        font-size: 0px;
        height: 62vh;
        padding: 10px;
      }
      &:hover:before {
        content: 'TRY NOW';
        padding: 20px;
        font-size: 40px;
        font-family: 'Sansation';
      }
    }
  `;
  const Gif = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    border-radius: 10px;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      width: 40vw;
      height: 40vh;
      background-color: blue;
      transition-duration: 1s;
      &:hover {
        margin: 3vh;
        width: 45vw;
        height: 45vh;
      }
    }
  `;
  return (
    <FirstChapter>
      <FirstTitle>Brewerys</FirstTitle>
      <Link to="/brewery/info">
        <Photo>
          <Gif />
        </Photo>
      </Link>
      <Top onClick={scrollToTop}>
        <FiArrowUp />
      </Top>
    </FirstChapter>
  );
}

export default FirstRending;
