/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BsEye, BsChatSquareDots, BsHeart } from 'react-icons/bs';

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
          <StyleInfoTitle>{item.name}</StyleInfoTitle>
          <StyleInfoVol>{item.content} % vol</StyleInfoVol>
        </StyleInfoTop>
        <StyleInfoBox>
          <Comment>
            <IconComment />
            {item.views}
          </Comment>
          <Like>
            <IconLike />
            {item.likes}
          </Like>
          {/* <div className="StyleViews">Views: {item.views}</div>
          <div className="StyleLikes">Likes: {item.likes}</div> */}
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
  font-family: 'Sansation';
  width: 35px;
  height: 28px;
  padding: 3px;
  background: #e0aa3e;
  /* background-color: #edc967; */
  color: white;
  /* color: black; */
  /* color: #edc967; */
  /* border: 2px solid #edc967; */
  /* border-radius: 10px; */
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  position: absolute;
  left: -16px;
  top: -15px;
  z-index: 2;
  font-size: 1.5rem;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
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
  font-size: 1.4em;
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
    padding-top: 1em;
    /* padding: 1em 1em;
    margin: 3.5em 1.5em 1em; */
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
// const IconComment = styled(BsChatSquareDots)`
//   width: 25px;
//   height: auto;
//   color: skyblue;
//   border: 1em;
//   margin: 0;
//   padding: 0;
//   @media ${props => props.theme.mobile} {
//     width: 20px;
//     height: auto;
//     color: skyblue;
//     border: 1em;
//     margin-right: 0.5em;
//     padding: 0;
//   }
//   @media ${props => props.theme.tablet} {
//     width: 20px;
//     height: auto;
//     color: skyblue;
//     border: 1em;
//     margin-right: 0.5em;
//     padding: 0;
//   }
// `;
// const IconLike = styled(BsHeart)`
//   width: 50px;
//   height: auto;
//   color: deeppink;
//   margin: 0;
//   padding: 0;
//   @media ${props => props.theme.mobile} {
//     width: 20px;
//     height: auto;
//     color: deeppink;
//     margin-right: 0.5em;
//     margin-left: 1em;
//     padding: 0;
//   }
//   @media ${props => props.theme.tablet} {
//     width: 20px;
//     height: auto;
//     color: deeppink;
//     margin-right: 0.5em;
//     margin-left: 1em;
//     padding: 0;
//   }
// `;
// const Comment = styled.div`
//   color: black;
//   font-size: 1.4em;
//   margin: 0;
//   padding: 0;
//   @media ${props => props.theme.mobile} {
//     color: black;
//     font-size: 1.2em;
//     margin: 0;
//     padding: 0;
//   }
//   @media ${props => props.theme.tablet} {
//     color: black;
//     font-size: 1.3em;
//     margin: 0;
//     padding: 0;
//   }
// `;
// const Like = styled.div`
//   color: black;
//   font-size: 1.4em;
//   margin: 0;
//   padding: 0;
//   @media ${props => props.theme.mobile} {
//     color: black;
//     font-size: 1.2em;
//     margin: 0;
//     padding: 0;
//   }
//   @media ${props => props.theme.tablet} {
//     color: black;
//     font-size: 1.3em;
//     margin: 0;
//     padding: 0;
//   }
// `;

//! react icon
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
    /* margin-right: 0.5em; */
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
    color: skyblue;
    border: 1em;
    /* margin-right: 0.5em; */
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
    /* margin-right: 0.5em; */
    /* margin-left: 1em; */
    padding: 0;
  }
  @media ${props => props.theme.tablet} {
    width: 20px;
    height: auto;
    color: deeppink;
    /* margin-right: 0.5em; */
    /* margin-left: 1em; */
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
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(
    to right,
    #e0aa3e,
    #edc967,
    #f7ef8a,
    #edc967,
    #e0aa3e
  );
  display: none;
  /* flex-wrap: wrap; */
  border-image-slice: 1;
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
    /* border */
  }
  @media ${props => props.theme.desktop} {
    width: 140px;
    height: 29vh;
    /* margin: 0 4vmin 0 0; */
  }
`;

export default BestSide;
