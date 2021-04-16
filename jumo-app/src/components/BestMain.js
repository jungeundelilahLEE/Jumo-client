/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import ribbon from '../images/ribbon.png';

const BestMain = ({ item, index }) => {
  //   const [rank, setRank] = useState(1);
  //   setRank(index + 1);
  const rank = index + 1;

  return (
    <StyleBoder>
      <StyleMainImg itemImg={item.image}>
        <StyleMark>
          <StyleRank>{rank}</StyleRank>
          <StyleRibbon>
            <StyleLogo />
          </StyleRibbon>
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
      </StyleMainImg>
    </StyleBoder>
  );
};

const StyleBoder = styled.div`
  border: 2px white solid;
  padding: 5px;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    border: none;
  }

  @media ${props => props.theme.desktop} {
    /* border: none; */
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

const StyleLogo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 25px;
  top: 10px;
  z-index: 4;
`;

const StyleRibbon = styled.div`
  background-image: url(${ribbon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 105px;
  height: 100px;
  position: relative;
  z-index: 3;
`;

const StyleInfoTop = styled.div`
  font-size: 1.4rem;
  text-align: center;
`;

const StyleInfoVol = styled.div`
  font-size: 1.2rem;
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

const StyleMainImg = styled.div`
  background-image: ${props => `url(${props.itemImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 40vh;
  position: relative;
  z-index: 1;

  &:hover ${StyleItemInfo} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  &:hover ${StyleRibbon} {
    display: none;
  }

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 150px;
    height: 30vh;
  }

  @media ${props => props.theme.desktop} {
    width: 200px;
    height: 40vh;
    margin: 0 4vmin 0 0;
  }
`;

export default BestMain;
