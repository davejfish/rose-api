const { Router } = require('express');
const Character = require('../models/Character');
const router = Router();

router
  .get('/', async (req, res) => {
    const response = await Character.getAll();
    res.json(response);
  });

module.exports = router;
