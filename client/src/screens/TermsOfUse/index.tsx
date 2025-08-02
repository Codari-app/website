import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { Container } from "../Home/styles";
import {
  Main,
  ContentCard,
  LastUpdated,
  SectionTitle,
  List,
  ListItem,
  ContactInfo,
  ContactTitle,
  ContactText,
} from "./styles";

export default function TermsOfUse() {
  return (
    <Container>
      <Main>
        <ContentCard>
          <Title>Termos de Uso</Title>
          <LastUpdated>Última atualização: 27 de julho de 2025</LastUpdated>

          <SectionTitle>1. Aceitação dos Termos</SectionTitle>
          <Paragraph>
            Ao acessar e utilizar os serviços da Codari, você concorda em
            cumprir e estar vinculado a estes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, não deverá utilizar
            nossos serviços.
          </Paragraph>

          <SectionTitle>2. Descrição dos Serviços</SectionTitle>
          <Paragraph>
            A Codari oferece soluções tecnológicas personalizadas, incluindo
            desenvolvimento de software, consultoria em tecnologia da informação
            e serviços relacionados. Nossos serviços são fornecidos de acordo
            com as especificações acordadas em contratos individuais.
          </Paragraph>

          <SectionTitle>3. Uso Aceitável</SectionTitle>
          <Paragraph>
            Você concorda em utilizar nossos serviços apenas para fins legítimos
            e de acordo com:
          </Paragraph>
          <List>
            <ListItem>Todas as leis e regulamentações aplicáveis</ListItem>
            <ListItem>
              Estes Termos de Uso e quaisquer políticas adicionais
            </ListItem>
            <ListItem>As boas práticas da indústria de tecnologia</ListItem>
            <ListItem>
              Os direitos de propriedade intelectual de terceiros
            </ListItem>
          </List>

          <SectionTitle>4. Propriedade Intelectual</SectionTitle>
          <Paragraph>
            Todos os direitos de propriedade intelectual relacionados aos
            serviços prestados pela Codari, incluindo mas não limitado a
            códigos, designs, documentação e metodologias, permanecem de
            propriedade da Codari, salvo acordo expresso em contrário.
          </Paragraph>

          <SectionTitle>5. Confidencialidade</SectionTitle>
          <Paragraph>
            A Codari se compromete a manter a confidencialidade de todas as
            informações sensíveis compartilhadas durante a prestação de
            serviços. Esperamos o mesmo compromisso de nossos clientes em
            relação às informações confidenciais da Codari.
          </Paragraph>

          <SectionTitle>6. Limitação de Responsabilidade</SectionTitle>
          <Paragraph>
            A Codari não será responsável por danos indiretos, incidentais,
            especiais ou consequenciais decorrentes do uso de nossos serviços.
            Nossa responsabilidade total será limitada ao valor pago pelos
            serviços específicos em questão.
          </Paragraph>

          <SectionTitle>7. Modificações dos Termos</SectionTitle>
          <Paragraph>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
            momento. As alterações entrarão em vigor imediatamente após a
            publicação. É responsabilidade do usuário revisar periodicamente
            estes termos.
          </Paragraph>

          <SectionTitle>8. Rescisão</SectionTitle>
          <Paragraph>
            Estes termos permanecerão em vigor até serem rescindidos por
            qualquer uma das partes. A Codari pode rescindir ou suspender o
            acesso aos serviços imediatamente, sem aviso prévio, por qualquer
            motivo, incluindo violação destes termos.
          </Paragraph>

          <SectionTitle>9. Lei Aplicável</SectionTitle>
          <Paragraph>
            Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer
            disputa será resolvida nos tribunais competentes do Brasil,
            especificamente na comarca de São Paulo.
          </Paragraph>

          <ContactInfo>
            <ContactTitle>10. Contato</ContactTitle>
            <ContactText>
              Se você tiver dúvidas sobre estes termos, entre em contato
              conosco:
            </ContactText>
            <ContactText>
              <strong>E-mail:</strong> termos@codariapp.com.br
            </ContactText>
            <ContactText>
              <strong>Telefone:</strong> (11) 99011-5235
            </ContactText>
            <ContactText>
              <strong>Endereço:</strong> São Paulo, Brasil
            </ContactText>
          </ContactInfo>
        </ContentCard>
      </Main>
    </Container>
  );
}
