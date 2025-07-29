// BurgerMenuStyles.ts
import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const BurgerMenuStyles = createGlobalStyle`
  @media (min-width: 850px) {
    .bm-burger-button,
    .bm-menu-wrap {
      display: none !important;
    }
  }

  .bm-burger-button {
    position: fixed;
    width: 26px;
    height: 20px;
    right: 50px;
    top: 43px;
    z-index: 9999;
  }

  .bm-burger-bars {
    background: ${colors.primary};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #000;
  }

  .bm-menu-wrap {
    height: 300px !important;
  }

  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em;
    font-size: 1.15em;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .menu-item {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;
  }

  .menu-item:hover {
    color: #007bff;
  }

  .menu-item.active {
    font-weight: bold;
  }
`;
