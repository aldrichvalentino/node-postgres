var express = require('express');
var router = express.Router();

const db = require('../config/database');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await db('users').select();

  res.json(users);
});

module.exports = router;
