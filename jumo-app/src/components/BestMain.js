/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

import logo from '../images/logo.png';
import ribbon from '../images/ribbon.png';
import backgroundImg1 from '../images/background1.jpg';

const BestMain = ({ item, index }) => {
  //   const [rank, setRank] = useState(1);
  //   setRank(index + 1);
  const rank = index + 1;

  return (
    <StyleBoder>
      <StyledHiddenBox>
        <StyledFront>
          <StyledFrontDiv>
            <StyledFrontImg itemImg={item.image} alt="image">
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
            </StyledFrontImg>
          </StyledFrontDiv>
        </StyledFront>

        <StyledBack>
          {/* <StyledBackImg backImg={backgroundImg} /> */}
          <StyledBackImg backImg={backgroundImg1} alt="backimage" />
        </StyledBack>
      </StyledHiddenBox>
    </StyleBoder>
  );
};

const StyleBoder = styled.div`
  border: 2px purple solid;
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
const StyledHiddenBox = styled.div`
  /* border: 3px dashed black; */
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
const StyledFront = styled.div`
  /* border: 5px dashed blue; */
  display: flex;
  position: absolute;
  width: 80vw;
  justify-content: center;
  /* width: 220px; */
  /* height: 230px; */
  z-index: 200;
`;
const StyledFrontDiv = styled.div`
  border: 3px solid #5c5140;
  border-radius: 6px;
  padding: 5.1px 4.8px;
  display: flex;
  position: relative;
  width: 320px;
  height: 350px;
  top: -1.4em;
  left: 0.9em;
  z-index: 200;
`;

const StyledBack = styled.div`
  /* border: 5px dashed green; */
  display: flex;
  position: absolute;
  background: black;
`;
const StyledBackImg = styled.div`
  background-image: ${props => `url(${props.backImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 50vh;
  z-index: 0;
  mix-blend-mode: luminosity;
  filter: blur(1px);

  /* mix-blend-mode: luminosity; */
  /* filter: blur(1px); */
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
  width: 4.2em;
  height: 3em;
  /* border: 2px dashed yellow; */
`;

const StyleRank = styled.div`
  width: 30px;
  height: 30px;
  padding: 1px 1.5px 2px;
  background-color: #5c5140;
  color: white;
  font-size: 27px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  left: -10px;
  top: -10px;
  z-index: 2;
`;

const StyleLogo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
  position: absolute;
  left: 7.1px;
  top: 10px;
  z-index: 4;
`;

const StyleRibbon = styled.div`
  background-image: url(${ribbon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  top: 4px;
  left: 5 px;
  position: relative;
  z-index: 4;
`;

const StyleInfoTop = styled.div`
  font-size: 1.4rem;
  text-align: center;
  border: 2px dashed orange;
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
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 40vh;
  position: relative;
  z-index: 100;
  margin: 0 auto;
  /* filter: brightness(-0.15); */

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
//! 여기하는 중
const StyleMainImgback = styled.div`
  /* border: 10px solid red; */
  background-image: ${props => `url(${props.itemImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 400px;
  height: 500px;
  position: relative;
  margin: 0;
  z-index: 0;
  filter: blur(10px);
`;

//! 이거 제일 끝으로 가야 쓸 수 있데
const StyledFrontImg = styled.div`
  display: flex;
  /* border: 6px solid white; */
  border-radius: 2.2em;
  background-image: ${props => `url(${props.itemImg})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* width: 36vw;
  height: 36vh; */
  z-index: 1;
  box-shadow: 5px 5px 8px 5px rgba(255, 255, 255, 0.4),
    -5px -5px 8px 5px rgba(255, 255, 255, 0.4);
  &:hover ${StyleItemInfo} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  &:hover ${StyleRibbon} {
    /* display: none; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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

// return (
//   <StyleBoder>
//     <StyleMainImg itemImg={item.image}>
//       <StyleMark>
//         <StyleRank>{rank}</StyleRank>
//         <StyleRibbon>
//           <StyleLogo />
//         </StyleRibbon>
//       </StyleMark>
//       <StyleItemInfo>
//         <StyleInfoTop>
//           <div className="StyleInfoName">{item.name}</div>
//           <StyleInfoVol>{item.content} % vol</StyleInfoVol>
//         </StyleInfoTop>
//         <StyleInfoBox>
//           <div className="StyleViews">Views: {item.views}</div>
//           <div className="StyleLikes">Likes: {item.likes}</div>
//         </StyleInfoBox>
//       </StyleItemInfo>
//     </StyleMainImg>
//   </StyleBoder>
// );
// };

// const StyleBoder = styled.div`
// border: 2px white solid;
// padding: 5px;

// @media ${props => props.theme.mobile} {
// }

// @media ${props => props.theme.tablet} {
//   border: none;
// }

// @media ${props => props.theme.desktop} {
//   /* border: none; */
// }
// `;

// const StyleItemInfo = styled.div`
// display: none;
// width: 100%;
// height: 100%;
// background-color: white;

// @media ${props => props.theme.mobile} {
// }

// @media ${props => props.theme.tablet} {
// }

// @media ${props => props.theme.desktop} {
// }
// `;

// const StyleMark = styled.div`
// display: flex;
// position: absolute;
// top: 0;
// left: 0;
// `;

// const StyleRank = styled.div`
// width: 35px;
// height: 28px;
// padding: 3px;
// background-color: lightskyblue;
// color: white;
// font-size: 1.8rem;
// text-align: center;
// font-weight: bold;
// position: absolute;
// left: -10px;
// top: -10px;
// z-index: 2;
// `;

// const StyleLogo = styled.div`
// background-image: url(${logo});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// width: 40px;
// height: 40px;
// position: absolute;
// left: 25px;
// top: 10px;
// z-index: 4;
// `;

// const StyleRibbon = styled.div`
// background-image: url(${ribbon});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// width: 105px;
// height: 100px;
// position: relative;
// z-index: 3;
// `;

// const StyleInfoTop = styled.div`
// font-size: 1.4rem;
// text-align: center;
// `;

// const StyleInfoVol = styled.div`
// font-size: 1.2rem;
// margin-top: 2vmin;
// `;

// const StyleInfoBox = styled.div`
// border: 0.5vmin hotpink solid;
// padding: 2vmin;

// @media ${props => props.theme.mobile} {
// }

// @media ${props => props.theme.tablet} {
// }

// @media ${props => props.theme.desktop} {
//   padding: 1vmin;
// }
// `;

// const StyleMainImg = styled.div`
// background-image: ${props => `url(${props.itemImg})`};
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;
// width: 200px;
// height: 40vh;
// position: relative;
// z-index: 1;

// &:hover ${StyleItemInfo} {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
// }

// &:hover ${StyleRibbon} {
//   display: none;
// }

// @media ${props => props.theme.mobile} {
// }

// @media ${props => props.theme.tablet} {
//   width: 150px;
//   height: 30vh;
// }

// @media ${props => props.theme.desktop} {
//   width: 200px;
//   height: 40vh;
//   margin: 0 4vmin 0 0;
// }
// `;
