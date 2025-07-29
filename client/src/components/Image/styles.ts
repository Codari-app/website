import styled, { css } from "styled-components";
import { colors } from "../../styles/theme";

type ImgProps = {
  $src: string;
  $type: 1 | 2 | 3 | 4;
};

export const Img = styled.div<ImgProps>`
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.$type === 1 &&
    css`
      position: absolute;
      box-shadow: 0px 0px 17.585px 11.43px ${colors.shadow};
      width: 300px;
      height: 300px;
      top: 0;
      right: 0;
      border-top-right-radius: 24px;

      @media (max-width: 768px) {
        right: 50%;
      }
    `}

  ${(props) =>
    props.$type === 2 &&
    css`
      position: absolute;
      box-shadow: 0px 0px 17.585px 11.43px ${colors.shadow};
      width: 230px;
      height: 230px;
      top: 70%;
      right: 100%;
      border-bottom-left-radius: 16px;
    `}

  ${(props) =>
    props.$type === 3 &&
    css`
      position: absolute;
      box-shadow: 0px 0px 17.585px 11.43px ${colors.shadow};
      width: 160px;
      height: 160px;
      top: 90%;
      left: 20%;
      right: 40px;
      border-radius: 50%;

      @media (max-width: 768px) {
        left: 10%;
      }
    `}

     ${(props) =>
    props.$type === 4 &&
    css`
      width: 400px;
      height: 400px;
      border-radius: 0 100px;
      width: 100%;
    `}
`;
