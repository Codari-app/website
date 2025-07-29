import type { JSX } from "react";
import { Container } from "./styles";

type ServicesBoxProps = {
  children?: React.ReactNode;
  icon: JSX.Element;
  subtitle: string;
};

export default function ServicesBox({
  children,
  icon,
  subtitle,
}: ServicesBoxProps) {
  return (
    <Container>
      {icon}
      <h3>{subtitle}</h3>
      <p>{children}</p>
    </Container>
  );
}
