const express = require('express');
const cors = require('cors')
const app = express();
const request = require('request')
const PORT = process.env.PORT || 5000;

const URL = "https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=boolean";

app.get('/api', (req, res) => {
    request(
      URL,
      function(error, response, body) {
        if(!error && response.statusCode === 200) {
          res.send(body);
        }
      }
    );
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });