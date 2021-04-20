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

const Div1 = styled.div`
  display: flex;
  border: 5px dashed pink;
`;
const Image = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
`;

export default MyFavsCard1;
