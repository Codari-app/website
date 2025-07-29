import type { ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: ReactNode;
  fill?: boolean;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onclick?: () => void;
};

export default function Button({
  children,
  fill,
  type,
  disabled,
  onclick,
}: ButtonProps) {
  return (
    <ButtonContainer
      $fill={fill}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
}
