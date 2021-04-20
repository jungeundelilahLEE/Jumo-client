import React from 'react';
import styled from 'styled-components';
import res from '../atoms/dummyMaks';
import MakImg from '../images/intro-sec1.png';
import TrashBinImg from '../images/trash-bin.png';
import MypageMyFavBox from './MypageMyFavBox';

const MypageMyFavs = () => {
  const { data } = res;

  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    // const card = document.getElementById(cardId);
    const card = <MyFavsBox cardId={cardId} />;
    card.style.display = 'block';
    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div>
      {data === null ? (
        <div>❤️LIKE❤️ 막걸리가 없습니다.</div>
      ) : (
        data.map(el => (
          <MyFavsBox draggable="true" onDrop={drop} onDragOver={dragOver}>
            <MypageMyFavBox image={el.image} name={el.name} />
          </MyFavsBox>
        ))
      )}
    </div>
  );
};

const MyFavs = styled.div`
  display: flex;
  background-color: #c29b86;
  width: 100vw;
  height: 100vh; // 신경 안써도 됨
  z-index: 2;
  padding-bottom: 5em;
`;
const MyFavsBox = styled.div`
  /* border: 3px dashed deeppink; */
  display: inline-block;
  flex-direction: column;
  margin: 2em;
  /* flex-wrap: wrap; */
  /* flex-direction : column; */
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
  box-shadow: 2px 1px 3px white;
  flex-wrap: wrap;
  flex-shrink: 1;
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
export default MypageMyFavs;
