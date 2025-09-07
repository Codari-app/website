import styled from "styled-components";
import { colors } from "../../styles/themes";

export const CasesStyles = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .swiper {
    width: 100%;
    max-width: 1300px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper {
    cursor: grab;
  }
  .swiper:active {
    cursor: grabbing;
  }
`;

export const CaseCard = styled.div`
  border-radius: 25px;
  border: 2px solid ${colors.brand.primary};
  background: #000;
  width: 410px;
  min-width: 410px;
  flex-shrink: 0;

  img {
    width: 100%;
    border-radius: 25px 25px 0 0;
    pointer-events: none;
    user-select: none;
  }
`;

export const CaseDescription = styled.div`
  background: ${colors.brand.white};
  border-radius: 0 0 22px 22px;

  p {
    font-size: 27px;
    padding: 20px 0;
    text-align: center;
    user-select: none;
  }
`;
