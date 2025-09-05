import { ParagraphStyles } from "./styles";

type ParagraphProps = {
  children: React.ReactNode;
  width: number;
  margin: number;
};

function Paragraph({ children, width, margin }: ParagraphProps) {
  return <ParagraphStyles $width={width} $margin={margin}>{children}</ParagraphStyles>;
}

export default Paragraph;
