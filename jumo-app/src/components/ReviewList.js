/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import server from '../apis/server';
import ReviewCard from './ReviewCard';

const ReviewList = ({ makgeolliId, allReivews, setAllReviews }) => {
  // const [isLoading, setIsLoading] = useState(false);

  const getReviewList = async () => {
    const reviews = await server.get(
      `/makgeolli/review?makgeolli_id=${makgeolliId}`,
    );
    const { data } = reviews;
    setAllReviews(data.data);
  };

  useEffect(() => {
    getReviewList();
  }, [makgeolliId]);

  return (
    <StyleReviewList>
      <StyleReviewsTop>
        <div className="StyleReviewsCategory" />
        <div>{allReivews.length}</div>
      </StyleReviewsTop>

      <div>
        {!allReivews.length ? (
          <span>리뷰를 작성해주세요.</span>
        ) : (
          allReivews &&
          allReivews.map(review => (
            <ReviewCard
              review={review}
              key={review.id}
              setAllReviews={setAllReviews}
              makgeolliId={makgeolliId}
            />
          ))
        )}
      </div>
    </StyleReviewList>
  );
};

const StyleReviewList = styled.div`
  width: 100%;
  padding: 5vmin 0;
  background-color: #f2eeed;
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
  font-size: 1.2rem;
  font-style: italic;
  color: #293848;
  @media ${props => props.theme.tablet} {
    font-size: 1.6rem;
    margin-right: 2em;
  }
  @media ${props => props.theme.desktop} {
    width: 80vw;
    font-size: 1.4rem;
    margin-right: 10em;
    padding-right: 4em;
  }
`;

export default ReviewList;

// const StyleReviewList = styled.div`
//   width: 100vw;
//   padding: 5vmin 0;
//   background-color: yellowgreen;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     width: 80vw;
//   }
// `;

// const StyleReviewsTop = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-bottom: 2vmin;
//   padding-right: 1rem;
//   font-size: 1.4rem;
// `;
