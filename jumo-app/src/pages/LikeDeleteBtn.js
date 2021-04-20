/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { likeDeletes } from '../actions';
import TrashBinImg from '../images/trash-bin.png';

const LikeDeleteBtn = () => {
  const trashBinImg = TrashBinImg;
  const dispatch = useDispatch();
  const [deletes, setDeletes] = useState(false);

  const handleDeleteBtn = userId => {
    if (window.confirm('정말 삭제하시겠습니까?') === false) {
      return;
    }
    setDeletes(false);
    dispatch(likeDeletes(userId));
  };

  return (
    <div>
      {deletes === false ? (
        <MyFavsDeleteBtnArea>
          <MyFavDeleteBtn
            src={trashBinImg}
            alt="trashBin"
            onMouseMove={() => handleDeleteBtn()}
          />
        </MyFavsDeleteBtnArea>
      ) : (
        <p>loading</p>
      )}
    </div>

    // <MyFavsDeleteBtnArea>
    //   <MyFavDeleteBtn src={trashBinImg} alt="trashBin" />
    // </MyFavsDeleteBtnArea>
  );
};

const MyFavsDeleteBtnArea = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px dashed deepskyblue;
  width: 10vw;
  justify-content: right;
`;
const MyFavDeleteBtn = styled.img`
  border: 3px dashed yellow;
  display: flex;
  width: 6em;
  height: 7em;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  margin-right: 1.5em;
`;

export default LikeDeleteBtn;
