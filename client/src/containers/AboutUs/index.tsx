import ImageShowcase from "../../components/ImageShowcase";
import { Section } from "../../components/Section";
import Spacer from "../../components/Spacer";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

export default function AboutUs() {
  return (
    <Section flex id="about">
      <div>
        <Subtitle>Sobre a empresa</Subtitle>
        <Title>
          Estamos comprometidos em oferecer aos nossos clientes serviços
          excepcionais.
        </Title>
        <Paragraph>
          Na Codari, transformamos ideias em soluções digitais sob medida. Somos
          especialistas em desenvolvimento de software por demanda, entregando
          tecnologia que impulsiona negócios.
        </Paragraph>
        <Paragraph>
          Se você precisa de agilidade, inovação e um time que entende os
          desafios da sua empresa — a Codari é a parceira certa. De sistemas
          personalizados a plataformas completas, entregamos mais do que código:
          entregamos resultados.
        </Paragraph>
        <Paragraph highlight>Seu projeto, do seu jeito, com a qualidade que você merece.</Paragraph>
        <Spacer size="30px" />
      </div>
      <ImageShowcase />
    </Section>
  );
}
