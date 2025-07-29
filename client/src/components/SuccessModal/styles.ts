import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Box = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  text-align: center;
`;
