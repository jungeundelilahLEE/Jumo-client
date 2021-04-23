/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useSelector, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { removeReview, editReview } from '../actions';
import server from '../apis/server';
import StarIcon from './StarIcon';

const ReviewCard = ({ review, setAllReviews, makgeolliId }) => {
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
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState({
    id: null,
    email: '',
    username: '',
  });
  const [inputText, setInputText] = useState('');
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const modifyReviews = async reviewId => {
    if (!inputText.length) {
      alert('리뷰를 입력해주세요(최소 2글자).');
      return;
    }

    const reviewUpdate = await server.put(
      '/review/update',
      {
        // star: rating,
        comment: inputText,
        // image:"",
        review_id: reviewId,
      },
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const reviewList = await server.get(
      `makgeolli/review?makgeolli_id=${makgeolliId}`,
    );
    const { data } = reviewList.data;

    setAllReviews(data);
  };

  const removeReviews = async reviewId => {
    const reviewDelete = await server.post(
      '/review/remove',
      {
        review_id: reviewId,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    const reviewList = await server.get(
      `makgeolli/review?makgeolli_id=${makgeolliId}`,
    );
    const { data } = reviewList.data;

    setAllReviews(data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const handleReview = e => {
    setInputText(e.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
    setSave(true);
  };

  const handleDelete = reviewId => {
    if (window.confirm('정말 삭제하시겠습니까??') === false) {
      return;
    }
    removeReviews(reviewId);
  };

  const handleUpdateSave = reviewId => {
    if (window.confirm('정말 수정하시겠습니까??') === false) {
      return;
    }

    setEdit(false);
    setSave(false);
    modifyReviews(reviewId);
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

          {user_id === userInfo.id && !save ? (
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

const StyleReviewsBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgba(194, 155, 134, 0.7);
  padding: 1.5em;
  margin: 1em;
  justify-content: center;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    border-top: 2px solid rgba(194, 155, 134, 0.7);
    padding: 1.5em;
    margin: 1em 3em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    border-top: 2px solid rgba(194, 155, 134, 0.7);
    padding: 5em 4em 4em;
    margin: 1em;
  }
`;

const StyleWriter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleNickname = styled.div`
  display: flex;
  font-size: 1.4em;
  font-weight: bolder;
  background: white;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #506d8c;
  box-shadow: inset 0 0 20px #c29b86, 0 0 10px #bb56e3;
  @media ${props => props.theme.tablet} {
    display: flex;
    font-size: 1.5em;
    font-weight: bolder;
    background: white;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #506d8c;
    box-shadow: inset 0 0 20px #c29b86, 0 0 10px #bb56e3;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    font-size: 1.5em;
    font-weight: bolder;
    background: white;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: #506d8c;
    box-shadow: inset 0 0 20px #c29b86, 0 0 10px #bb56e3;
  }
`;

const StyleStarBox = styled.div`
  display: flex;
  width: 5em;
  padding-top: 2vmin;
  margin: 1em 0;
  @media ${props => props.theme.tablet} {
    /* justify-content: flex-start; */
    display: flex;
    margin: 0.3em 0;
    width: 4em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    margin: 0.3em 0;
    width: 4em;
  }
`;

//! 이부분은. 아직 미정 뭐지 갑자기 들어오지왜...???????????
const StyleCreated = styled.div`
  padding-top: 2vmin;
  font-size: 1em;
  color: grey;
  margin-bottom: 1em;
`;

const StyleContents = styled.div`
  /* border: 2px solid rgba(194, 155, 134, 0.7); */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 1em 0.3em 0.3em 1em;
  border-radius: 2vmin;
  box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
    1px -0.5px 3px 1px rgba(194, 155, 134, 0.3);
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 3em;
    padding: 1em 0.3em 0.3em 1em;
    border-radius: 2vmin;
    box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
      1px -0.5px 3px 1px rgba(194, 155, 134, 0.3);
    width: 80vw;
    height: 17vh;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 3em;
    padding: 1em 0.3em 0.3em 1em;
    border-radius: 2vmin;
    box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
      1px -0.5px 3px 1px rgba(194, 155, 134, 0.3);
    width: 80vw;
    height: 17vh;
  }
`;

//! 이미지 들어오는 거 보고 수정해야 할 듯
const StyleImg = styled.img`
  display: flex;
  width: 14vw;
  height: 14vh;
  margin-top: 1em;
  margin-bottom: 1em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  @media ${props => props.theme.tablet} {
    flex: 3;
  }
  @media ${props => props.theme.desktop} {
    flex: 2;
  }
`;

//! flex 이거 어떻게 하는건지 잘 모르겠음
const StyleEffective = styled.div`
  /* display: flex; */
  flex-direction: column;
  /* border: 2px solid red; */
  /* margin: 0 0 1em 0; */

  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    flex: 5;
    /* padding-left: 3vmin; */
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    flex: 5;
    /* padding-left: 3vmin; */
  }
`;

const StyleInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 94%;
  border: none;
  resize: none;
  font-size: 1.3em;
  padding: 2vmin;
  background: none;
  line-height: 2;
  @media ${props => props.theme.tablet} {
    width: 100%;
    height: 94%;
    border: none;
    resize: none;
    font-size: 1.4em;
    padding: 2vmin;
    background: none;
  }
  @media ${props => props.theme.desktop} {
    width: 100%;
    height: 94%;
    border: none;
    resize: none;
    font-size: 1.4em;
    padding: 2vmin;
    background: none;
  }
`;

const StyleText = styled.div`
  display: flex;
  color: black;
  background: none;
  width: 100%;
  height: 94%;
  border: none;
  resize: none;
  font-size: 1.3em;
  padding: 2vmin;
  background: none;
  line-height: 2;
  @media ${props => props.theme.tablet} {
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.4em;
  }
`;

const StyleModifyBox = styled.div`
  display: flex;
  padding: 3vmin 0;
  justify-content: flex-end;
  /* border: 1px dashed orange; */
  @media ${props => props.theme.tablet} {
    margin: auto 0 0 auto;
    padding: 2vmin 0;
  }
  @media ${props => props.theme.desktop} {
    margin: auto 0 0 auto;
    padding: 2vmin 0;
  }
`;

//! 폰트적용한뒤에 다시 패딩 확인하기
const StyleChangeBtn = styled.button`
  margin: 0 3vmin 0 0;
  width: 73px;
  height: 25px;
  align-items: center;
  padding-top: 3px;
  font-size: 1.1em;
  background: #c29b86;
  color: white;
  border-radius: 1.4vmin;
  border: 0;
  outline: 0;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    background: #edacfa;
    color: white;
    border: 0;
    outline: 0;
  }
  @media ${props => props.theme.tablet} {
    margin: 0 3vmin 0 0;
    width: 87px;
    height: 36px;
    align-items: center;
    padding-top: 3px;
    font-size: 1.4em;
    font-weight: bolder;
    background: #c29b86;
    color: white;
    border-radius: 1vmin;
    border: 0;
    outline: 0;
    &:focus {
      border: none;
      outline: none;
    }
    &:hover {
      background: #edacfa;
      color: white;
      border: 0;
      outline: 0;
    }
    @media ${props => props.theme.desktop} {
      margin: 0 3vmin 0 0;
      width: 95px;
      height: 40px;
      align-items: center;
      padding-top: 3px;
      font-size: 1.4em;
      font-weight: bolder;
      background: #c29b86;
      color: white;
      border-radius: 1vmin;
      border: 0;
      outline: 0;
      &:focus {
        border: none;
        outline: none;
      }
      &:hover {
        background: #edacfa;
        color: white;
        border: 0;
        outline: 0;
      }
    }
  }
`;

export default ReviewCard;

// const StyleReviewsBox = styled.div`
//   min-height: 10vmin;
//   padding: 3vmin;
//   font-size: 1rem;
//   border-bottom: 2px black solid;
//   display: flex;

//   @media ${props => props.theme.tablet} {
//     min-height: 5vmin;
//   }
// `;

// const StyleWriter = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const StyleNickname = styled.div``;

// const StyleStarBox = styled.div`
//   width: 20vmin;
//   padding-top: 2vmin;
//   display: flex;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     justify-content: flex-start;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleCreated = styled.div`
//   padding-top: 2vmin;
// `;

// const StyleContents = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding-left: 3vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     flex-direction: row;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleImg = styled.img`
//   width: 200px;
//   height: 200px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   /* margin-bottom: 3vmin; */

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     flex: 3;
//     margin-bottom: 0;
//   }

//   @media ${props => props.theme.desktop} {
//     flex: 2;
//   }
// `;

// const StyleEffective = styled.div`
//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     flex: 5;
//     padding-left: 3vmin;
//     display: flex;
//     flex-direction: column;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleText = styled.div`
//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleModifyBox = styled.div`
//   padding: 3vmin 0 0 0;
//   display: flex;
//   justify-content: flex-end;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     margin: auto 0 0 auto;
//     padding: 2vmin 0 0 0;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleChangeBtn = styled.button`
//   margin: 0 3vmin 0 0;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     margin: 0 1vmin 0 0;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleInput = styled.textarea`
//   width: 100%;
//   height: 96%;
//   border: none;
//   resize: none;
//   font-size: 1rem;
//   padding: 2vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     font-size: 1rem;
//   }
// `;
