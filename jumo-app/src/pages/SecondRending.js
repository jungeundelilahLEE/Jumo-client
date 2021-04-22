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

function SecondRending() {
  const slidein = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  `;
  const contentSlide = keyframes`
    from {
      transform: translateX(-1200px);
    }
    to {
      transform: translateX(0px);
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
  const speakingDown = () => keyframes`
    from {
      transform: translateY(15px)
    }
    to {
      transform: translateY(0px)
    }
  `;
  const SecondChapter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  `;
  const Makgeolli = styled.h1`
    padding: 20px;
    color: white;
    font-family: 'Sansation';
    font-weight: lighter;
    width: 55vw;
    font-size: 10rem;
    animation: ${slidein} 3s, ${positionComeIn} 3s;
    transition-duration: 1s;
    &:hover {
      font-size: 11rem;
    }
  `;
  const More = styled.button`
    background-color: rgba(255, 100, 100, 1);
    color: white;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
    left: 75%;
    top: 5%;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    transition-duration: 1s;
    &:hover {
      width: 180px;
      height: 35px;
    }
  `;
  const Speaking = styled.div`
    display: inline;
    position: absolute;
    font-size: 2.3rem;
    padding: 2rem;
    color: white;
    height: 34.3%;
    line-height: 180%;
    writing-mode: vertical-lr;
    top: 33%;
    right: 5%;
    font-family: 'Independence_hall';
    text-shadow: 2px 2px 2px gray;
    animation: ${speakingDown} 2s 1.5s, ${slidein} 2s 1.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      transform: translate(-10px, -10px);
    }
  `;
  const InnerContent = styled.h2`
    margin: 10px;
    line-height: 40px;
    padding: 15px;
    width: 70vw;
    color: white;
    font-weight: bold;
    height: 60vh;
    font-family: 'Nanum Gothic', sans-serif;
    background-color: rgba(0, 0, 10, 0.1);
    font-size: 2rem;
    animation: ${contentSlide} 3s 1s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      transform: translateX(10px) translateY(-10px);
    }
  `;
  const Brewerys = styled.div`
    color: white;
    text-align: center;
    position: relative;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 1s;
    &:hover {
      transform: translateY(10px);
    }
  `;
  const Top1 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
  `;
  const Top2 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
  `;
  const Top3 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
  `;
  const Top = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;
  const toBre = () => {
    window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
  };
  return (
    <SecondChapter>
      <Makgeolli>MAKGEOLLI</Makgeolli>
      <Speaking>
        그 술의 힘, 그 술의 맛, 그 술의 멋 네 피 속에 불사의 생명을 부으리라
      </Speaking>
      <InnerContent>
        다양한 막걸리를 구경하고 맛보고 평점을 주세요!
        <br />
        30만 주당유저들과 함께 여러분들의 최고의 막거리를 소개해주세요!
        <br />
        <Top>
          <Top1 />
          <Top2 />
          <Top3 />
        </Top>
        <Link to="/makgeolli/info">
          <More>다른 막걸리 보러가기</More>
        </Link>
      </InnerContent>
      <Brewerys onClick={toBre}>
        <FiArrowDown />
      </Brewerys>
    </SecondChapter>
  );
}

export default SecondRending;
