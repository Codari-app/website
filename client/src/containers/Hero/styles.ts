import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const HeroStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${colors.brand.white};
    font-size: ${fonts.sizes.large};
    width: 50%;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    &:last-child {
      color: ${colors.grey.gray4};
      margin-top: 20px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${fonts.sizes.big};
      width: 100%;
    }

    p {
      width: 80%;
    }
  }
`;
