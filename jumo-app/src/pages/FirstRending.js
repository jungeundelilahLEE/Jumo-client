import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

import firstImage from '../images/RenderFirst.jpg';

function FirstRending() {
  const FirstChapter = styled.div`
    display: flex;
    background-image: url(${firstImage});
    background-size: cover;
    width: 100vw;
    height: 100vh;
  `;
  const More = styled.button`
    width: 100px;
    height: 20px;
  `;
  const FirstTitle = styled.div`
    font-size: 5rem;
  `;
  return (
    <FirstChapter>
      <FirstTitle>세상의 모든 막걸리</FirstTitle>
      <Link to="/makgeolli/info">
        <More>더 알아보기</More>
      </Link>
    </FirstChapter>
  );
}

export default FirstRending;
