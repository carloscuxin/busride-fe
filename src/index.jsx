import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Own components
import StoreProvider from './client/store/Store';
import { AuthProvider } from "./server/services/authentication";

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

if (!window.location.pathname !== localStorage.pathname) {
  localStorage.pathname = window.location.pathname;
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
