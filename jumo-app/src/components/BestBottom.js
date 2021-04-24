/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BsEye, BsChatSquareDots, BsHeart } from 'react-icons/bs';

const BestBottom = ({ item, idx }) => {
  return (
    <StyleMobileImg item={item} index={idx} key={item.id}>
      <StyleItemInfo>
        {/* <StyleInfoTop>
          <div className="StyleInfoName">{item.name}</div>
          <StyleInfoVol>{item.content} % vol</StyleInfoVol>
        </StyleInfoTop>
        <StyleInfoBox>
          <div className="StyleViews">Views: {item.views}</div>
          <div className="StyleLikes">Likes: {item.likes}</div>
        </StyleInfoBox> */}
        <StyleInfoTop>
          <StyleInfoTitle>{item.name}</StyleInfoTitle>
          <StyleInfoVol>{item.content} % vol</StyleInfoVol>
        </StyleInfoTop>
        {/* <StyleInfoBox>
          <IconComment />
          <Comment>{item.views}</Comment>
          <IconLike />
          <Like>{item.likes}</Like>
        </StyleInfoBox> */}
      </StyleItemInfo>
    </StyleMobileImg>
  );
};

// const StyleInfoTop = styled.div`
//   font-size: 1rem;
//   text-align: center;
//   justify-content: center;
// `;

// const StyleInfoVol = styled.div`
//   font-size: 1rem;
//   margin-top: 2vmin;
// `;

// const StyleInfoBox = styled.div`
//   border: 0.5vmin hotpink solid;
//   padding: 2vmin;
//   justify-content: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     padding: 1vmin;
//   }
// `;

const StyleItemInfo = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: white;

  @media ${props => props.theme.mobile} {
    /* border: 10px solid red; */
  }

  @media ${props => props.theme.tablet} {
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
  /* border: 10px solid red; */
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
  display: flex;
  flex-direction: row;
  border-top: 3px solid #d2d4d3;
  padding: 1em 1em;
  margin: 3.5em 1.5em 1em;
  width: 70%;
  justify-content: space-evenly;
  align-items: baseline;
  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction: row;
    border-top: 3px solid #d2d4d3;
    padding: 1em 1em;
    margin: 3.5em 1.5em 1em;
    width: 70%;
    justify-content: space-evenly;
    align-items: baseline;
    /* display: none;
    align-items: baseline; */
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    border-top: 3px solid #d2d4d3;
    padding: 1em 1em;
    margin: 3.5em 1.5em 1em;
    width: 70%;
    justify-content: space-evenly;
    align-items: baseline;
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
    border: 0;
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
  width: 15px;
  height: auto;
  color: deeppink;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    width: 10px;
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

const StyleMobileImg = styled.div`
  display: block;
  background-image: ${props => `url(${props.item.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 90px;
  height: 18vh;
  margin: 2vmin;
  border: 3px solid white;

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

// const StyleInfoTop = styled.div`
//   font-size: 1rem;
//   text-align: center;
// `;

// const StyleInfoVol = styled.div`
//   font-size: 1rem;
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

// const StyleMobileImg = styled.div`
//   display: block;
//   background-image: ${props => `url(${props.item.image})`};
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100px;
//   height: 20vh;
//   margin: 2vmin;

//   &:hover ${StyleItemInfo} {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
//   }

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     display: none;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 150px;
//     height: 30vh;
//     margin: 0 4vmin 0 0;
//   }
// `;

// export default BestBottom;
