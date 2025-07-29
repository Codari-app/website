import styled from "styled-components";

export const ParagraphContainer = styled.p<{ $width?: string }>`
  font-weight: 500;
  letter-spacing: 1.1px;
  width: ${(props) => props.$width || "100%"};
`;
