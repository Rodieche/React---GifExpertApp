import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos
import './styles.css';

// Componentes
import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
