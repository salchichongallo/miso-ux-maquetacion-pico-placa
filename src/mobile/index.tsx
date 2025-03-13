import '@capacitor-community/safe-area';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../app';
import { Mobile } from './mobile';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <Mobile />
    </App>
  </React.StrictMode>,
);
