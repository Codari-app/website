import styled from "styled-components";
import { colors } from "../../styles/themes";

export const Gradient = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -2;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 70%,
    ${colors.brand.primary} 100%
  );

  @media (max-width: 1024px) {
    #background-shape {
      display: none;
    }
  }
`;
