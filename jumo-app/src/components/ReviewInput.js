/* eslint-disable object-shorthand */
/* eslint-disable no-lonely-if */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateReivewList } from '../actions';
import server from '../apis/server';
import StarInput from './StarInput';

const ReviewInput = ({ makgeolliId, user }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);
  const [inputText, setInputText] = useState('');
  const accessToken = localStorage.getItem('accessToken');

  const userName = user.name;
  const { name } = useParams();
  const reviewText = useRef();
  const onMouseEnter = index => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  const onSaveRating = index => setRating(index);

  const handleReview = e => {
    setInputText(e.target.value);
  };

  const handleSave = async () => {
    if (!accessToken) {
      alert('로그인 해 주세요.');
    } else {
      if (!inputText.length) {
        alert('리뷰를 입력해주세요(최소 2글자).');
        return;
      }

      const reviewEnter = await server.post(
        '/review/create',
        {
          star: rating,
          comment: inputText,
          image: '',
          name: name,
          username: userName,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      reviewText.current.value = '';
      setRating(1);
    }
  };

  return (
    <StyleInputBox>
      <div>
        <StyleStarBox>
          {[1, 2, 3, 4, 5].map((el, idx) => (
            <StarInput
              index={idx}
              rating={rating}
              key={el / 2}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          ))}
        </StyleStarBox>
        <StyleInputWrap>
          <StyleInputItem>
            <StyleInput
              maxLength={300}
              onChange={handleReview}
              placeholder="리뷰를 입력해주세요(300자 이내)"
              ref={reviewText}
            />
          </StyleInputItem>
          <StyleBtnItem>
            <StyleSaveBtn onClick={handleSave}>SAVE</StyleSaveBtn>
          </StyleBtnItem>
        </StyleInputWrap>
        <StyleBtnWrap>
          <StyleBtnArea>
            <StyleBtn>photo</StyleBtn>
          </StyleBtnArea>
        </StyleBtnWrap>
      </div>
    </StyleInputBox>
  );
};

const StyleInputBox = styled.div`
  width: 100vw;
  padding-top: 10vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStarBox = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: flex-start;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleInputWrap = styled.div`
  width: 100vw;
  height: 20vmin;
  display: flex;
  border-top: 2px red solid;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    border-bottom: 2px red solid;
  }

  @media ${props => props.theme.desktop} {
    width: 80vw;
    height: 15vmin;
    border: 2px red solid;
  }
`;

const StyleInputItem = styled.div`
  flex: 6;
`;

const StyleInput = styled.textarea`
  width: 100%;
  height: 96%;
  border: none;
  resize: none;
  font-size: 1.5rem;
  padding: 2vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.2rem;
  }
`;

const StyleBtnWrap = styled.div`
  display: flex;
`;

const StyleBtnArea = styled.div`
  margin-left: auto;
`;

const StyleBtn = styled.button`
  margin-top: 10px;
  margin-left: 20px;
`;

const StyleBtnItem = styled.div`
  flex: 1;
  padding: 3px;
`;

const StyleSaveBtn = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default ReviewInput;
