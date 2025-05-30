import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/reasonable-colors.css';
import './index.css';
import './assets/styles/css-reset.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
