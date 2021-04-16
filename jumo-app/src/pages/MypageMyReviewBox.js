/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const MypageMyReviewBox = ({ image, createAt, comment }) => {
  return (
    <>
      <MyReviewImg src={image} alt="makImg" />
      <MyReviewContent>
        <MyReviewCreatedAt>{createAt}</MyReviewCreatedAt>
        <MyReviewReview>{comment}</MyReviewReview>
        <MyReviewBtnBox>
          <MyReviewEditBtn>edit</MyReviewEditBtn>
          <MyReviewDeleteBtn>delete</MyReviewDeleteBtn>
        </MyReviewBtnBox>
      </MyReviewContent>
    </>
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

export default MypageMyReviewBox;
