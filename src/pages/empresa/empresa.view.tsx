import React from 'react';
import Navbar from '../../components/Navbar';
import { colors, fonts } from '../../theme';

const headerTopStyle: React.CSSProperties = {
  background: colors.graphiteAlt,
  color: colors.white,
  fontFamily: fonts.body,
  fontSize: '0.98rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.3rem 2rem',
};
const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.7rem',
};
const logoStyle: React.CSSProperties = {
  fontFamily: fonts.title,
  fontWeight: 800,
  fontSize: '2.1rem',
  color: colors.primary,
  letterSpacing: '1px',
  margin: '1.2rem 0 0.5rem 0',
};
const aboutSection: React.CSSProperties = {
  background: colors.grayLighter,
  padding: '3rem 2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
  maxWidth: 1100,
  margin: '3rem auto',
  borderRadius: '20px',
};
const aboutText: React.CSSProperties = {
  flex: 1,
};
const aboutTitle: React.CSSProperties = {
  fontFamily: fonts.title,
  fontWeight: 800,
  fontSize: '2.2rem',
  color: colors.primary,
  marginBottom: '1rem',
};
const aboutDesc: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '1.15rem',
  color: colors.graphite,
  marginBottom: '1.5rem',
};
const aboutImg: React.CSSProperties = {
  flex: 1,
  maxWidth: 340,
  borderRadius: '16px',
  boxShadow: '0 2px 12px 0 rgba(33,163,124,0.10)',
};
const footerStyle: React.CSSProperties = {
  background: colors.graphiteAlt,
  color: colors.white,
  fontFamily: fonts.body,
  padding: '2rem 2rem 1rem 2rem',
  marginTop: '3rem',
  borderRadius: '24px 24px 0 0',
};
const footerGrid: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: 1100,
  margin: '0 auto',
};
const footerCol: React.CSSProperties = {
  minWidth: 220,
  flex: 1,
};

