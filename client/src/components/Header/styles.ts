import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const HeaderStyles = styled.header`
  background-color: ${colors.brand.primary};
  margin: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 21px;
  border: 2px solid ${colors.black.white};
  padding: 31px 40px;
  backdrop-filter: blur(37.5px);

  ul {
    display: flex;
    align-items: center;
    color: ${colors.black.white};
    gap: 25px;
  }

  li {
    font-family: ${fonts.typography.primary};
    font-size: 14.855px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  button {
    border-radius: 11.141px;
    background: #f9f9f9;
    border: none;
    padding: 14px 39px;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.brand.primary};
      color: ${colors.black.white};
      outline: 2px solid ${colors.black.white};
    }
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }

    svg {
      margin: 0 auto;
    }
  }
`;
