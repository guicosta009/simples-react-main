import React from 'react';
import { colors, fonts } from '../../theme';
import { motion } from 'framer-motion';

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
const heroStyle: React.CSSProperties = {
  background: `linear-gradient(90deg, rgba(33,163,124,0.7) 0%, rgba(46,46,46,0.7) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover`,
  color: colors.white,
  padding: '4rem 2rem 3rem 2rem',
  textAlign: 'center' as 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '0 0 32px 32px',
};
const heroTitle: React.CSSProperties = {
  fontFamily: fonts.title,
  fontWeight: 800,
  fontSize: '2.8rem',
  marginBottom: '1.2rem',
  letterSpacing: '-1px',
};
const heroSubtitle: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '1.25rem',
  color: colors.grayLight,
  marginBottom: '2rem',
};
const ctaButton: React.CSSProperties = {
  background: colors.primary,
  color: colors.white,
  fontFamily: fonts.body,
  fontWeight: 700,
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '8px',
  padding: '1rem 2.5rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
  transition: 'background 0.2s',
};
const areasSection: React.CSSProperties = {
  background: colors.white,
  padding: '3rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const areasGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '2rem',
  width: '100%',
  maxWidth: 900,
  marginTop: '2rem',
};
const areaCard: React.CSSProperties = {
  background: colors.grayLight,
  borderRadius: '14px',
  boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
  padding: '2rem 1.2rem',
  textAlign: 'center' as 'center',
  color: colors.graphite,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const areaIcon: React.CSSProperties = {
  fontSize: '2.2rem',
  color: colors.primary,
  marginBottom: '0.7rem',
};
const areaTitle: React.CSSProperties = {
  fontFamily: fonts.title,
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
};
const areaDesc: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '1rem',
  color: colors.graphiteAlt,
  marginBottom: '1rem',
};
const areaLink: React.CSSProperties = {
  color: colors.primary,
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'underline',
  cursor: 'pointer',
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
  margin: '0 auto',
  borderRadius: '20px',
  marginTop: '3rem',
};
const aboutText: React.CSSProperties = {
  flex: 1,
};
const aboutTitle: React.CSSProperties = {
  fontFamily: fonts.title,
  fontWeight: 800,
  fontSize: '2rem',
  color: colors.primary,
  marginBottom: '1rem',
};
const aboutDesc: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: '1.1rem',
  color: colors.graphite,
};
const aboutImg: React.CSSProperties = {
  flex: 1,
  maxWidth: 320,
  borderRadius: '16px',
  boxShadow: '0 2px 12px 0 rgba(33,163,124,0.10)',
};


