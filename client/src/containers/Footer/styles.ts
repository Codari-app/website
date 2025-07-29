import styled from "styled-components";
import backgroundImage from "../../assets/footer-bg.jpg";

export const Container = styled.footer`
  background-image: url(${backgroundImage}); /* coloque sua imagem em public/images */
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 4rem 2rem 2rem;
  color: #ffffff;
`;

export const Overlay = styled.div`
  background-color: rgba(
    0,
    0,
    0,
    0.75
  ); /* escurece o fundo para melhor leitura */
  padding: 3rem 2rem;
  border-radius: 12px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const Column = styled.div`
  flex: 1 1 200px;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
    color: #ffffff;
    transition: color 0.2s;

    &:visited {
      color: #ffffff;
    }
  }

  li {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Bottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: #bbbbbb;
`;
