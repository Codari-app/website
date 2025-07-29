import styled from "styled-components";
import { colors } from "../../styles/theme";

export const CategoriesContainer = styled.div`
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &.active {
    background: linear-gradient(to right, #1e88e5, #8e24aa);
    color: ${colors.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  &:hover {
    background: linear-gradient(to right, #1e88e5, #8e24aa);
    color: ${colors.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.03);
  }
`;