function HomeView() {
  return (
    <div>
      {/* Topbar */}
      {/* Barra preta do topo removida */}
      {/* Logo e Navbar */}
              
      {/* Hero Section */}
      <motion.section
        style={{
          width: '100%',
          minHeight: '420px',
          background: `linear-gradient(90deg, rgba(33,163,124,0.7) 0%, rgba(46,46,46,0.7) 100%), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80') center/cover`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 2rem 4rem 2rem',
          boxSizing: 'border-box',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          style={{
            fontFamily: fonts.title,
            fontWeight: 800,
            fontSize: '2.8rem',
            color: colors.white,
            textAlign: 'center',
            letterSpacing: '-1px',
            marginBottom: '1.2rem',
            textShadow: '0 2px 16px rgba(0,0,0,0.25)'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Compromisso com a Justiça e a Ética
        </motion.h1>
        <motion.div
          style={{
            fontFamily: fonts.body,
            fontSize: '1.18rem',
            color: colors.grayLight,
            textAlign: 'center',
            marginBottom: '2.2rem',
            maxWidth: 600,
            textShadow: '0 1px 8px rgba(0,0,0,0.18)'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Soluções jurídicas modernas, atendimento humanizado e resultados concretos para você e sua empresa.
        </motion.div>
        <motion.button
          style={{
            background: colors.primary,
            color: colors.white,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '8px',
            padding: '1rem 2.5rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            transition: 'background 0.2s',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Saiba mais
        </motion.button>
      </motion.section>
      {/* Bloco de Destaque */}
      <section style={{
        width: '100%',
        background: colors.graphiteAlt,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: '0',
        minHeight: 320,
      }}>
        {/* Esquerda: Imagem borrada com título */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 280,
          maxWidth: 500,
          background: `url('https://images.unsplash.com/photo-1528747045269-390fe33c19d3?auto=format&fit=crop&w=800&q=80') center/cover`,
          filter: 'blur(0.5px)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'rgba(46,46,46,0.7)',
            borderRadius: '16px',
            padding: '2.2rem 1.5rem',
            margin: '2rem',
            textAlign: 'center',
            boxShadow: '0 2px 12px 0 rgba(33,163,124,0.10)',
          }}>
            <h2 style={{
              fontFamily: fonts.title,
              fontWeight: 800,
              fontSize: '2rem',
              color: colors.white,
              margin: 0,
              letterSpacing: '-1px',
            }}>
              Unindo Profissionais do Direito em Todo o Brasil
            </h2>
          </div>
        </div>
        {/* Direita: Texto e botão */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 280,
          maxWidth: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '3rem 2.5rem',
        }}>
          <div style={{
            fontFamily: fonts.title,
            fontWeight: 700,
            fontSize: '1.3rem',
            color: colors.primary,
            marginBottom: '1rem',
          }}>
            Sobre o Escritório
          </div>
          <div style={{
            fontFamily: fonts.body,
            fontSize: '1.08rem',
            color: colors.white,
            marginBottom: '1.5rem',
            maxWidth: 340,
          }}>
            Somos referência em advocacia empresarial, conectando clientes e profissionais para soluções jurídicas inovadoras e seguras.
          </div>
          <button style={{
            background: colors.primary,
            color: colors.white,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: '1.05rem',
            border: 'none',
            borderRadius: '8px',
            padding: '0.8rem 2.2rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            transition: 'background 0.2s',
            width: 'fit-content',
          }}>
            Saiba mais
          </button>
        </div>
      </section>
      {/* Welcome + 3 Icons Section */}
      <section style={{
        width: '100%',
        background: colors.white,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        gap: '2.5rem',
      }}>
        {/* Esquerda: Boas-vindas */}
        <div style={{
          flex: '1 1 320px',
          minWidth: 280,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <h2 style={{
            fontFamily: fonts.title,
            fontWeight: 800,
            fontSize: '2rem',
            color: colors.primary,
            marginBottom: '1rem',
          }}>
            Bem-vindo ao nosso escritório!
          </h2>
          <div style={{
            fontFamily: fonts.body,
            fontSize: '1.08rem',
            color: colors.graphite,
            marginBottom: '1.5rem',
          }}>
            Advocacia moderna, ética e próxima de você. Conte com uma equipe especializada para defender seus direitos e interesses.
          </div>
          <button style={{
            background: colors.primary,
            color: colors.white,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: '1.05rem',
            border: 'none',
            borderRadius: '8px',
            padding: '0.8rem 2.2rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            transition: 'background 0.2s',
            width: 'fit-content',
          }}>
            Saiba mais
          </button>
        </div>
        {/* Direita: 3 Cards de Ícones */}
        <div style={{
          flex: '2 1 480px',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
          {/* Card 1 */}
          <div style={{
            background: colors.primary,
            color: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            padding: '2rem 1.2rem',
            minWidth: 180,
            flex: '1 1 180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>⚖️</span>
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Atuação Ética</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem' }}>Compromisso com a justiça e a ética profissional.</div>
          </div>
          {/* Card 2 */}
          <div style={{
            background: colors.primary,
            color: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            padding: '2rem 1.2rem',
            minWidth: 180,
            flex: '1 1 180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>👩‍⚖️</span>
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Equipe Especializada</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem' }}>Advogados experientes em diversas áreas do Direito.</div>
          </div>
          {/* Card 3 */}
          <div style={{
            background: colors.primary,
            color: colors.white,
            borderRadius: '14px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
            padding: '2rem 1.2rem',
            minWidth: 180,
            flex: '1 1 180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>📚</span>
            <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>Atualização Constante</div>
            <div style={{ fontFamily: fonts.body, fontSize: '1rem' }}>Sempre em busca das melhores soluções jurídicas.</div>
          </div>
        </div>
      </section>
      {/* Seção de Notícias */}
      <section style={{
        width: '100%',
        background: colors.white,
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: fonts.title,
          fontWeight: 800,
          fontSize: '2.1rem',
          color: colors.primary,
          marginBottom: '2.2rem',
          textAlign: 'center',
        }}>
          Notícias Jurídicas
        </h2>
        <div style={{
          width: '100%',
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* News Card 1 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            background: colors.grayLight,
            borderRadius: '12px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
            padding: '1.2rem 1.5rem',
            gap: '1.5rem',
          }}>
            <div style={{
              minWidth: 70,
              fontFamily: fonts.title,
              fontWeight: 700,
              fontSize: '1.1rem',
              color: colors.primary,
              textAlign: 'center',
              marginTop: '0.2rem',
            }}>
              12/07<br/>2024
            </div>
            <div>
              <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', color: colors.graphite, marginBottom: '0.3rem' }}>
                Nova Lei de Contratos Empresariais
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.graphiteAlt }}>
                A nova legislação traz mais segurança e flexibilidade para contratos empresariais. Veja como isso pode impactar seu negócio.
              </div>
            </div>
          </div>
          {/* News Card 2 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            background: colors.grayLight,
            borderRadius: '12px',
            boxShadow: '0 2px 8px 0 rgba(33,163,124,0.07)',
            padding: '1.2rem 1.5rem',
            gap: '1.5rem',
          }}>
            <div style={{
              minWidth: 70,
              fontFamily: fonts.title,
              fontWeight: 700,
              fontSize: '1.1rem',
              color: colors.primary,
              textAlign: 'center',
              marginTop: '0.2rem',
            }}>
              28/06<br/>2024
            </div>
            <div>
              <div style={{ fontFamily: fonts.title, fontWeight: 700, fontSize: '1.15rem', color: colors.graphite, marginBottom: '0.3rem' }}>
                Reforma Tributária: Principais Mudanças
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: '1rem', color: colors.graphiteAlt }}>
                Entenda os principais pontos da nova reforma tributária e como ela afeta empresas e pessoas físicas.
              </div>
            </div>
          </div>
        </div>
        <button style={{
          background: colors.primary,
          color: colors.white,
          fontFamily: fonts.body,
          fontWeight: 700,
          fontSize: '1.05rem',
          border: 'none',
          borderRadius: '8px',
          padding: '0.8rem 2.2rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px 0 rgba(33,163,124,0.10)',
          transition: 'background 0.2s',
        }}>
          Ver mais notícias
        </button>
      </section>
      {/* Áreas de Atuação */}
      <section style={areasSection}>
        <h2 style={{ ...heroTitle, color: colors.primary, fontSize: '2.1rem', marginBottom: '0.5rem' }}>Áreas de Atuação</h2>
        <div style={areasGrid}>
          <div style={areaCard}>
            <span style={areaIcon}>⚖️</span>
            <div style={areaTitle}>Cível</div>
            <div style={areaDesc}>Soluções para disputas, danos e direitos civis.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
          <div style={areaCard}>
            <span style={areaIcon}>🔒</span>
            <div style={areaTitle}>Penal</div>
            <div style={areaDesc}>Defesa e acompanhamento em processos criminais.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
          <div style={areaCard}>
            <span style={areaIcon}>💼</span>
            <div style={areaTitle}>Trabalhista</div>
            <div style={areaDesc}>Direitos do trabalho e relações empregatícias.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
          <div style={areaCard}>
            <span style={areaIcon}>💰</span>
            <div style={areaTitle}>Tributário</div>
            <div style={areaDesc}>Consultoria e defesa em questões fiscais.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
          <div style={areaCard}>
            <span style={areaIcon}>👴</span>
            <div style={areaTitle}>Previdenciário</div>
            <div style={areaDesc}>Aposentadorias, pensões e benefícios do INSS.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
          <div style={areaCard}>
            <span style={areaIcon}>🏢</span>
            <div style={areaTitle}>Empresarial</div>
            <div style={areaDesc}>Assessoria jurídica para empresas e contratos.</div>
            <a style={areaLink} href="#">Saiba mais</a>
          </div>
        </div>
      </section>
      {/* Apresentação */}
      <section style={aboutSection}>
        <div style={aboutText}>
          <div style={aboutTitle}>Sobre o Escritório</div>
          <div style={aboutDesc}>
            Nosso escritório tem como missão oferecer atendimento jurídico de excelência, com ética, transparência e foco nos resultados dos clientes. Nossa equipe é formada por profissionais experientes e comprometidos com a sua causa.
          </div>
        </div>
        <img style={aboutImg} src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Equipe do escritório" />
      </section>
      {/* Depoimento / Avaliação */}
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
          marginBottom: '1.2rem',
          lineHeight: 1.4,
        }}>
          “O escritório me deu total segurança e transparência em todas as etapas do meu processo. Recomendo a todos que buscam excelência jurídica!”
        </div>
        <div style={{
          fontFamily: fonts.body,
          fontWeight: 600,
          fontSize: '1.08rem',
          color: colors.white,
          textAlign: 'center',
          opacity: 0.85,
        }}>
          Ana Paula, Cliente
        </div>
      </section>
      {/* Why Choose Us + Our Solutions */}
      <section style={{
        width: '100%',
        background: colors.graphite,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: '3rem 2rem',
        boxSizing: 'border-box',
        gap: '2.5rem',
      }}>
        {/* Esquerda: Why Choose Us */}
        <div style={{
          flex: '1 1 320px',
          minWidth: 280,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontFamily: fonts.title,
            fontWeight: 800,
            fontSize: '2rem',
            color: colors.primary,
            marginBottom: '1rem',
          }}>
            Why Choose Us
          </h2>
          <div style={{
            fontFamily: fonts.body,
            fontSize: '1.08rem',
            color: colors.white,
            marginBottom: '1.5rem',
          }}>
            We combine legal expertise, business understanding, and a commitment to innovation to deliver the best results for our clients.
          </div>
        </div>
        {/* Direita: Our Solutions */}
        <div style={{
          flex: '2 1 480px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          justifyContent: 'center',
        }}>
          <h3 style={{
            fontFamily: fonts.title,
            fontWeight: 700,
            fontSize: '1.3rem',
            color: colors.white,
            marginBottom: '0.7rem',
          }}>
            Our Solutions
          </h3>
          <ul style={{
            color: colors.white,
            fontFamily: fonts.body,
            fontSize: '1.08rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem',
          }}>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Tech Management</li>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Innovation</li>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Legal Strategy</li>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Risk Analysis</li>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Business Consulting</li>
            <li style={{ background: colors.primary, borderRadius: '8px', padding: '0.7rem 1.2rem', fontWeight: 600 }}>Compliance</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomeView;