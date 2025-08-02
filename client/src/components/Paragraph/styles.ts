import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ParagraphContainer = styled.p<{ $width?: string }>`
  font-weight: 500;
  letter-spacing: 1.1px;
  width: ${(props) => props.$width || "100%"};
  margin: 1rem 0;

  &.highlight {
    color: ${colors.primary};
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
