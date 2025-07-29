import type { ReactNode } from "react";
import { PortfolioCardContainer, TechItem, Techs } from "./styles";

type PortfolioCardProps = {
  children: ReactNode;
  src: string;
  alt: string;
  title: string;
  techs: string[];
};

export default function PortfolioCard({
  children,
  src,
  alt,
  title,
  techs,
}: PortfolioCardProps) {
  return (
    <PortfolioCardContainer>
      <img src={src} alt={alt} draggable="false" />
      <h3>{title}</h3>
      <p>{children}</p>
      <Techs>
        {techs.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </Techs>
    </PortfolioCardContainer>
  );
}
