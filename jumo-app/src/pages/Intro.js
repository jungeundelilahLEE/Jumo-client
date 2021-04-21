import React from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Nav from './Nav';

import IntroSec1 from '../images/intro-sec1.png';
import Logo from '../images/JumoIcon.PNG';

function Intro() {
  const introSec1 = IntroSec1;
  const logo = Logo;

  return (
    <div>
      <Section>
        <StyledIntro>
          <StyledUl>
            <StyledMainDiv>
              Jumo
              <MainDivCrop>
                <MainDivImg src={Logo} alt="logo" />
              </MainDivCrop>
              <MainItem>
                <MainSubTitle>THIS IS ALL ABOUT Jumo</MainSubTitle>
                {/* <MainSubImg src={introSec1} /> */}
                {/* <MainSubImg src={introSec1} /> */}
                {/* <MainSubImg src={introSec1} /> */}
                <MainDesc>
                  여기 기획의도가 들어가는 게 좋을 듯 아래 막걸리 섹션이 따로
                  있어서 내용도 겹치고...
                  <br />
                  막걸리를 잘 모르시나요? <br />
                  혹은 막걸리를 좋아하신다구요? <br />
                  막걸리를 잘 모르더라도 괜찮아요~
                  <br />
                  Jumo에서 전국 다양한 막걸리 정보를 확인하고 의견을 나눠보세요.
                  <br />
                  이미 막걸리를 사랑하시는 분들께 도움될 만한 위치기반 양조장
                  찾기도 준비되어 있어요! <br />
                  풍미 가득한 생생한 막걸리를 체험해보세요!
                </MainDesc>
              </MainItem>
            </StyledMainDiv>
            <StyledLi1>
              <StyledImg1 src={introSec1} alt="intro1" />
              <StyledContent1>
                <ContentTitle1>About Makgeolli</ContentTitle1>
                <ContentSubTitle1>
                  “막걸리 커뮤니티
                  <br />
                  &<br />
                  위치기반 양조장 찾기”
                </ContentSubTitle1>
                <ContentDesc1>
                  막걸리를 잘 모르시나요? <br />
                  혹은 막걸리를 좋아하신다구요? <br />
                  막걸리를 잘 모르더라도 괜찮아요~
                  <br />
                  Jumo에서 전국 다양한 막걸리 정보를 확인하고 의견을 나눠보세요.
                  <br />
                  이미 막걸리를 사랑하시는 분들께 도움될 만한 위치기반 양조장
                  찾기도 준비되어 있어요! <br />
                  풍미 가득한 생생한 막걸리를 체험해보세요!
                </ContentDesc1>
              </StyledContent1>
            </StyledLi1>

            <StyledLi1>
              <StyledImg1 src={introSec1} alt="intro1" />
              <StyledContent1>
                <ContentTitle1>About Brewery</ContentTitle1>
                <ContentSubTitle1>“양조장 찾기” </ContentSubTitle1>
                <ContentDesc1>
                  막걸리를 잘 모르시나요? <br />
                </ContentDesc1>
              </StyledContent1>
            </StyledLi1>

            <StyledLi1>
              <StyledImg1 src={introSec1} alt="intro1" />
              <StyledContent1>
                <ContentTitle1>About Us</ContentTitle1>
                <ContentSubTitle1>Who we are & What we did</ContentSubTitle1>
                <ContentDesc1>
                  막걸리를 잘 모르시나요? <br />
                </ContentDesc1>
              </StyledContent1>
            </StyledLi1>
          </StyledUl>
          {/* <IntroContent>
              <TitleBox>
                <NumTitle>1</NumTitle>
                <Title> . About us</Title>
              </TitleBox>
              <SubTitle>
                “막걸리 커뮤니티
                <br />
                &<br />
                위치기반 양조장 찾기”
              </SubTitle>
              <Desc>
                막걸리를 잘 모르시나요? 혹은 막걸리를 좋아하신다구요? 막걸리를
                잘 모르더라도 괜찮아요~ Jumo에서 전국 다양한 막걸리 정보를
                확인하고 의견을 나눠보세요. 이미 막걸리를 사랑하시는 분들께
                도움될 만한 위치기반 양조장 찾기도 준비되어 있어요! 풍미 가득한
                생생한 막걸리를 체험해보세요!
              </Desc>
            </IntroContent> */}
          {/* <SlideBtn>Slide to left</SlideBtn> */}
        </StyledIntro>
      </Section>
    </div>
  );
}

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    padding-left: 76px;
    width: 100vw;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: flex-start;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: flex-start;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    width: 90vw;
    /* height: 100vh; */
    justify-content: flex-end;
    border: 4px solid yellow;
  }
`;
const StyledMainDiv = styled.li`
  display: flex;
  flex-direction: column;
  background: #293848;
  width: 100%;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    background: #293848;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    background: black;
    border: 10px solid orange;
    /* z-index: 300; */
    width: 55%;
    padding: 3em;
  }
