import React from 'react';
import styled from 'styled-components';
import BestMain from '../components/BestMain';
import BestSide from '../components/BestSide';

import res from '../atoms/dummyMaks';

const BestMakgeollis = () => {
  // const [topList, setTopList] = useState([]);

  //! dummy data => server
  // test
  // const { data } = res;
  // setTopList(data.slice(4));
  // useEffect(() => {
  //   const { data } = res;
  //   setTopList(data.slice(4));
  // }, []);

  const { data } = res;
  const topList = data.slice(0, 5);
  const mobileTopList = data.slice(1, 4);

  return (
    <StyleListTop>
      <StyleBestBox>
        <StyleTitle>많이 찾는 막걸리(TOP 10)</StyleTitle>
        <StyleBestMain>
          <StyleLeftArrow>{'<'}</StyleLeftArrow>

          <StyleBestList>
            {topList.map((item, idx) => {
              if (idx === 2) {
                return <BestMain item={item} index={idx} key={item.id} />;
              }
              return <BestSide item={item} index={idx} key={item.id} />;
            })}
          </StyleBestList>

          <StyleRightArrow>{'>'}</StyleRightArrow>
        </StyleBestMain>
      </StyleBestBox>

      <StyleMobileList>
        {mobileTopList.map((item, idx) => {
          if (idx === 1) {
            return (
              <StyleBoder>
                <StyleMobileImg item={item} index={idx} key={item.id} />
              </StyleBoder>
            );
          }
          return <StyleMobileImg item={item} index={idx} key={item.id} />;
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
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin: 0 4vmin 0 0;
  }
`;

const StyleRightArrow = styled.div``;

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

const StyleMobileImg = styled.div`
  display: block;
  background-image: ${props => `url(${props.item.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 20vh;
  margin: 2vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: none;
  }

  @media ${props => props.theme.desktop} {
    width: 150px;
    height: 30vh;
    margin: 0 4vmin 0 0;
  }
`;

export default BestMakgeollis;
