import express from 'express';
import spa from './routes/spa';

const port = 8000;
const app = express();

app.use('/', spa);

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});