`;
const MainDivCrop = styled.div`
  //! 로고들어오면 다시 작업해야
  display: flex;
  border: 5px dashed yellow;
  width: 0;
  height: 0;
  z-index: 10;
  @media ${props => props.theme.tablet} {
    display: flex;
    width: 0;
    height: 0;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    display: flex;
    overflow: hidden;
    position: absolute;
    margin-top: 9em;
    width: 30em;
    height: 30em;
    animation-name: move, fadeOut, changeColor;
    animation-duration: 5s;
    animation-iteration-count: 1;
    @keyframes move {
      from {
        left: 0;
      }
      to {
        left: 300px;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes changeColor {
      from {
        background-color: red;
      }
      to {
        background-color: blue;
      }
    }
  }
`;
const MainItem = styled.div`
  //! 로고 수정 후 다시고쳐야
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    width: 45vw; //! 이부분
    border: 10px dashed skyblue;
    z-index: 300;
    margin-top: 13em;
    animation-name: showItem;
    animation-duration: 3s;
    animation-iteration-count: 1;
    @keyframes showItem {
      from {
        transform: translateY(20px);
        opacity: 0;
        color: aqua;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`;
const MainDivImg = styled.img`
  //! 로고 후 다시 수정해야
  @media ${props => props.theme.desktop} {
    max-width: 30em;
    margin-left: 62%;
  }
`;
const MainSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 3em;
  font-size: 3em;
  letter-spacing: 2px;
  line-height: 2;

  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    color: white;
    margin: 3em;
    font-size: 3em;
    letter-spacing: 1px;
    transition: transform 1s linear;
    transform: translateY(1em);
    justify-content: center;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    border: 1px solid deeppink; //! 다 확인하고 지우기!
    font-size: 3em;
    color: white;
    top: 40%;
    padding: 10em 5em 3em 5em;
  }
`;
const MainSubImg = styled.img`
  //! 일단 지우기
  display: flex;
  width: 10em;
  height: 10em;
  border: 3px solid white;
`;

const MainDesc = styled.div`
  display: inline-block;
  font-size: 1.4em;
  color: #e7d1bf;
  line-height: 2em;
  padding: 2em 3em;
  @media ${props => props.theme.tablet} {
    display: inline-block;
    font-size: 1.6em;
    color: #e7d1bf;
    line-height: 2.2em;
    padding: 2.2em 3em 4.8em 3em;
  }
  @media ${props => props.theme.desktop} {
    display: inline-block;
    font-size: 2.5em;
    color: #e7d1bf;
    padding: 3em 5em;
    line-height: 2.5;
    border: 2px dashed purple;
  }
`;
const StyledLi1 = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100vw;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100vw; //! 여기도 다시 봐야
    position: relative;
    justify-content: flex-end;
  }
`;
const StyledImg1 = styled.img`
  display: flex;
  width: 100vw;
  height: 70vh;
  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 70vh;
    display: flex;
  }
  @media ${props => props.theme.desktop} {
    justify-content: flex-end;
    list-style: none;
    width: 14vw; //! 여기도다시 봐야
    height: 100%;
    position: relative;
    overflow: hidden;
    &:hover {
      ${props =>
        css`
          transition: 1s;
          transform: scale(1.05);
        `}
    }
  }
`;

// TODO - Content 내용
const StyledContent1 = styled.div`
  //! 디테일하게 점검해야
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 10px solid deeppink;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    position: absolute;
    width: 70vw;
    height: 100%;
    left: 80%;
    top: 0%;
    bottom: 10%;
    /* right: 70%; */
    line-height: 10em;
    background: rgba(0, 0, 0, 0.9);
    text-align: left;
    overflow: hidden;
    transform-origin: 50% 50%;
    transform: tr;
    transition: 1s;
    &:hover {
      ${props =>
        css`
          left: -170%;
          right: 0%;
        `}
    }
  }
`;
const ContentTitle1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3em;
  /* width: 100vw; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    background-color: #293848;
    color: white;
    font-size: 4em;

    transform: rotate(90deg);
    transform-origin: left;
    padding-left: 0.3em;
    /* margin-top: 1em; */
    /* padding-top: 1em; */
    margin-left: 0.5em;
    &:hover {
      ${props =>
        css`
          color: red;
          font-size: 4em;
        `}
    }
  }
`;
const ContentSubTitle1 = styled.div`
  display: flex;
  flex-direction: column;
  color: pink;

  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;
const ContentDesc1 = styled.div`
  display: flex;
  flex-direction: column;
  color: skyblue;

  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;

//! ---------------------------------------------------------------

const IntroBoxInput1 = styled.input`
  background-color: pink;
`;
const IntroBoxInput2 = styled.input``;
const IntroBoxInput3 = styled.input``;
const IntroBoxInput4 = styled.input``;

const SlideWrapDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;
const SlideListUl = styled.ul`
  white-space: nowrap;
  font-size: 0;
`;
const Li1 = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all 0.5s;
  transform: translateX(0%);
  z-index: 1;
`;
const Li2 = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all 0.5s;
  transform: translateX(0%);
  z-index: 2;
`;
const Li3 = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all 0.5s;
  transform: translateX(10%);
`;
const Li4 = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all 0.5s;
  transform: translateX(-80%);
`;
const ATag = styled.a`
  display: block;
  position: relative;
`;
const LabelLeft = styled.label`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  cursor: pointer;
  left: 30px;
  background: url('https://w7.pngwing.com/pngs/435/608/png-transparent-arrow-computer-icons-arrow-angle-triangle-left-arrow.png')
    center center / 100% no-repeat;
`;
const Image = styled.img`
  width: 100%;
`;
const LabelRight = styled.label`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  cursor: pointer;
  right: 30px;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgdn_Kdz62VWM9ulRa7pMrihs3szZxjGPG9tg90QHYhiBZoBx3ZZW6NTZARrGdnS7pX0&usqp=CAU')
    center center / 100% no-repeat;
`;

const A = styled.a`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
  :after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
  :before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: sdb 3s infinite;
    animation: sdb 3s infinite;
    box-sizing: border-box;
  }
  @-webkit-keyframes sdb {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

//! //////////////////////////////////////////////////////

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  /* border: 5px dashed orange; */
  width: 100vw;
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100vw;
    padding-left: 76px;
  }
`;
// const StyledIntro = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   @media ${props => props.theme.tablet} {
//     // 테블릿
//     display: flex;
//     flex-direction: column;
//     width: 100vw;
//   }
//   @media ${props => props.theme.desktop} {
//     // 데스크탑
//     display: flex;
//     flex-direction: row;
//     width: 100vw;
//     border: 10px solid red;
//   }
// `;
// const Image = styled.img`
//   display: flex;
//   width: 100vw;
//   height: 50vh;
//   border: 1px dashed yellow;
//   @media ${props => props.theme.tablet} {
//     // 테블릿
//     display: flex;
//     width: 100vw;
//     height: 70vh;
//   }
//   @media ${props => props.theme.desktop} {
//     // 데스크탑
//     display: flex;
//     width: 120px; //! 600 + 120*7 = 1440
//     height: 100%;
//   }
// `;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed orange;
  padding: 1em;
  width: 100vw;
  background-color: black;
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: flex;
    flex-direction: column;
    padding: 5em;
    width: 100vw;
    background-color: black;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    flex-direction: row;
    /* width : 60vw; //! 확인하기 */
    width: 60vw;
    background: #1633a8;
  }
