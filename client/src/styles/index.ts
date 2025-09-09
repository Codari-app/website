import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./themes";

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

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: ${colors.brand.white};
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

    img {
      -webkit-user-drag: none;
      -moz-user-drag: none;
      -ms-user-drag: none;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      pointer-events: none;
    }

  .special {
    color: ${colors.brand.primary};
  }

  .special-secondary {
    color: ${colors.brand.secondary};
  }
`;
