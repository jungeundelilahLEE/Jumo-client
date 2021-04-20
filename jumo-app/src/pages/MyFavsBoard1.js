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
import MyFavsCard1 from './MyFavsCard1';

const MyFavsBoard1 = () => {
  const makImg = MakImg;

  const drop = e => {
    e.preventDefault();
    // const cardId = e.dataTransfer.getData('cardId');
    // const card = document.getElementById(cardId);
    // card.style.display = 'block';
    e.target.appendChild();
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <>
      <MyFavsCard1 id="card2" onDrop={drop} onDragOver={dragOver} />
    </>
  );
};

export default MyFavsBoard1;
