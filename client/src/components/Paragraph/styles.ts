import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

type ParagraphStylesProps = {
  $width: number;
  $margin: number;
}

export const ParagraphStyles = styled.p<ParagraphStylesProps>`
  color: ${colors.brand.white};
  text-align: center;
  margin: ${props => props.$margin || 0}px;
  font-size: ${fonts.sizes.xxsmall};
  width: ${props => props.$width}%;

    @media (max-width: 768px) {
    width: 80%;
  }
`;
