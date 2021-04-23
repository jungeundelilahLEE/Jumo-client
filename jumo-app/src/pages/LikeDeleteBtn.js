/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
import { likeDeletes } from '../actions';

const LikeDeleteBtn = () => {
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
          <TrashBin onMouseMove={() => handleDeleteBtn()} />
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
  flex-wrap: wrap;
  width: 50vw;
  align-items: center;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-wrap: wrap;
    width: 10vw;
    /* align-items: center; */
    margin-top: -30%;
  }
`;

const TrashBin = styled(BsTrash)`
  display: flex;
  width: 20em;
  height: 20em;
  height: auto;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  /* border: 10px double rgba(255, 255, 255, 0.6); */
  filter: drop-shadow(5px 5px 5px #d1d1d1);
  /* border-radius: 100%; */
  padding: 10px;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    width: 13em;
    height: 13em;
    height: auto;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    /* border: 10px double rgba(255, 255, 255, 0.6); */
    filter: drop-shadow(5px 5px 5px #d1d1d1);
    /* border-radius: 100%; */
    padding: 10px;
  }

  /* background:  */
`;

export default LikeDeleteBtn;
