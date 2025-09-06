import type { ReactNode } from "react";
import { TitleStyles } from "./styles";

type TitleProps = {
  children: ReactNode;
  variant: "blue" | "white";
};

function Title({ children, variant }: TitleProps) {
  return <TitleStyles $variant={variant}>{children}</TitleStyles>;
}

export default Title;
