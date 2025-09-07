import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const FormStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${colors.brand.primary} 0%,
    rgba(0, 0, 0, 1) 100%
  ) !important;
  padding-bottom: 145px;

  h2 {
    width: 60%;
    margin-top: 103px;
  }

  p {
    margin-bottom: 17px;
  }
`;

export const FormContainer = styled.div`
  background-color: ${colors.brand.white};
  border-radius: 30px;
  margin: 83px 0;

  form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
    padding: 25px 45px;

    button {
      background: ${colors.brand.primary};
      border-radius: 14px;
      border: 2px solid ${colors.black.black1};
      font-size: 16px;
      color: ${colors.brand.white};
      transition: 0.3s;
      padding: 15px 0;

      &:hover {
        opacity: 0.8;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      width: 80vw;

      button {
        grid-column: 1 / -1;
        width: 100%;
      }
    }
  }

  input,
  textarea {
    border: 0;
    border-bottom: 2px solid ${colors.black.black1};
    padding-bottom: 7px;
    font-size: 16px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${colors.grey.gray2};
      font-size: 16px;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  textarea {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    textarea {
      grid-column: span 1;
    }
  }
`;

export const FormTitle = styled.div`
  border-radius: 30px 30px 0 0;
  background: #0568ff;
  text-align: center;
  padding: 15px 0;
  font-size: ${fonts.sizes.xsmall};
  color: ${colors.brand.white};

  h3 {
    width: 50%;
    margin: 0 auto;
  }
`;
