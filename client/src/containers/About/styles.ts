import styled from "styled-components";

export const AboutStyles = styled.section`
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutContent = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Shapes = styled.div`
  svg {
    position: absolute;
    top: 70%;
    margin: 0 100px;

    &#right {
      left: 0;
    }

    &#left {
      right: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
