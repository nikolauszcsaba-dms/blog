import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/posts', (req, res) => {

});

app.post('/events', (req, res) => {

});

app.listen(4002, () => {
    console.log('Listening on 4002');
});
