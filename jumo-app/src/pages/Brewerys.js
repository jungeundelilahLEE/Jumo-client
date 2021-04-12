import React from 'react';
import styled from 'styled-components';

const Brewerys = () => {
  return (
    <StyleBrewerys>
      <StyleMap />
      <StyleSearchBox>
        <StyleInput />
        <div>소공동 지역에서 12개의 양조장이 검색되었습니다.</div>
      </StyleSearchBox>
      <StyleResult>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
        <StyleInfo>
          <StyleTitle>이윌리 양조장</StyleTitle>
          <div>술밑양조장 서울특별시 종로구 이화동 동숭3길 33 1층</div>
        </StyleInfo>
      </StyleResult>
    </StyleBrewerys>
  );
};

const StyleBrewerys = styled.div`
  width: 100vw;
  padding: 5vmin;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleMap = styled.div`
  width: 80vw;
  height: 50vh;
  background-color: greenyellow;

  @media ${props => props.theme.tablet} {
    max-width: 50vw;
    max-width: 60vh;
  }
`;

const StyleSearchBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${props => props.theme.tablet} {
    width: 80%;
  }
`;

const StyleInput = styled.input`
  margin-top: 15vmin;
  margin-bottom: 10vmin;
  height: 35px;
  width: 250px;
`;

const StyleResult = styled.div`
  margin-top: 10vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${props => props.theme.tablet} {
    width: 80%;
  }
`;

const StyleInfo = styled.div`
  margin: 2vh 0;
`;

const StyleTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1vh;
`;

export default Brewerys;
