import React from 'react';
import styled from 'styled-components';
import TitleRending from './TitleRending';
import FirstRending from './FirstRending';
import SecondRending from './SecondRending';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #293848;
  width: 100%;
  height: auto;
`;

function Rending() {
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
