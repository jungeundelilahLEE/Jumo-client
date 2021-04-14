import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  const state = useSelector(states => states.reviewReducer);
  const { reviewList } = state;

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
            <ReviewCard review={review} key={review.id} />
          ))
        )}
        {/* {reviews &&
          reviews.map(review => <ReviewCard review={review} key={review.id} />)} */}
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
