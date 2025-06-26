// main.jsx
import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

export const serverUrl = "http://localhost:8000"; // ✅ corrected from 5000 to 8000


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
