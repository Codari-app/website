import styled from "styled-components";
import { colors } from "../../styles/themes";

export const Gradient = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;

  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, ${colors.brand.secondary} 100%);
`;
