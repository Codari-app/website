import type { ReactNode } from "react";
import { TitleStyles } from "./styles";

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return <TitleStyles>{children}</TitleStyles>;
}

export default Title;
