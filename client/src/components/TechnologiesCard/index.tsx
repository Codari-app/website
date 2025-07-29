import type { ReactNode } from "react";
import { TechnologiesCardContainer, TechsContainer, TechsItem } from "./styles";

type TechnologiesCardProps = {
  icon: ReactNode;
  title: string;
  techs: string[];
};

export default function TechnologiesCard({
  icon,
  title,
  techs,
}: TechnologiesCardProps) {
  return (
    <TechnologiesCardContainer>
      {icon}
      <h3>{title}</h3>
      <TechsContainer>
        {techs.map((tech, index) => (
          <TechsItem key={index}>{tech}</TechsItem>
        ))}
      </TechsContainer>
    </TechnologiesCardContainer>
  );
}
