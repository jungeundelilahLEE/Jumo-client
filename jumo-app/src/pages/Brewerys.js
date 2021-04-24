import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import server from '../apis/server';
// import res from '../atoms/dummyBrewery';

const Brewerys = ({ channelHandler, navHeader, setNavHeader }) => {
  const [brewerys, setBrewerys] = useState([]);
  const [mapImage, setMapImage] = useState('');
  const [searchText, setSearchText] = useState('');

  const getBreweryInfo = async () => {
    // setIsLoading(true);
    server
      .get(`/brewery/info`)
      .then(res => setBrewerys([...res.data.data]))
      .then(() => {
        // setIsLoading(false);
      });
  };

  const getSearchBrewerys = async () => {
    // setIsLoading(true);
    server
      .get(`/brewery/search?query=${searchText}`)
      .then(res => setBrewerys([...res.data.data]))
      .then(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!navHeader) {
      setNavHeader(true);
    }
    channelHandler('Brewery');
    getBreweryInfo();
  }, []);

  useEffect(() => {
    getSearchBrewerys();
  }, [searchText]);

  const handleMap = searchMap => {
    setMapImage(searchMap);
  };
  const searchHandler = e => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <StyleBrewerys>
        <StyleSearchBox>
          <Search>
            <StyleInput
              placeholder="  위치를 입력해주세요"
              onChange={searchHandler}
            />
            <FiSearch size="30px" color="#293848" />
          </Search>
          <Result>
            {searchText} 지역에서 {brewerys.length}개의 양조장이검색되었습니다.
          </Result>
        </StyleSearchBox>

        <StyleSpace>
          <StyleResult>
            {brewerys.map(el => (
              <StyleInfo key={el.id}>
                <StyleTitle onClick={() => handleMap(el.image)}>
                  {el.name}
                </StyleTitle>
                <Link to={`/makgeolli/list/${el.kinds}`}>
                  <RepresentM>대표 막걸리 : {el.kinds}</RepresentM>
                </Link>
                <div>{el.address}</div>
              </StyleInfo>
            ))}
          </StyleResult>

          {mapImage === '' ? '' : <StyleMap src={mapImage} alt="양조장 지도" />}
        </StyleSpace>
      </StyleBrewerys>
    </>
  );
};
const RepresentM = styled.div`
  transition-duration: 0.5s;
  &:hover {
    transform: translateX(10px);
  }
`;
const StyleBrewerys = styled.div`
  font-family: 'Nanum Gothic';
  color: #293848;
  width: 100%;
  height: 100%;
  background-color: #e7d1bf;
  padding: 5vmin;
  padding-bottom: 10vmin;
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
  flex-direction: column-reverse;
  @media ${props => props.theme.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media ${props => props.theme.desktop} {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Result = styled.div`
  padding-top: 10px;
`;

const StyleMap = styled.img`
  width: 100%;
  height: 60vh;
  margin-top: 8vh;
  @media ${props => props.theme.tablet} {
    width: 45vw;
    height: 60vh;
    position: fixed;
    right: 3%;
    top: 15%;
    transition-duration: 0.5s;
  }
  @media ${props => props.theme.desktop} {
    width: 45vw;
    height: 65vh;
    position: fixed;
    right: 10%;
    top: 15%;
    transition-duration: 0.5s;
    &:hover {
      transform: translateX(5vw);
      width: 50vw;
      height: 70vh;
    }
  }
`;

const StyleSearchBox = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
    position: relative;
    top: 50px;
    left: -24%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${props => props.theme.desktop} {
    position: relative;
    top: 50px;
    left: -28%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  position: relative;
  top: 50px;
  padding-bottom: 12vh;
  @media ${props => props.theme.tablet} {
    width: 20%;
    position: relative;
    top: 50px;
    left: -38%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${props => props.theme.desktop} {
    width: 20%;
    position: relative;
    top: 50px;
    left: -33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyleInfo = styled.div`
  line-height: 25px;
  margin: 2vh;
  padding-bottom: 3px;
  width: 100%;
  border-bottom: 1px solid black;
  transition-duration: 0.5s;
  &:hover {
    color: #e7d1bf;
    width: 95%;
    padding: 10px;
    background-color: #293848;
    border-radius: 10px;
  }
`;

const StyleTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1vh;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    font-size: 1.7rem;
  }
`;

export default Brewerys;
