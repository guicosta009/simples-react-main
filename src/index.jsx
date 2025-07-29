import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/home/home.view.tsx';
import EmpresaView from './pages/empresa/empresa.view.tsx';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/empresa" element={<EmpresaView />} />
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

