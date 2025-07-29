import styled from "styled-components";
import { colors, fontsSizes } from "../../styles/theme";

export const ButtonContainer = styled.button<{ $fill?: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.$fill ? colors.primary : colors.white)};
  color: ${(props) => (props.$fill ? colors.white : colors.primary)};
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 12.439px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 18px;
  font-size: ${fontsSizes.xsmall};

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
