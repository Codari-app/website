import type { ReactNode } from "react";
import { ParagraphContainer } from "./styles";

type ParagraphProps = {
  children: ReactNode;
  width?: string;
};

export default function Paragraph({ children, width }: ParagraphProps) {
  return <ParagraphContainer $width={width}>{children}</ParagraphContainer>;
}
