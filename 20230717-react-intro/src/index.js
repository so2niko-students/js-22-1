import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './style.css';

const rootDOM = document.querySelector('#root');
const root = createRoot(rootDOM);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

