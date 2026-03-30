import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Add this at the top of src/index.js
if (window.ethereum) {
  window.ethereum.on('error', () => {
    // Silently handle MetaMask errors
  });
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

