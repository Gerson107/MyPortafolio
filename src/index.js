import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LangProvider} from './context/langContext';

const root = ReactDOM.createRoot(document.getElementById('rooto'));
root.render(
  <LangProvider>
    <App />
  </LangProvider>
);
