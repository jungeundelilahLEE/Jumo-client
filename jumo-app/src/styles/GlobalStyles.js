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
  @font-face {
    font-family: 'Independence_hall';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Independence_hall.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-@font-face {
    font-family: 'Nanum Gothic', sans-serif;;
    src: url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  }
  @font-face {font-family: "Sansation"; src: url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.eot"); src: url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.woff") format("woff"), url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/7a20d101126c5370e8b5811da3569fb4.svg#Sansation") format("svg"); }
`;

export default GlobalStyles;
