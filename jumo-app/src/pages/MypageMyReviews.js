import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { updateReivewList } from '../actions';
import server from '../apis/server';

import MypageMyReviewBox from './MypageMyReviewBox';

const MypageMyReviews = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [userReviews, setUserReviews] = useState([]);
  const [modify, setModify] = useState(false);

  const dispatch = useDispatch();

  const getUserReviews = async () => {
    try {
      const res = await server.get(`/review/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res;
      const reviewsList = data.data;
      dispatch(updateReivewList(reviewsList));
      setUserReviews([...reviewsList]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserReviews();
  }, []);
  useEffect(() => {
    if (modify) {
      getUserReviews();
      setModify(false);
    }
  }, [modify]);

  return (
    <div>
      {!userReviews.length ? (
        <div>작성한 글이 없습니다.</div>
      ) : (
        userReviews.map(el => (
          <MyReviewsBox>
            <MypageMyReviewBox
              image={el.image}
              createdAt={el.createdAt}
              comment={el.comment}
              star={el.star}
              reviewId={el.id}
              setModify={setModify}
            />
          </MyReviewsBox>
        ))
      )}
    </div>
  );
};

const MyReviewsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding: 20px; //추가함: hgsignal
  /* height: 23vh; //수정함: hgsignal */
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
