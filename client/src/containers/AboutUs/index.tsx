import Button from "../../components/Button";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </Paragraph>
        <Spacer size="30px" />
        <Button fill>Saiba mais</Button>
      </div>
      <ImageShowcase />
    </Section>
  );
}
