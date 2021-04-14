import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon';

const ReviewCard = ({ review }) => {
  const { id, userId, star, userName, createAt, image, comment } = review;
  return (
    <StyleReviewsBox>
      <StyleWriter>
        <StyleNickname>{userName}</StyleNickname>
        <StyleStarBox>
          {[1, 2, 3, 4, 5].map(el => (
            <StarIcon index={el} star={star} key={el} />
          ))}
        </StyleStarBox>
        <StyleCreated>{createAt}</StyleCreated>
      </StyleWriter>
      <StyleContents>
        <StyleImg src={image} alt="유저 이미지" />

        <StyleEffective>
          <StyleText>{comment}</StyleText>

          {/* id test.. 작성자게만 버튼 보이는 기능 구현 필요 */}
          <div>id : {id}</div>
          <div>userId : {userId}</div>

          <StyleModifyBox>
            <StyleChangeBtn>edit</StyleChangeBtn>
            <StyleChangeBtn>delete</StyleChangeBtn>
          </StyleModifyBox>
        </StyleEffective>
      </StyleContents>
    </StyleReviewsBox>
  );
};

ReviewCard.defaultProps = {
  review: {},
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    userName: PropTypes.string,
    star: PropTypes.number,
    comment: PropTypes.string,
    image: PropTypes.string,
    createAt: PropTypes.string,
    updateAt: PropTypes.string,
  }),
};

const StyleReviewsBox = styled.div`
  min-height: 10vmin;
  padding: 3vmin;
  font-size: 1rem;
  border-bottom: 2px black solid;
  display: flex;

  @media ${props => props.theme.tablet} {
    min-height: 5vmin;
  }
`;

const StyleWriter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleNickname = styled.div``;

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

const StyleCreated = styled.div`
  padding-top: 2vmin;
`;

const StyleContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 3vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex-direction: row;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleImg = styled.img`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-bottom: 3vmin; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex: 3;
    margin-bottom: 0;
  }

  @media ${props => props.theme.desktop} {
    flex: 2;
  }
`;

const StyleEffective = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex: 5;
    padding-left: 3vmin;
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleText = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleModifyBox = styled.div`
  padding: 3vmin 0 0 0;
  display: flex;
  justify-content: flex-end;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: auto 0 0 auto;
    padding: 2vmin 0 0 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleChangeBtn = styled.button`
  margin: 0 3vmin 0 0;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: 0 1vmin 0 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default ReviewCard;
