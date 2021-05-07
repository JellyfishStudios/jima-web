import path from 'path';
import express from 'express';
import appshell from './routes/appshell.js';

const port = 8000;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', appshell);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});