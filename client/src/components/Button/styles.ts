import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const ButtonStyles = styled.button`
  border-radius: 15px;
  border: 2px solid ${colors.black.white};
  background: ${colors.brand.primary};
  color: ${colors.black.white};
  font-size: ${fonts.sizes.xxsmall};
  padding: 18px 61px;
  transition: 0.2s;

  &:hover {
    background-color: ${colors.black.white};
    color: ${colors.brand.primary};
    border: 2px solid ${colors.brand.primary};
  }
`;
