import { ButtonStyles } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return <ButtonStyles>{children}</ButtonStyles>;
}

export default Button;
