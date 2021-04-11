import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
// import Detail from './pages/Detail';
import BestMakgeollis from './pages/BestMakgeollis';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BestMakgeollis />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
