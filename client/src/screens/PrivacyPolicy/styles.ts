import styled from "styled-components";
import { colors, fontsSizes } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.white} 0%, #f8f9ff 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 50px;
`;

export const Content = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 40px ${colors.shadow};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.shadow} 100%);
    border-radius: 20px 20px 0 0;
  }
`;

export const SectionTitle = styled.h3`
  color: ${colors.primary};
  font-size: ${fontsSizes.xmedium};
  font-weight: 600;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.header};
  
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Paragraph = styled.p`
  color: #444;
  font-size: ${fontsSizes.xsmall};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
`;

export const List = styled.ul`
  color: #444;
  font-size: ${fontsSizes.xsmall};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  
  &::marker {
    color: ${colors.primary};
  }
`;

export const ContactInfo = styled.div`
  background: linear-gradient(135deg, ${colors.primary}10 0%, ${colors.shadow}10 100%);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border-left: 4px solid ${colors.primary};
`;

export const ContactTitle = styled.h4`
  color: ${colors.primary};
  font-size: ${fontsSizes.small};
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

export const ContactText = styled.p`
  color: #555;
  font-size: ${fontsSizes.xsmall};
  line-height: 1.6;
  margin: 0.5rem 0;
`;

export const Footer = styled.footer`
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  padding: 2rem;
  font-size: ${fontsSizes.xsmall};
  opacity: 0.9;
`;

export const LastUpdated = styled.div`
  text-align: right;
  color: #666;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.header};
`;