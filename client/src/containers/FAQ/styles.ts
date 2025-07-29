import styled from "styled-components";

export const Container = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1rem;

  h3 {
    text-align: center;
  }
`;

export const FaqItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  padding: 1rem;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? "#0056b3" : "#333")};
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
  }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "0 1rem 1rem" : "0 1rem")};
  font-size: 0.95rem;
  color: #555;
`;
