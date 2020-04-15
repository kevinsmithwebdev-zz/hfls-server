const express = require('express');
const getStories = require('./helpers/getStories');

const router = express.Router();

const stories = getStories();

const getIsApiKeyGood = key =>
  key && key.toLowerCase() === process.env.API_KEY.toLowerCase();

router.get('/all', (req, res) => {
  if (!getIsApiKeyGood(req.header('x-api-key'))) {
    res.json({ error: 'nope' });
  }
  res.json(stories)
});


module.exports = router;
