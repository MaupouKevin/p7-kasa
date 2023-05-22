import { createGlobalStyle } from 'styled-components'

export const mobileSize = '425px';
export const tabletSize = '992px';

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #FF6060;
  }
`;

export default GlobalStyle