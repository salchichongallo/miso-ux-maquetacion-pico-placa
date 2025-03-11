import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../app';
import { Web } from './web';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <Web />
    </App>
  </React.StrictMode>,
);
