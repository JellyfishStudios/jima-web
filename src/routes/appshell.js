import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import handlebars from 'handlebars';

import App from '../public/components/app.js';

const router = Express.Router();

router.get('*', (req, res) => {
    const hbsTemplate = handlebars.compile(`
        <html>
        <head><title>Cardano Jima</title></head>
            <body>
                <div id="app">{{{app}}}</div>
                <script src="/static/client.bundle.js" charset="utf-8"></script>
                <script src="/static/vendors~client.bundle.js" charset="utf-8"></script>
            </body>
        </html>`);

    const html = hbsTemplate({app: ReactDOMServer.renderToString(<App />)});

    res.status(200).send(html);
}); 

export default router;