import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Own components
import StoreProvider from './client/store/Store';
import { AuthProvider } from "./server/services/authentication";
import config from './config';

// A function that routes the user to the right place after login
const onRedirectCallback = (appState, state) => {
  const path = !state ? {targetUrl: config.PATH_LOGIN} : appState;
  window.history.replaceState(
    {},
    document.title,
    path && path.targetUrl
      ? path.targetUrl
      : window.location.pathname
  );
};

if (!window.location.pathname !== localStorage.pathname) {
  const pathname = window.location.pathname;
  localStorage.pathname = window.location.pathname;
  console.log('path', pathname, 'localpath', localStorage.pathname);
}

const app = (
  <StoreProvider>
    <AuthProvider
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </AuthProvider>
  </StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));
