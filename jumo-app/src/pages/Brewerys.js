import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <div>
          <StyleInput />
          <button type="button">search</button>
        </div>
        <div>소공동 지역에서 {list.length}개의 양조장이 검색되었습니다.</div>
      </StyleSearchBox>

      <StyleSpace>
        <StyleResult>
          {list.map(el => (
            <StyleInfo key={el.id}>
              <StyleTitle onClick={() => handleMap(el.image)}>
                {el.name}
              </StyleTitle>
              <Link to={`/makgeolli/list/${el.id}`}>
                <div>대표 막걸리 : {el.kinds}</div>
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

const StyleBrewerys = styled.div`
  width: 100vw;
  padding: 5vmin;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleSpace = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
`;

const StyleMap = styled.img`
  width: 80vw;
  height: 50vh;
  background-color: greenyellow;
  position: fixed;
  right: 20px;
  bottom: 20px;

  @media ${props => props.theme.tablet} {
    max-width: 50vw;
    max-width: 60vh;
  }
`;

const StyleSearchBox = styled.div`
  width: 90%;
  margin-bottom: 10vh;
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
  cursor: pointer;
`;

export default Brewerys;
