import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import res from '../atoms/dummyBrewery';

const Brewerys = ({ channelHandler }) => {
  const [mapImage, setMapImage] = useState('');

  useEffect(() => {
    channelHandler('Brewery');
  }, []);

  //! dummy data => server
  const { data } = res;
  const list = data;

  const handleMap = searchMap => {
    setMapImage(searchMap);
  };

  return (
    <StyleBrewerys>
      <StyleSearchBox>
        <Search>
          <StyleInput placeholder="  위치를 입력해주세요" />
          <FiSearch size="30px" color="#293848" />
        </Search>
        <Result>
          소공동 지역에서 {list.length}개의 양조장이 검색되었습니다.
        </Result>
      </StyleSearchBox>

      <StyleSpace>
        <StyleResult>
          {list.map(el => (
            <StyleInfo key={el.id}>
              <StyleTitle onClick={() => handleMap(el.image)}>
                {el.name}
              </StyleTitle>
              <Link to={`/makgeolli/list/${el.id}`}>
                <RepresentM>대표 막걸리 : {el.kinds}</RepresentM>
              </Link>
              <div>{el.address}</div>
            </StyleInfo>
          ))}
        </StyleResult>

        {mapImage === '' ? '' : <StyleMap src={mapImage} alt="양조장 지도" />}
      </StyleSpace>
    </StyleBrewerys>
  );
};
const RepresentM = styled.div`
  transition-duration: 1s;
  &:hover {
    transform: translateX(10px);
  }
`;
const StyleBrewerys = styled.div`
  font-family: 'Nanum Gothic';
  width: 100%;
  padding: 5vmin;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyleSpace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Result = styled.div`
  padding-top: 10px;
`;

const StyleMap = styled.img`
  width: 50vw;
  height: 70vh;
  background-color: greenyellow;
  position: fixed;
  right: 10%;
  top: 15%;
  transition-duration: 0.5s;
  &:hover {
    transform: translateX(5vw);
    width: 60vw;
    height: 75vh;
  }
`;

const StyleSearchBox = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${props => props.theme.tablet} {
    width: 80%;
  }
`;

const StyleInput = styled.input`
  padding: 0px 13px 0px 13px;
  height: 35px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 10px;
`;

const StyleResult = styled.div`
  width: 20%;
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyleInfo = styled.div`
  line-height: 20px;
  margin: 2vh 0;
  padding-bottom: 4px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const StyleTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1vh;
  cursor: pointer;
  transition-duration: 1s;
  &:hover {
    font-size: 1.7rem;
  }
`;

export default Brewerys;
