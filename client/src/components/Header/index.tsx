import scrollToSection from "../../utils/scrollToSection";
import HeaderIcon from "../HeaderIcon";
import { HeaderStyles } from "./styles";

function Header() {
  return (
    <HeaderStyles>
      <HeaderIcon />
      <nav>
        <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#differences">Diferenciais</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#cases">Portfólio</a></li>
            <button onClick={() => scrollToSection("contact")}>Contato</button>
        </ul>
      </nav>
    </HeaderStyles>
  );
}

export default Header;
