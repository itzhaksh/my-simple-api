const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let messages = [];

// POST: קבלת הודעה מ-Wokwi
app.post('/api/messages', (req, res) => {
  const message = req.body.message;
    console.log('Received POST request with body:', req.body);
  if (message) {
    messages.push(message);
     console.log('Added message:', message);
    console.log('Current messages:', messages);
    res.status(201).send({ message: 'Message received' });
  } else {
        console.log('Received invalid request (no message)');
    res.status(400).send({ error: 'Message is required' });
  }
});

// GET: משיכת הודעות ע"י צוות תקשורת
app.get('/api/messages', (req, res) => {
  console.log('Received GET request for messages');
  console.log('Current messages:', messages);
  res.status(200).send(messages);
});

app.get('/', (req, res) => {
  res.send('Welcome to My Simple API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
