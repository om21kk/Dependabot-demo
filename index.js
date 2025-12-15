const express = require('express');
const _ = require('lodash');
const moment = require('moment');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = {
    message: 'Hello Dependabot Test!',
    timestamp: moment().format(),
    lodashVersion: _.VERSION
  };
  
  res.json(data);
});

app.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Test app running at http://localhost:${port}`);
});