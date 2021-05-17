import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme.js';
import App from './components/app.js';

function Main() {
  React.useEffect(() => {
    const styles = document.querySelector('#css-server-side');
    if (styles) {
      styles.parentElement.removeChild(styles);
    }
  });

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
