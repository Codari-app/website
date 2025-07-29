import styled from "styled-components";
import { colors, fontsSizes } from "../../styles/theme";

export const Main = styled.main`
    max-width: 900px;
    margin: 0 auto;
    padding: 50px 2rem 4rem 2rem;
`;

export const ContentCard = styled.div`
    background: ${colors.white};
    border-radius: 16px;
    padding: 3rem;
    box-shadow: 0 8px 32px ${colors.shadow};
    border: 1px solid rgba(7, 50, 110, 0.1);
`;

export const Title = styled.h1`
    color: ${colors.primary};
    font-size: ${fontsSizes.medium};
    font-weight: 700;
    margin: 0 0 1rem 0;
    text-align: center;
    letter-spacing: -0.01em;
`;

export const LastUpdated = styled.p`
    color: ${colors.header};
    font-size: ${fontsSizes.xsmall};
    text-align: center;
    margin: 0 0 3rem 0;
    font-style: italic;
`;

export const SectionTitle = styled.h2`
    color: ${colors.primary};
    font-size: ${fontsSizes.xmedium};
    font-weight: 600;
    margin: 2.5rem 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(7, 50, 110, 0.1);
    
    &:first-of-type {
        margin-top: 0;
    }
`;

export const Paragraph = styled.p`
    color: #333;
    font-size: ${fontsSizes.xsmall};
    line-height: 1.7;
    margin: 0 0 1.5rem 0;
    text-align: justify;
`;

export const List = styled.ul`
    color: #333;
    font-size: ${fontsSizes.xsmall};
    line-height: 1.7;
    margin: 0 0 1.5rem 0;
    padding-left: 1.5rem;
`;

export const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

export const ContactInfo = styled.div`
    background: linear-gradient(135deg, ${colors.primary} 0%, #0a4085 100%);
    color: ${colors.white};
    padding: 2rem;
    border-radius: 12px;
    margin-top: 3rem;
    text-align: center;
`;

export const ContactTitle = styled.h3`
    font-size: ${fontsSizes.small};
    font-weight: 600;
    margin: 0 0 1rem 0;
`;

export const ContactText = styled.p`
    font-size: ${fontsSizes.xsmall};
    margin: 0;
    opacity: 0.9;
`;
