import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

type TitleStylesProps = {
  $variant: "blue" | "white"
}

export const TitleStyles = styled.h2<TitleStylesProps>`
  color: ${props => props.$variant == "blue" ? colors.brand.primary : colors.brand.white};
  font-size: ${fonts.sizes.xlarge};
  font-weight: 600;
  line-height: 100%;
  width: 45%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
