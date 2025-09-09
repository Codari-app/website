import Button from "../../components/Button";
import CodariLogo from "../../components/CodariLogo";
import Title from "../../components/Title";
import scrollToSection from "../../utils/scrollToSection";
import { PartnersContainer, PartnersStyles } from "./styles";

function Partners() {
  return (
    <PartnersStyles id="partners">
      <Title variant="white">
        <span className="special">Negócios</span> que{" "}
        <span className="special">confiam</span> em{" "}
        <span className="special">nossas soluções</span>.
      </Title>
      <PartnersContainer>
        {Array.from({ length: 15 }).map((_, i) => (
          <CodariLogo key={i} />
        ))}
      </PartnersContainer>
      <Button onClick={() => scrollToSection("contact")}>Seja um parceiro também!</Button>
    </PartnersStyles>
  );
}

export default Partners;
