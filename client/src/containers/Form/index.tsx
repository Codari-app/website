import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IMaskInput } from "react-imask";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { FormContainer, FormStyles, FormTitle } from "./styles";
import type { ContactFormData } from "../../types/contactTypes";
import { useContact } from "../../hooks/useContact";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(14, "Telefone deve estar no formato correto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

function Form() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { handleSendContact, loading, error, success } = useContact();

  const onSubmit = async (data: ContactFormData) => {
    await handleSendContact(data);
    reset();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="text" placeholder="Seu Nome" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <input type="text" placeholder="E-mail" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  mask="(00) 00000-0000"
                  placeholder="Telefone"
                  value={field.value}
                  onAccept={(value) => field.onChange(value)}
                  inputRef={field.ref}
                />
              )}
            />

            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
          <div>
            <textarea
              id="message"
              placeholder="Sua mensagem"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Vamos construir juntos!"}
          </button>

          {success && <p className="success">Mensagem enviada com sucesso!</p>}
          {error && <p className="error">{error}</p>}
        </form>
      </FormContainer>
      <Paragraph width={100} margin={0}>
        Ou se preferir:
      </Paragraph>
    </FormStyles>
  );
}

export default Form;
