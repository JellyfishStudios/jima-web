import path from 'path';
import express from 'express';
import appshell from './routes/appshell.js';

const port = 8000;
const app = express();

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

app.use('/', appshell);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});