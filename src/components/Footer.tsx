import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

const FooterWrapper = styled.footer`
  background-color: ${colors.graphiteAlt};
  color: ${colors.white};
  padding: 2rem 2rem 1rem 2rem;
  margin-top: 3rem;
  border-radius: 24px 24px 0 0;
  font-family: ${fonts.body};
`;

const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterCol = styled.div`
  min-width: 220px;
  flex: 1;
`;

const FooterLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: ${colors.grayLight};
  margin-top: 2rem;
  font-size: 0.95rem;
`;

const MapImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterCol>
          <strong>Contato</strong><br />
          📞 11 99999-9999<br />
          ✉️ contato@seuescritorio.com.br<br />
          Av. Exemplo, 1234 - Centro, São Paulo/SP
        </FooterCol>
        <FooterCol>
          <strong>Links Úteis</strong><br />
          <FooterLink href="/">Home</FooterLink><br />
          <FooterLink href="/empresa">O Escritório</FooterLink><br />
          <FooterLink href="#">Equipe</FooterLink><br />
          <FooterLink href="#">Áreas de Atuação</FooterLink><br />
          <FooterLink href="#">Utilitários</FooterLink><br />
          <FooterLink href="#">Contato</FooterLink>
        </FooterCol>
        <FooterCol>
          <strong>Redes Sociais</strong><br />
          <FooterLink href="#">Facebook</FooterLink><br />
          <FooterLink href="#">LinkedIn</FooterLink><br />
          <br />
          <strong>Localização</strong><br />
          <MapImage 
            src="https://maps.googleapis.com/maps/api/staticmap?center=Av.+Paulista,+SP&zoom=15&size=220x100&key=FAKEKEY" 
            alt="Mapa" 
          />
        </FooterCol>
      </FooterGrid>
      <Copyright>
        © {new Date().getFullYear()} Seu Escritório. Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
