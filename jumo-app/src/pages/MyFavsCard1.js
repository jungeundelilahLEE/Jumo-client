/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { useSelector } from 'react-redux';
import Nav from './Nav';
import MakImg from '../images/intro-sec1.png';
import TrashBinImg from '../images/trash-bin.png';
import UsernameEditBtn from './UsernameEditBtn';
import MypageMyReviews from './MypageMyReviews';
import MypageMyFavs from './MypageMyFavs';

const MyFavsCard1 = () => {
  const makImg = MakImg;

  const dragStart = e => {
    const { target } = e;
    // e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 200);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <>
      <Div1 onDragStart={dragStart} onDragOver={dragOver} draggable="true">
        <Image src={makImg} alt="막걸리이미지" />
      </Div1>
      <Div1 onDragStart={dragStart} onDragOver={dragOver} draggable="true">
        <Image src={makImg} alt="막걸리이미지" />
      </Div1>
      <Div1 onDragStart={dragStart} onDragOver={dragOver} draggable="true">
        <Image src={makImg} alt="막걸리이미지" />
      </Div1>
    </>
  );
};

const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* border: 10px solid red; */
  width: 40vw;
  height: 40vh;
  /* align-items: center; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 10px solid red; */
    width: 30vw;
    height: 30vh;
    /* align-items: center; */
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 10px solid red; */
    width: 40vw;
    height: 40vh;
    align-items: center;
  }
`;

const Div1 = styled.div`
  display: flex;
  /* border: 5px dashed pink; */
  margin: 2em;
`;

const Image = styled.img`
  display: flex;
  width: 10em;
  height: 13em;
  @media ${props => props.theme.tablet} {
    display: flex;
    width: 10em;
    height: 13em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    width: 15em;
    height: 20em;
  }
`;

export default MyFavsCard1;
