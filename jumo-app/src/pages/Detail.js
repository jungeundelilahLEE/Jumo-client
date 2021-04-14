import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addLike } from '../actions';
// import makgeolliImg from '../images/mak-sample-1.png';
import ReviewInput from '../components/ReviewInput';
import ReviewList from '../components/ReviewList';

const Detail = () => {
  const state = useSelector(states => states.userReducer);
  const { likesItem } = state;
  const dispatch = useDispatch();

  const [makgeolli, setMakgeolli] = useState({
    // id: '',
    // name: '',
    // area: '',
    // content: '',
    // explain: '',
    // material: '',
    // likes: 0,
    // views: 0,
    // reviews: 0
    // image: '',

    // test dummy data..
    id: 1,
    name: '느린 막걸리',
    area: '서울',
    content: '750ml',
    explain:
      'ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다. ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다.ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다.',
    material: 'ㅇㅇㅇ 양조장',
    likes: 456,
    views: 1234567,
    reviews: 277,
    image:
      'https://s3.ap-northeast-2.amazonaws.com/jumo.ml/%E1%84%91%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg',
  });

  const handleLike = () => {
    dispatch(addLike(makgeolli.id));
  };

  return (
    <StyleDetailes>
      <StyleDetailesImageBox>
        <StyleBackgroundImg makgeolliImg={makgeolli.image} />
        <StyleImg makgeolliImg={makgeolli.image} />
      </StyleDetailesImageBox>
      <StyleVertical>
        <StyleDescBox>
          <StyleDescInfo>
            <div>{likesItem}</div>
            <div>조회수 : {makgeolli.views}</div>
            <div>
              {!likesItem.includes(makgeolli.id) ? (
                <StyleSmallLikeBtn onClick={() => handleLike()}>
                  {makgeolli.likes}
                </StyleSmallLikeBtn>
              ) : (
                <StyleSmallLikeBtn>Not like</StyleSmallLikeBtn>
              )}

              {/* <StyleSmallLikeBtn onClick={() => handleLike()}>
                {makgeolli.likes}
              </StyleSmallLikeBtn> */}
              <StyleTextLike>LIKE : {makgeolli.likes}</StyleTextLike>
            </div>
            <div>리뷰 : {makgeolli.reviews}</div>
          </StyleDescInfo>
          <StyleExplanation>
            <StyleTitle>{makgeolli.name}</StyleTitle>
            <StyleKinds>
              <p>종류 : 탁주??? </p>
              <p>용량 : {makgeolli.content}</p>
              <p>양조장 :{makgeolli.material} </p>
              <p>생산지역 :{makgeolli.area} </p>
            </StyleKinds>
          </StyleExplanation>
          <StyleDescBottom>{makgeolli.explain}</StyleDescBottom>
        </StyleDescBox>
        {/* <StyleLikeBtn onClick={() => handleLike()}>LIKE</StyleLikeBtn> */}

        {!likesItem.includes(makgeolli.id) ? (
          <StyleLikeBtn onClick={() => handleLike()}>LIKE</StyleLikeBtn>
        ) : (
          <StyleLikeBtn>Not like</StyleLikeBtn>
        )}
      </StyleVertical>
      <ReviewInput />
      <ReviewList />
    </StyleDetailes>
  );
};

const StyleDetailes = styled.div`
  width: 500px;

  @media ${props => props.theme.mobile} {
    width: 100vw;
  }

  @media ${props => props.theme.tablet} {
    width: 100vw;
  }

  @media ${props => props.theme.desktop} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const StyleDetailesImageBox = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${props => props.theme.desktop} {
    width: 500px;
    height: 500px;
    padding-right: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyleBackgroundImg = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: block;
    background-image: url(${props => props.makgeolliImg});
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    opacity: 0.5;
    width: 90%;
    height: 90%;
    margin-left: auto;
    transform: rotate(-5deg);
    position: relative;
    z-index: 1;
  }
`;

const StyleImg = styled.div`
  background-image: url(${props => props.makgeolliImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 60vh;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 50%;
    height: 60vh;
  }

  @media ${props => props.theme.desktop} {
    width: 350px;
    height: 350px;
    position: absolute;
    z-index: 2;
  }
`;

const StyleVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleDescBox = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 100vw;
  }

  @media ${props => props.theme.desktop} {
    width: 40vw;
    min-height: 55vmin;
    padding-bottom: 3vmin;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
`;

const StyleDescInfo = styled.div`
  width: 100%;
  border: 5px red solid;
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;

    div {
      margin-bottom: 0.8rem;
    }
  }

  @media ${props => props.theme.desktop} {
    max-height: 130px;
    font-size: 1rem;
    margin-top: 10px;
    width: auto;
    order: 2;

    div {
      margin-bottom: 0.5rem;
    }
  }
`;

const StyleExplanation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin-left: 20px;
    width: 60%;
    justify-content: start;
    align-items: flex-start;
    order: 1;
  }
`;

const StyleTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 2rem;
  text-align: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin-top: 50px;
  }
`;

const StyleKinds = styled.div`
  font-size: 1.3rem;
  margin-bottom: 40px;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.2rem;
  }
`;

const StyleDescBottom = styled.div`
  width: 80%;
  font-size: 1.5rem;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    width: 90%;
    font-size: 1rem;
    line-height: 1.2rem;
    height: 14rem;
    margin-top: 0;
    overflow: scroll;
    word-break: break-all;
    word-break: break-word;
    order: 3;
  }
`;

const StyleLikeBtn = styled.button`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: block;
    max-width: 10vmin;
    justify-content: flex-start;
  }
`;

const StyleSmallLikeBtn = styled.button`
  display: inline-block;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

const StyleTextLike = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: inline;
  }
`;

export default Detail;
