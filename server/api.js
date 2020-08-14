const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const now = new Date.getTime();
  res.send(now);
});

module.exports = router;
