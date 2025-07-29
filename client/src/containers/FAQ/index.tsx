import { useState } from "react";
import { Container, FaqItem, Question, Answer } from "./styles";
import Subtitle from "../../components/Subtitle";

const faqData = [
  {
    question: "O que é a Codari?",
    answer: "A Codari é uma plataforma especializada no desenvolvimento de softwares personalizados para empresas, oferecendo soluções sob medida."
  },
  {
    question: "A Codari atende empresas de qualquer porte?",
    answer: "Sim! Atuamos com startups, pequenas, médias e grandes empresas que buscam acelerar seus resultados com tecnologia."
  },
  {
    question: "Vocês oferecem manutenção e suporte?",
    answer: "Sim. Nossos serviços incluem suporte contínuo, manutenção evolutiva e correções após o desenvolvimento do software."
  },
  {
    question: "Os projetos são desenvolvidos sob demanda?",
    answer: "Exatamente. Cada solução é criada conforme as necessidades específicas de cada cliente."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Container id="faq">
      <Subtitle>Perguntas Frequentes</Subtitle>
      {faqData.map((item, index) => (
        <FaqItem key={index}>
          <Question onClick={() => toggle(index)} isOpen={openIndex === index}>
            {item.question}
          </Question>
          <Answer isOpen={openIndex === index}>{item.answer}</Answer>
        </FaqItem>
      ))}
    </Container>
  );
}
