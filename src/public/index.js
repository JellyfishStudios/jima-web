import React from 'react';
import ReactDOM from 'react-dom';
import { useSSR } from 'react-i18next';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme.js';
import App from './components/app.js';

import "./localization/i18n";

function Main() {
  React.useEffect(() => {
    const styles = document.querySelector('#css-server-side');
    if (styles) {
      styles.parentElement.removeChild(styles);
    }
  });

  // Leverage existing translations & language provided by the server
  //
  useSSR(window.initialI8nStore, window.initialLanguage);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
  );
}

ReactDOM.hydrate(<Main />, document.querySelector("#app"));

if(module.hot){
  module.hot.accept();
}
