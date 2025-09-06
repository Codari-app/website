import styled from "styled-components";

export const AboutStyles = styled.section`
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 200px;
  }

`;

export const AboutContent = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Shapes = styled.div`
  position: relative;

  svg {
    position: absolute;
    margin: 0 400px;
    top: -200px;

    &#right {
      right: 0;
    }

    &#left {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
