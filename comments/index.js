import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'node:crypto';
import cors from 'cors';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});