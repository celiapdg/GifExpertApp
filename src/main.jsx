import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // el modo estricto solo se aplica en desarrollo, vamos a comentarlo de momento...
  // cuando está activo y se renderiza el componente, se dispara dos veces
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
