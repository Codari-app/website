import { useForm, Controller } from "react-hook-form";
import Cleave from "cleave.js/react";
import Button from "../../components/Button";
import { Container, Form, Image } from "./styles";
import ContactImage from "../../assets/contact-image.png";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
};

export default function Contact() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <Container id="contact">
      <Form>
        <h3>Fale conosco!</h3>
        <h2>Entrar em contato</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Seu nome"
            {...register("name", { required: "O nome é obrigatório" })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um e-mail válido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "O número é obrigatório",
              pattern: {
                value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                message: "Número inválido. Ex: (11) 91234-5678",
              },
            }}
            render={({ field }) => (
              <Cleave
                {...field}
                placeholder="Número de contato"
                options={{
                  delimiters: ["(", ") ", "-", ""],
                  blocks: [0, 2, 5, 4],
                  numericOnly: true,
                }}
              />
            )}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <Button type="submit" fill>
            Enviar
          </Button>
        </form>
      </Form>

      <Image>
        <img src={ContactImage} alt="Entrar em contato" />
      </Image>
    </Container>
  );
}
