import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { Bottom, Column, Container, Content, List, Overlay } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Overlay>
        <Content>
          <Column>
            <Title>Serviços</Title>
            <List>
              <li>Desenvolvimento Web</li>
              <li>Desenvolvimento Mobile</li>
              <li>UI/UX Design</li>
            </List>
          </Column>

          <Column>
            <Title>Plataforma</Title>
            <List>
              <li>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <Link to={"/termos"}>Termos de Uso</Link>
              </li>
              <li>
                <Link to={"/politica-privacidade"}>
                  Política de Privacidade
                </Link>
              </li>
            </List>
          </Column>

          <Column>
            <Title>Suporte</Title>
            <List>
              <li>Fale Conosco</li>
              <li>
                <a href="#faq">Perguntas Frequentes</a>
              </li>
            </List>
          </Column>
        </Content>

        <Bottom>
          © {new Date().getFullYear()} Codari — Todos os direitos reservados.
        </Bottom>
      </Overlay>
    </Container>
  );
}
