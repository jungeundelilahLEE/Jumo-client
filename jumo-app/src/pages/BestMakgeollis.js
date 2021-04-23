/* eslint-disable no-useless-return */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCarousel } from '../actions';

import BestMain from '../components/BestMain';
import BestSide from '../components/BestSide';
import BestBottom from '../components/BestBottom';

const BestMakgeollis = () => {
  const [itemIdx, setItemIdx] = useState(0);
  const [itemLength, seItemLength] = useState(5);

  let state = useSelector(states => states.carouselReducer.bestList);
  const baseHead = state.slice(state.length - 2, state.length);
  const baseTail = state.slice(0, 2);
  const baseList = [...baseHead, ...state, ...baseTail];

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://jumoserver.ml/makgeolli/rank`).then(res => {
      const { data } = res;

      dispatch(updateCarousel(data.data));
    });
  }, [itemLength]);

  window.addEventListener('resize', () => {
    // window.location.reload();
    let width = document.body.clientWidth;
    if (width < 768) {
      window.location.reload();
      seItemLength(1);
    } else {
      window.location.reload();
      seItemLength(5);
    }
  });

  let topList = baseList.slice(itemIdx, itemIdx + itemLength);
  let mobileTopList = baseList.slice(itemIdx + 1, itemIdx + itemLength - 1);

  let nextBestHandler = () => {
    if (itemIdx + itemLength < state.length + 4) {
      setItemIdx(pre => pre + 1);
    } else if (itemIdx > 8) {
      setItemIdx(0);
    }
    return;
  };
  let preBestHandler = () => {
    if (itemIdx > 0) {
      setItemIdx(pre => pre - 1);
    } else if (itemIdx === 0) {
      setItemIdx(9);
    }
    return;
  };

  return (
    <StyleListTop>
      <StyleBestBox>
        <StyleTitle>BEST TOP 10</StyleTitle>
        <StyleBestMain>
          {/* <StyleLeftArrow onClick={preBestHandler}>{'<'}</StyleLeftArrow> */}
          <Aleft onClick={preBestHandler} />

          <StyleBestList>
            {topList.map((item, idx) => {
              if (idx === 2) {
                return (
                  <Link to={`/makgeolli/list/${item.name}`}>
                    <BestMain
                      item={item}
                      index={state.findIndex(i => i.id === item.id)}
                      key={item.id}
                    />
                  </Link>
                );
              }
              return (
                <Link to={`/makgeolli/list/${item.name}`}>
                  <BestSide
                    item={item}
                    index={state.findIndex(i => i.id === item.id)}
                    key={item.id}
                  />
                </Link>
              );
            })}
          </StyleBestList>

          {/* <StyleRightArrow onClick={nextBestHandler}>{'>'}</StyleRightArrow> */}
          <Aright onClick={nextBestHandler} />
        </StyleBestMain>
      </StyleBestBox>

      <StyleMobileList>
        {mobileTopList.map((item, idx) => {
          if (idx === 1) {
            return (
              <StyleBoder>
                <Link to={`/makgeolli/list/${item.id}`}>
                  <BestBottom item={item} index={idx} key={item.id} />
                </Link>
              </StyleBoder>
            );
          }
          return (
            <Link to={`/makgeolli/list/${item.id}`}>
              <BestBottom item={item} index={idx} key={item.id} />
            </Link>
          );
        })}
      </StyleMobileList>
    </StyleListTop>
  );
};

const StyleListTop = styled.div`
  display: flex;
  width: 100vw;
  background-color: #293848;
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  padding-top: 0;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;

const StyleBestBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 50vh; //!  이부분 태블릿/데스크탑에서는 조정해야
  padding: 1em 0em 1em 0em;
  /* border: 5px dashed yellow; */
  align-items: center;
  justify-content: center;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;

const StyleTitle = styled.div`
  display: flex;
  font-size: 2rem;
  /* text-align: center; */
  color: white;
  font-weight: 500;
  z-index: 500;
  top: 0;
  /* margin-top: -100px; */
  padding-bottom: 150px;
  @media ${props => props.theme.tablet} {
  }
  @media ${props => props.theme.desktop} {
  }
`;

const StyleBestMain = styled.div`
  border: 2px dashed blue;
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  margin-top: 2em;
  @media ${props => props.theme.tablet} {
    justify-content: space-evenly;
  }
  @media ${props => props.theme.desktop} {
    justify-content: center;
  }
`;

const Aleft = styled.a`
  position: absolute; // 처음위치
  top: 30%;
  left: 25%;
  width: 24px;
  height: 24px;
  margin-left: -6px;
  /* border-left: 1px solid black; */
  /* border-bottom: 1px solid black; */
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
  :after {
    // 보더에 대한 것
    position: absolute;
    top: 10%;
    left: 50%;
    content: '';
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -8px;
    /* border-left: 1px solid white; */
    /* border-bottom: 1px solid white; */
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    box-sizing: border-box;
  }
  :before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    /* border-radius: 100%; */
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
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
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
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
const Aright = styled.a`
  position: absolute; // 처음위치
  top: 35%;
  right: 25%;
  width: 24px;
  height: 24px;
  margin-right: -6px;
  /* border-left: 1px solid black; */
  /* border-bottom: 1px solid black; */
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
  :after {
    // 보더에 대한 것
    position: absolute;
    top: 10%;
    left: 50%;
    content: '';
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -8px;
    /* border-left: 1px solid white; */
    /* border-bottom: 1px solid white; */
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    box-sizing: border-box;
  }
  :before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    content: '';
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
    /* border-radius: 100%; */
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
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
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
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
const StyleBestList = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: flex;
    align-items: center;
  }

  @media ${props => props.theme.desktop} {
  }
`;

//! 여기부터 다시. 베스트 이미지처리 먼저 하고나서 돌아와...후겁내오래걸리
//! 베스트 10 bar
const StyleBoder = styled.div`
  border: 2px solid rgba(239, 252, 53, 0.7);
  /* padding: 5px; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    border: none;
  }

  @media ${props => props.theme.desktop} {
    /* border: none; */
  }
`;

const StyleMobileList = styled.div`
  display: flex;
  /* margin-top: 40%; */
  margin: 10em 2em 2em;
  justify-content: center;
  /* padding: 5vmin 0; */
  /* border: 10px solid red; */
`;

// const StyleListTop = styled.div`
//   width: 100vw;
//   background-color: lightblue;
//   display: flex;
//   flex-direction: column;
// `;

// const StyleTitle = styled.div`
//   font-size: 2rem;
//   text-align: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     font-size: 1.5rem;
//   }
// `;

// const StyleBestBox = styled.div`
//   margin: 0 3vmin;
//   padding-top: 8vmin;
//   background-color: lightsalmon;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const StyleBestMain = styled.div`
//   width: 100%;
//   height: 45vh;
//   background-color: lightslategray;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     justify-content: space-evenly;
//   }

//   @media ${props => props.theme.desktop} {
//     justify-content: center;
//   }
// `;

// const StyleLeftArrow = styled.div`
//   cursor: pointer;
//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     margin: 0 4vmin 0 0;
//   }
// `;

// const StyleRightArrow = styled.div`
//   cursor: pointer;
// `;

// const StyleBestList = styled.div`
//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     display: flex;
//     align-items: center;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleBoder = styled.div`
//   border: 2px white solid;
//   padding: 5px;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     border: none;
//   }

//   @media ${props => props.theme.desktop} {
//     /* border: none; */
//   }
// `;

// const StyleMobileList = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 5vmin 0;
// `;

export default BestMakgeollis;
