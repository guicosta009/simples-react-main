import React, { useState } from 'react';
import { colors, fonts } from '../theme';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (user: { id: string; nome: string; email: string }) => void;
}

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)',
};

const modalStyle: React.CSSProperties = {
  background: colors.white,
  borderRadius: '20px',
  padding: '2.5rem',
  maxWidth: 400,
  width: '90%',
  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.3)',
  border: `1px solid ${colors.primary}`,
  fontFamily: fonts.body,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  margin: '0.5rem 0',
  background: colors.grayLight,
  border: `1px solid ${colors.primary}`,
  borderRadius: '8px',
  color: colors.graphite,
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: fonts.body,
};

const buttonStyle: React.CSSProperties = {
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  fontWeight: 700,
  color: colors.white,
  background: colors.primary,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.2s',
  outline: 'none',
  margin: '0.5rem 0',
  fontFamily: fonts.body,
};

function RegisterModal({ isOpen, onClose, onRegister }: RegisterModalProps) {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (formData.senha.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    const newUser = { id: generateId(), nome: formData.nome, email: formData.email };
    onRegister(newUser);
    setSuccess(true);
    setFormData({ nome: '', email: '', senha: '' });
    setError('');
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <h2 style={{ fontFamily: fonts.title, fontWeight: 800, fontSize: '1.5rem', color: colors.primary, textAlign: 'center', marginBottom: '1.5rem' }}>
          Cadastro
        </h2>
        {success ? (
          <div style={{ color: colors.primary, textAlign: 'center', fontWeight: 700, fontSize: '1.1rem' }}>Cadastro realizado com sucesso!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Nome completo"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="E-mail"
            />
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Senha (mín. 6 caracteres)"
            />
            {error && <div style={{ color: '#ef4444', fontSize: '0.95rem', margin: '0.5rem 0', textAlign: 'center' }}>{error}</div>}
            <button type="submit" style={buttonStyle}>Cadastrar</button>
            <button type="button" onClick={onClose} style={{ ...buttonStyle, background: colors.grayLight, color: colors.primary, border: `1px solid ${colors.primary}` }}>Cancelar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegisterModal; 