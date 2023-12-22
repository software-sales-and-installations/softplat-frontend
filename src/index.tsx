import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import Providers from './utils/provider.tsx';
// import 'font-awesome/css/font-awesome.min.css';
import './styles/index.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
