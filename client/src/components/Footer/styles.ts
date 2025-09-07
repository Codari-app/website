import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const FooterStyles = styled.footer`
  background-color: ${colors.brand.terciary};
  padding: 212px 65px 60px 65px;

  & > svg {
    width: 30px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  color: ${colors.brand.white};
  gap: 130px;
  font-size: ${fonts.sizes.xxsmall};
  font-weight: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 50px;

    h4 {
      font-size: 1rem;
    }

    li {
      font-size: 0.9rem;
    }
  }
`;

export const Social = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialSquare = styled.div`
  border: 1px solid ${colors.brand.white};
  width: 30px;
  height: 30px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
