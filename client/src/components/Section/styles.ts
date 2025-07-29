import styled from "styled-components";

export const SectionContainer = styled.section<{ $width?: string, $flex?: boolean }>`
  width: ${(props) => props.$width || "70%"};
  display: ${props => props.$flex ? "flex" : "block"};
  gap: 112px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;