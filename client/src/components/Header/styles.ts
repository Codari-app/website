import styled from "styled-components";
import { colors } from "../../styles/theme";

export const HeaderContainer = styled.header`
  background-color: ${colors.header};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  backdrop-filter: blur(7.5px);

  img {
    width: 100px;
    height: 100px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;

    li {
      color: ${colors.white};
      cursor: pointer;

      &.active {
        color: ${colors.primary};
      }

      &:hover {
        opacity: 0.8;
      }
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

`;