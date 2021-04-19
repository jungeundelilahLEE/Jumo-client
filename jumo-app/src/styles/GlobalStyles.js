import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  *{
    box-sizing: border-box;
  }

  body {
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-size: 14px;
    /* background-color: rgba(20, 20, 20, 1); */
    /* color: white; */
    overflow: scroll; 
    overflow-y: scroll; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  textarea:focus {
    outline: none;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
`;

export default GlobalStyles;
