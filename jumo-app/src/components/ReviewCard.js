/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useSelector, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeReview, editReview } from '../actions';
import StarIcon from './StarIcon';

const ReviewCard = ({ review, user }) => {
  // const state = useSelector(states => states.signinReducer);
  // const state = { user: { id: 3 } };
  // const { user } = state;

  const {
    id,
    user_id,
    star,
    username,
    createdAt,
    updatedAt,
    image,
    comment,
  } = review;
  const [inputText, setInputText] = useState('');
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const dispatch = useDispatch();

  const handleReview = e => {
    setInputText(e.target.value);
  };

  const handleDelete = reviewId => {
    dispatch(removeReview(reviewId));
  };

  const handleEdit = () => {
    setEdit(true);
    setSave(true);
  };

  const handleUpdateSave = reviewId => {
    if (window.confirm('정말 수정하시겠습니까??') === false) {
      return;
    }

    setEdit(false);
    setSave(false);
    dispatch(editReview(reviewId, inputText));
  };

  const handleUpdateCancel = () => {
    setEdit(false);
    setSave(false);
  };

  return (
    <StyleReviewsBox>
      <StyleWriter>
        <StyleNickname>{username}</StyleNickname>
        <StyleStarBox>
          {['a', 'b', 'c', 'd', 'e'].map((el, idx) => (
            <StarIcon index={idx} star={star} key={el} />
          ))}
        </StyleStarBox>
        <StyleCreated>{createdAt}</StyleCreated>
      </StyleWriter>
      <StyleContents>
        {image !== '' && <StyleImg src={image} alt="유저 이미지" />}
        <StyleEffective>
          {edit ? (
            <StyleInput
              maxLength={300}
              onChange={handleReview}
              placeholder="리뷰를 입력해주세요(300자 이내)"
            >
              {comment}
            </StyleInput>
          ) : (
            <StyleText>{comment}</StyleText>
          )}

          {user_id === user.id && !save ? (
            <StyleModifyBox>
              <StyleChangeBtn onClick={() => handleEdit()}>edit</StyleChangeBtn>
              <StyleChangeBtn onClick={() => handleDelete(id)}>
                delete
              </StyleChangeBtn>
            </StyleModifyBox>
          ) : (
            ''
          )}

          {save && (
            <StyleModifyBox>
              <StyleChangeBtn onClick={() => handleUpdateSave(id)}>
                save
              </StyleChangeBtn>
              <StyleChangeBtn onClick={() => handleUpdateCancel()}>
                cancel
              </StyleChangeBtn>
            </StyleModifyBox>
          )}
        </StyleEffective>
      </StyleContents>
    </StyleReviewsBox>
  );
};

// ReviewCard.defaultProps = {
//   review: {},
// };

// ReviewCard.propTypes = {
//   review: PropTypes.shape({
//     id: PropTypes.number,
//     userId: PropTypes.number,
//     userName: PropTypes.string,
//     star: PropTypes.number,
//     comment: PropTypes.string,
//     image: PropTypes.string,
//     createAt: PropTypes.string,
//     updateAt: PropTypes.string,
//   }),
// };

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

const StyleInput = styled.textarea`
  width: 100%;
  height: 96%;
  border: none;
  resize: none;
  font-size: 1rem;
  padding: 2vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1rem;
  }
`;

export default ReviewCard;
