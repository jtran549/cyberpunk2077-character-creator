import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/primereact.css';                       
import './theme.css';
import MainPage from './components/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
