import React from 'react';
import styled from 'styled-components';
import StarIcon from './StarIcon';

const StarBox = ({ star }) => {
  return (
    <StyleStarBox>
      {['a', 'b', 'c', 'd', 'e'].map((el, idx) => (
        <StarIcon index={idx} star={star} key={el} />
      ))}
    </StyleStarBox>
  );
};

const StyleStarBox = styled.div`
  width: 20vmin;
  padding-top: 2vmin;
  display: flex;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: flex-start;
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default StarBox;
