const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const transformStoreData = rawData => {
  const data = rawData;
  const urlStub = 'https://www.amazon.com/dp/';
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].books.length; j += 1) {
      data[i].books[j].link = urlStub + data[i].books[j].ISBN;
      delete data[i].books[j].ISBN;
    }
  }
  return data;
};


router.get('/all', (req, res) => {
  fetch(process.env.URL_STORE)
    .then(data => data.json())
    .then(data => res.json({ data: transformStoreData(data), error: null }))
    .catch(err => {
      const errorMessage = 'Error loading store:' + err;
      console.error(errorMessage);
      res.json({ data: null, error: errorMessage })
    });
});


module.exports = router;
