import type { ReactNode } from "react";
import { ParagraphContainer } from "./styles";

type ParagraphProps = {
  children: ReactNode;
  width?: string;
  highlight?: boolean;
};

export default function Paragraph({
  children,
  width,
  highlight,
}: ParagraphProps) {
  return (
    <ParagraphContainer className={highlight ? "highlight" : ""} $width={width}>
      {children}
    </ParagraphContainer>
  );
}
