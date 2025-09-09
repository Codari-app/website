import { ButtonStyles } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;
