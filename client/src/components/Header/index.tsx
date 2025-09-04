import HeaderIcon from "../HeaderIcon";
import { HeaderStyles } from "./styles";

function Header() {
  return (
    <HeaderStyles>
      <HeaderIcon />
      <nav>
        <ul>
            <li>Sobre</li>
            <li>Diferenciais</li>
            <li>Serviços</li>
            <li>Portfólio</li>
            <button>Contato</button>
        </ul>
      </nav>
    </HeaderStyles>
  );
}

export default Header;
