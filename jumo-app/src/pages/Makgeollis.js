/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSearchItem from '../atoms/useSearchItem';
import BestMakgeollis from './BestMakgeollis';
import MakgeolliCard from '../components/MakgeolliCard';
// import Header from './header';

import res from '../atoms/dummyMaks';

const Makgeollis = ({ lastItemElementRef, makgeolls, isLoading, error }) => {
  // const [query, setQuery] = useState('');
  // const [pageNum, setPageNum] = useState(1);
  // const { isLoading, error, books, hasMore } = useSearchItem(query, pageNum);

  // const observer = useRef();
  // const lastBookElementRef = useCallback(
  //   node => {
  //     if (isLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver(entries => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNum(prev => prev + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isLoading, hasMore],
  // );

  // const handleChange = e => {
  //   setQuery(e.target.value);
  //   setPageNum(1);
  // };

  return (
    <StyleMakgeollis>
      {/* <Header handleChange={handleChange} value={query} /> */}
      <BestMakgeollis />
      <StyleResultText>
        총<StyleResultNumber>{makgeolls.length}</StyleResultNumber>
        개의 막걸리가 검색되었습니다.
      </StyleResultText>

      <StyleListBox>
        {makgeolls.length ? (
          <>
            {makgeolls.map((item, index) => {
              if (makgeolls.length === index + 1) {
                return (
                  <Link to={`/makgeolli/list/${item.id}`}>
                    <div key={item.id} ref={lastItemElementRef}>
                      <MakgeolliCard item={item} key={item.id} />
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link to={`/makgeolli/list/${item.id}`}>
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

        {/* <div className="test">
          <h1>Search Book</h1>
          <input type="text" onChange={handleChange} value={query} />
          {books.map((book, i) => {
            if (books.length === i + 1) {
              return (
                <div key={i} ref={lastBookElementRef}>
                  {book}
                </div>
              );
            } else {
              return <div key={i}>{book}</div>;
            }
          })}
          <div>{isLoading && 'Loading...'}</div>
          <div>{error && 'Error...'}</div>
        </div> */}
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
