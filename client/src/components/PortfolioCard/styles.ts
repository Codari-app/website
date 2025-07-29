import styled from "styled-components";

export const PortfolioCardContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
  height: 450px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    user-select: none;
    transition: all 0.3s;
  }
`;

export const Techs = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const TechItem = styled.div`
  border-radius: 50px;
  background: linear-gradient(to right, #f0f0f0, #e0e0e0);
  width: max-content;
  padding: 10px 20px;
  transition: background 0.3s ease, transform 0.2s ease;
  user-select: none;

  &:hover {
    background: linear-gradient(to right, #1e88e5, #8e24aa);
    color: white;
    transform: scale(1.05);
  }
`;
