import FooterLogo from "../FooterLogo";
import { FooterContent, FooterStyles, Social, SocialSquare } from "./styles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <FooterStyles>
      <FooterContent>
        <FooterLogo />
        <div>
          <p>{import.meta.env.VITE_PHONE}</p>
          <p>{import.meta.env.VITE_EMAIL}</p>
          <Social>
            <SocialSquare
              onClick={() =>
                window.open(`${import.meta.env.VITE_INSTAGRAM}`, "_blank")
              }
            >
              <FaInstagram />
            </SocialSquare>
            <SocialSquare
              onClick={() =>
                window.open(`${import.meta.env.VITE_WHATSAPP}`, "_blank")
              }
            >
              <FaWhatsapp />
            </SocialSquare>
          </Social>
        </div>
        <ul>
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#partners">Parceiros</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#cases">Cases</a>
          </li>
          <li>
            <a href="#contact">Formulário</a>
          </li>
        </ul>
      </FooterContent>
    </FooterStyles>
  );
}

export default Footer;
