/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
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

  const deleteReview = async () => {
    try {
      const res = await server.delete(
        '/review/remove',
        { review_id: reviewId },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
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

  const handleDelete = () => {};

  return (
    <>
      <MyReviewImg src={image} alt="makImg" />
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

          <MyReviewDeleteBtn onClick={() => deleteReview()}>
            delete
          </MyReviewDeleteBtn>
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
  border: 3px dashed blue;
`;
const MyReviewContent = styled.div`
  display: block;
  background-color: pink;
  border: 3px dashed skyblue;
  width: 40vw;
  /* height: 20vh; //수정함: hgsignal */
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.5em;
  padding-left: 0.5em;
`;
const MyReviewCreatedAt = styled.div`
  display: flex;
  color: gray;
  font-size: 0.9em;
`;
const MyReviewReview = styled.div`
  display: inline-block;
  width: 35vw;
  height: 9vh;
  white-space: nowrap;
  overflow: scroll;
  color: black;
  font-size: 1.2em;
  text-indent: 0.3em;
  border: 1px solid red;
`;
const MyReviewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px dashed blue;
  justify-content: flex-end;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;
const MyReviewEditBtn = styled.button`
  margin-left: 0.3em;
`;
const MyReviewDeleteBtn = styled.button`
  margin-left: 0.3em;
`;

const StyleInput = styled.textarea`
  display: flex;
  background-color: pink;
`;

export default MypageMyReviewBox;
