import express from 'express';
import path from 'path';
import spa from './routes/spa.js';

const port = 8000;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', spa);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});