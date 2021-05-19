import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from '../public/theme.js';
import App from '../public/components/app.js';

import { I18nextProvider } from 'react-i18next';

const router = Express.Router();

router.get('*', (req, res) => {
    const sheets = new ServerStyleSheets();

    const content = ReactDOMServer.renderToString(
        sheets.collect(
            <I18nextProvider i18n={req.i18n}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </I18nextProvider>
        )
    );

    const initialI18nStore = {};
    req.i18n.languages.forEach(l => {
        initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
    });

    console.log();
    
    const html = `
        <html>
            <head>
                <title>${req.i18n.t("meta.title")}</title>
                <meta name="description" content="${req.i18n.t("meta.description")}">
                <meta name="canonical" content="https://www.cardanojima.io">
                <meta name="robots" content="index, noarchive, nofollow">
                <meta name="viewport" content="width=device-width">
                <style id="css-server-side">${sheets.toString()}</style>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <script>
                    window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
                    window.initialLanguage = '${req.i18n.language}';
                </script>
            </head>
            <body>
                <div id="app">${content}</div>
                <script src="/public/main.bundle.js" charset="utf-8"></script>
            </body>
        </html>`;

    res.status(200).send(html);
}); 

export default router;