import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${colors.graphite};
    color: ${colors.white};
    font-family: ${fonts.body};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.title};
    color: ${colors.white};
    margin: 0;
    font-weight: 800;
    letter-spacing: -1px;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: ${colors.white};
  }
  button {
    font-family: ${fonts.body};
  }
`; 