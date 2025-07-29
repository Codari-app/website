import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Background = styled.div<{ $image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  height: 70vh;
  padding: 0 44px;

  h1 {
    width: 50%;
    color: ${colors.white};
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    h1 {
      width: 100%;
    }
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    padding: 0 20px;

    h1 {
      width: 70%;
    }
  }
`;
