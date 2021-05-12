import path from 'path';
import express from 'express';
import appshell from './routes/appshell.js';

const port = 8080;
const app = express();

if (process.env.NODE_ENV !== 'development') {
    const webpack = require("webpack");
    const webpackConfig = require("../webpack/client.config.cjs").default;
    const compiler = webpack(webpackConfig);

    app.use(
        require("webpack-dev-middleware")(compiler, {
            headers: { "Access-Control-Allow-Origin": "*" },
            serverSideRender: true,
        })
    );

    app.use(
        require("webpack-hot-middleware")(compiler, {
            log: false,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000,
        })
    );
}

app.use('/static', express.static(path.join(__dirname, '../dist/public')));
app.use('/', appshell);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});