import { Img } from "./styles";

type ImageProps = {
  src: string;
  type: 1 | 2 | 3 | 4;
};

export default function Image({ src, type }: ImageProps) {
  return <Img $src={src} $type={type} />;
}
