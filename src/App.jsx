import React, { useContext } from 'react'
import { IntlProvider, addLocaleData,  } from "react-intl";
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
//Own components
import Routes from './client/config/Router';
import Contex from './client/store/Context';
import * as Messages from './client/config/languages';
import * as actions from './client/store/actions';
import { AuthProvider } from "./server/services/authentication";

addLocaleData(de);
addLocaleData(en);
addLocaleData(es);

let changeLanguage = true;
const App = () => {
  const [state, dispatch] = useContext(Contex);
  const lang = state.locale.language;
  const messages = {
    de: Messages.DE ,
    en: Messages.US,
    es: Messages.MX
  };

  if(localStorage.language && changeLanguage ) {
    changeLanguage = false;
    dispatch(actions.setLanguage(localStorage.language))
  }
  
  return (
    <AuthProvider>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Routes />
      </IntlProvider>
    </AuthProvider>
  )
};

export default App;