/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BestSide = ({ item, index }) => {
  //   const [rank, setRank] = useState(1);
  //   setRank(index + 1);
  const rank = index + 1;

  return (
    <StyleLightImg itemImg={item.image}>
      <StyleMark>
        <StyleRank>{rank}</StyleRank>
      </StyleMark>
    </StyleLightImg>
  );
};

const StyleLightImg = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: block;
    background-image: ${props => `url(${props.itemImg})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 20vh;
    margin: 2vmin;
    position: relative;
    z-index: 1;
  }

  @media ${props => props.theme.desktop} {
    width: 150px;
    height: 30vh;
    margin: 0 4vmin 0 0;
  }
`;

const StyleMark = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyleRank = styled.div`
  width: 35px;
  height: 28px;
  padding: 3px;
  background-color: lightskyblue;
  color: white;
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  position: absolute;
  left: -10px;
  top: -10px;
  z-index: 2;
`;

export default BestSide;
