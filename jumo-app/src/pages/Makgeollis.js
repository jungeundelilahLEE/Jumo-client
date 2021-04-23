/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSearchItem from '../atoms/useSearchItem';
import BestMakgeollis from './BestMakgeollis';
import MakgeolliCard from '../components/MakgeolliCard';
// import Header from './header';

const Makgeollis = ({
  lastItemElementRef,
  pick,
  isLoading,
  error,
  channelHandler,
  navHeader,
  setNavHeader,
}) => {
  useEffect(() => {
    if (!navHeader) {
      setNavHeader(true);
    }
    channelHandler('Makgeolli');
  }, []);

  return (
    <StyleMakgeollis>
      <BestMakgeollis />
      <StyleResultText>
        총<StyleResultNumber>{pick.length}</StyleResultNumber>
        개의 막걸리가 검색되었습니다.
      </StyleResultText>

      <StyleListBox>
        <Div>
          {pick.length ? (
            <>
              {pick.map((item, index) => {
                if (pick.length === index + 1) {
                  return (
                    <Link to={`/makgeolli/list/${item.name}`}>
                      <div key={item.id} ref={lastItemElementRef}>
                        <MakgeolliCard item={item} key={item.id} />
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <Link to={`/makgeolli/list/${item.name}`}>
                      <MakgeolliCard item={item} key={item.id} />
                    </Link>
                  );
                }
              })}

              <div>{isLoading && 'Loading...'}</div>
              <div>{error && 'Error...'}</div>
            </>
          ) : (
            <span>
              막걸리 리스트가 없습니다.
              <br />
              빠른 시일내에 업데이트 하겠습니다.
            </span>
          )}
        </Div>
      </StyleListBox>
    </StyleMakgeollis>
  );
};

const StyleMakgeollis = styled.div`
  /* padding: 15vmin 0 !important; */
  display: flex;
  flex-direction: column;
  border: 10px solid orange;
  width: 100vw;
  background-color: #f2eeed;
  @media ${props => props.theme.tablet} {
    padding: 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleResultText = styled.div`
  display: flex;
  padding: 2vmin 4vmin;
  font-size: 1.4rem;
  text-align: center;
  align-items: baseline;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 1em;
  @media ${props => props.theme.tablet} {
    padding: 0 0 6vmin 0;
  }
  @media ${props => props.theme.desktop} {
    padding: 6vmin 0;
    font-size: 2rem;
    display: flex;
    text-align: center;
    align-items: baseline;
    justify-content: center;
    margin-top: 2em;
  }
`;

const StyleResultNumber = styled.div`
  font-size: 2rem;
  color: red;
  padding: 0 1.3vmin 0 1.3vmin;
  @media ${props => props.theme.tablet} {
    font-size: 2rem;
    color: red;
    padding: 0 1.3vmin 0 1.3vmin;
  }
  @media ${props => props.theme.desktop} {
    font-size: 4rem;
    color: red;
    padding: 0 1.3vmin 0 1.3vmin;
  }
`;

//! 전체 가운데정렬위해 쓴거니까 알맞은 자리에 넣기
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* border: 2px solid rgba(41, 56, 72, 0.4); */
  /* width: 100vw; */
  /* border: 3px dashed deeppink; */
  margin: 0;

  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(41, 56, 72, 0.4);
    margin: 1em;
    /* border: thick double rgba(41, 56, 72, 0.4); */
    /* box-shadow: outset 0px 0px 40px 40px #dba632; */
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 5px solid rgba(41, 56, 72, 0.3);
    /* border: 3px dashed deeppink; */
  }
`;

const StyleListBox = styled.div`
  box-shadow: inset 0px 0px 10px 10px rgba(41, 56, 72, 0.2);
  /* border: thick double rgba(41, 56, 72, 0.8); */
  /* border: 5px solid skyblue; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  /* justify-content: center; */
  padding: 3em;
  width: 90vw;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    /* border: 5px solid rgba(41, 56, 72, 0.7); */
    box-shadow: inset 0px 0px 10px 10px rgba(41, 56, 72, 0.2);
    border: thick double rgba(41, 56, 72, 0.8);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* justify-content: center; */
    padding: 1em;
    width: 90vw;
    margin: 0 auto;
    justify-content: start;
  }

  @media ${props => props.theme.desktop} {
    box-shadow: inset 0px 0px 10px 10px rgba(41, 56, 72, 0.2);
    border: 10px double rgba(41, 56, 72, 0.8);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* justify-content: center; */
    padding: 2.3em;
    width: 90vw;
    margin: 0 auto;
    justify-content: start;
  }
`;

// const StyleMakgeollis = styled.div`
//   padding: 15vmin 0 !important;
//   display: flex;
//   flex-direction: column;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     padding: 0;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleResultText = styled.div`
//   padding: 6vmin 0;
//   font-size: 1.3rem;
//   display: flex;
//   text-align: center;
//   align-items: center;
//   justify-content: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     padding: 0 0 6vmin 0;
//   }

//   @media ${props => props.theme.desktop} {
//   }
// `;

// const StyleResultNumber = styled.div`
//   font-size: 1.8rem;
//   color: red;
//   padding: 0 0 0 1.3vmin;
// `;

// const StyleListBox = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   padding: 0;
//   width: 95vw;
//   margin: 0 auto;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     /* width: 80vw; */
//     width: 800px;
//     justify-content: start;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 870px;
//   }
// `;

export default Makgeollis;
