import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { FormContainer, FormStyles, FormTitle } from "./styles";

function Form() {
  return (
    <FormStyles id="contact">
      <Title variant="white">Pronto para começar sua jornada digital?</Title>
      <Paragraph width={30} margin={83}>
        Fale conosco e descubra como a Codari pode transformar sua ideia em um
        software com design e propósito.
      </Paragraph>
      <FormContainer>
        <FormTitle>
          <h3>Formulário de contato:</h3>
        </FormTitle>
        <form>
          <input type="text" placeholder="Seu Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefone" />
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem"
          ></textarea>
          <button>Vamos construir juntos!</button>
        </form>
      </FormContainer>
      <Paragraph width={100} margin={0}>
        Ou se preferir:
      </Paragraph>
      <Button
        onClick={() =>
          window.open(`${import.meta.env.VITE_WHATSAPP}`, "_blank")
        }
      >
        Agende uma reunião!
      </Button>
    </FormStyles>
  );
}

export default Form;
