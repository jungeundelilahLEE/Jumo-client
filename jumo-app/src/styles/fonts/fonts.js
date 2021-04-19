import { createGlobalStyle } from 'styled-components';
import SansationRegular from './Sansation_Regular.ttf';
import Sunflower from './Sunflower-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Sansation';	
    src: local(Sansation_Regular), local(Sunflower-Medium);
    url(${SansationRegular}) format("ttf");
    font-weight: 300; 		
    font-style: normal;
}
  `;
