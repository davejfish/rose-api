const { Router } = require('express');
const { Quote } = require('../models/Quote');
const router = Router();

router
  .post('/', async (req, res, next) => {
    try {
      const quote = await Quote.insert(req.body);
      if (req.body.episode_id) {
        await Promise.all(req.body.episode_id.map(id => quote.addQuoteByID(id)));
      }
      res.json(quote);
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
