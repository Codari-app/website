import type { ReactNode } from "react";
import { CategoriesContainer } from "./styles";

type CategorieItemProps = {
  icon: ReactNode;
  categoryName: string;
  onclick: () => void;
  active?: boolean;
};

export default function CategorieItem({
  icon,
  categoryName,
  onclick,
  active,
}: CategorieItemProps) {
  return (
    <CategoriesContainer className={active ? "active" : ""} onClick={onclick}>
      {icon}
      <span>{categoryName}</span>
    </CategoriesContainer>
  );
}
