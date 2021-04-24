/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { editReview, removeReview } from '../actions';
import server from '../apis/server';
import StarBox from '../components/StarBox';
import dateFormat from '../atoms/dateFormat';

// eslint-disable-next-line camelcase
const MypageMyReviewBox = ({
  image,
  createdAt,
  comment,
  star,
  reviewId,
  setModify,
}) => {
  const accessToken = localStorage.getItem('accessToken');

  const [date, setDate] = useState('');
  const [edit, setEdit] = useState(false);
  const [modifyText, setModifyText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const format = dateFormat(createdAt);
    setDate(format);
  }, []);

  const updateReview = async () => {
    try {
      const res = await server.put(
        '/review/update',
        { review_id: reviewId, comment: modifyText },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      dispatch(editReview(reviewId, modifyText));
      setModify(true);
      alert('리뷰를 수정했습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  // const deleteReview = async () => {
  //   try {
  //     const res = await server.delete(
  //       `/review/remove?review_id=${reviewId}`,

  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           withCredentials: true,
  //         },
  //       },
  //     );

  //     dispatch(removeReview(reviewId));
  //     setModify(true);
  //     alert('리뷰를 삭제했습니다.');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const deleteReview = async () => {
    try {
      const res = await server.delete(
        `/review/remove`,
        { review_id: reviewId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          // withCredentials: true,
        },
      );

      dispatch(removeReview(reviewId));
      setModify(true);
      alert('리뷰를 삭제했습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  const editOn = () => {
    setEdit(true);
  };

  const editOff = () => {
    setEdit(false);
  };

  const handleModifyReviews = e => {
    setModifyText(e.target.value);
  };

  const handleSvae = () => {
    if (!modifyText.length) {
      alert('리뷰를 입력해주세요(최소 2글자).');
      return;
    }
    updateReview();
    setEdit(false);
  };

  const handleDelete = () => {
    deleteReview();
  };

  //! StarBox (컴포넌트) / StyleInput 추가
  return (
    <>
      {/* <MyReviewImg src={image} alt="makImg" /> */}
      <MyReviewContent>
        <MyReviewCreatedAt>
          {date} <StarBox star={star} />
        </MyReviewCreatedAt>

        {edit ? (
          <StyleInput onChange={handleModifyReviews}>{comment}</StyleInput>
        ) : (
          <MyReviewReview>{comment}</MyReviewReview>
        )}

        <MyReviewBtnBox>
          {edit ? (
            <>
              <button type="button" onClick={handleSvae}>
                save
              </button>
              <button type="button" onClick={editOff}>
                cancel
              </button>
            </>
          ) : (
            <MyReviewEditBtn onClick={editOn}>edit</MyReviewEditBtn>
          )}

          <MyReviewDeleteBtn onClick={handleDelete}>delete</MyReviewDeleteBtn>
        </MyReviewBtnBox>
      </MyReviewContent>
    </>
  );
};

const MyReviewImg = styled.img`
  display: flex;
  width: 8em;
  height: 10em;
  padding: 0.5em;
  border: 3px dashed grey;
  @media ${props => props.theme.tablet} {
    width: 8em;
    height: 10em;
    padding: 0.5em;
  }
  @media ${props => props.theme.desktop} {
    width: 10em;
    height: 13em;
    padding: 0.5em;
    margin: 1em 1em 1em 2em;
  }
`;
const MyReviewContent = styled.div`
  display: flex;
  /* background-color: pink; */
  /* border: 3px dashed skyblue; */
  flex-wrap: wrap;
  width: 74vw;
  height: 20vh;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.5em;
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  margin-left: 0.5em;
  box-shadow: 3px 2px 3px 1px rgba(194, 155, 134, 0.3),
    1px -0.5px 3px 1px rgba(194, 155, 134, 0.3);
  /* box-shadow: 3px 3px 5px 3px rgba(214, 214, 214, 0.5),
      3px 3px 3px 3px rgba(214, 214, 214, 0.5); */
  /* background: rgba(242, 238, 237, 0.3); */
  /* background: rgba(255, 255, 255, 0.9); */
  @media ${props => props.theme.tablet} {
    width: 74vw;
    height: 20vh;
  }
  @media ${props => props.theme.desktop} {
    width: 65vw;
    height: 20vh;
    margin-right: 2em;
  }
`;
const MyReviewCreatedAt = styled.div`
  display: flex;
  flex-direction: row;
  color: gray;
  font-size: 1.2em;
  padding: 0.5em;
  @media ${props => props.theme.tablet} {
    font-size: 1.3em;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.3em;
    flex-direction: row;
  }
`;
const MyReviewReview = styled.textarea`
  display: inline-block;
  width: 70vw;
  height: 9vh;
  white-space: nowrap;
  /* overflow: scroll; */
  color: black;
  font-size: 1.3em;
  text-indent: 0.3em;
  border: none;
  /* opacity: 0.9; */
  /* border: 1px solid red; */
  @media ${props => props.theme.tablet} {
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    /* width: 60vw; */
    /* margin-right: 2em; */
    font-size: 1.5em;
  }
`;
const MyReviewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 3px dashed blue; */
  justify-content: flex-end;
  padding-right: 0.5em;
  padding-top: 0.5em;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;
const MyReviewEditBtn = styled.button`
  margin-left: 0.3em;
  width: 4em;
  height: 2em;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
  border: none;
  background: #c29b86;
  color: white;
  border-radius: 5px;
  margin: 0.3em 1em 0.5em 0;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;
const MyReviewDeleteBtn = styled.button`
  margin-left: 0.3em;
  margin-left: 0.3em;
  width: 4em;
  height: 2em;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bolder;
  border: none;
  background: #c29b86;
  color: white;
  border-radius: 5px;
  margin: 0.3em 1em 0.5em 0;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;

const StyleInput = styled.textarea`
  display: flex;
  background-color: pink;
`;

export default MypageMyReviewBox;
