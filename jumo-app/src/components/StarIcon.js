/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const StarIcon = props => {
  const { star, index } = props;

  const fillColor = useMemo(() => {
    if (star >= index + 1) {
      return '#d1fc35'; // #ffdb58 === 노란색
    }
    if (star < index + 1 && index - star < 0) {
      return 'half';
    }
    return '#dcdcdc'; // #dcdcdc === 회색
  }, [index, star]);

  return (
    <div>
      {fillColor === 'half' ? (
        <StylesHalfStars fill="#d1fc35" />
      ) : (
        <StyleStars fill={fillColor} />
      )}
    </div>
  );
};

const StylesHalfStars = styled(BsStarHalf)`
  width: 20px;
  height: auto;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 25px;
    height: auto;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStars = styled(BsStarFill)`
  width: 20px;
  height: auto;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 25px;
    height: auto;
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default StarIcon;
