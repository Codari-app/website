import MobileDevelopment from "../../components/Icons/MobileDevelopment";
import SoftwareDevelopment from "../../components/Icons/SoftwareDevelopment";
import SoftwareMaintentance from "../../components/Icons/SoftwareMaintenance";
import SoftwareTesting from "../../components/Icons/SoftwareTesting";
import UXDesign from "../../components/Icons/UXDesign";
import WebApplication from "../../components/Icons/WebApplication";
import { Section } from "../../components/Section";
import ServicesBox from "../../components/ServicesBox";
import Subtitle from "../../components/Subtitle";
import { ServicesContainer } from "./styles";

export default function Services() {
  return (
    <Section width="100%" id="services">
      <Subtitle textalign="center">Nossos Serviços</Subtitle>
      <ServicesContainer>
        <ServicesBox
          icon={<SoftwareDevelopment />}
          subtitle="Desenvolvimento de Software"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
        <ServicesBox
          icon={<SoftwareMaintentance />}
          subtitle="Manutenção de Software"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
        <ServicesBox
          icon={<MobileDevelopment />}
          subtitle="Desenvolvimento Mobile"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
        <ServicesBox icon={<WebApplication />} subtitle="Aplicação Web">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
        <ServicesBox
          icon={<UXDesign width={100} height={100} />}
          subtitle="UI/UX Design"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
        <ServicesBox icon={<SoftwareTesting />} subtitle="Teste de Software">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
          illum dolorum culpa earum eius quis officiis ratione incidunt, magni
          magnam perferendis eligendi reprehenderit cumque architecto facere,
          dolor modi libero?
        </ServicesBox>
      </ServicesContainer>
    </Section>
  );
}
