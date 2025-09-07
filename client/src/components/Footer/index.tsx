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
            <SocialSquare>
              <FaInstagram />
            </SocialSquare>
            <SocialSquare>
              <FaWhatsapp />
            </SocialSquare>
          </Social>
        </div>
        <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Propósito</li>
            <li>Serviços</li>
            <li>Cases</li>
            <li>Formulário</li>
        </ul>
      </FooterContent>
    </FooterStyles>
  );
}

export default Footer;
