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

const MyFavsBox = styled.div`
  /* border: 3px dashed deeppink; */
  display: inline-block;
  flex-direction: column;
  margin: 2em;
  /* flex-wrap: wrap; */
  /* flex-direction : column; */
`;

export default MypageMyFavs;
