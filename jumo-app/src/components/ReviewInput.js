/* eslint-disable object-shorthand */
/* eslint-disable no-lonely-if */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateReivewList } from '../actions';
import server from '../apis/server';
import StarInput from './StarInput';

const ReviewInput = ({ makgeolliId, setAllReviews }) => {
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);
  const [inputText, setInputText] = useState('');
  const accessToken = localStorage.getItem('accessToken');

  // const userName = userInfo.name;
  const { name } = useParams();
  const reviewText = useRef();
  const onMouseEnter = index => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  const onSaveRating = index => setRating(index);

  const getUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;
      setUserName(data.username);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
      const reviewList = await server.get(
        `makgeolli/review?makgeolli_id=${makgeolliId}`,
      );
      const { data } = reviewList.data;

      setAllReviews(data);
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

        {/* <StyleBtnWrap>
          <StyleBtnArea>
            <StyleBtnPhoto>photo</StyleBtnPhoto>
          </StyleBtnArea>
        </StyleBtnWrap> */}
      </div>
    </StyleInputBox>
  );
};

const StyleInputBox = styled.div`
  display: flex;
  width: 100vw;
  padding-top: 10vmin;
  /* border: 5px dashed black; */
  padding: 3em 2em 1em;
  justify-content: center;
  @media ${props => props.theme.tablet} {
    display: flex;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    width: 80vw;
  }
`;

const StyleStarBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1em;
  @media ${props => props.theme.tablet} {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1em;
  }
`;

const StyleInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25vmin;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
    -1px -1px 3px 1px rgba(194, 155, 134, 0.3);
  border-radius: 2vmin;
  /* border: 10px solid red; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    width: 87vw;
    height: 20vmin;
    justify-content: center;
    box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
      -1px -1px 3px 1px rgba(194, 155, 134, 0.3);
    border-radius: 2vmin;
  }
  @media ${props => props.theme.desktop} {
    width: 70vw;
    height: 20vmin;
    display: flex;
    flex-direction: row;
    /* width: 87vw; */
    /* height: 20vmin; */
    justify-content: center;
    box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
      -1px -1px 3px 1px rgba(194, 155, 134, 0.3);
    border-radius: 2vmin;
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
  font-size: 1.1rem;
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

const StyleBtnPhoto = styled.button`
  margin-top: 10px;
  margin-left: 20px;
`;

const StyleBtnItem = styled.div`
  flex: 1;
  padding: 3px;
  /* border: 2px solid red; */
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
`;

const StyleSaveBtn = styled.button`
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
  border: none;
  background: #c29b86;
  color: white;
  border-radius: 5px;
  margin: 0.3em 1em 0.5em 0; //! 왜.align-items..안먹음

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default ReviewInput;

// const StyleInputBox = styled.div`
//   width: 100vw;
//   padding-top: 10vmin;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleStarBox = styled.div`
//   display: flex;
//   justify-content: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     justify-content: flex-start;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleInputWrap = styled.div`
//   width: 100vw;
//   height: 20vmin;
//   display: flex;
//   border-top: 2px red solid;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     border-bottom: 2px red solid;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 80vw;
//     height: 15vmin;
//     border: 2px red solid;
//   }
// `;

// const StyleInputItem = styled.div`
//   flex: 6;
// `;

// const StyleInput = styled.textarea`
//   width: 100%;
//   height: 96%;
//   border: none;
//   resize: none;
//   font-size: 1.5rem;
//   padding: 2vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     font-size: 1.2rem;
//   }
// `;

// const StyleBtnWrap = styled.div`
//   display: flex;
// `;

// const StyleBtnArea = styled.div`
//   margin-left: auto;
// `;

// const StyleBtn = styled.button`
//   margin-top: 10px;
//   margin-left: 20px;
// `;

// const StyleBtnItem = styled.div`
//   flex: 1;
//   padding: 3px;
// `;

// const StyleSaveBtn = styled.button`
//   width: 100%;
//   height: 100%;
//   font-size: 1.3rem;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;
