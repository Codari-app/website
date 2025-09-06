import AboutShapeLeft from "../../components/AboutShapeLeft";
import AboutShapeRight from "../../components/AboutShapeRight";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { AboutContent, AboutStyles, Shapes } from "./styles";

function About() {
  return (
    <AboutStyles>
      <Title variant="blue">Da ideia à realidade digital.</Title>
      <Shapes>
        <AboutShapeRight />
        <AboutShapeLeft />
      </Shapes>
      <AboutContent>
        <Paragraph width={50} margin={10}>
          A <span className="special-secondary">Codari</span> é o seu{" "}
          <span className="special-secondary">parceiro estratégico</span> para o
          desenvolvimento de software. Nascemos com a missão de{" "}
          <span className="special-secondary">transformar conceitos</span> em{" "}
          <span className="special-secondary">soluções digitais elegantes</span>{" "}
          e <span className="special-secondary">funcionais</span>.
        </Paragraph>
        <Paragraph width={50} margin={10}>
          Nossa <span className="special-secondary">abordagem</span> se{" "}
          <span className="special-secondary">diferencia</span> ao unir a{" "}
          <span className="special-secondary">precisão</span> do{" "}
          <span className="special-secondary">código</span> com um pensamento de{" "}
          <span className="special-secondary">design</span> que foca em{" "}
          <span className="special-secondary">resultados e propósito</span>.
        </Paragraph>
        <Paragraph width={50} margin={10}>
          Mais do que{" "}
          <span className="special-secondary">prestadores de serviço</span>,
          somos parceiros que constroem o{" "}
          <span className="special-secondary">futuro do seu negócio</span>,
          linha de <span className="special-secondary">código</span> por linha
          de <span className="special-secondary">código</span>.
        </Paragraph>
      </AboutContent>
    </AboutStyles>
  );
}

export default About;
