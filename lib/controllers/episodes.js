const { Router } = require('express');
const router = Router();
const { Episode } = require('../models/Episode');

router
  .get('/', async (req, res) => {
    const response = await Episode.getAll();
    res.json(response);
  });

module.exports = router;
