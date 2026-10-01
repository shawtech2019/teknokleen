import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from './App';
import AppStateProvider from './state/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppStateProvider>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </AppStateProvider>
  </React.StrictMode>
);