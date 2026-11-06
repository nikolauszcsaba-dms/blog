import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];

        if (post) {
            post.comments.push({ id, content });
        }
    }

    console.log(posts);

    res.send(posts);
});

app.listen(4002, () => {
    console.log('Listening on 4002');
});
