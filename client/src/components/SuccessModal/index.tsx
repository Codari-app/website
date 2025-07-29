import { useModal } from "../../context/ModalContext";
import Button from "../Button";
import { Box, Container } from "./styles";

export default function SuccessModal() {
  const { closeModal } = useModal();

  return (
    <Container onClick={() => closeModal()}>
      <Box>
        <h2>✅ Mensagem enviada com sucesso!</h2>
        <p>Entraremos em contato o mais breve possível.</p>
        <Button onclick={() => closeModal()}>Fechar</Button>
      </Box>
    </Container>
  );
}