`;
const IntroContent = styled.div`
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    flex-direction: column;
    width: 50vw;
    background: #4796c4;
    /* height : 100vh; */
  }
`;
const SlideBtn = styled.button`
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    width: 10vw;
    /* height : 100vh; */
    align-content: center;
    justify-content: center;
    align-items: center;
    background: #4bc9c3;
  }
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
  border: 1px dashed yellow;
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: flex;
    flex-direction: row;
    margin: 1em;
    padding: 2em;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    flex-direction: row;
    margin: 3em 3em 2em 3em;
    padding: 2em;
  }
`;
const Title = styled.div`
  display: inline-block;
  color: white;
  font-size: 1.5em;
  justify-content: center;
  vertical-align: text-bottom; //! 안먹힘
  padding-top: 2.5em; //! padding-top으로 맞추기 (폰트 적용 이후)
  /* padding-left : 0.5em; */
  border: 1px dashed red;
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: inline-block;
    color: white;
    font-size: 2.2em;
    justify-content: center;
    padding-top: 2.5em;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    font-size: 2.4em;
  }
`;
const NumTitle = styled.div`
  color: white;
  font-size: 6em;
  border: 1px dashed orange;
  @media ${props => props.theme.tablet} {
    // 테블릿
    color: white;
    font-size: 8em;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    font-size: 9em;
  }
`;
const SubTitle = styled.div`
  color: #e7d1bf;
  font-size: 1.5em;
  border: 10px double #e7d1bf;
  border-radius: 40px 0;
  box-shadow: 4px 7px 9px grey;
  margin: 1em;
  padding: 0.7em;
  justify-content: center;
  text-align: center;
  @media ${props => props.theme.tablet} {
    // 테블릿
    border: 15px double #e7d1bf;
    border-radius: 55px 0;
    font-size: 2.1em;
    margin: 1em 2em;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    border: 10px double #e7d1bf;
    border-radius: 55px 0;
    font-size: 1.9em;
    margin: 1em 3.2em;
  }
`;
const Desc = styled.div`
  color: white;
  font-size: 1.125em;
  margin: 2em;
  margin-bottom: 2em;
  justify-content: center;
  text-align: flex-start;
  border: 1px dashed pink;
  /* display : inline; */
  padding: 0.2em;
  line-height: 2.3;
  text-indent: 1em;
  @media ${props => props.theme.tablet} {
    // 테블릿
    font-size: 1.5em;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    font-size: 1.5em;
    padding: 0em 3em;
  }
`;

export default Intro;
