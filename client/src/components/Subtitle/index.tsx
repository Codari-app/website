import type { ReactNode } from "react";
import { SubtitleContainer } from "./styles";

type SubtitleProps = {
  children: ReactNode;
  textalign?: string;
};

export default function Subtitle({ children, textalign }: SubtitleProps) {
  return <SubtitleContainer $textalign={textalign}>{children}</SubtitleContainer>;
}
