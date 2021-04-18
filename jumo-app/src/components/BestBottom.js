/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BestBottom = ({ item, idx }) => {
  return (
    <StyleMobileImg item={item} index={idx} key={item.id}>
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
    </StyleMobileImg>
  );
};

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

const StyleMobileImg = styled.div`
  display: block;
  background-image: ${props => `url(${props.item.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 20vh;
  margin: 2vmin;

  &:hover ${StyleItemInfo} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: none;
  }

  @media ${props => props.theme.desktop} {
    width: 150px;
    height: 30vh;
    margin: 0 4vmin 0 0;
  }
`;

export default BestBottom;
