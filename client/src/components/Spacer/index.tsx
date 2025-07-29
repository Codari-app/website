import { Container } from "./styles";

type SpacerProps = {
  size: string;
};

export default function Spacer({ size }: SpacerProps) {
  return <Container $size={size}></Container>;
}
