import '@capacitor-community/safe-area';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { App } from '../app';
import { Mobile } from './mobile';

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App>
        <Mobile />
      </App>
    </React.StrictMode>,
  );

ScreenOrientation.lock({ orientation: 'portrait' })
  .then(renderApp)
  .catch(error => alert(`Error: ${error}`));
