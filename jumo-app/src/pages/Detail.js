import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addLike, removeLike } from '../actions';
// import makgeolliImg from '../images/mak-sample-1.png';
import ReviewInput from '../components/ReviewInput';
import ReviewList from '../components/ReviewList';

import res from '../atoms/dummyMaks';

const Detail = () => {
  const state = useSelector(states => states.userReducer);
  const { likeItems } = state;
  const dispatch = useDispatch();

  //! dummy data => server
  // test
  const { data } = res;
  const makgeolli = data[0];

  const handleLike = () => {
    dispatch(addLike(makgeolli.id));
  };

  const handleRemoveLike = () => {
    dispatch(removeLike(makgeolli.id));
  };

  return (
    <StyleDetailes>
      <StyleDetailesImageBox>
        <StyleBackgroundImg
          makgeolliImg={makgeolli.image}
          alt="막걸리 흑백이미지"
        />
        <StyleImg makgeolliImg={makgeolli.image} alt="막걸리 이미지" />
      </StyleDetailesImageBox>
      <StyleVertical>
        <StyleDescBox>
          <StyleDescInfo>
            <div>조회수 : {makgeolli.views}</div>
            <div>
              {!likeItems.includes(makgeolli.id) ? (
                <StyleSmallLikeBtn onClick={() => handleLike()}>
                  {makgeolli.likes}
                </StyleSmallLikeBtn>
              ) : (
                <StyleSmallLikeBtn onClick={() => handleRemoveLike()}>
                  Not LIKE
                </StyleSmallLikeBtn>
              )}

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

        {!likeItems.includes(makgeolli.id) ? (
          <StyleLikeBtn onClick={() => handleLike()}>LIKE</StyleLikeBtn>
        ) : (
          <StyleLikeBtn onClick={() => handleRemoveLike()}>
            Not Like
          </StyleLikeBtn>
        )}
      </StyleVertical>
      <ReviewInput makgeolliId={makgeolli.id} />
      <ReviewList makgeolliId={makgeolli.id} />
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
