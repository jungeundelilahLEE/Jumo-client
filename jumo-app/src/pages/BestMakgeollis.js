import React from 'react';
import styled from 'styled-components';
import Makgeollis from './Makgeollis';

import makgeolli from '../images/mak-sample-1.png';
import logo from '../images/logo.png';
import ribbon from '../images/ribbon.png';

const BestMakgeollis = () => {
  return (
    <StyleListTop>
      <StyleBestBox>
        <StyleTitle>많이 찾는 막걸리(TOP 10)</StyleTitle>
        <StyleBestMain>
          <StyleLeftArrow>{'<'}</StyleLeftArrow>

          <StyleBestList>
            <StyleLightImg>
              <StyleMark>
                <StyleRank>8</StyleRank>
              </StyleMark>
            </StyleLightImg>

            <StyleLightImg>
              <StyleMark>
                <StyleRank>9</StyleRank>
              </StyleMark>
            </StyleLightImg>

            <StyleBoder>
              <StyleMainImg>
                <StyleMark>
                  <StyleRank>10</StyleRank>
                  <StyleRibbon>
                    <StyleLogo />
                  </StyleRibbon>
                </StyleMark>
              </StyleMainImg>
            </StyleBoder>

            <StyleLightImg>
              <StyleMark>
                <StyleRank>1</StyleRank>
              </StyleMark>
            </StyleLightImg>

            <StyleLightImg>
              <StyleMark>
                <StyleRank>2</StyleRank>
              </StyleMark>
            </StyleLightImg>
          </StyleBestList>

          <StyleRightArrow>{'>'}</StyleRightArrow>
        </StyleBestMain>
      </StyleBestBox>

      <StyleMobileList>
        <StyleMobileImg />
        <StyleBoder>
          <StyleMobileImg />
        </StyleBoder>
        <StyleMobileImg />
      </StyleMobileList>

      <Makgeollis />
    </StyleListTop>
  );
};

const StyleListTop = styled.div`
  width: 100vw;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;

const StyleTitle = styled.div`
  font-size: 2rem;
  text-align: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.5rem;
  }
`;

const StyleBestBox = styled.div`
  margin: 0 3vmin;
  padding-top: 8vmin;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleBestMain = styled.div`
  width: 100%;
  height: 45vh;
  background-color: lightslategray;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: space-evenly;
  }

  @media ${props => props.theme.desktop} {
    justify-content: center;
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

const StyleLeftArrow = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin: 0 4vmin 0 0;
  }
`;

const StyleRightArrow = styled.div``;

const StyleBestList = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: flex;
    align-items: center;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleLightImg = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: block;
    background-image: url(${makgeolli});
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

const StyleMainImg = styled.div`
  background-image: url(${makgeolli});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 40vh;
  position: relative;
  z-index: 1;

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

const StyleMobileList = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vmin 0;
`;

const StyleMobileImg = styled.div`
  display: block;
  background-image: url(${makgeolli});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 20vh;
  margin: 2vmin;

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

export default BestMakgeollis;
