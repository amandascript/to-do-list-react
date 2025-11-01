import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//createRoot (...)cria um pontode renderização para o React
root.render( //diz para Ract renderizar o componente dentro do root
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
