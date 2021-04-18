/* eslint-disable no-useless-return */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCarousel } from '../actions';
import BestMain from '../components/BestMain';
import BestSide from '../components/BestSide';
import BestBottom from '../components/BestBottom';

import res from '../atoms/dummyMaks';

const BestMakgeollis = () => {
  const [itemIdx, setItemIdx] = useState(0);
  const [itemLength, seItemLength] = useState(5);

  let state = useSelector(states => states.carouselReducer.bestList);
  state = state.slice(0, 10);
  const baseHead = state.slice(state.length - 2, state.length);
  const baseTail = state.slice(0, 2);
  const baseList = [...baseHead, ...state, ...baseTail];

  const dispatch = useDispatch();

  //! dummy data => server
  const getBestList = () => {
    const { data } = res;

    dispatch(updateCarousel(data));
  };

  useEffect(() => {
    getBestList();
  }, [itemLength]);

  window.addEventListener('resize', () => {
    window.location.reload();
    let width = document.body.clientWidth;
    if (width < 768) {
      seItemLength(1);
    } else {
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
        <StyleTitle>많이 찾는 막걸리(TOP 10)</StyleTitle>
        <StyleBestMain>
          <StyleLeftArrow onClick={preBestHandler}>{'<'}</StyleLeftArrow>

          <StyleBestList>
            {topList.map((item, idx) => {
              if (idx === 2) {
                return (
                  <Link to={`/makgeolli/list/${item.id}`}>
                    <BestMain
                      item={item}
                      index={state.findIndex(i => i.id === item.id)}
                      key={item.id}
                    />
                  </Link>
                );
              }
              return (
                <Link to={`/makgeolli/list/${item.id}`}>
                  <BestSide
                    item={item}
                    index={state.findIndex(i => i.id === item.id)}
                    key={item.id}
                  />
                </Link>
              );
            })}
          </StyleBestList>

          <StyleRightArrow onClick={nextBestHandler}>{'>'}</StyleRightArrow>
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
  width: 100vw;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;

const StyleTitle = styled.div`
  font-size: 2rem;
  text-align: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.5rem;
  }
`;

const StyleBestBox = styled.div`
  margin: 0 3vmin;
  padding-top: 8vmin;
  background-color: lightsalmon;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleBestMain = styled.div`
  width: 100%;
  height: 45vh;
  background-color: lightslategray;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: space-evenly;
  }

  @media ${props => props.theme.desktop} {
    justify-content: center;
  }
`;

const StyleLeftArrow = styled.div`
  cursor: pointer;
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin: 0 4vmin 0 0;
  }
`;

const StyleRightArrow = styled.div`
  cursor: pointer;
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

const StyleBoder = styled.div`
  border: 2px white solid;
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

const StyleMobileList = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vmin 0;
`;

export default BestMakgeollis;
