import styled from "styled-components";
import { colors } from "../../styles/themes";

export const ShowcaseStyles = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.brand.white};

  & > p {
    margin-top: 75px;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const ShowcaseTitle = styled.h3`
  font-size: 27px;
  text-align: center;
`;

export const Divisor = styled.div`
  height: 3px;
  width: 376px;
  background-color: ${colors.brand.white};
  margin: 20px 0 15px 0;
`;

export const ShowcaseCard = styled.div`
  border-radius: 14px;
  background: ${colors.black.black1};
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  width: 376px;

  p {
    width: 70%;
    text-align: center;
  }
`;
