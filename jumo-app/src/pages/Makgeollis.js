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
      </StyleListBox>
    </StyleMakgeollis>
  );
};

const StyleMakgeollis = styled.div`
  padding: 15vmin 0 !important;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    padding: 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleResultText = styled.div`
  padding: 6vmin 0;
  font-size: 1.3rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    padding: 0 0 6vmin 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleResultNumber = styled.div`
  font-size: 1.8rem;
  color: red;
  padding: 0 0 0 1.3vmin;
`;

const StyleListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  width: 95vw;
  margin: 0 auto;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    /* width: 80vw; */
    width: 800px;
    justify-content: start;
  }

  @media ${props => props.theme.desktop} {
    width: 870px;
  }
`;

export default Makgeollis;
