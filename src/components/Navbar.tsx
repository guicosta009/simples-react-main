import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors, fonts, fontWeights } from '../theme';
import RegisterModal from './RegisterModal';

const navBarContainer: React.CSSProperties = {
  width: '100%',
  background: colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 12px 0 rgba(33,163,124,0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  padding: '0.7rem 2rem',
  fontFamily: fonts.body,
};
const navContentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: 1200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};
const menuStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
};
const linkStyle: React.CSSProperties = {
  color: colors.graphite,
  textDecoration: 'none',
  fontWeight: fontWeights.semibold,
  fontSize: '1.08rem',
  padding: '0.5rem 0.8rem',
  borderRadius: '8px',
  transition: 'background 0.2s, color 0.2s',
  letterSpacing: '0.01em',
  fontFamily: fonts.body,
};
const activeLinkStyle: React.CSSProperties = {
  background: colors.primary,
  color: colors.white,
};
const contatoWrapper: React.CSSProperties = {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
};
const contatoButton: React.CSSProperties = {
  background: colors.primary,
  color: colors.white,
  fontWeight: fontWeights.bold,
  fontFamily: fonts.body,
  fontSize: '1.08rem',
  border: 'none',
  borderRadius: '8px',
  padding: '0.5rem 1.3rem',
  marginLeft: '1.5rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // rolando para baixo
      } else {
        setShowNavbar(true); // rolando para cima
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = (user: { id: string; nome: string; email: string }) => {
    alert(`Bem-vindo, ${user.nome}! Seu ID é: ${user.id}`);
  };
  return (
    <>
      <header style={{
        ...navBarContainer,
        transition: 'transform 0.3s',
        transform: showNavbar ? 'translateY(0)' : 'translateY(-120%)',
      }}>
        <div style={navContentStyle}>
          <nav style={menuStyle} aria-label="Menu principal">
            <Link to="/" style={{ ...linkStyle, ...(location.pathname === '/' ? activeLinkStyle : {}) }}>Início</Link>
            <Link to="/empresa" style={{ ...linkStyle, ...(location.pathname === '/empresa' ? activeLinkStyle : {}) }}>Empresa</Link>
            <a href="#" style={linkStyle}>Serviços</a>
            <a href="#" style={linkStyle}>Notícias</a>
            <a href="#" style={linkStyle}>Blog</a>
          </nav>
          <div style={contatoWrapper}>
            <button style={contatoButton} onClick={() => setIsModalOpen(true)}>Contato</button>
          </div>
        </div>
      </header>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRegister={handleRegister}
      />
    </>
  );
};

export default Navbar; 