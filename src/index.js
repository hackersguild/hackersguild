import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages';
import { NavProvider } from './data/state/nav-state';

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
