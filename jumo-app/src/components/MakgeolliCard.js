/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const MakgeolliCard = ({ item }) => {
  return (
    <StyleCard>
      <StyleItem itemImage={item.image}>
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
      </StyleItem>

      <StyleMobileInfoBox>
        <div>{item.name}</div>
        <div>
          <div className="StyleMobileViews">Views: {item.views}</div>
          <div className="StyleMobileLikes">Likes: {item.likes}</div>
        </div>
      </StyleMobileInfoBox>
    </StyleCard>
  );
};

const StyleCard = styled.div`
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0;
  width: 170px;
  border-radius: 1vmin;
  margin-bottom: 4vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: 2vmin 2vmin;
  }

  @media screen and (min-width: 1100px) {
    margin: 2vmin 1vmin;
  }

  @media ${props => props.theme.desktop} {
    background-color: transparent !important;
    margin: 3vmin 20px;
    width: 130px;
    height: 30vh;
  }
`;

const StyleMobileInfoBox = styled.div`
  padding: 1.5vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: none;
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

const StyleItem = styled.div`
  background-image: ${props => `url(${props.itemImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 35vh;
  margin: 3vmin 0;
  @media ${props => props.theme.mobile} {
  }
  @media ${props => props.theme.tablet} {
    margin: 2vmin 0;
  }
  @media screen and (min-width: 1100px) {
    &:hover ${StyleItemInfo} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  @media ${props => props.theme.desktop} {
    margin: 3vmin 0;
    width: 130px;
    height: 30vh;
  }
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

export default MakgeolliCard;
