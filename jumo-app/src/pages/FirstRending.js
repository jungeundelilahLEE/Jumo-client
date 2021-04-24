import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import photo from '../images/BreweyMini.jpeg';

function FirstRending() {
  const FirstChapter = styled.div`
    transition-duration: 1s;
    animation-fill-mode: forwards;
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
    padding-left: 1rem;
    z-index: 2;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      width: 100vw;
      font-size: 8rem;
      font-family: 'Sansation';
      text-transform: uppercase;
      z-index: 2;
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
  const Top = styled.div`
    color: white;
    position: relative;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition-duration: 1s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const Photo = styled.img`
    width: 72vw;
    height: 50vh;
    position: absolute;
    margin-top: 10px;
    font-family: 'Sansation';
    top: 25%;
    left: 15%;
    z-index: 1;
    border-radius: 30px;
    transition-duration: 0.5s;
    @media ${props => props.theme.tablet} {
      width: 60vw;
      height: 60vh;
      color: white;
      position: absolute;
      top: 25%;
      left: 20%;
      z-index: 1;
      border-radius: 30px;
      transition-duration: 0.5s;
      &:hover {
        transform: rotateX(30deg);
        font-size: 0px;
        height: 62vh;
        padding: 10px;
      }
    }
  `;
  const Gif = styled.div`
    position: relative;
    width: 30vw;
    height: 40vh;
    left: -50%;
    border-radius: 10px;
    background-color: blue;
    transition-duration: 1s;
    z-index: 40;
    @media ${props => props.theme.tablet} {
      position: relative;
      left: 0%;
      width: 40vw;
      height: 40vh;
      background-color: blue;
      transition-duration: 1s;
      z-index: 40;
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
        <Photo src={photo} alt="photo" />
        <Gif />
      </Link>
      <Top onClick={scrollToTop}>
        <FiArrowUp />
      </Top>
    </FirstChapter>
  );
}

export default FirstRending;
