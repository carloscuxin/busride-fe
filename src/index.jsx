import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Own components
import StoreProvider from './client/store/Store';

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));
