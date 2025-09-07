import styled from "styled-components";
import { colors } from "../../styles/themes";

export const Gradient = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -2;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 30%,
    ${colors.brand.primary} 50%,
    rgba(0, 0, 0, 1) 100%
  );

  @media (max-width: 1024px) {
    #background-shape {
      display: none;
    }
  }
`;

export const Divisor = styled.div`
  width: 90%;
  height: 5px;
  background-color: ${colors.brand.primary};
  margin: 80px auto;
`;
