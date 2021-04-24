/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BsEye, BsChatSquareDots, BsHeart } from 'react-icons/bs';

const MakgeolliCard = ({ item }) => {
  return (
    <Sec>
      <StyleCard>
        <StyleItem itemImage={item.image}>
          <StyleItemInfo>
            <StyleInfoTop>
              {/* <div className="StyleInfoName">{item.name}</div> */}
              <StyleInfoTitle>{item.name}</StyleInfoTitle>
              <StyleInfoVol>{item.content} % vol</StyleInfoVol>
            </StyleInfoTop>
            <StyleInfoBox>
              {/* <div className="StyleViews">Views: {item.views}</div>
            <div className="StyleLikes">Likes: {item.likes}</div> */}
              <IconComment />
              <Comment>{item.views}</Comment>
              <IconLike />
              <Like>{item.likes}</Like>
            </StyleInfoBox>
          </StyleItemInfo>
        </StyleItem>

        <StyleMobileInfoBox>
          {/* <div>{item.name}</div>
        <div>
          <div className="StyleMobileViews">Views: {item.views}</div>
          <div className="StyleMobileLikes">Likes: {item.likes}</div>
        </div> */}
          <MobileTitle>{item.name}</MobileTitle>
          <MobileBox>
            <IconComment />
            <Comment>{item.views}</Comment>
            <IconLike />
            <Like>{item.likes}</Like>
          </MobileBox>
        </StyleMobileInfoBox>
      </StyleCard>
      <Title>{item.name}</Title>
    </Sec>
  );
};
const Sec = styled.div`
  display: flex;
  /* border: 3px solid red; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.div`
  font-family: 'Nanum Gothic';
  font-size: 1.4em;
  color: black;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  } ;
`;
const StyleCard = styled.div`
  /* border: 10px solid red; */
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 5px 3px rgba(214, 214, 214, 0.5),
    3px 3px 3px 3px rgba(214, 214, 214, 0.5);
  padding: 0;
  border-radius: 1vmin;
  margin-bottom: 6vmin;
  width: 17em;
  height: 22em;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  @media ${props => props.theme.tablet} {
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 4vmin;
    margin-left: 2vmin;
    margin-right: 2vmin;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 5px 3px rgba(214, 214, 214, 0.5),
      3px 3px 3px 3px rgba(214, 214, 214, 0.5);
    padding: 0;
    border-radius: 1vmin;
    /* margin-bottom: 6vmin; */
    width: 19em;
    height: 25em;
    justify-content: center;
    align-items: center;
  }
  @media ${props => props.theme.desktop} {
    //! not yet
    display: flex;
    flex-direction: row;
    /* border: 5px solid blue; */
    /* background-color: blue; */
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0;
    border-radius: 1vmin;
    margin-bottom: 2vmin;
    width: 15em;
    height: 20em;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* background-color: transparent !important;
    margin: 3vmin 20px;
    width: 130px;
    height: 30vh; */
  }
`;

// TODO 모바일 n 태블릿

const StyleMobileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3vmin;
  /* border: 1px dashed grey; */
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
    display: none;
  }
`;
const MobileTitle = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: bolder;
  color: #293848;
  margin-bottom: 0.2em;
`;
const MobileBox = styled.div`
  display: flex;
  margin: 1em 0 1.5em 0;
`;
const MobileViews = styled.div`
  display: flex;
  font-size: 1.1em;
`;
const MobileLikes = styled.div`
  display: flex;
  font-size: 1.1em;
