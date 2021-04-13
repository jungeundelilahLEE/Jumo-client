import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const StarIcon = ({ base, star }) => {
  const fillColor = useMemo(() => {
    if (star >= base) {
      return '#ffdb58'; // #ffdb58 === 노란색
    }
    if (star < base && base - star < 1) {
      return 'half';
    }
    return '#dcdcdc'; // #dcdcdc === 회색
  }, [base, star]);

  return (
    <div>
      {fillColor === 'half' ? (
        <StylesHalfStars fill="#ffdb58" />
      ) : (
        <StyleStars fill={fillColor} />
      )}
    </div>
  );
};

StarIcon.defaultProps = {
  base: 0,
  star: 0,
};

StarIcon.propTypes = {
  base: PropTypes.number,
  star: PropTypes.number,
};

const StylesHalfStars = styled(BsStarHalf)`
  width: 100px;
  height: auto;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStars = styled(BsStarFill)`
  width: 100px;
  height: auto;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default StarIcon;
