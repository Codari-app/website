import styled from "styled-components";
import { colors } from "../../styles/theme";

export const TechnologiesCardContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  padding: 40px;
  margin: 55px 0;
  height: 500px;
  transition: all 0.3s ease;

  svg {
    width: 130px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 20px;
`;

export const TechsItem = styled.div`
  background: #f1f5f9;
  color: #475569;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.primary};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
  }
`;
