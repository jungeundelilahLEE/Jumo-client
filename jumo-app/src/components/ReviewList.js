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
  // const { id, username, email, createdAt } = user;
  const [allReivews, setAllReviews] = useState([]);

  const getReviewList = async () => {
    const reviews = await server.get(
      `/makgeolli/review?makgeolli_id=${makgeolliId}`,
    );
    const { data } = reviews;
    setAllReviews(data.data);
  };

  useEffect(() => {
    getReviewList();
  }, [allReivews]);

  return (
    <StyleReviewList>
      <StyleReviewsTop>
        <div className="StyleReviewsCategory" />
        <div>6,047</div>
      </StyleReviewsTop>

      <div>
        {!allReivews.length ? (
          <span>리뷰를 작성해주세요.</span>
        ) : (
          allReivews &&
          allReivews.map(review => (
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
