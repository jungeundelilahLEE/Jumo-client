import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Nav from './Nav';

import IntroSec1 from '../images/intro-sec1.png';

function Intro() {
  const introSec1 = IntroSec1;

  const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    border: 5px dashed black;
    width: 100vw;
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 100vw;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      display: flex;
      flex-direction: row;
      margin: 0;
      width: 100vw;
    }
  `;
  const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      display: flex;
      flex-direction: row;
      width: 100vw;
    }
  `;
  const Image = styled.img`
    display: flex;
    width: 100vw;
    height: 50vh;
    border: 1px dashed yellow;
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      width: 100vw;
      height: 70vh;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      display: flex;
      width: 120px; //! 600 + 120*7 = 1440
      height: 100%;
    }
  `;
  const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px dashed orange;
    padding: 1em;
    width: 100vw;
    background-color: black;
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      flex-direction: column;
      padding: 5em;
      width: 100vw;
      background-color: black;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      display: flex;
      flex-direction: row;
      /* width : 60vw; //! 확인하기 */
      width: 60vw;
      background: #1633a8;
    }
  `;
  const IntroContent = styled.div`
    @media screen and (min-width: 769px) {
      // 데스크탑
      display: flex;
      flex-direction: column;
      width: 50vw;
      background: #4796c4;
      /* height : 100vh; */
    }
  `;
  const SlideBtn = styled.button`
    @media screen and (min-width: 769px) {
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
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: flex;
      flex-direction: row;
      margin: 1em;
      padding: 2em;
    }
    @media screen and (min-width: 769px) {
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
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      display: inline-block;
      color: white;
      font-size: 2.2em;
      justify-content: center;
      padding-top: 2.5em;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      font-size: 2.4em;
    }
  `;
  const NumTitle = styled.div`
    color: white;
    font-size: 6em;
    border: 1px dashed orange;
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      color: white;
      font-size: 8em;
    }
    @media screen and (min-width: 769px) {
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
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      border: 15px double #e7d1bf;
      border-radius: 55px 0;
      font-size: 2.1em;
      margin: 1em 2em;
    }
    @media screen and (min-width: 769px) {
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
    @media screen and (min-width: 480px) and (max-width: 768px) {
      // 테블릿
      font-size: 1.5em;
    }
    @media screen and (min-width: 769px) {
      // 데스크탑
      font-size: 1.5em;
      padding: 0em 3em;
    }
  `;

  return (
    <div>
      <Nav />
      <Section>
        <StyledIntro>
          <Image src={introSec1} alt="introSec1" />
          <IntroBox>
            <IntroContent>
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
            </IntroContent>
            <SlideBtn>Slide to left</SlideBtn>
          </IntroBox>
        </StyledIntro>
      </Section>
    </div>

    // <Section>
    //     <div>
    //     <Nav/>
    //     <StyledIntro>
    //         dellah
    //     </StyledIntro>
    //     </div>
    // </Section>
  );
}

export default Intro;
