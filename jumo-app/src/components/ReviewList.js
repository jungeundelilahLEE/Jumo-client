/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateReivewList, signIn } from '../actions';
import server from '../apis/server';
import ReviewCard from './ReviewCard';

// import resUser from '../atoms/dummyUser'; // 유저 더미데이터
// import res from '../atoms/dummyReview'; // 리뷰리스트 더미데이터

const ReviewList = ({ makgeolliId, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const state = useSelector(states => states.reviewReducer);
  const { reviewList } = state;
  // const { id, username, email, createdAt } = user;
  // const [allReivews, setAllReviews] = useState([]);
  const accessToken = localStorage.getItem('accessToken');

  const dispatch = useDispatch();

  //! dummy data => server
  // const { data } = res;
  // const { dataUser } = resUser;

  // 해당 막걸리에 맞는 댓글 조회를 위한 로직입니다.
  // 모든 댓글 볼땐 filterData (X) -> data (O)
  // const filterData = data.filter(el => el.makgeolliId === makgeolliId);

  // useEffect(() => {
  //   if (reviewList.length === 0) {
  //     dispatch(updateReivewList(filterData));
  //   }
  // }, []);

  const getUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;

      // dispatch(signIn(data));
    } catch (err) {
      console.log(err);
    }
  };

  const getReviewList = async () => {
    const reviews = await server.get(
      `/makgeolli/review?makgeolli_id=${makgeolliId}`,
    );
    const { data } = reviews;
    dispatch(updateReivewList(data.data));
  };

  useEffect(() => {
    if (accessToken) {
      getUserInfo();
    }
  }, []);

  useEffect(() => {
    getReviewList();
  }, [makgeolliId]);

  // dispatch(addReview(data));

  return (
    <StyleReviewList>
      <StyleReviewsTop>
        <div className="StyleReviewsCategory" />
        <div>6,047</div>
      </StyleReviewsTop>

      <div>
        {!reviewList.length ? (
          <span>리뷰를 작성해주세요.</span>
        ) : (
          reviewList &&
          reviewList.map(review => (
            <ReviewCard review={review} user={user} key={review.id} />
            // <ReviewCard review={review} user={dataUser.user} key={review.id} />
          ))
        )}
      </div>
    </StyleReviewList>
  );
};

const StyleReviewList = styled.div`
  width: 100vw;
  padding: 5vmin 0;
  background-color: yellowgreen;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    width: 80vw;
  }
`;

const StyleReviewsTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2vmin;
  padding-right: 1rem;
  font-size: 1.4rem;
`;

export default ReviewList;
