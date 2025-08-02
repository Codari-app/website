import Image from "../../components/Image";
import Paragraph from "../../components/Paragraph";
import { Section } from "../../components/Section";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";

export default function OurVision() {
  return (
    <Section width="100%" flex>
      <Image
        src="https://res.cloudinary.com/dynwptmib/image/upload/v1753305935/d6b0ad9646f172ff58d5f7d471c08dafb7370db3_rcrbyf.jpg"
        type={4}
      />
      <div>
        <Subtitle>Seu sucesso</Subtitle>
        <Title>Nossa visão</Title>
        <Paragraph width="70%">
          Na Codari, acreditamos que o sucesso dos nossos clientes é o nosso
          maior indicador de qualidade. É por isso que cada projeto é
          desenvolvido com foco total em resultados reais, escalabilidade e
          impacto positivo nos negócios.
        </Paragraph>
        <Paragraph width="70%">
          Mais do que entregar software, queremos ser parte da sua trajetória de
          crescimento. Trabalhamos lado a lado com você para entender seus
          objetivos e transformar tecnologia em valor.
        </Paragraph>
        <Paragraph width="70%" highlight>
          Seu sucesso nos inspira. Nossa visão é caminhar junto com você até lá.
        </Paragraph>
      </div>
    </Section>
  );
}
