import styled from "styled-components";
import { fontsSizes } from "../../styles/theme";

export const SubtitleContainer = styled.h3<{$textalign?: string}>`
  font-size: ${fontsSizes.medium};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: ${props => props.$textalign || "left"};
`;