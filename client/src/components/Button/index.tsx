import type { ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
    children: ReactNode;
    fill?: boolean;
    type?: "button" | "reset" | "submit";
    onclick?: () => void;
};

export default function Button({children, fill, type, onclick}: ButtonProps) {
    return (
        <ButtonContainer $fill={fill} type={type} onClick={onclick}>{children}</ButtonContainer>
    );
}