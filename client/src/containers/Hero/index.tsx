import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import scrollToSection from "../../utils/scrollToSection";
import { HeroStyles } from "./styles";

function Hero() {
  return (
    <HeroStyles id="hero">
      <h1>New Era Of The Software Market.</h1>
      <Paragraph width={40} margin={30}>
        Criamos <span className="special">Softwares</span> que fazem a diferença, combinamos <span className="special">Design Estratégico </span>
        com <span className="special">Tecnologia de ponta</span>.
      </Paragraph>
      <Button onClick={() => scrollToSection("contact")}>Programe seu futuro!</Button>
      <p>*Crie sua identidade digital</p>
    </HeroStyles>
  );
}

export default Hero;
