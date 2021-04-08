import React from 'react';
import styled from 'styled-components';
import ReviewInput from './ReviewInput';
import ReviewList from './ReviewList';
import makgeolli from '../images/mak-sample-1.png';

const Detail = () => {
  return (
    <div>
      <StyleDetailes>
        <StyleDetailesWrap>
          <StyleLeft>
            <StyleDetailesImageBox>
              <StyleBackgroundImg />
              <StyleImg />
            </StyleDetailesImageBox>
          </StyleLeft>
          <StyleRight>
            <StyleDescBox>
              <StyleDescLeft>
                <div className="mak-detailes-title">
                  제품명 : 느린마을 oo 막걸리
                </div>
                <div className="mak-detailes-desc">
                  <p>종류 : 탁주 </p>
                  <p>용량 : 750ml</p>
                  <p>원재료 : 아스파탐, 살... </p>
                  <p>생산지역 :ㅇㅇ </p>
                  <br />
                </div>
              </StyleDescLeft>
              <StyleDescRight>
                <StyleDescInfo>
                  <div className="mak-detailes-views">조회수 : 1,444</div>
                  <div className="mak-detailes-likes">LIKE : 707</div>
                  <div className="mak-detailes-reviews">리뷰 : 49</div>
                </StyleDescInfo>
              </StyleDescRight>
              <StyleDescBottom>
                ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이,
                엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생
                막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸
                부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가
                잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라,
                살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수
                있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이
                꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난
                막걸리입니다. ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의
                인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸
                프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과
                제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는
                풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯
                시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의
                사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을
                아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문
                제대로 난 막걸리입니다.ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의
                인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸
                프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과
                제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는
                풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯
                시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의
                사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을
                아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문
                제대로 난 막걸리입니다.
              </StyleDescBottom>
            </StyleDescBox>
            <StyleDetailsBottom>
              <button type="button">LIKE</button>
            </StyleDetailsBottom>
          </StyleRight>
        </StyleDetailesWrap>
      </StyleDetailes>
      <ReviewInput />
      <ReviewList />
    </div>
  );
};

const StyleDetailes = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleDetailesWrap = styled.div`
  width: 1200px;
  min-height: 700px;
  display: flex;
  flex-wrap: wrap;
`;

const StyleLeft = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleDetailesImageBox = styled.div`
  width: 500px;
  height: 500px;
  margin-left: auto;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleBackgroundImg = styled.div`
  background-image: url(${makgeolli});
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.5;
  width: 450px;
  height: 450px;
  margin-left: auto;
  transform: rotate(-5deg);
  position: relative;
  z-index: 1;
`;

const StyleImg = styled.div`
  background-image: url(${makgeolli});
  width: 350px;
  height: 350px;
  position: absolute;
  z-index: 2;
`;

const StyleRight = styled.div`
  width: 44%;
  padding: 4.5rem 0rem;
`;

const StyleDescBox = styled.div`
  min-height: 300px;
  background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1.8rem;
`;

const StyleDescLeft = styled.div`
  flex: 2 1 0;
`;

const StyleDescRight = styled.div`
  flex: 1 1 0;
`;

const StyleDescInfo = styled.div`
  border: 2px black solid;
  padding: 10px;
`;

const StyleDescBottom = styled.div`
  width: 600px;
  line-height: 1.2rem;
  height: 13.2rem;
  overflow: scroll;
  word-break: break-all;
  word-break: break-word;
`;

const StyleDetailsBottom = styled.div``;

export default Detail;
