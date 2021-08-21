import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    overflow: hidden;
    line-height: 1.5;
  }

  .container {
    padding: 0 10px;
  }
`;
