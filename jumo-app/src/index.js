import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';
import theme from './styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

axios.defaults.withCredentials = true;
