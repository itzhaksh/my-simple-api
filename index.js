const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json());

const messages = [];

app.get('/msg', (req, res) => {
    const allMessages = [...messages];
    messages.length = 0;
    res.json(allMessages);
});

app.post('/msg', (req, res) => {
    const { message, value } = req.body;

    if (!message || value === undefined) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const newMessage = { message, value };
    messages.push(newMessage);

    res.status(201).json({ status: 'success', message: 'Message received!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/msg`);
});
