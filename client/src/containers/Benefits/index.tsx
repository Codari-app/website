import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import benefits from "../../data/benefits";
import scrollToSection from "../../utils/scrollToSection";
import {
  BenefitsCards,
  BenefitsCardsContainer,
  BenefitsCardsTitle,
  BenefitsStyles,
} from "./styles";

function Benefits() {
  return (
    <BenefitsStyles id="differences">
      <Title variant="blue">Por que escolher a Codari?</Title>
      <Paragraph width={30} margin={68}>
        Nossa <span className="special-secondary">abordagem</span> une{" "}
        <span className="special-secondary">técnica</span>,{" "}
        <span className="special-secondary">criatividade</span> e parceria para
        um <span className="special-secondary">resultado único</span>.
      </Paragraph>
      <BenefitsCardsContainer>
        {benefits.map((benefit) => (
          <div key={benefit.id}>
            <BenefitsCardsTitle>
              <h3>{benefit.title}</h3>
            </BenefitsCardsTitle>
            <BenefitsCards>
              {benefit.paragraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.text}</p>
              ))}
            </BenefitsCards>
          </div>
        ))}
      </BenefitsCardsContainer>
      <Button onClick={() => scrollToSection("contact")}>Converse com nosso time!</Button>
    </BenefitsStyles>
  );
}

export default Benefits;
