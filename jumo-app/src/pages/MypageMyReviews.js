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
  width: 94vw;
  height: 23vh;
  background-color: none;
  justify-content: center;
  align-items: center;
  margin: 1.5em 1em;
  border: 1px solid white;
  @media ${props => props.theme.tablet} {
    width: 94vw;
    height: 23vh;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    width: 60vw;
    height: 25vh;
    justify-content: center;
    align-items: center;
  }
`;
export default MypageMyReviews;
