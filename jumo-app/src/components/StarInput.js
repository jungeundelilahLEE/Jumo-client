/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';

const StarInput = props => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return '#ffdb58';
    }
    if (!hoverRating && rating > index) {
      return '#ffdb58';
    }
    return '#dcdcdc';
  }, [rating, hoverRating, index]);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index + 1)}
    >
      <StyleStars fill={fill} />
    </Div>
  );
};

const Div = styled.div`
  /* border: 2px solid yellow; */
`;
const StyleStars = styled(BsStarFill)`
  width: 20px;
  height: auto;
  /* border: 3px solid yellow; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 25px;
    height: auto;
  }

  @media ${props => props.theme.desktop} {
  }
`;
export default StarInput;
