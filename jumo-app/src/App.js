import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  color: white;
  min-width: 120px;

  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background-color: ${props => props.color || 'blue'};

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택이 가능합니다. */
  &:hover {
    background-color: white;
    color: black;
  }
  & + button {
    margin-left: 1rem;
    color: red;
  }
`;

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 3rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: white;
  background-color: pink;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Button>버튼1</Button>
        <Button color="red">버튼2</Button>
      </Container>
      <header className="App-header">
        <StyledButton>test</StyledButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
