import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch(console.error);
    axios.post('http://localhost:4001/events', event).catch(console.error);
    axios.post('http://localhost:4002/events', event).catch(console.error);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});