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

import MyFavsBoard1 from './MyFavsBoard1';
// import MyFavsBoard2 from './MyFavsBoard2';
import MyFavsCard1 from './MyFavsCard1';
// import MyFavsCard2 from './MyFavsCard2';

import MypageMyFavs from './MypageMyFavs';
import MypageMyFavBox from './MypageMyFavBox';

const MyFavs = () => {
  const makImg = MakImg;
  const trashBinImg = TrashBinImg;

  return (
    <Section>
      여기다잉ff
      <MypageMyFavs id="board1">
        <MypageMyFavBox />
      </MypageMyFavs>
    </Section>
  );
};

const Section = styled.div`
  background: beige;
`;
export default MyFavs;
