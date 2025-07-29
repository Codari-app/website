import { createGlobalStyle } from "styled-components";
import { fontsSizes } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-size: ${fontsSizes.large};
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
  }
`;
