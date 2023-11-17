import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import Providers from './utils/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
