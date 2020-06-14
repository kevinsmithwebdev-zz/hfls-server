const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/all', (req, res) => {
  fetch(process.env.URL_TOGGLES)
    .then(data => data.json())
    .then(data => res.json(data))
    .catch(err => {
      const errorMessage = 'Error loading toggles:' + err;
      console.error(errorMessage);
      res.json({ data: null, error: errorMessage })
    });
});


module.exports = router;
