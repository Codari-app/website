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
          Na Codari, desenvolvemos sistemas personalizados para atender
          exatamente às necessidades do seu negócio. Seja uma aplicação web,
          mobile ou uma solução integrada, entregamos software de alta
          performance, escalável e pronto para evoluir com sua empresa.
        </ServicesBox>
        <ServicesBox
          icon={<SoftwareMaintentance />}
          subtitle="Manutenção de Software"
        >
          Seu sistema precisa evoluir com o seu negócio. Oferecemos manutenção
          contínua, melhorias, correções e suporte técnico para garantir que sua
          solução continue segura, eficiente e atualizada.
        </ServicesBox>
        <ServicesBox
          icon={<MobileDevelopment />}
          subtitle="Desenvolvimento Mobile"
        >
          Construímos aplicativos modernos, rápidos e intuitivos para Android e
          iOS. Unimos design e performance para criar experiências móveis que
          encantam usuários e geram valor real para sua empresa.
        </ServicesBox>
        <ServicesBox icon={<WebApplication />} subtitle="Aplicação Web">
          Desenvolvemos plataformas web robustas, responsivas e com ótima
          experiência de uso. Ideal para empresas que buscam agilidade,
          escalabilidade e controle total do seu sistema.
        </ServicesBox>
        <ServicesBox
          icon={<UXDesign width={100} height={100} />}
          subtitle="UI/UX Design"
        >
          Projetamos interfaces intuitivas, modernas e centradas no usuário.
          Unimos estética e funcionalidade para criar experiências digitais que
          encantam e convertem.
        </ServicesBox>
        <ServicesBox icon={<SoftwareTesting />} subtitle="Teste de Software">
          Garantimos que sua aplicação funcione com excelência antes de ir para
          o ar. Realizamos testes funcionais, automatizados e de usabilidade
          para assegurar estabilidade, segurança e uma ótima experiência ao
          usuário.
        </ServicesBox>
      </ServicesContainer>
    </Section>
  );
}
