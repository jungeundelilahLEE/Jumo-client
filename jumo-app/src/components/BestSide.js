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
      <StyleItemInfo>
        <StyleInfoTop>
          <div className="StyleInfoName">{item.name}</div>
          <StyleInfoVol>{item.content} % vol</StyleInfoVol>
        </StyleInfoTop>
        <StyleInfoBox>
          <div className="StyleViews">Views: {item.views}</div>
          <div className="StyleLikes">Likes: {item.likes}</div>
        </StyleInfoBox>
      </StyleItemInfo>
    </StyleLightImg>
  );
};

const StyleMark = styled.div`
  display: flex;
  position: absolute;
  top: -15px;
  left: 0;
`;

const StyleRank = styled.div`
  width: 35px;
  height: 28px;
  padding: 3px;
  background-color: lightskyblue;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  position: absolute;
  left: -10px;
  top: -10px;
  z-index: 2;
  font-size: 1.5rem;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;
const StyleInfoTop = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const StyleInfoVol = styled.div`
  font-size: 1rem;
  margin-top: 2vmin;
`;

const StyleInfoBox = styled.div`
  border: 0.5vmin hotpink solid;
  padding: 2vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    padding: 1vmin;
  }
`;

const StyleItemInfo = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: white;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleLightImg = styled.div`
  display: none;

  &:hover ${StyleItemInfo} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

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

export default BestSide;
