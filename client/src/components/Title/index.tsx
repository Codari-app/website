import type { ReactNode } from "react";
import { TitleContainer } from "./styles";

type TitleProps = {
    children: ReactNode
}

export default function Title({children}: TitleProps) {
    return (
        <TitleContainer>{children}</TitleContainer>
    )
}