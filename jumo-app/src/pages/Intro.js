import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Nav from './Nav';

import large from '../images/larghmak.jpg';
import st from '../images/1.png';
import nd from '../images/2.png';
import rd from '../images/3.png';
import brew from '../images/brew.jpg';
import h from '../images/h.jpeg';
import e from '../images/e.jpg';
import s from '../images/s.jpg';
import j from '../images/j.jpg';

import Logo from '../images/logodeep.png';

function Intro({ channelHandler, navHeader, setNavHeader }) {
  // const introSec1 = IntroSec1;
  // const logo = Logo;

  useEffect(() => {
    if (!navHeader) {
      setNavHeader(true);
    }
    channelHandler('Intro');
  }, []);

  return (
    <div>
      <Section>
        <StyledIntro>
          <StyledUl>
            <StyledMainDiv>
              <MainItem>
                <MainSubTitle>THIS IS ALL ABOUT Jumo</MainSubTitle>
                <MainDesc>
                  &nbsp;&nbsp;&nbsp;잊혀져가는 우리의 것을 남기고 기록하자는 한
                  뜻을 모았습니다. 코로나가 바꿔버린 우리의 일상에 혼술의
                  즐거움을 담아보고자 합니다. 가장 한국적인 발효주로 한국의 문화
                  콘텐츠가 되어 전 세계로 뻗어나갔으면 좋겠습니다. <p />
                  &nbsp;&nbsp;&nbsp;Jumo에서는 막걸리의 종류를 큐레이션 형식으로
                  정리하고 이용자들의 생생한 목소리를 리뷰, 별점, 좋아요 등의
                  다양한 방법으로 담아냈습니다. 회원가입을 통해 나만의 공간에
                  저장, 수정, 삭제할 수 있으며, 나의 기록을 저장할 수 있습니다.
                  <p />
                  &nbsp;&nbsp;&nbsp;또한 실제 체험을 원하는 이용자들을 위해 해당
                  막걸리가 빚어지는 양조장 위치 지도 검색 기능을 추가하였습니다.
                </MainDesc>
              </MainItem>
            </StyledMainDiv>

            <StyledLi1>
              {/* <Background> */}
              <StyledImg1 src={st} alt="intro1" />
              {/* </Background> */}
              {/* <StyledImg1M src={large} alt="intro1mobile" /> */}
              <StyledContent1>
                <ContentTitle1>About Makgeolli</ContentTitle1>
                <ContentSubTitle1>
                  막걸리는 술이 아니고 밥이나 마찬가지다. <p /> 밥일뿐만아니라
                  즐거움을 더해주는 은총인 것이다.
                  <p /> - 천상병 &#39;막걸리&#39; -
                </ContentSubTitle1>
                <ContentDesc1>
                  막걸리는 잘 모르시겠다고요?
                  <p />
                  막걸리를 좋아하신다고요?
                  <p />
                  이곳 Jumo에서는 남녀노소
                  <p /> 모두가 함께 즐길 수 있는 막거리를 준비했어요.
                  <p /> 전국 다양한 막걸리 정보를 확인하고
                  <p /> 회원이 되어 다양한 의견을 주고받아 보세요.
                  <p /> 모두 막걸리의 매력에 푹 빠질 준비 되셨나요?
                  <p /> 풍미 가득한 막걸리를 탐험해보세요!
                </ContentDesc1>
              </StyledContent1>
            </StyledLi1>

            <StyledLi2>
              <StyledImg2 src={nd} alt="intro1" />
              <StyledContent2>
                <ContentTitle2>About Brewery</ContentTitle2>
                <ContentSubTitle2>Search your closest brewery</ContentSubTitle2>
                <ContentDesc2>
                  서울에는 양조장이 없는 것 같던데..
                  <br />
                  라고 생각하시는 분들 많으시죠?
                  <br />
                  전국 2000여개의 양조장 중에서
                  <br />
                  직접 체험 가능한 양조장만을 모아봤어요.
                  <br />
                  나와 가까운 주변 양조장을 검색해서 찾아보세요.
                  <br />
                  직접 양조장에서 마시는 막걸리는 그야말로 천상의 맛!
                  <br />
                  방문 전 예약 여부, 시간 체크하는 것 잊지 마세요!
                  <br />
                </ContentDesc2>
              </StyledContent2>
            </StyledLi2>

            <StyledLi3>
              <StyledImg3 src={rd} alt="intro1" />
              <StyledContent3>
                <ContentTitle3>About Us</ContentTitle3>
                <ContentSubTitle3>Who we are & What we did</ContentSubTitle3>
                <ContentDesc3>
                  Visit our Github Address
                  <Position>
                    <Text>
                      Frontend
                      <Img src={h} />
                      <A href="https://github.com//hgsignal">신희국의 github</A>
                      <Img src={e} />
                      <A href="https://github.com/jungeundelilahLEE">
                        이정은의 github
                      </A>
                      <Img src={j} />
                      <A href="https://github.com/jejelee94">이제경의 github</A>
                    </Text>
                    <Text>
                      Backend
                      <Img src={s} />
                      <A href="https://github.com/jeon-seongjae">
                        전성재의 github
                      </A>
                    </Text>
                  </Position>
                </ContentDesc3>
              </StyledContent3>
            </StyledLi3>
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
    background: #f2eeed;
  }
`;

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
    /* border: 4px solid yellow; */
    overflow: hidden;
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
    background: #f2eeed;
    width: 55%;
    padding: 3em;
  }
`;
const MainDivCrop = styled.div`
  //! 로고들어오면 다시 작업해야
  display: flex;
  /* border: 5px dashed yellow; */
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
    /* overflow: hidden; */
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
        box-shadow: 5px 5px 5px grey;
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
    /* height: 100vh; */
    /* border: 10px dashed skyblue; */
    z-index: 0;
    margin-top: 1em;
    animation-name: showItem;
    animation-duration: 3s;
    animation-iteration-count: 1;
    @keyframes showItem {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`;

const Div = styled.div`
  @media ${props => props.theme.mobile} {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    display: none;
  }

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
      box-shadow: 5px 5px 5px grey;
    }
    to {
      background-color: red;
    }
  }
`;
//! 로고 후 다시 수정해야
const MainDivImg = styled.img`
  @media ${props => props.theme.desktop} {
    width: 20em;
    height: auto;
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
const MainSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 1em;
  font-size: 3em;
  letter-spacing: 2px;
  line-height: 2;
  font-family: 'Sansation';

  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    color: white;
    margin: 3em;
    font-size: 4em;
    letter-spacing: 1px;
    transition: transform 1s linear;
    transform: translateY(1.5em);
    justify-content: center;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    /* border: 1px solid deeppink; //! 다 확인하고 지우기! */
    font-size: 4em;
    font-weight: bold;

    color: white;
    /* top: 20%; */
    padding: 1em;
    margin: 0;
    background: linear-gradient(to right, #c29b86, #fbcac9, #8ca6ce, #293848);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
    padding: 2.2em 4em 4.8em 4em;
  }
  @media ${props => props.theme.desktop} {
    font-family: 'Nanum Gothic';
    display: inline-block;
    height: 100vh;
    font-size: 1.7em;
    color: #293848;
    padding: 3em 5em;
    line-height: 2.3;
    margin-top: 2em;
    /* border: 2px dashed purple; */
    justify-content: flex-end;
  }
`;

//! 1 ---------------------------------------------------

const StyledLi1 = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100vw;
  /* z-index: -1; */
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
  height: 100vh;
  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  @media screen and (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
  @media ${props => props.theme.desktop} {
    justify-content: flex-end;
    list-style: none;
    width: 15vw; //! 여기도다시 봐야
    height: 100%; //! 휴./............................
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
// const StyledImg1M = styled.img`
//   display: none;
//   @media screen and (min-width: 0px) and (max-width: 768px) {
//     width: 100vw;
//     height: 100vh;
//   }
// `;

// TODO - Content 내용
const StyledContent1 = styled.div`
  //! 디테일하게 점검해야
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Sansation';
  background: #293848;
  @media ${props => props.theme.mobile} {
    padding: 3em;
  }
  /* padding: 1em; */
  /* border: 13px double deeppink; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #293848;
    padding: 3em;
  }
  @media ${props => props.theme.desktop} {
    position: absolute;
    width: 70vw;
    height: 100%; //! 얘를 없애니까 제목 바가 줄어듬..
    left: 75%;
    top: 0%;
    bottom: 10%;
    /* right: 70%; */
    line-height: 10em;
    padding: 0;
    /* background: rgba(0, 0, 0, 0.9); */
    background: #293848;
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
  color: #e7d1bf;
  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    background-color: #293848;
    /* color: white; */
    color: #e7d1bf;
    font-size: 5em;
    /* border-bottom: 5px solid orange; */
    /* border-left: 5px solid orange; */

    transform: rotate(90deg);
    transform-origin: left;
    padding-left: 0.3em;
    /* margin-top: 1em; */
    /* padding-top: 1em; */
    margin-left: 0.5em;
    &:hover {
      ${props =>
        css`
          color: #e7d1bf;
          font-size: 6em;
        `}
    }
  }
`;
const ContentSubTitle1 = styled.div`
  display: flex;
  flex-direction: column;
  /* color: pink; */
  color: #c29b86;
  justify-content: flex-start;

  @media ${props => props.theme.mobile} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.2em;
    line-height: 3;
  }
  @media ${props => props.theme.tablet} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.5em;
    line-height: 3;
  }
  @media ${props => props.theme.desktop} {
    flex-wrap: wrap;
    margin-left: 13%;
    line-height: 4;
    font-size: 1.7em;
    font-weight: bold;
    color: #c29b86;
    /* color: #ffffff; */
    border-left: 10px inset #c29b86;
    padding-left: 1em;
    line-height: 3;
  }
`;

const ContentDesc1 = styled.div`
  display: flex;
  flex-direction: column;
  color: #f2eeed;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mobile} {
    /* display: none; */
    margin-left: 10%;
    line-height: 2;
    font-size: 1.4em;
    justify-content: center;
    align-items: center;
  }
  @media ${props => props.theme.tablet} {
    /* display: none; */
    /* margin-left: 10%; */
    line-height: 2;
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    display: inline-block;
    margin-left: 10%;
    line-height: 4;
    font-size: 1.4em;
  }
`;
//! 1 ---------------------------------------------------

//! 2 ---------------------------------------------------
const StyledLi2 = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100vw;
  /* z-index: -1; */
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
const StyledImg2 = styled.img`
  display: flex;
  width: 100vw;
  height: 70vh;
  @media screen and (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  @media ${props => props.theme.desktop} {
    justify-content: flex-end;
    list-style: none;
    width: 15vw; //! 여기도다시 봐야
    height: 100%; //! 휴./............................
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
const StyledContent2 = styled.div`
  //! 디테일하게 점검해야
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Sansation';
  background: #293848;
  @media ${props => props.theme.mobile} {
    padding: 3em;
  }
  /* padding: 1em; */
  /* border: 13px double deeppink; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #293848;
    padding: 3em;
  }
  @media ${props => props.theme.desktop} {
    position: absolute;
    width: 70vw;
    height: 100%; //! 얘를 없애니까 제목 바가 줄어듬..
    left: 75%;
    top: 0%;
    bottom: 10%;
    /* right: 70%; */
    line-height: 10em;
    padding: 0;
    /* background: rgba(0, 0, 0, 0.9); */
    background: #293848;
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
const ContentTitle2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3em;
  /* width: 100vw; */
  color: #e7d1bf;
  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    background-color: #293848;
    /* color: white; */
    color: #e7d1bf;
    font-size: 5em;
    /* border-bottom: 5px solid orange; */
    /* border-left: 5px solid orange; */

    transform: rotate(90deg);
    transform-origin: left;
    padding-left: 0.3em;
    /* margin-top: 1em; */
    /* padding-top: 1em; */
    margin-left: 0.5em;
    &:hover {
      ${props =>
        css`
          color: #e7d1bf;
          font-size: 6em;
        `}
    }
  }
`;
const ContentSubTitle2 = styled.div`
  display: flex;
  flex-direction: column;
  /* color: pink; */
  color: #c29b86;
  justify-content: flex-start;

  @media ${props => props.theme.mobile} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.2em;
    line-height: 3;
  }
  @media ${props => props.theme.tablet} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.5em;
    line-height: 3;
  }
  @media ${props => props.theme.desktop} {
    flex-wrap: wrap;
    margin-left: 12%;
    line-height: 4;
    font-size: 2.3em;
    font-weight: bold;
    color: #c29b86;
    /* color: #ffffff; */
    border-left: 10px inset #c29b86;
    padding-left: 1em;
    line-height: 3;
  }
