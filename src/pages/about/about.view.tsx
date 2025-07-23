import React from 'react';
import { getAboutMessage } from './about';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>{getAboutMessage()}</h1>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </>
  );
}

export default About; 