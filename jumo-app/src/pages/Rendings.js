import React, { useEffect } from 'react';
import styled from 'styled-components';
import TitleRending from './TitleRending';
import FirstRending from './FirstRending';
import SecondRending from './SecondRending';
import background from '../images/Background2.png';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 51, 0.4),
      rgba(100, 0, 0, 0.3)
    ),
    url(${background});
  background-size: cover;
  width: 100%;
  height: auto;
`;

function Rending({ navHeader, setNavHeader }) {
  useEffect(() => {
    if (navHeader) {
      setNavHeader(false);
    }
  }, []);
  return (
    <>
      <Background>
        <TitleRending />
        <SecondRending />
        <FirstRending />
      </Background>
    </>
  );
}

export default Rending;
