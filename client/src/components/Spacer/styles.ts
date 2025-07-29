import styled from "styled-components";

export const Container = styled.div<{ $size: string }>`
  height: ${(props) => props.$size};
`;
