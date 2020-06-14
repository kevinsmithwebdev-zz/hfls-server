const express = require('express');

const router = express.Router();

router.get('/check/:username', (req, res) => {
  res.json({ isValidLogin: req.params.username === process.env.API_KEY });
});

module.exports = router;
