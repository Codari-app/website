import styled from "styled-components";
import { colors, fonts } from "../../styles/themes";

export const TitleStyles = styled.h2`
  color: ${colors.brand.primary};
  font-size: ${fonts.sizes.xlarge};
  font-weight: 600;
  line-height: 100%;
  width: 40%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
