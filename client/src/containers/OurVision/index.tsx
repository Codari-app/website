import Image from "../../components/Image";
import Paragraph from "../../components/Paragraph";
import { Section } from "../../components/Section";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";

export default function OurVision() {
  return (
    <Section width="100%" flex>
      <Image
        src="https://res.cloudinary.com/dynwptmib/image/upload/v1753305935/d6b0ad9646f172ff58d5f7d471c08dafb7370db3_rcrbyf.jpg"
        type={4}
      />
      <div>
        <Subtitle>Seu sucesso</Subtitle>
        <Title>Nossa visão</Title>
        <Paragraph width="70%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque nam,
          qui quis ab, ducimus eum pariatur labore commodi itaque, ipsum amet
          quaerat dignissimos dolorum molestias perspiciatis repudiandae
          explicabo aliquam!
        </Paragraph>
      </div>
    </Section>
  );
}
