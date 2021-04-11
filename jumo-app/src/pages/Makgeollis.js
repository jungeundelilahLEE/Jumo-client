import React from 'react';
import styled from 'styled-components';
import makgeolli from '../images/mak-sample-2.png';

const Makgeollis = () => {
  return (
    <StyleMakgeollis>
      <StyleResultText>
        총<StyleResultNumber>7</StyleResultNumber>
        개의 막걸리가 검색되었습니다.
      </StyleResultText>
      <StyleListBox>
        <div className="StyleCard">
          <StyleItem>
            <StyleItemInfo>
              <StyleInfoTop>
                <div className="StyleInfoName">
                  느린마을 막걸리입니다아아아아
                </div>
                <StyleInfoVol>4.5 % vol</StyleInfoVol>
              </StyleInfoTop>
              <StyleInfoBox>
                <div className="StyleViews">Views: 1002</div>
                <div className="StyleLikes">Likes: 500</div>
                <div className="StyleReviews">Reviews: 7809</div>
              </StyleInfoBox>
            </StyleItemInfo>
          </StyleItem>
        </div>

        <StyleItem />
        <StyleItem />
        <StyleItem />
        <StyleItem />
        <StyleItem />
        <StyleItem />
      </StyleListBox>
    </StyleMakgeollis>
  );
};

const StyleMakgeollis = styled.div`
  padding: 8vmin 0;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    padding: 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleResultText = styled.div`
  padding: 6vmin 0;
  font-size: 1.3rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    padding: 0 0 6vmin 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleResultNumber = styled.div`
  font-size: 1.8rem;
  color: red;
  padding: 0 0 0 1.3vmin;
`;

const StyleListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 80vw;
    /* width: 800px; */
    margin: 0 auto;
    justify-content: start;
  }

  @media screen and (min-width: 800px) {
    width: 800px;
  }

  @media ${props => props.theme.desktop} {
    width: 870px;
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

const StyleItem = styled.div`
  background-image: url(${makgeolli});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 170px;
  height: 35vh;
  margin: 3vmin 1vmin;

  &:hover ${StyleItemInfo} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: 2vmin 2vmin;
  }

  @media screen and (min-width: 1100px) {
    margin: 2vmin 1vmin;
  }

  @media ${props => props.theme.desktop} {
    margin: 3vmin 20px;
    width: 130px;
    height: 30vh;
  }
`;

export default Makgeollis;
