/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import photo from '../images/sideA.png';
import useScrollClipPath from './useScrollClipPath';

const SecondRending = () => {
  const contentSlide = keyframes`
    from {
      transform: translateX(-1200px);
    }
    to {
      transform: translateX(0px);
    }
  `;
  const SecondChapter = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100vw;
    height: 100vh;
  `;
  const Makgeolli = styled.h1`
    color: white;
    font-family: 'Sansation';
    font-weight: lighter;
    width: 50vw;
    font-size: 4rem;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      padding: 20px;
      color: white;
      font-family: 'Sansation';
      font-weight: lighter;
      width: 50vw;
      font-size: 8rem;
      transition-duration: 1s;
      &:hover {
        font-size: 7rem;
      }
    }
    @media ${props => props.theme.desktop} {
      padding: 20px;
      color: white;
      font-family: 'Sansation';
      font-weight: lighter;
      width: 50vw;
      font-size: 8rem;
      transition-duration: 1s;
      &:hover {
        font-size: 10rem;
      }
    }
  `;
  const More = styled.button`
    display: flex;
    font-family: 'Nanum Gothic';
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 30px;
    background-color: rgba(255, 100, 100, 1);
    color: white;
    text-align: center;
    width: 80vw;
    height: 40px;
    border-radius: 10px;
    border: none;
    @media ${props => props.theme.tablet} {
      background-color: rgba(255, 100, 100, 1);
      font-family: 'Nanum Gothic';
      color: white;
      float: right;
      text-align: center;
      width: 200px;
      height: 40px;
      border-radius: 10px;
      border: none;
      margin: 10px;
      transition-duration: 1s;
      &:hover {
        width: 180px;
        height: 35px;
      }
    }
  `;
  const Speaking = styled.div`
    display: none;
    @media ${props => props.theme.tablet} {
      display: none;
    }
    @media ${props => props.theme.desktop} {
      display: flex;
      position: absolute;
      top: 40%;
      right: 3%;
      width: 20vw;
      height: 40vh;
      transition-duration: 1s;
      &:hover {
        transform: translate(-10px, -10px);
      }
    }
  `;
  const InnerContent = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 100%;
    color: white;
    font-weight: bold;
    height: 70vh;
    font-family: 'Nanum Gothic', sans-serif;
    background-color: rgba(0, 0, 10, 0.1);
    font-size: 2rem;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      width: 95vw;
      color: white;
      font-weight: bold;
      height: 60vh;
      font-family: 'Nanum Gothic', sans-serif;
      background-color: rgba(0, 0, 10, 0.1);
      font-size: 2rem;
      animation: ${contentSlide} 1s 0.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        transform: translateX(10px) translateY(-10px);
      }
    }
    @media ${props => props.theme.desktop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      width: 70vw;
      color: white;
      font-weight: bold;
      height: 60vh;
      font-family: 'Nanum Gothic', sans-serif;
      background-color: rgba(0, 0, 10, 0.1);
      font-size: 2rem;
      animation: ${contentSlide} 2s 0.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        transform: translateX(10px) translateY(-10px);
      }
    }
  `;
  const Brewerys = styled.div`
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding-top: 3vh;
    @media ${props => props.theme.tablet} {
      color: white;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      transition-duration: 1s;
      &:hover {
        transform: translateY(10px);
      }
    }
  `;
  const Top = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
    @media ${props => props.theme.tablet} {
      display: flex;
      justify-content: space-between;
    }
  `;
  const Top1 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    @media ${props => props.theme.tablet} {
      width: 200px;
      height: 200px;
      border: 1px solid black;
      transition-duration: 1s;
      &:hover {
        width: 220px;
        height: 220px;
      }
    }
  `;
  const Top2 = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    @media ${props => props.theme.tablet} {
      width: 200px;
      height: 200px;
      border: 1px solid black;
      transition-duration: 1s;
      &:hover {
        width: 220px;
        height: 220px;
      }
    }
  `;
  const Top3 = styled.div`
    @media ${props => props.theme.tablet} {
      width: 200px;
      height: 200px;
      border: 1px solid black;
      transition-duration: 1s;
      &:hover {
        width: 220px;
        height: 220px;
      }
    }
  `;
  const toBre = () => {
    window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
  };
  return (
    <SecondChapter>
      <Makgeolli>MAKGEOLLI</Makgeolli>
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
      <Speaking>
        <img src={photo} alt="sideA" />
      </Speaking>
      <Brewerys onClick={toBre}>
        <FiArrowDown />
      </Brewerys>
    </SecondChapter>
  );
};

export default SecondRending;
