import BackEndTech from "../components/Icons/BackEndTech";
import CloudTech from "../components/Icons/CloudTech";
import DatabaseTech from "../components/Icons/DatabaseTech";
import FrontEndTech from "../components/Icons/FrontEndTech";
import MobileTech from "../components/Icons/MobileTech";
import ToolsTech from "../components/Icons/ToolsTech";

export const technologies = [
  {
    icon: FrontEndTech,
    categoryTitle: "Frontend",
    techs: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    icon: BackEndTech,
    categoryTitle: "Backend",
    techs: [
      "Node.js",
      "Python",
      "Java",
      "C#",
      "PHP",
      "Express.js",
      "Django",
      "Spring Boot",
    ],
  },
  {
    icon: DatabaseTech,
    categoryTitle: "Banco de Dados",
    techs: ["PostgreSQL", "MySQL", "Redis", "SQLLite", "Firebase"],
  },
  {
    icon: CloudTech,
    categoryTitle: "Cloud & DevOps",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: MobileTech,
    categoryTitle: "Mobile",
    techs: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin"],
  },
    {
    icon: ToolsTech,
    categoryTitle: "Ferramentas",
    techs: ["Git", "Jira", "Figma", "Postman", "VS Code"],
  },
];
