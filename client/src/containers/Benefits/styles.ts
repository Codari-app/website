import styled from "styled-components";
import { colors } from "../../styles/themes";

export const BenefitsStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 218px;

  button {
    margin-top: 100px;
  }
`;

export const BenefitsCardsContainer = styled.div`
  color: ${colors.brand.white};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 90px;
`;

export const BenefitsCardsTitle = styled.div`
  border-radius: 16.304px;
  border: 2.329px solid ${colors.brand.primary};
  background: ${colors.brand.white};
  text-align: center;
  width: 330px;
  padding: 20px;
  margin: 0 auto;

  h3 {
    color: ${colors.brand.primary};
    font-size: 29px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const BenefitsCards = styled.div`
  border-radius: 16.304px;
  border: 2.329px solid ${colors.brand.primary};
  background: ${colors.black.black1};
  width: 400px;
  padding: 47px 24px;

  p {
    &:last-child {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
