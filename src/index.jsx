import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Own components
import { Auth0Provider } from "./auth0-wrapper";
import StoreProvider from './client/store/Store';
import config from './config';

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

const app = (
  <Auth0Provider
    domain={config.DOMAIN}
    client_id={config.CLIENT_ID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback} >
    <StoreProvider>
      <App />
    </StoreProvider>
  </Auth0Provider>
);

ReactDOM.render(app, document.getElementById('root'));
