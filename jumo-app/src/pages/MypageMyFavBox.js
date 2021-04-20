import React from 'react';
import styled from 'styled-components';
import TrashBinImg from '../images/trash-bin.png';

// eslint-disable-next-line react/prop-types
const MypageMyFavBox = ({ image, name }) => {
  const trashBinImg = TrashBinImg;

  const dragStart = e => {
    // const { target } = e;
    // e.dataTransfer.setData('card_id', target.id);
    e.dataTransfer.setData('text/plan', e.target.id);

    setTimeout(() => {
      e.target.style.display = 'none';
    }, 200);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  // return (
  //   <>
  //     <div>
  //       <MyFavImg src={image} alt="makImg" />
  //       {name}
  //     </div>
  //   </>
  // );

  return (
    <>
      <Div onDragStart={dragStart} onDragOver={() => dragOver} draggable="true">
        <MyFavImg src={image} alt="makImg" />
        {/* <MyFavTitle>{name}</MyFavTitle> */}
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px solid orange;
  flex-wrap: wrap;
  cursor: pointer;
  $containment: 'parent';
`;

const MyFavImg = styled.img`
  border: 3px solid white;
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 8em;
  height: 10em;
  padding: 0.3em;
  margin: 1em;
  padding: 10px;
  box-shadow: 2px 1px 3px black;
  flex-wrap: nowrap;
  flex-shrink: 1;
`;
const MyFavTitle = styled.div`
  flex-wrap: nowrap;
  color: red;
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
export default MypageMyFavBox;
