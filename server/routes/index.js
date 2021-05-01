var express = require('express');
var router = express.Router();

const db = require('../config/database')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const products = await db('products').select();
  res.json(products);
});

module.exports = router;
