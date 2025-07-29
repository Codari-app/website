import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
  width: 30%;
  text-align: center;
  padding: 40px;
  margin-bottom: 55px;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  h3 {
    margin-bottom: 50px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;
