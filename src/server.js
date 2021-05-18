import path from 'path';
import express from 'express';
import appshell from './routes/appshell.js';

import i18n from "./public/localization/i18n";
import i18nMiddleware from "i18next-http-middleware";

const port = 8080;
const app = express();

console.log(`Running Express/Node in ${process.env.NODE_ENV} mode.`);

if (process.env.NODE_ENV === 'development') {    
    const webpack = require("webpack");
    const webpackConfig = require("../webpack/client.config.cjs")(process.env.NODE_ENV, {mode:process.env.NODE_ENV});
    const compiler = webpack(webpackConfig);

    app.use(
        require("webpack-dev-middleware")(compiler, {
            headers: { "Access-Control-Allow-Origin": "*" },
            publicPath: webpackConfig.output.publicPath,
            serverSideRender: true,
        })
    );

    app.use(
        require("webpack-hot-middleware")(compiler, {
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000,
        })
    );
}
else {
    app.use('/public', express.static(path.join(__dirname, '../dist/public')));
}

i18n.use(i18nMiddleware.LanguageDetector).init();

app.use(i18nMiddleware.handle(i18n));
app.use('/', appshell);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});