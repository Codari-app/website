import type { ReactNode } from "react";
import { SectionContainer } from "./styles";

type SectionProps = {
    children: ReactNode;
    width?: string;
    flex?: boolean;
    id?: string;
}

export function Section({children, width, flex, id}: SectionProps) {
    return (
        <SectionContainer $width={width} $flex={flex} id={id}>{children}</SectionContainer>
    )
}