function EmpresaView() {
  return (
    <div>
      {/* Topbar */}
      {/* Barra preta do topo removida */}
      {/* Logo e Navbar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: colors.white, borderBottom: `1px solid ${colors.grayLight}` }}>
        <Navbar />
      </div>
      {/* Hero Section */}
      <section style={{
        width: '100%',
        minHeight: '340px',
        background: `linear-gradient(90deg, rgba(33,163,124,0.7) 0%, rgba(46,46,46,0.7) 100%), url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1600&q=80') center/cover`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem 3rem 2rem',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontFamily: fonts.title,
          fontWeight: 800,
          fontSize: '2.5rem',
          color: colors.white,
          textAlign: 'center',
          letterSpacing: '-1px',
          marginBottom: '1.1rem',
          textShadow: '0 2px 16px rgba(0,0,0,0.25)'
        }}>
          Quem Somos
        </h1>
        <div style={{
          fontFamily: fonts.body,
          fontSize: '1.15rem',
          color: colors.grayLight,
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: 600,
          textShadow: '0 1px 8px rgba(0,0,0,0.18)'
        }}>
          Conheça a história, missão e valores do nosso escritório de advocacia.
        </div>
        <button style={{
          background: colors.primary,
          color: colors.white,
          fontFamily: fonts.body,
          fontWeight: 700,
          fontSize: '1.05rem',
          border: 'none',
          borderRadius: '8px',
          padding: '0.9rem 2.3rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
          transition: 'background 0.2s',
        }}>
          Fale Conosco
        </button>
      </section>
      {/* Sobre o Escritório */}
      <section style={aboutSection}>
        <div style={aboutText}>
          <div style={aboutTitle}>Sobre o Escritório</div>
          <div style={aboutDesc}>
            Fundado com o propósito de oferecer excelência, ética e resultados concretos, nosso escritório atua em diversas áreas do Direito, sempre com atendimento personalizado e soluções inovadoras.<br /><br />
            Nossa equipe é formada por profissionais experientes, comprometidos com a atualização constante e com a busca dos melhores resultados para nossos clientes. Prezamos pela transparência, confiança e pelo relacionamento próximo, construindo parcerias duradouras.
          </div>
        </div>
        <img style={aboutImg} src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Equipe do escritório" />
      </section>
      {/* Missão, Visão e Valores */}
      <section style={{
        width: '100%',
        background: colors.grayLight,
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2.5rem',
      }}>
        {/* Card Missão */}
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
          padding: '2.2rem 1.5rem',
          minWidth: 220,
          maxWidth: 340,
          flex: '1 1 220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '2.2rem', color: colors.primary, marginBottom: '0.7rem' }}>🎯</span>
          <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.18rem', color: colors.primary, marginBottom: '0.5rem' }}>Missão</div>
          <div style={{ fontFamily: fonts.body, fontSize: '1.05rem', color: colors.graphite }}>Oferecer soluções jurídicas inovadoras, com ética e excelência, promovendo resultados concretos para nossos clientes.</div>
        </div>
        {/* Card Visão */}
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
          padding: '2.2rem 1.5rem',
          minWidth: 220,
          maxWidth: 340,
          flex: '1 1 220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '2.2rem', color: colors.primary, marginBottom: '0.7rem' }}>🌎</span>
          <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.18rem', color: colors.primary, marginBottom: '0.5rem' }}>Visão</div>
          <div style={{ fontFamily: fonts.body, fontSize: '1.05rem', color: colors.graphite }}>Ser referência em advocacia empresarial, reconhecida pela inovação, confiança e resultados.</div>
        </div>
        {/* Card Valores */}
        <div style={{
          background: colors.white,
          borderRadius: '14px',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
          padding: '2.2rem 1.5rem',
          minWidth: 220,
          maxWidth: 340,
          flex: '1 1 220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <span style={{ fontSize: '2.2rem', color: colors.primary, marginBottom: '0.7rem' }}>💡</span>
          <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.18rem', color: colors.primary, marginBottom: '0.5rem' }}>Valores</div>
          <div style={{ fontFamily: fonts.body, fontSize: '1.05rem', color: colors.graphite }}>Ética, transparência, respeito, inovação e compromisso com o cliente.</div>
        </div>
      </section>
      {/* Texto Institucional + Imagem */}
      <section style={{
        width: '100%',
        background: colors.white,
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        maxWidth: 1100,
        margin: '0 auto',
        borderRadius: '20px',
      }}>
        {/* Esquerda: Texto */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{
            fontFamily: fonts.title,
            fontWeight: 800,
            fontSize: '2rem',
            color: colors.graphite,
            marginBottom: '1rem',
          }}>
            Nossa História
          </div>
          <div style={{
            fontFamily: fonts.body,
            fontSize: '1.15rem',
            color: colors.graphiteAlt,
          }}>
            Fundado há mais de 10 anos, nosso escritório nasceu com o propósito de transformar a advocacia empresarial, unindo tradição, inovação e atendimento personalizado. Nossa equipe é formada por profissionais experientes, comprometidos com a excelência e a busca constante por soluções jurídicas eficazes para nossos clientes.
          </div>
        </div>
        {/* Direita: Imagem */}
        <img style={{
          flex: 1,
          maxWidth: 340,
          borderRadius: '16px',
          boxShadow: '0 2px 12px 0 rgba(33,163,124,0.10)',
        }} src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Equipe do escritório" />
      </section>
      {/* Equipe / Liderança */}
      <section style={{
        width: '100%',
        background: colors.grayLight,
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: fonts.title,
          fontWeight: 800,
          fontSize: '2rem',
          color: colors.primary,
          marginBottom: '2.2rem',
          textAlign: 'center',
        }}>
          Nossa Equipe
        </h2>
        <div style={{
          width: '100%',
          maxWidth: 900,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}>
          {/* Card 1 */}
          <div style={{
            background: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
            padding: '2.2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="João Silva" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: `3px solid ${colors.primary}` }} />
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', color: colors.primary, marginBottom: '0.3rem' }}>João Silva</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.graphite, marginBottom: '0.7rem' }}>Sócio Fundador</div>
            <a href="#" style={{ background: colors.primary, color: colors.white, borderRadius: '8px', padding: '0.4rem 1.1rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.98rem', display: 'inline-block', marginTop: '0.3rem' }}>LinkedIn</a>
          </div>
          {/* Card 2 */}
          <div style={{
            background: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
            padding: '2.2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Souza" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: `3px solid ${colors.primary}` }} />
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', color: colors.primary, marginBottom: '0.3rem' }}>Maria Souza</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.graphite, marginBottom: '0.7rem' }}>Advogada Associada</div>
            <a href="#" style={{ background: colors.primary, color: colors.white, borderRadius: '8px', padding: '0.4rem 1.1rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.98rem', display: 'inline-block', marginTop: '0.3rem' }}>LinkedIn</a>
          </div>
          {/* Card 3 */}
          <div style={{
            background: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
            padding: '2.2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Carlos Lima" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: `3px solid ${colors.primary}` }} />
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', color: colors.primary, marginBottom: '0.3rem' }}>Carlos Lima</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.graphite, marginBottom: '0.7rem' }}>Consultor Jurídico</div>
            <a href="#" style={{ background: colors.primary, color: colors.white, borderRadius: '8px', padding: '0.4rem 1.1rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.98rem', display: 'inline-block', marginTop: '0.3rem' }}>LinkedIn</a>
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section style={{
        width: '100%',
        background: colors.primary,
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          fontFamily: fonts.title,
          fontWeight: 700,
          fontSize: '1.5rem',
          color: colors.white,
          textAlign: 'center',
          maxWidth: 700,
          marginBottom: '1.5rem',
          lineHeight: 1.4,
        }}>
          Entre em contato com nosso time e conheça mais sobre nosso trabalho
        </div>
        <button style={{
          background: colors.white,
          color: colors.graphite,
          fontFamily: fonts.body,
          fontWeight: 700,
          fontSize: '1.08rem',
          border: `2px solid ${colors.primary}`,
          borderRadius: '8px',
          padding: '0.9rem 2.3rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
          transition: 'background 0.2s, color 0.2s',
        }}>
          Solicite uma Reunião
        </button>
      </section>
      {/* Rodapé */}
      <footer style={footerStyle}>
        <div style={footerGrid}>
          <div style={footerCol}>
            <strong>Contato</strong><br />
            📞 (11) 4040-4722<br />
            ✉️ contato@seuescritorio.com.br<br />
            Av. Exemplo, 1234 - Centro, São Paulo/SP
          </div>
          <div style={footerCol}>
            <strong>Links Úteis</strong><br />
            <a href="#" style={{ color: colors.white }}>Home</a><br />
            <a href="#" style={{ color: colors.white }}>O Escritório</a><br />
            <a href="#" style={{ color: colors.white }}>Equipe</a><br />
            <a href="#" style={{ color: colors.white }}>Áreas de Atuação</a><br />
            <a href="#" style={{ color: colors.white }}>Utilitários</a><br />
            <a href="#" style={{ color: colors.white }}>Contato</a>
          </div>
          <div style={footerCol}>
            <strong>Redes Sociais</strong><br />
            <a href="#" style={{ color: colors.white }}>Facebook</a><br />
            <a href="#" style={{ color: colors.white }}>LinkedIn</a><br />
            <br />
            <strong>Localização</strong><br />
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Av.+Paulista,+SP&zoom=15&size=220x100&key=FAKEKEY" alt="Mapa" style={{ width: '100%', borderRadius: '8px', marginTop: '0.5rem' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', color: colors.grayLight, marginTop: '2rem', fontSize: '0.95rem' }}>
          © {new Date().getFullYear()} Seu Escritório. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default EmpresaView; 