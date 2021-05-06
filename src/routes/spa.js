import Express from 'express';
import HBS from 'handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../public/components/app.js';

const router = Express.Router();

router.get('/', (req, res) => {
    const hbsTemplate = HBS.compile(`
        <html>
        <head><title>My First SSR</title></head>
            <body>
                <h1>My First Server Side Render</h1>
                <div id="app">{{{app}}}</div>
                <script src="/static/client.bundle.js" charset="utf-8"></script>
                <script src="/static/vendors~client.bundle.js" charset="utf-8"></script>
            </body>
        </html>`);

    const html = hbsTemplate({app: ReactDOMServer.renderToString(<App />)});

    res.status(200).send(html);
});

export default router;