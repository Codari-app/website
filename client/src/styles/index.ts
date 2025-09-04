import { createGlobalStyle } from "styled-components";
import { fonts } from "./themes";

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Bahnschrift';
    src: url('../fonts/Bahnschrift.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.typography.primary};
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
