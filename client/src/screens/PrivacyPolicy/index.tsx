import Paragraph from "../../components/Paragraph";
import {
  Card,
  ContactInfo,
  ContactText,
  ContactTitle,
  Container,
  Content,
  Footer,
  LastUpdated,
  List,
  ListItem,
  SectionTitle,
} from "./styles";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Content>
        <Card>
          <LastUpdated>Última atualização: 27 de julho de 2025</LastUpdated>

          <SectionTitle>1. Introdução</SectionTitle>
          <Paragraph>
            A Codari está comprometida em proteger e respeitar sua privacidade.
            Esta Política de Privacidade explica como coletamos, usamos,
            divulgamos e protegemos suas informações pessoais quando você
            utiliza nossos serviços, visita nosso site ou interage conosco de
            qualquer forma.
          </Paragraph>

          <SectionTitle>2. Informações que Coletamos</SectionTitle>
          <Paragraph>
            Podemos coletar e processar os seguintes tipos de informações sobre
            você:
          </Paragraph>
          <List>
            <ListItem>
              Informações de identificação pessoal (nome, endereço de e-mail,
              telefone)
            </ListItem>
            <ListItem>
              Informações técnicas (endereço IP, tipo de navegador, sistema
              operacional)
            </ListItem>
            <ListItem>
              Informações de uso (como você usa nossos serviços, páginas
              visitadas, tempo gasto)
            </ListItem>
            <ListItem>
              Informações de comunicação (correspondências, feedbacks,
              solicitações de suporte)
            </ListItem>
          </List>

          <SectionTitle>3. Como Usamos suas Informações</SectionTitle>
          <Paragraph>
            Utilizamos suas informações pessoais para os seguintes propósitos:
          </Paragraph>
          <List>
            <ListItem>Fornecer, operar e manter nossos serviços</ListItem>
            <ListItem>
              Melhorar, personalizar e expandir nossos serviços
            </ListItem>
            <ListItem>
              Comunicar com você, incluindo atendimento ao cliente
            </ListItem>
            <ListItem>
              Processar transações e enviar informações relacionadas
            </ListItem>
            <ListItem>
              Enviar e-mails promocionais e de marketing (com seu consentimento)
            </ListItem>
            <ListItem>
              Detectar, prevenir e resolver problemas técnicos
            </ListItem>
          </List>

          <SectionTitle>4. Compartilhamento de Informações</SectionTitle>
          <Paragraph>
            Não vendemos, comercializamos ou transferimos suas informações
            pessoais para terceiros, exceto nas seguintes circunstâncias:
          </Paragraph>
          <List>
            <ListItem>
              Com provedores de serviços confiáveis que nos auxiliam na operação
              do negócio
            </ListItem>
            <ListItem>Quando exigido por lei ou processo legal válido</ListItem>
            <ListItem>
              Para proteger os direitos, propriedade ou segurança da Codari,
              nossos usuários ou terceiros
            </ListItem>
            <ListItem>
              Em caso de fusão, aquisição ou venda de ativos da empresa
            </ListItem>
          </List>

          <SectionTitle>5. Segurança dos Dados</SectionTitle>
          <Paragraph>
            Implementamos medidas de segurança técnicas e organizacionais
            apropriadas para proteger suas informações pessoais contra acesso
            não autorizado, alteração, divulgação ou destruição. Isso inclui
            criptografia, firewalls, controles de acesso e monitoramento regular
            de segurança.
          </Paragraph>

          <SectionTitle>6. Seus Direitos</SectionTitle>
          <Paragraph>
            De acordo com as leis de proteção de dados aplicáveis, você tem os
            seguintes direitos:
          </Paragraph>
          <List>
            <ListItem>Direito de acesso às suas informações pessoais</ListItem>
            <ListItem>
              Direito de retificação de informações incorretas ou incompletas
            </ListItem>
            <ListItem>
              Direito de exclusão de suas informações pessoais
            </ListItem>
            <ListItem>
              Direito de restringir o processamento de suas informações
            </ListItem>
            <ListItem>Direito à portabilidade dos dados</ListItem>
            <ListItem>
              Direito de retirar o consentimento a qualquer momento
            </ListItem>
          </List>

          <SectionTitle>7. Cookies e Tecnologias Similares</SectionTitle>
          <Paragraph>
            Utilizamos cookies e tecnologias similares para melhorar sua
            experiência em nossos serviços, analisar uso e personalizar
            conteúdo. Você pode controlar o uso de cookies através das
            configurações do seu navegador.
          </Paragraph>

          <SectionTitle>8. Retenção de Dados</SectionTitle>
          <Paragraph>
            Mantemos suas informações pessoais apenas pelo tempo necessário para
            cumprir os propósitos descritos nesta política, exceto quando
            períodos de retenção mais longos são exigidos ou permitidos por lei.
          </Paragraph>

          <SectionTitle>9. Alterações nesta Política</SectionTitle>
          <Paragraph>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Notificaremos você sobre mudanças significativas através de nosso
            site ou outros meios apropriados. O uso continuado de nossos
            serviços após tais alterações constitui sua aceitação da política
            revisada.
          </Paragraph>

          <ContactInfo>
            <ContactTitle>10. Contato</ContactTitle>
            <ContactText>
              Se você tiver dúvidas sobre esta Política de Privacidade ou
              desejar exercer seus direitos, entre em contato conosco:
            </ContactText>
            <ContactText>
              <strong>E-mail:</strong> privacidade@codariapp.tech
            </ContactText>
            <ContactText>
              <strong>Telefone:</strong> (11) 99011-5235
            </ContactText>
            <ContactText>
              <strong>Endereço:</strong> São Paulo, Brasil
            </ContactText>
          </ContactInfo>
        </Card>
      </Content>

      <Footer>© 2025 Codari. Todos os direitos reservados.</Footer>
    </Container>
  );
}