`;

// TODO 데스크탑
const StyleItemInfo = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: white;
  @media ${props => props.theme.tablet} {
    display: none;
  }
  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

//! 와.. 이거를 contain으로 바꿀수도 없고... 어떻게 해야되지...okkokokokok
const StyleItem = styled.div`
  background-image: ${props => `url(${props.itemImage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 3vmin 0;
  @media ${props => props.theme.mobile} {
  }
  @media ${props => props.theme.tablet} {
    /* margin: 2vmin 0; */
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
  }
`;

const StyleInfoTop = styled.div`
  /* font-size: 1.4rem; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  width: 10vw;
  text-align: center;
  justify-content: center;
`;
const StyleInfoTitle = styled.div`
  font-size: 1.6em;
  margin-top: 2em;
  margin-bottom: 1em;
  font-weight: bolder;
  color: #293848;
`;
const StyleInfoVol = styled.div`
  font-size: 1.2rem;
  margin-top: 2vmin;
  color: #293848;
`;

// TODO - Icons
const StyleInfoBox = styled.div`
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    border-top: 3px solid #d2d4d3;
    padding: 1em 1em;
    margin: 3.5em 1.5em 1em;
    width: 70%;
    justify-content: space-evenly;
    align-items: baseline;
  }
  @media ${props => props.theme.mobile} {
    /* display: none;
    align-items: baseline; */
  }
  @media ${props => props.theme.tablet} {
    /* display: none;
    align-items: baseline; */
  }
`;
const IconComment = styled(BsChatSquareDots)`
  width: 25px;
  height: auto;
  color: skyblue;
  border: 1em;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    width: 20px;
    height: auto;
    color: skyblue;
    border: 1em;
    margin-right: 0.5em;
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
    color: skyblue;
    border: 1em;
    margin-right: 0.5em;
    padding: 0;
  }
`;
const IconLike = styled(BsHeart)`
  width: 25px;
  height: auto;
  color: deeppink;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    width: 20px;
    height: auto;
    color: deeppink;
    margin-right: 0.5em;
    margin-left: 1em;
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
    color: deeppink;
    margin-right: 0.5em;
    margin-left: 1em;
    padding: 0;
  }
`;
const Comment = styled.div`
  color: black;
  font-size: 1.4em;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    color: black;
    font-size: 1.2em;
    margin: 0;
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    color: black;
    font-size: 1.3em;
    margin: 0;
    padding: 0;
  }
`;
const Like = styled.div`
  color: black;
  font-size: 1.4em;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    color: black;
    font-size: 1.2em;
    margin: 0;
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    color: black;
    font-size: 1.3em;
    margin: 0;
    padding: 0;
  }
`;

export default MakgeolliCard;

// const StyleCard = styled.div`
//   background-color: #ffffff;
//   background-color: rgba(255, 255, 255, 0.5);
//   padding: 0;
//   width: 170px;
//   border-radius: 1vmin;
//   margin-bottom: 4vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     margin: 2vmin 2vmin;
//   }

//   @media screen and (min-width: 1100px) {
//     margin: 2vmin 1vmin;
//   }

//   @media ${props => props.theme.desktop} {
//     background-color: transparent !important;
//     margin: 3vmin 20px;
//     width: 130px;
//     height: 30vh;
//   }
// `;

// const StyleMobileInfoBox = styled.div`
//   padding: 1.5vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     display: none;
//   }
// `;

// const StyleItemInfo = styled.div`
//   display: none;
//   width: 100%;
//   height: 100%;
//   background-color: white;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleItem = styled.div`
//   background-image: ${props => `url(${props.itemImage})`};
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100%;
//   height: 35vh;
//   margin: 3vmin 0;
//   @media ${props => props.theme.mobile} {
//   }
//   @media ${props => props.theme.tablet} {
//     margin: 2vmin 0;
//   }
//   @media screen and (min-width: 1100px) {
//     &:hover ${StyleItemInfo} {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: space-evenly;
//     }
//   }
//   @media ${props => props.theme.desktop} {
//     margin: 3vmin 0;
//     width: 130px;
//     height: 30vh;
//   }
// `;

// const StyleInfoTop = styled.div`
//   font-size: 1.4rem;
//   text-align: center;
// `;

// const StyleInfoVol = styled.div`
//   font-size: 1.2rem;
//   margin-top: 2vmin;
// `;

// const StyleInfoBox = styled.div`
//   border: 0.5vmin hotpink solid;
//   padding: 2vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     padding: 1vmin;
//   }
// `;
