/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle

import { useSelector } from 'react-redux';

import axios from 'axios';
import server from '../apis/server';

import MakImg from '../images/intro-sec1.png';
import res from '../atoms/dummyReview'; // 리뷰리스트 더미데이터
import MypageMyReviewBox from './MypageMyReviewBox';

const MypageMyReviews = () => {
  const accessToken = localStorage.getItem('accessToken');
  const state = useSelector(states => states.signinReducer);
  const { user } = state;

  const getUserReviews = async () => {
    try {
      const userReviews = await server.get('/users/mypage', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = userReviews;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user.id}
      {/* {data === null ? (
        <div>작성한 글이 없습니다.</div>
      ) : (
        data.map(el => (
          <MyReviewsBox>
            <MypageMyReviewBox
              image={el.image}
              createAt={el.createAt}
              comment={el.comment}
            />
          </MyReviewsBox>
        ))
      )} */}
    </div>
  );
};

const MyReviews = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e7d1bf;
  width: 100vw;
  height: 100vh;
  padding-bottom: 5em;
  justify-content: center;
`;
const MyReviewsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 23vh;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const MyReviewImg = styled.img`
  display: flex;
  width: 8em;
  height: 10em;
  padding: 0.5em;
  border: 3px dashed blue;
`;
const MyReviewContent = styled.div`
  display: block;
  background-color: pink;
  border: 3px dashed skyblue;
  width: 40vw;
  height: 20vh;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.5em;
  padding-left: 0.5em;
`;
const MyReviewCreatedAt = styled.div`
  display: flex;
  color: gray;
  font-size: 0.9em;
`;
const MyReviewReview = styled.div`
  display: inline-block;
  width: 35vw;
  height: 9vh;
  white-space: nowrap;
  overflow: scroll;
  color: black;
  font-size: 1.2em;
  text-indent: 0.3em;
  border: 1px solid red;
`;
const MyReviewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px dashed blue;
  justify-content: flex-end;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;
const MyReviewEditBtn = styled.button`
  margin-left: 0.3em;
`;
const MyReviewDeleteBtn = styled.button`
  margin-left: 0.3em;
`;

export default MypageMyReviews;
