import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import showcase from "../../data/showcase";
import {
  CardsContainer,
  Divisor,
  ShowcaseCard,
  ShowcaseStyles,
  ShowcaseTitle,
} from "./styles";

function Showcase() {
  return (
    <ShowcaseStyles>
      <Title variant="white">O que podemos criar para você?</Title>
      <Paragraph width={28} margin={0}>
        Criamos soluções digitais completas, com foco total no seu sucesso.
      </Paragraph>
      <CardsContainer>
        {showcase.map((showcase) => (
          <div>
            <ShowcaseTitle>{showcase.title}</ShowcaseTitle>
            <Divisor />
            <ShowcaseCard>
              <p>{showcase.description}</p>
            </ShowcaseCard>
          </div>
        ))}
      </CardsContainer>
    </ShowcaseStyles>
  );
}

export default Showcase;