`;

const ContentDesc2 = styled.div`
  display: flex;
  flex-direction: column;
  color: #f2eeed;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mobile} {
    /* display: none; */
    margin-left: 10%;
    line-height: 2;
    font-size: 1.4em;
  }
  @media ${props => props.theme.tablet} {
    /* display: none; */
    /* margin-left: 10%; */
    line-height: 2;
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    display: inline-block;

    margin-left: 10%;
    line-height: 4;
    font-size: 1.4em;
  }
`;

//! 3 ---------------------------------------------------
const StyledLi3 = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100vw;
  /* z-index: -1; */
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
const StyledImg3 = styled.img`
  display: flex;
  width: 100vw;
  height: 70vh;
  @media screen and (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  @media ${props => props.theme.desktop} {
    justify-content: flex-end;
    list-style: none;
    width: 15vw; //! 여기도다시 봐야
    height: 100%; //! 휴./............................
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
const StyledContent3 = styled.div`
  //! 디테일하게 점검해야
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Sansation';
  background: #293848;
  @media ${props => props.theme.mobile} {
    padding: 3em;
  }
  /* padding: 1em; */
  /* border: 13px double deeppink; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #293848;
    padding: 3em;
  }
  @media ${props => props.theme.desktop} {
    position: absolute;
    width: 70vw;
    height: 100%; //! 얘를 없애니까 제목 바가 줄어듬..
    left: 75%;
    top: 0%;
    bottom: 10%;
    /* right: 70%; */
    line-height: 10em;
    padding: 0;
    /* background: rgba(0, 0, 0, 0.9); */
    background: #293848;
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
const ContentTitle3 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3em;
  /* width: 100vw; */
  color: #e7d1bf;
  @media ${props => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 4em;
    justify-content: center;
    align-items: center;
    color: #e7d1bf;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    background-color: #293848;
    /* color: white; */
    color: #e7d1bf;
    font-size: 5em;
    /* border-bottom: 5px solid orange; */
    /* border-left: 5px solid orange; */

    transform: rotate(90deg);
    transform-origin: left;
    padding-left: 0.3em;
    /* margin-top: 1em; */
    /* padding-top: 1em; */
    margin-left: 0.5em;
    &:hover {
      ${props =>
        css`
          color: #e7d1bf;
          font-size: 6em;
        `}
    }
  }
`;
const ContentSubTitle3 = styled.div`
  display: flex;
  flex-direction: column;
  /* color: pink; */
  color: #c29b86;
  justify-content: flex-start;

  @media ${props => props.theme.mobile} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.2em;
    line-height: 3;
  }
  @media ${props => props.theme.tablet} {
    color: #c29b86;
    margin: 3em auto;
    font-size: 1.5em;
    line-height: 3;
  }
  @media ${props => props.theme.desktop} {
    flex-wrap: wrap;
    margin-left: 12%;
    line-height: 4;
    font-size: 2.3em;
    font-weight: bold;
    color: #c29b86;
    /* color: #ffffff; */
    border-left: 10px inset #c29b86;
    padding-left: 1em;
    line-height: 3;
  }
`;

const ContentDesc3 = styled.div`
  display: flex;
  flex-direction: column;
  color: #f2eeed;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mobile} {
    /* display: none; */
    margin-left: 10%;
    line-height: 2;
    font-size: 1.4em;
  }
  @media ${props => props.theme.tablet} {
    /* display: none; */
    /* margin-left: 10%; */
    line-height: 2;
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    display: inline-block;

    margin-left: 10%;
    line-height: 4;
    font-size: 1.4em;
  }
`;
const Position = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid white;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 10em;
  padding: 1em;
  /* @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    border: 2px solid pink;
    align-items: flex-start;
    justify-content: space-around;
  } */
  @media ${props => props.theme.desktop} {
    padding-right: 50%;
    border: none;
  }
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 1.5em;
  color: #f2eeed;
  justify-content: center;
  align-items: center;

  /* @media ${props => props.theme.desktop} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  } */
`;

const A = styled.a`
  color: #e7d1bf;
  /* font-size: 1em; */
  margin: 0;
  padding: 0;
  @media ${props => props.theme.mobile} {
    font-size: 1em;
  }
  @media ${props => props.theme.tablet} {
    font-size: 0.8em;
  }
  @media ${props => props.theme.desktop} {
    font-size: 0.8em;
  }
`;

const Img = styled.img`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100px;
  height: 120px;
`;

export default Intro;
